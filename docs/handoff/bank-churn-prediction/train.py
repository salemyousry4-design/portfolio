"""Train the churn models and save everything the app needs.

Run:  python train.py
Outputs (in models/ and reports/):
  models/preprocessor.joblib   - encoding + scaling, fitted on the training set only
  models/churn_ann.keras       - the trained neural network
  models/threshold.json        - decision threshold chosen on the validation set
  reports/metrics.json         - test-set results for the baseline, ANN and XGBoost
"""

import json
from pathlib import Path

import joblib
import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.compose import ColumnTransformer
from sklearn.metrics import (
    accuracy_score,
    average_precision_score,
    confusion_matrix,
    f1_score,
    precision_recall_curve,
    precision_score,
    recall_score,
    roc_auc_score,
)
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from xgboost import XGBClassifier

SEED = 0
MIN_RECALL = 0.70  # business rule: catch at least 70% of the customers who will leave
TOP_SHARE = 0.20   # retention team can call the riskiest 20% of customers

CATEGORICAL = ["Geography", "Gender"]
NUMERIC = ["CreditScore", "Age", "Tenure", "Balance", "NumOfProducts", "EstimatedSalary"]
BINARY = ["HasCrCard", "IsActiveMember"]
FEATURES = CATEGORICAL + NUMERIC + BINARY
TARGET = "Exited"

ROOT = Path(__file__).parent
MODELS = ROOT / "models"
REPORTS = ROOT / "reports"


def load_data():
    df = pd.read_csv(ROOT / "data" / "Churn_Modelling.csv")
    # RowNumber, CustomerId and Surname identify a customer; they carry no signal and would leak IDs into the model.
    return df[FEATURES], df[TARGET]


def build_preprocessor():
    return ColumnTransformer(
        [
            ("cat", OneHotEncoder(handle_unknown="ignore", sparse_output=False), CATEGORICAL),
            ("num", StandardScaler(), NUMERIC),
            ("bin", "passthrough", BINARY),
        ],
        sparse_threshold=0,
    )


def build_ann(n_features):
    model = tf.keras.Sequential(
        [
            tf.keras.layers.Input(shape=(n_features,)),
            tf.keras.layers.Dense(16, activation="relu"),
            tf.keras.layers.Dropout(0.2),
            tf.keras.layers.Dense(8, activation="relu"),
            tf.keras.layers.Dense(1, activation="sigmoid"),
        ]
    )
    model.compile(
        optimizer="adam",
        loss="binary_crossentropy",
        metrics=[tf.keras.metrics.AUC(name="auc")],
    )
    return model


def pick_threshold(y_true, proba, min_recall):
    """Highest-precision threshold that still catches at least `min_recall` of churners."""
    precision, recall, thresholds = precision_recall_curve(y_true, proba)
    # precision/recall have one more element than thresholds; drop the last point.
    ok = recall[:-1] >= min_recall
    if not ok.any():
        return 0.5
    best = np.argmax(np.where(ok, precision[:-1], -1))
    return float(thresholds[best])


def evaluate(y_true, proba, threshold):
    y_pred = (proba >= threshold).astype(int)
    n_top = int(len(proba) * TOP_SHARE)
    top_idx = np.argsort(proba)[::-1][:n_top]
    return {
        "threshold": round(threshold, 3),
        "accuracy": round(accuracy_score(y_true, y_pred), 4),
        "precision": round(precision_score(y_true, y_pred, zero_division=0), 4),
        "recall": round(recall_score(y_true, y_pred), 4),
        "f1": round(f1_score(y_true, y_pred), 4),
        "roc_auc": round(roc_auc_score(y_true, proba), 4) if proba.std() > 0 else 0.5,
        "pr_auc": round(average_precision_score(y_true, proba), 4),
        "confusion_matrix": confusion_matrix(y_true, y_pred).tolist(),
        f"churners_caught_in_top_{int(TOP_SHARE * 100)}pct": round(y_true.iloc[top_idx].sum() / y_true.sum(), 4),
    }


