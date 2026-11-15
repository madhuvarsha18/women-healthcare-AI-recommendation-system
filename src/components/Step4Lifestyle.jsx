function Step4Lifestyle({
  formData,
  setFormData,
  nextStep,
  previousStep,
}) {

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
          max-width:450px;
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
          margin-bottom:20px;
        }

        .input-group label{
          display:block;
          margin-bottom:8px;
          color:#c2185b;
          font-weight:600;
        }

        .input-field,
        .select-field{
          width:100%;
          padding:15px;
          border:none;
          border-radius:14px;
          outline:none;
          font-size:16px;
          background:#fff;
          transition:.3s;
          box-shadow:0 6px 15px rgba(255,105,180,.15);
        }

        .input-field:focus,
        .select-field:focus{
          border:2px solid #ff4fa3;
          transform:translateY(-2px);
          box-shadow:0 10px 25px rgba(214,51,132,.35);
        }

        .button-group{
          display:flex;
          gap:12px;
          margin-top:25px;
        }

        .back-btn,
        .next-btn{
          flex:1;
          padding:15px;
          border:none;
          border-radius:14px;
          font-size:16px;
          font-weight:600;
          cursor:pointer;
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
          🌸 Step 4 - Lifestyle
        </h2>

        <div className="input-group">
          <label>😴 Sleep Hours</label>
          <input
            className="input-field"
            type="number"
            name="sleep_hours"
            value={formData.sleep_hours || ""}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>💧 Water Intake (Liters)</label>
          <input
            className="input-field"
            type="number"
            step="0.1"
            name="water_intake_liters"
            value={formData.water_intake_liters || ""}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>🧘 Stress Level</label>
          <select
            className="select-field"
            name="stress_level"
            value={formData.stress_level || ""}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="input-group">
          <label>🏃 Exercise Days Per Week</label>
          <input
            className="input-field"
            type="number"
            name="exercise_frequency_per_week"
            value={formData.exercise_frequency_per_week || ""}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>🪑 Sedentary Hours</label>
          <input
            className="input-field"
            type="number"
            step="0.5"
            name="sedentary_hours"
            value={formData.sedentary_hours || ""}
            onChange={handleChange}
          />
        </div>

        <div className="button-group">
          <button
            className="back-btn"
            onClick={previousStep}
          >
            ← Back
          </button>

          <button
            className="next-btn"
            onClick={nextStep}
          >
            Next →
          </button>
        </div>

      </div>
    </>
  );
}

export default Step4Lifestyle;
