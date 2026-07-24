import { useState } from "react";
import axios from "axios";
import "./Step7Review.css";
function Step7Review({ formData }) {

  const [prediction, setPrediction] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const analyzeHealth = async () => {

    try {

      setLoading(true);
      console.log(formData);
      const token =
        localStorage.getItem("token");

console.log("TOKEN :", token);

const response =
await axios.post(

"http://localhost:5000/api/prediction/predict",

formData,

{
headers:{
Authorization:`Bearer ${token}`
}

}

);

      setPrediction(
        response.data.prediction
      );

    } catch (error) {

      console.log(error);

      alert("Prediction Failed");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div>

      <h2>
        Step 7 - Review Assessment
      </h2>

      <pre>
        {JSON.stringify(
          formData,
          null,
          2
        )}
      </pre>

      <button
        onClick={analyzeHealth}
      >
        Analyze My Health
      </button>

      <br />
      <br />

      {loading && (
        <h3>
          Analyzing...
        </h3>
      )}

      {prediction && (

<div className="grid">

<div className="card">

<h3>🩺 Predicted Condition</h3>

<div className="big-condition">
{prediction.condition}
</div>

<div className="badge">
{prediction.severity}
</div>

<p className="info">
<b>Risk Category</b><br/>
{prediction.risk_category}
</p>

</div>

<div className="card">

<h3>📊 Wellness Score</h3>

<div className="score-circle">
{prediction.overall_wellness_score}
</div>

<p style={{textAlign:"center"}}>
Overall Health Score
</p>

</div>

<div className="card">

<h3>🧘 Mudra Recommendation</h3>

<p className="info">

<b>Mudra</b><br/>

{prediction.recommended_mudra}

</p>

<p>

⏱ Duration :
<b>
 {prediction.mudra_duration_minutes} mins
</b>

</p>

<p>

🔁 Frequency :
<b>
 {prediction.mudra_frequency_per_day} times/day
</b>

</p>

</div>

<div className="card">

<h3>👣 Reflexology</h3>

<p>

<b>Point</b><br/>

{prediction.recommended_reflexology_point}

</p>

<p>

⏱ Duration :
<b>
 {prediction.reflexology_duration_minutes} mins
</b>

</p>

</div>

<div className="card">

<h3>🥗 Foods To Eat</h3>

<div className="chips">

{prediction.recommended_foods
.split(",")

.map((food,index)=>(

<span
key={index}
className="chip-good"
>

{food.trim()}

</span>

))}

</div>

</div>

<div className="card">

<h3>🚫 Foods To Avoid</h3>

<div className="chips">

{prediction.foods_to_avoid
.split(",")

.map((food,index)=>(

<span
key={index}
className="chip-bad"
>

{food.trim()}

</span>

))}

</div>

</div>

<div
className="card"
style={{gridColumn:"1/-1"}}
>

<h3>💖 Personalized Recommendation</h3>

<div className="recommendation">

{prediction.personalized_recommendation}

</div>

</div>

</div>

)}

    </div>
  );
}

export default Step7Review;