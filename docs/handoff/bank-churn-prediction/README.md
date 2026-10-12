# Bank Customer Churn Prediction

Predict which bank customers are about to leave, and turn the prediction into a retention plan.

**Live demo:** _add your Streamlit Cloud link here_

---

## Business problem

Losing a customer costs a bank far more than keeping one, but the retention team cannot call everyone.
The question is not just *"will this customer leave?"* but **"who should we call first, and how many leavers will we reach?"**

## Data

10,000 customers of a European bank (`data/Churn_Modelling.csv`, the public dataset used in the *Machine Learning A-Z* course).

| Type | Columns |
|---|---|
| Customer | Geography, Gender, Age, Tenure, CreditScore, EstimatedSalary |
| Relationship | Balance, NumOfProducts, HasCrCard, IsActiveMember |
| Target | `Exited` (1 = left the bank) |

`RowNumber`, `CustomerId` and `Surname` are dropped: they identify a customer but carry no predictive signal.

## Approach

1. **Exploration:** churn rate by country, age, activity and product count (`analysis.ipynb`).
2. **Preprocessing:** one-hot encoding for Geography and Gender, standard scaling for numeric columns. Fitted on the training set only and saved with the model, so the app applies the exact same transform.
3. **Split:** 60% train / 20% validation / 20% test, stratified to keep the same churn rate in each part.
4. **Imbalance:** only about 20% of customers leave, so churners get a higher class weight during training.
5. **Models:** an artificial neural network (TensorFlow/Keras, early stopping), compared with XGBoost and with a "nobody leaves" baseline.
6. **Threshold tuning:** instead of the default 0.5, the alert threshold is chosen on the validation set as the most precise one that still catches **at least 70% of leavers**. The test set is used once, for the final numbers.

## Results (test set, 2,000 customers)

_Fill this table from `reports/metrics.json` after running `python train.py`._

| Model | Threshold | Accuracy | Precision | Recall | ROC-AUC | Leavers reached by calling top 20% |
|---|---|---|---|---|---|---|
| Baseline: "nobody leaves" | – | | 0 | 0 | 0.50 | 20% |
| ANN, default threshold 0.5 | 0.50 | | | | | |
| **ANN, tuned threshold** | | | | | | |
| XGBoost, tuned threshold | | | | | | |

**Key findings** _(from `analysis.ipynb`, in your own words)_
- …
- …
- …

## Business recommendation

_Your 3–4 line recommendation from the end of `analysis.ipynb`. Example structure: "If the retention team calls the riskiest 20% of customers, they reach X% of everyone who would leave, about N times better than random calls. Priority segments: …"_

## Project structure

```
├── app.py              Streamlit app (loads the saved model + preprocessor)
├── train.py            training, threshold tuning, evaluation
├── analysis.ipynb      exploration + charts + business view
├── data/Churn_Modelling.csv
├── models/             preprocessor.joblib, churn_ann.keras, threshold.json
├── reports/metrics.json
└── requirements.txt
```

## How to run

```bash
pip install -r requirements.txt
python train.py          # trains the models and writes models/ and reports/
streamlit run app.py     # opens the app in the browser
```

## Next steps

- Explain individual predictions (e.g. SHAP) so the retention team knows *why* a customer is flagged.
- Add the cost of a retention offer vs. the value of a saved customer, and choose the threshold that maximizes profit.

---

**Salem Yousry**: Machine Learning Engineer · Business Development · MBA
