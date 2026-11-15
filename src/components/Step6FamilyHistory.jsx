function Step6FamilyHistory({
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
          max-width:480px;
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
          👨‍👩‍👧‍👦 Step 6 - Family History & Risk Factors
        </h2>

        <div className="input-group">
          <label>🩺 Family History of PCOS</label>
          <select
            className="select-field"
            name="family_history_pcos"
            value={formData.family_history_pcos || ""}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="input-group">
          <label>🌸 Family History of Endometriosis</label>
          <select
            className="select-field"
            name="family_history_endometriosis"
            value={formData.family_history_endometriosis || ""}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="input-group">
          <label>💗 Family History of Fibroids</label>
          <select
            className="select-field"
            name="family_history_fibroids"
            value={formData.family_history_fibroids || ""}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="input-group">
          <label>🦋 Thyroid Status</label>
          <select
            className="select-field"
            name="thyroid_status"
            value={formData.thyroid_status || ""}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Normal">Normal</option>
            <option value="Hypothyroid">Hypothyroid</option>
            <option value="Hyperthyroid">Hyperthyroid</option>
          </select>
        </div>

        <div className="input-group">
          <label>⚖️ Weight Change (Last 6 Months)</label>
          <select
            className="select-field"
            name="weight_change_last_6_months"
            value={formData.weight_change_last_6_months || ""}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="No Change">No Change</option>
            <option value="Gained 1-3kg">Gained 1–3 kg</option>
            <option value="Lost 1-3kg">Lost 1–3 kg</option>
            <option value="Gained 4kg+">Gained 4+ kg</option>
            <option value="Lost 4kg+">Lost 4+ kg</option>
          </select>
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

export default Step6FamilyHistory;
