import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { predictCondition } from "../services/predictionService";

function HealthAssessment() {

  const [formData, setFormData] = useState({

    age: "",

    cycle_regularity: "",
    cycle_length_days: "",
    bleeding_intensity: "",
    pain_level: "",

    fatigue_level: "",
    acne_severity: "",
    hair_loss_severity: "",

    mood_pattern: "",
    sleep_hours: "",
    water_intake_liters: "",
    stress_level: "",

    exercise_frequency_per_week: "",
    sedentary_hours: "",

    anxiety_level: "",
    depression_level: "",
    emotional_stability_score: "",
    self_reported_stress: "",

    family_history_pcos: "",
    family_history_endometriosis: "",
    family_history_fibroids: "",

    thyroid_status: "",
    weight_change_last_6_months: ""

  });

  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handlePredict = async () => {

    try {
      console.log("Form Data:", formData);
      const result = await predictCondition(formData);

      setPrediction(result.prediction);

    } catch (err) {
      console.log(err);
      alert("Prediction Failed");
    }

  };

  return (

    <div>

      <Navbar />

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "40px"
        }}
      >

        <h1>Women's AI Health Assessment</h1>

        <h2>Personal</h2>

        <input
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />

        <hr />

        <h2>Menstrual Health</h2>

        <select
          name="cycle_regularity"
          onChange={handleChange}
        >
          <option value="">Cycle Regularity</option>
          <option>Regular</option>
          <option>Irregular</option>
          <option>Absent</option>
        </select>

        <br /><br />

        <input
          name="cycle_length_days"
          placeholder="Cycle Length"
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="bleeding_intensity"
          onChange={handleChange}
        >
          <option value="">Bleeding</option>
          <option>Light</option>
          <option>Normal</option>
          <option>Heavy</option>
          <option>Spotting</option>
        </select>

        <br /><br />

        <input
          name="pain_level"
          placeholder="Pain Level (1-10)"
          onChange={handleChange}
        />

        <hr />

        <h2>Symptoms</h2>

        <select
          name="fatigue_level"
          onChange={handleChange}
        >
          <option value="">Fatigue</option>
          <option>Mild</option>
          <option>Moderate</option>
          <option>Severe</option>
        </select>

        <br /><br />

        <select
          name="acne_severity"
          onChange={handleChange}
        >
          <option>No Acne</option>
          <option>Mild</option>
          <option>Moderate</option>
          <option>Severe</option>
        </select>

        <br /><br />

        <select
          name="hair_loss_severity"
          onChange={handleChange}
        >
          <option>None</option>
          <option>Mild</option>
          <option>Moderate</option>
          <option>Severe</option>
        </select>

        <hr />

        <h2>Mental Health</h2>

        <select
          name="mood_pattern"
          onChange={handleChange}
        >
          <option>Stable</option>
          <option>Mild Swings</option>
          <option>Severe Swings</option>
        </select>

        <br /><br />

        <input
          name="sleep_hours"
          placeholder="Sleep Hours"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="water_intake_liters"
          placeholder="Water Intake"
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="stress_level"
          onChange={handleChange}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <br /><br />

        <input
          name="exercise_frequency_per_week"
          placeholder="Exercise Days / Week"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="sedentary_hours"
          placeholder="Sedentary Hours"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="anxiety_level"
          placeholder="Anxiety (1-10)"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="depression_level"
          placeholder="Depression (1-10)"
          onChange={handleChange}
        />

        <br /><br />

        <input
    type="number"
    name="emotional_stability_score"
    placeholder="Emotional Stability Score"
    value={formData.emotional_stability_score || ""}
    onChange={handleChange}
/>

        <br /><br />

        <select
          name="self_reported_stress"
          onChange={handleChange}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <hr />

        <h2>Family History</h2>

        <select
          name="family_history_pcos"
          onChange={handleChange}
        >
          <option>No</option>
          <option>Yes</option>
        </select>

        <br /><br />

        <select
          name="family_history_endometriosis"
          onChange={handleChange}
        >
          <option>No</option>
          <option>Yes</option>
        </select>

        <br /><br />

        <select
          name="family_history_fibroids"
          onChange={handleChange}
        >
          <option>No</option>
          <option>Yes</option>
        </select>

        <br /><br />

        <select
          name="thyroid_status"
          onChange={handleChange}
        >
          <option>Normal</option>
          <option>Hypothyroid</option>
          <option>Hyperthyroid</option>
        </select>

        <br /><br />

        <select
          name="weight_change_last_6_months"
          onChange={handleChange}
        >
          <option>No Change</option>
          <option>Lost 1-3kg</option>
          <option>Lost 3kg+</option>
          <option>Gained 1-3kg</option>
          <option>Gained 3kg+</option>
        </select>

        <br /><br />

        <button
          onClick={handlePredict}
        >
          Analyze Health
        </button>

        {prediction && (

          <div
            style={{
              marginTop: 30,
              padding: 20,
              border: "2px solid hotpink"
            }}
          >

            <h2>Prediction</h2>

            <h2>{prediction.condition}</h2>

<p>
Severity :
{prediction.severity}
</p>

<p>
Risk :
{prediction.risk_category}
</p>

<p>
Wellness :
{prediction.overall_wellness_score}
</p>

<p>
Mudra :
{prediction.recommended_mudra}
</p>

<p>
Mudra Duration :
{prediction.mudra_duration_minutes}
minutes
</p>

<p>
Mudra Frequency :
{prediction.mudra_frequency_per_day}
</p>

<p>
Reflexology :
{prediction.recommended_reflexology_point}
</p>

<p>
Foods :
{prediction.recommended_foods}
</p>

<p>
Avoid :
{prediction.foods_to_avoid}
</p>

<p>
Recommendation :
{prediction.personalized_recommendation}
</p>

          </div>

        )}

      </div>

    </div>

  );

}

export default HealthAssessment;