def main():
    tf.keras.utils.set_random_seed(SEED)
    MODELS.mkdir(exist_ok=True)
    REPORTS.mkdir(exist_ok=True)

    X, y = load_data()
    # 60% train / 20% validation / 20% test, keeping the same churn rate in each part.
    X_trainval, X_test, y_trainval, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=SEED)
    X_train, X_val, y_train, y_val = train_test_split(
        X_trainval, y_trainval, test_size=0.25, stratify=y_trainval, random_state=SEED
    )

    # Fit encoding + scaling on the training set only, then apply the same transform everywhere.
    pre = build_preprocessor().fit(X_train)
    Xt_train, Xt_val, Xt_test = pre.transform(X_train), pre.transform(X_val), pre.transform(X_test)

    # Only ~20% of customers churn, so give each churner more weight in the loss.
    n, n_pos = len(y_train), int(y_train.sum())
    class_weight = {0: n / (2 * (n - n_pos)), 1: n / (2 * n_pos)}

    # --- ANN ---
    ann = build_ann(Xt_train.shape[1])
    ann.fit(
        Xt_train,
        y_train,
        validation_data=(Xt_val, y_val),
        epochs=200,
        batch_size=32,
        class_weight=class_weight,
        callbacks=[tf.keras.callbacks.EarlyStopping(monitor="val_auc", mode="max", patience=15, restore_best_weights=True)],
        verbose=0,
    )
    ann_val = ann.predict(Xt_val, verbose=0).ravel()
    ann_test = ann.predict(Xt_test, verbose=0).ravel()
    ann_threshold = pick_threshold(y_val, ann_val, MIN_RECALL)

    # --- XGBoost (comparison) ---
    xgb = XGBClassifier(
        n_estimators=300,
        max_depth=4,
        learning_rate=0.05,
        subsample=0.9,
        colsample_bytree=0.9,
        scale_pos_weight=(n - n_pos) / n_pos,
        eval_metric="auc",
        random_state=SEED,
    )
    xgb.fit(Xt_train, y_train)
    xgb_val = xgb.predict_proba(Xt_val)[:, 1]
    xgb_test = xgb.predict_proba(Xt_test)[:, 1]
    xgb_threshold = pick_threshold(y_val, xgb_val, MIN_RECALL)

    # Thresholds are chosen on validation; the test set is only used once, for the final numbers.
    metrics = {
        "data": {"train": len(y_train), "validation": len(y_val), "test": len(y_test), "churn_rate": round(float(y.mean()), 4)},
        "business_rule": {"min_recall": MIN_RECALL, "top_share": TOP_SHARE},
        "baseline_nobody_leaves": evaluate(y_test, np.zeros(len(y_test)), 0.5),
        "ann_threshold_0.5": evaluate(y_test, ann_test, 0.5),
        "ann_tuned": evaluate(y_test, ann_test, ann_threshold),
        "xgboost_tuned": evaluate(y_test, xgb_test, xgb_threshold),
    }

    pre_path, ann_path = MODELS / "preprocessor.joblib", MODELS / "churn_ann.keras"
    joblib.dump(pre, pre_path)
    ann.save(ann_path)
    (MODELS / "threshold.json").write_text(json.dumps({"threshold": ann_threshold, "min_recall": MIN_RECALL}, indent=2))
    (REPORTS / "metrics.json").write_text(json.dumps(metrics, indent=2))

    for name in ["baseline_nobody_leaves", "ann_threshold_0.5", "ann_tuned", "xgboost_tuned"]:
        m = metrics[name]
        print(
            f"{name:24s} thr={m['threshold']:.3f}  acc={m['accuracy']:.3f}  precision={m['precision']:.3f}  "
            f"recall={m['recall']:.3f}  roc_auc={m['roc_auc']:.3f}  top20%={m['churners_caught_in_top_20pct']:.3f}"
        )
    print(f"\nSaved {pre_path}, {ann_path}, models/threshold.json, reports/metrics.json")


if __name__ == "__main__":
    main()
