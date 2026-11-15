function Step2Cycle({
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

        .input-field,
        .select-field{
          width:100%;
          padding:15px;
          border:none;
          border-radius:14px;
          outline:none;
          font-size:16px;
          background:#fff;
          transition:.35s;
          box-shadow:0 6px 15px rgba(255,105,180,.15);
        }

        .input-field:focus,
        .select-field:focus{
          transform:translateY(-3px);
          border:2px solid #ff4fa3;
          box-shadow:0 10px 25px rgba(214,51,132,.35);
        }

        .range{
          width:100%;
          accent-color:#ff4fa3;
          cursor:pointer;
        }

        .pain-text{
          text-align:center;
          font-weight:600;
          color:#d63384;
          margin-top:10px;
          font-size:17px;
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
          transition:.35s;
        }

        .back-btn{
          background:#fff;
          color:#d63384;
          box-shadow:0 8px 20px rgba(255,105,180,.2);
        }

        .back-btn:hover{
          background:#ffe4ef;
          transform:translateY(-4px);
        }

        .next-btn{
          color:#fff;
          background:linear-gradient(90deg,#ff4fa3,#ff78b8);
          box-shadow:0 8px 20px rgba(255,79,163,.35);
        }

        .next-btn:hover{
          transform:translateY(-4px);
          box-shadow:0 12px 28px rgba(255,79,163,.45);
        }

        .back-btn:active,
        .next-btn:active{
          transform:scale(.96);
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
          🌸 Step 2 - Menstrual Health
        </h2>

        <div className="input-group">
          <select
            name="cycle_regularity"
            value={formData.cycle_regularity || ""}
            onChange={handleChange}
            className="select-field"
          >
            <option value="">🩷 Select Cycle Type</option>
            <option value="Regular">Regular</option>
            <option value="Irregular">Irregular</option>
            <option value="Absent">Absent</option>
          </select>
        </div>

        <div className="input-group">
          <input
            type="number"
            name="cycle_length_days"
            placeholder="📅 Cycle Length (Days)"
            value={formData.cycle_length_days || ""}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <select
            name="bleeding_intensity"
            value={formData.bleeding_intensity || ""}
            onChange={handleChange}
            className="select-field"
          >
            <option value="">🩸 Bleeding Intensity</option>
            <option value="Light">Light</option>
            <option value="Normal">Normal</option>
            <option value="Heavy">Heavy</option>
            <option value="Spotting">Spotting</option>
          </select>
        </div>

        <div className="input-group">
          <input
            type="range"
            min="1"
            max="10"
            name="pain_level"
            value={formData.pain_level || 5}
            onChange={handleChange}
            className="range"
          />

          <p className="pain-text">
            💗 Pain Level: <strong>{formData.pain_level || 5}</strong> / 10
          </p>
        </div>

        <div className="button-group">
          <button
            className="back-btn"
            onClick={previousStep}
          >
            ← Back
          </button>

          <button
            onClick={nextStep}
            className="next-btn"
          >
            Next →
          </button>
        </div>
      </div>
    </>
  );
}

export default Step2Cycle;
