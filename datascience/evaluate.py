import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OrdinalEncoder
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    classification_report,
    confusion_matrix
)

# -----------------------------
# Load Dataset
# -----------------------------

df = pd.read_csv("dataset.csv")

categorical = [
    "cycle_regularity",
    "bleeding_intensity",
    "fatigue_level",
    "acne_severity",
    "hair_loss_severity",
    "mood_pattern",
    "stress_level",
    "self_reported_stress",
    "family_history_pcos",
    "family_history_endometriosis",
    "family_history_fibroids",
    "thyroid_status",
    "weight_change_last_6_months"
]

numeric = [
    "age",
    "cycle_length_days",
    "pain_level",
    "sleep_hours",
    "water_intake_liters",
    "exercise_frequency_per_week",
    "sedentary_hours",
    "anxiety_level",
    "depression_level",
    "emotional_stability_score"
]

features = numeric + categorical
target = "condition_name"

X = df[features]
y = df[target]

# -----------------------------
# Train / Test Split (80 / 20, stratified)
# -----------------------------

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

print(f"Total rows : {len(df)}")
print(f"Train rows : {len(X_train)}")
print(f"Test rows  : {len(X_test)}")

# -----------------------------
# Model Pipeline (same as train.py)
# -----------------------------

preprocessor = ColumnTransformer(
    transformers=[
        (
            "cat",
            Pipeline([
                ("imputer", SimpleImputer(strategy="most_frequent")),
                ("encoder", OrdinalEncoder(handle_unknown="use_encoded_value",
                                           unknown_value=-1))
            ]),
            categorical
        ),
        (
            "num",
            Pipeline([
                ("imputer", SimpleImputer(strategy="median"))
            ]),
            numeric
        )
    ]
)

model = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier",
     RandomForestClassifier(
         n_estimators=300,
         random_state=42
     ))
])

# -----------------------------
# Train
# -----------------------------

model.fit(X_train, y_train)

# -----------------------------
# Test
# -----------------------------

pred = model.predict(X_test)

print("\n========== METRICS (weighted) ==========")
print(f"Accuracy  : {accuracy_score(y_test, pred)*100:.2f}%")
print(f"Precision : {precision_score(y_test, pred, average='weighted', zero_division=0)*100:.2f}%")
print(f"Recall    : {recall_score(y_test, pred, average='weighted', zero_division=0)*100:.2f}%")
print(f"F1 Score  : {f1_score(y_test, pred, average='weighted', zero_division=0)*100:.2f}%")

print("\n========== PER-CONDITION REPORT ==========")
print(classification_report(y_test, pred, zero_division=0))

print("========== CONFUSION MATRIX ==========")
labels = sorted(y.unique())
cm = pd.DataFrame(confusion_matrix(y_test, pred, labels=labels),
                  index=labels, columns=labels)
with pd.option_context("display.width", 250, "display.max_columns", None):
    print(cm)

# -----------------------------
# Save test data for manual checking
# -----------------------------

test_data = X_test.copy()
test_data["actual_condition"] = y_test
test_data["predicted_condition"] = pred
test_data["correct"] = test_data["actual_condition"] == test_data["predicted_condition"]
test_data.to_csv("test_data.csv", index=False)

print("\nTest data saved to test_data.csv")
