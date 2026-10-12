"""Streamlit app: predict whether a bank customer will leave.

Run locally:  streamlit run app.py   (after `python train.py`)
"""

import json
from pathlib import Path

import joblib
import pandas as pd
import streamlit as st
import tensorflow as tf

MODELS = Path(__file__).parent / "models"

st.set_page_config(page_title="Bank Churn Prediction", page_icon="🏦")


@st.cache_resource
def load_artifacts():
    # The preprocessor must be the exact one fitted in train.py:
    # same column order, same one-hot encoding, same scaling.
    pre = joblib.load(MODELS / "preprocessor.joblib")
    model = tf.keras.models.load_model(MODELS / "churn_ann.keras")
    threshold = json.loads((MODELS / "threshold.json").read_text())["threshold"]
    return pre, model, threshold


pre, model, threshold = load_artifacts()

st.title("Bank Churn Prediction")
st.write("Enter a customer's details to estimate how likely they are to leave the bank.")

col1, col2 = st.columns(2)
with col1:
    geography = st.selectbox("Geography", ["France", "Germany", "Spain"])
    gender = st.selectbox("Gender", ["Female", "Male"])
    age = st.number_input("Age", min_value=18, max_value=100, value=40)
    tenure = st.slider("Tenure (years with the bank)", 0, 10, 3)
    credit_score = st.number_input("Credit Score", min_value=300, max_value=850, value=600)
with col2:
    balance = st.number_input("Balance", min_value=0.0, value=60000.0, step=1000.0)
    num_of_products = st.slider("Number of Products", 1, 4, 2)
    has_cr_card = st.checkbox("Has a credit card", value=True)
    is_active = st.checkbox("Is an active member", value=True)
    estimated_salary = st.number_input("Estimated Salary", min_value=0.0, value=50000.0, step=1000.0)

if st.button("Predict churn", type="primary"):
    # Column names must match the training data; the preprocessor selects columns by name.
    customer = pd.DataFrame(
        [
            {
                "Geography": geography,
                "Gender": gender,
                "CreditScore": credit_score,
                "Age": age,
                "Tenure": tenure,
                "Balance": balance,
                "NumOfProducts": num_of_products,
                "EstimatedSalary": estimated_salary,
                "HasCrCard": int(has_cr_card),
                "IsActiveMember": int(is_active),
            }
        ]
    )
    proba = float(model.predict(pre.transform(customer), verbose=0)[0][0])

    st.metric("Churn probability", f"{proba:.0%}")
    if proba >= threshold:
        st.error(f"High risk: above the {threshold:.0%} alert threshold. Recommend a retention offer.")
    else:
        st.success(f"Low risk: below the {threshold:.0%} alert threshold.")
    st.caption(
        "The alert threshold was tuned on validation data to catch at least 70% of customers who leave, "
        "with as few false alarms as possible."
    )
