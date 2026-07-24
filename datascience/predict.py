import sys
import json
import os
import joblib
import pandas as pd
import numpy as np

BASE_DIR = os.path.dirname(__file__)

# Load model
model = joblib.load(
    os.path.join(BASE_DIR, "condition_model.pkl")
)

# Load dataset
dataset = pd.read_csv(
    os.path.join(BASE_DIR, "dataset.csv")
)

# Receive data from Node
data = json.loads(sys.argv[1])

sample = pd.DataFrame([data])

# Predict condition

prediction = model.predict(sample)[0]

# Get first matching row
row = dataset[
    dataset["condition_name"] == prediction
].iloc[0]


# Converts numpy values into normal Python values
def convert(value):

    if pd.isna(value):
        return ""

    if isinstance(value, np.integer):
        return int(value)

    if isinstance(value, np.floating):
        return float(value)

    return str(value)


result = {

    "condition": convert(prediction),

    "severity": convert(row["severity"]),

    "risk_category": convert(row["risk_category"]),

    "overall_wellness_score":
        convert(row["overall_wellness_score"]),

    "recommended_mudra":
        convert(row["recommended_mudra"]),

    "mudra_duration_minutes":
        convert(row["mudra_duration_minutes"]),

    "mudra_frequency_per_day":
        convert(row["mudra_frequency_per_day"]),

    "recommended_reflexology_point":
        convert(row["recommended_reflexology_point"]),

    "reflexology_duration_minutes":
        convert(row["reflexology_duration_minutes"]),

    "recommended_foods":
        convert(row["recommended_foods"]),

    "foods_to_avoid":
        convert(row["foods_to_avoid"]),

    "personalized_recommendation":
        convert(row["personalized_recommendation"])

}

print(json.dumps(result))