import { useNavigate } from "react-router-dom";

function Step5Mental({
  formData,
  setFormData,
  nextStep,
}) {

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <style>{`
        *{
          box-sizing:border-box;
          font-family:'Poppins',sans-serif;
        }

        .step-container{
          max-width:460px;
          margin:50px auto;
          padding:35px;
          border-radius:25px;
          background:linear-gradient(145deg,#ffe4ef,#ffd3e6);
          box-shadow:0 15px 35px rgba(255,105,180,.25);
          animation:fadeIn .8s ease;
        }

        @keyframes fadeIn{
          from{
            opacity:0;
            transform:translateY(30px) scale(.95);
          }
          to{
            opacity:1;
            transform:translateY(0) scale(1);
          }
        }

        .step-title{
          text-align:center;
          color:#d63384;
          margin-bottom:30px;
          font-size:28px;
          font-weight:700;
        }

        .input-group{
          margin-bottom:25px;
        }

        .input-group label{
          display:block;
          margin-bottom:10px;
          color:#c2185b;
          font-weight:600;
        }

        .range{
          width:100%;
          accent-color:#ff4fa3;
          cursor:pointer;
        }

        .range-value{
          margin-top:10px;
          text-align:center;
          color:#d63384;
          font-weight:700;
          font-size:18px;
        }

        .select-field{
          width:100%;
          padding:15px;
          border:none;
          border-radius:14px;
          outline:none;
          background:#fff;
          font-size:16px;
          transition:.3s;
          box-shadow:0 6px 15px rgba(255,105,180,.15);
        }

        .select-field:focus{
          border:2px solid #ff4fa3;
          transform:translateY(-2px);
          box-shadow:0 10px 25px rgba(214,51,132,.35);
        }

        .button-group{
          display:flex;
          gap:12px;
          margin-top:30px;
        }

        .back-btn,
        .next-btn{
          flex:1;
          padding:15px;
          border:none;
          border-radius:14px;
          cursor:pointer;
          font-size:16px;
          font-weight:600;
          transition:.3s;
        }

        .back-btn{
          background:#fff;
          color:#d63384;
          box-shadow:0 8px 20px rgba(255,105,180,.2);
        }

        .back-btn:hover{
          background:#ffe4ef;
          transform:translateY(-3px);
        }

        .next-btn{
          color:#fff;
          background:linear-gradient(90deg,#ff4fa3,#ff78b8);
          box-shadow:0 8px 20px rgba(255,79,163,.35);
        }

        .next-btn:hover{
          transform:translateY(-3px);
          box-shadow:0 12px 28px rgba(255,79,163,.45);
        }

        .back-btn:active,
        .next-btn:active{
          transform:scale(.97);
        }

        @media(max-width:500px){
          .step-container{
            margin:20px;
            padding:25px;
          }

          .button-group{
            flex-direction:column;
          }
        }
      `}</style>

      <div className="step-container">

        <h2 className="step-title">
          🧠 Step 5 - Mental Wellness
        </h2>

        <div className="input-group">
          <label>💭 Anxiety Level (1-10)</label>

          <input
            className="range"
            type="range"
            min="1"
            max="10"
            name="anxiety_level"
            value={formData.anxiety_level || 5}
            onChange={handleChange}
          />

          <div className="range-value">
            {formData.anxiety_level || 5}/10
          </div>
        </div>

        <div className="input-group">
          <label>🌧️ Depression Level (1-10)</label>

          <input
            className="range"
            type="range"
            min="1"
            max="10"
            name="depression_level"
            value={formData.depression_level || 5}
            onChange={handleChange}
          />

          <div className="range-value">
            {formData.depression_level || 5}/10
          </div>
        </div>

        <div className="input-group">
          <label>🌸 Self Reported Stress</label>

          <select
            className="select-field"
            name="self_reported_stress"
            value={formData.self_reported_stress || ""}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="input-group">
          <label>💖 Emotional Stability Score</label>

          <input
            className="range"
            type="range"
            min="1"
            max="100"
            name="emotional_stability_score"
            value={formData.emotional_stability_score || 50}
            onChange={handleChange}
          />

          <div className="range-value">
            {formData.emotional_stability_score || 50}/100
          </div>
        </div>

        <div className="button-group">

          <button
            className="back-btn"
            onClick={() => navigate("/step4")}
          >
            ← Back
          </button>

          <button
            className="next-btn"
            onClick={() => {
              console.log(formData);
              nextStep();
            }}
          >
            Next →
          </button>

        </div>

      </div>
    </>
  );
}

export default Step5Mental;