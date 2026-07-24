import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OrdinalEncoder
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# -----------------------------
# Load Dataset
# -----------------------------

df = pd.read_csv("dataset.csv")

# -----------------------------
# Features
# -----------------------------

features = [
    "age",
    "cycle_regularity",
    "cycle_length_days",
    "bleeding_intensity",
    "pain_level",
    "fatigue_level",
    "acne_severity",
    "hair_loss_severity",
    "mood_pattern",
    "sleep_hours",
    "water_intake_liters",
    "stress_level",
    "exercise_frequency_per_week",
    "sedentary_hours",
    "anxiety_level",
    "depression_level",
    "self_reported_stress",
    "emotional_stability_score",
    "family_history_pcos",
    "family_history_endometriosis",
    "family_history_fibroids",
    "thyroid_status",
    "weight_change_last_6_months"
]

target = "condition_name"

X = df[features]
y = df[target]

# -----------------------------
# Categorical Columns
# -----------------------------

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

# -----------------------------
# Preprocessing
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

# -----------------------------
# Model Pipeline
# -----------------------------

model = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier",
     RandomForestClassifier(
         n_estimators=300,
         random_state=42
     ))
])

# -----------------------------
# Train Test Split
# -----------------------------

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# -----------------------------
# Train
# -----------------------------

model.fit(X_train, y_train)

# -----------------------------
# Accuracy
# -----------------------------

pred = model.predict(X_test)

accuracy = accuracy_score(y_test, pred)

print(f"\nAccuracy : {accuracy*100:.2f}%")

# -----------------------------
# Save
# -----------------------------

joblib.dump(model, "condition_model.pkl")

print("Model Saved Successfully")