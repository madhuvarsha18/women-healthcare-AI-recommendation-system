import { useState } from "react";
import axios from "axios";
import "./Step7Review.css";

function Step7Review({ formData }) {

  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeHealth = async () => {

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:5000/api/prediction/predict",
        formData,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );

      setPrediction(response.data.prediction);

    } catch(error){

      console.log(error);
      alert("Prediction Failed");

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="review-page">

      <h2 className="review-title">
        💖 Health Assessment Report
      </h2>


      {/* USER DATA REPORT */}

      <div className="grid">


        <div className="card">

          <h3>👤 Personal Information</h3>

          <div className="info">
            <b>Age:</b> {formData.age} years
            <br/>

            <b>Height:</b> {formData.height} cm
            <br/>

            <b>Weight:</b> {formData.weight} kg

          </div>

        </div>



        <div className="card">

          <h3>🌸 Menstrual Health</h3>

          <div className="info">

            <b>Cycle:</b>
            {" "}
            {formData.cycle_regularity}

            <br/>

            <b>Cycle Length:</b>
            {" "}
            {formData.cycle_length_days} days

            <br/>

            <b>Bleeding:</b>
            {" "}
            {formData.bleeding_intensity}

            <br/>

            <b>Pain Level:</b>
            {" "}
            {formData.pain_level}/10

          </div>

        </div>



        <div className="card">

          <h3>🌿 Lifestyle</h3>

          <div className="info">

            <b>Sleep:</b>
            {" "}
            {formData.sleep_hours} hrs

            <br/>

            <b>Water:</b>
            {" "}
            {formData.water_intake_liters} L

            <br/>

            <b>Stress:</b>
            {" "}
            {formData.stress_level}

            <br/>

            <b>Exercise:</b>
            {" "}
            {formData.exercise_frequency_per_week} days/week

          </div>

        </div>




        <div className="card">

          <h3>🧠 Mental Wellness</h3>

          <div className="info">

            <b>Anxiety:</b>
            {" "}
            {formData.anxiety_level}/10

            <br/>

            <b>Depression:</b>
            {" "}
            {formData.depression_level}/10

            <br/>

            <b>Stress:</b>
            {" "}
            {formData.self_reported_stress}

            <br/>

            <b>Stability:</b>
            {" "}
            {formData.emotional_stability_score}/100

          </div>

        </div>



        <div className="card">

          <h3>👨‍👩‍👧 Family History</h3>

          <div className="info">

            <b>PCOS:</b>
            {" "}
            {formData.family_history_pcos}

            <br/>

            <b>Endometriosis:</b>
            {" "}
            {formData.family_history_endometriosis}

            <br/>

            <b>Fibroids:</b>
            {" "}
            {formData.family_history_fibroids}

            <br/>

            <b>Thyroid:</b>
            {" "}
            {formData.thyroid_status}

          </div>

        </div>



      </div>




      <button
        className="review-btn"
        onClick={analyzeHealth}
      >
        🔍 Analyze My Health
      </button>



      {
        loading &&

        <h3 className="loading">
          ✨ Analyzing your health profile...
        </h3>

      }




      {
        prediction &&

        <div className="grid prediction-area">


          <div className="card">

            <h3>
              🩺 Predicted Condition
            </h3>

            <div className="big-condition">

              {prediction.condition}

            </div>


            <div className="badge">

              {prediction.severity}

            </div>


            <p className="info">

              <b>
                Risk Category
              </b>

              <br/>

              {prediction.risk_category}

            </p>


          </div>





          <div className="card">

            <h3>
              📊 Wellness Score
            </h3>


            <div className="score-circle">

              {prediction.overall_wellness_score}

            </div>


            <p style={{textAlign:"center"}}>
              Overall Health Score
            </p>


          </div>





          <div className="card">

            <h3>
              🧘 Mudra Recommendation
            </h3>


            <p className="info">

              <b>Mudra</b>
              <br/>

              {prediction.recommended_mudra}

            </p>


            <p>
              ⏱ Duration :
              <b>
                {" "}
                {prediction.mudra_duration_minutes}
                {" "}
                mins
              </b>
            </p>


            <p>

              🔁 Frequency :
              <b>
                {" "}
                {prediction.mudra_frequency_per_day}
                {" "}
                times/day
              </b>

            </p>


          </div>





          <div className="card">

            <h3>
              👣 Reflexology
            </h3>


            <p>

              <b>
                Point
              </b>

              <br/>

              {prediction.recommended_reflexology_point}

            </p>


            <p>

              ⏱ Duration :

              <b>
                {" "}
                {prediction.reflexology_duration_minutes}
                {" "}
                mins
              </b>

            </p>


          </div>





          <div className="card">

            <h3>
              🥗 Foods To Eat
            </h3>


            <div className="chips">

            {
              prediction.recommended_foods
              .split(",")
              .map((food,index)=>(

                <span
                  key={index}
                  className="chip-good"
                >
                  {food.trim()}
                </span>

              ))
            }

            </div>


          </div>





          <div className="card">

            <h3>
              🚫 Foods To Avoid
            </h3>


            <div className="chips">

            {
              prediction.foods_to_avoid
              .split(",")
              .map((food,index)=>(

                <span
                  key={index}
                  className="chip-bad"
                >

                  {food.trim()}

                </span>

              ))
            }

            </div>


          </div>





          <div
            className="card"
            style={{gridColumn:"1/-1"}}
          >

            <h3>
              💖 Personalized Recommendation
            </h3>


            <div className="recommendation">

              {prediction.personalized_recommendation}

            </div>


          </div>



        </div>

      }


    </div>

  );

}

export default Step7Review;