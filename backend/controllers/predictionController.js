const { PythonShell } = require("python-shell");
const path = require("path");
const Assessment = require("../models/Assessment");

const predictCondition = async (req, res) => {

  const options = {
    mode: "text",
    pythonOptions: ["-u"],
    scriptPath: path.join(__dirname, "../../datascience"),
    args: [JSON.stringify(req.body)]
  };

  try {

    const result = await PythonShell.run(
      "predict.py",
      options
    );

    const prediction = JSON.parse(result[0]);

    const bmi = (
      Number(req.body.weight) /
      Math.pow(Number(req.body.height) / 100, 2)
    ).toFixed(1);

    await Assessment.create({

      user: req.user.id,

      ...req.body,

      bmi,

      condition: prediction.condition,

      severity: prediction.severity,

      risk_category: prediction.risk_category,

      overall_wellness_score:
        prediction.overall_wellness_score,

      recommended_mudra:
        prediction.recommended_mudra,

      mudra_duration_minutes:
        prediction.mudra_duration_minutes,

      mudra_frequency_per_day:
        prediction.mudra_frequency_per_day,

      recommended_reflexology_point:
        prediction.recommended_reflexology_point,

      reflexology_duration_minutes:
        prediction.reflexology_duration_minutes,

      recommended_foods:
        prediction.recommended_foods,

      foods_to_avoid:
        prediction.foods_to_avoid,

      personalized_recommendation:
        prediction.personalized_recommendation

    });

    res.json({
      prediction
    });

  }

  catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Prediction Failed"
    });

  }

};

module.exports = {
  predictCondition
};