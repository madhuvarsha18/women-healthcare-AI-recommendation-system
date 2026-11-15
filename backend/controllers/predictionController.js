const { PythonShell } = require("python-shell");
const path = require("path");
const Assessment = require("../models/Assessment");
const { isDbConnected, getMemoryStore } = require("../config/db");

const demoPrediction = {
  condition: "PCOS",
  severity: "Moderate",
  risk_category: "Medium",
  overall_wellness_score: 82,
  recommended_mudra: "Vata Mudra",
  mudra_duration_minutes: 12,
  mudra_frequency_per_day: 2,
  recommended_reflexology_point: "Solar Plexus",
  reflexology_duration_minutes: 10,
  recommended_foods: "Leafy greens, oats, lentils, berries",
  foods_to_avoid: "Refined sugar, fried foods, excess caffeine",
  personalized_recommendation: "Maintain a regular routine with balanced meals and daily movement.",
};

const predictCondition = async (req, res) => {
  const options = {
    mode: "text",
    pythonOptions: ["-u"],
    scriptPath: path.join(__dirname, "../../datascience"),
    args: [JSON.stringify(req.body)],
  };

  try {
    let prediction = demoPrediction;

    try {
      const result = await PythonShell.run("predict.py", options);
      prediction = JSON.parse(result[0]);
    } catch (pythonError) {
      console.warn("Python prediction model unavailable, using demo prediction");
      console.warn(pythonError.message);
    }

    const bmi = (
      Number(req.body.weight) /
      Math.pow(Number(req.body.height) / 100, 2)
    ).toFixed(1);

    const assessmentRecord = {
      user: req.user.id,
      ...req.body,
      bmi,
      condition: prediction.condition,
      severity: prediction.severity,
      risk_category: prediction.risk_category,
      overall_wellness_score: prediction.overall_wellness_score,
      recommended_mudra: prediction.recommended_mudra,
      mudra_duration_minutes: prediction.mudra_duration_minutes,
      mudra_frequency_per_day: prediction.mudra_frequency_per_day,
      recommended_reflexology_point: prediction.recommended_reflexology_point,
      reflexology_duration_minutes: prediction.reflexology_duration_minutes,
      recommended_foods: prediction.recommended_foods,
      foods_to_avoid: prediction.foods_to_avoid,
      personalized_recommendation: prediction.personalized_recommendation,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    if (isDbConnected()) {
      await Assessment.create(assessmentRecord);
    } else {
      getMemoryStore().assessments.push(assessmentRecord);
    }

    res.json({ prediction });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Prediction Failed",
    });
  }
};

module.exports = {
  predictCondition,
};