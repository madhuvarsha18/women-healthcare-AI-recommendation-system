function Step1Personal({
  formData,
  setFormData,
  nextStep,
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
          max-width:420px;
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
          animation:slideDown .8s ease;
        }

        @keyframes slideDown{
          from{
            opacity:0;
            transform:translateY(-20px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .input-group{
          margin-bottom:20px;
          animation:popUp .8s ease;
        }

        @keyframes popUp{
          from{
            opacity:0;
            transform:translateY(20px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .input-field{
          width:100%;
          padding:15px 18px;
          border:none;
          border-radius:14px;
          outline:none;
          background:white;
          font-size:16px;
          transition:.35s;
          box-shadow:0 6px 15px rgba(255,105,180,.12);
        }

        .input-field:focus{
          transform:translateY(-3px);
          box-shadow:0 10px 25px rgba(214,51,132,.35);
          border:2px solid #ff4fa3;
        }

        .input-field::placeholder{
          color:#b86b8d;
        }

        .back-btn{
  width:100%;
  padding:15px;
  border:none;
  border-radius:14px;
  background:white;
  color:#d63384;
  font-size:17px;
  font-weight:600;
  cursor:pointer;
  transition:.35s;
  box-shadow:0 8px 20px rgba(255,105,180,.2);
}

.back-btn:hover{
  background:#ffe4ef;
  transform:translateY(-4px);
  box-shadow:0 12px 28px rgba(255,79,163,.3);
}

.back-btn:active{
  transform:scale(.96);
}

        .next-btn{
          width:100%;
          padding:15px;
          border:none;
          border-radius:14px;
          background:linear-gradient(90deg,#ff4fa3,#ff78b8);
          color:white;
          font-size:17px;
          font-weight:600;
          cursor:pointer;
          transition:.35s;
          box-shadow:0 8px 20px rgba(255,79,163,.35);
        }

        .next-btn:hover{
          transform:translateY(-4px) scale(1.02);
          box-shadow:0 12px 28px rgba(255,79,163,.45);
        }

        .next-btn:active{
          transform:scale(.96);
        }

        @media(max-width:500px){
          .step-container{
            margin:20px;
            padding:25px;
          }

          .step-title{
            font-size:24px;
          }
        }
      `}</style>

      <div className="step-container">
        <h2 className="step-title">
          💖 Step 1 - Personal Information
        </h2>

        <div className="input-group">
          <input
            type="number"
            name="age"
            placeholder="🎂 Age"
            value={formData.age}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <input
            type="number"
            name="height"
            placeholder="📏 Height (cm)"
            value={formData.height}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <input
            type="number"
            name="weight"
            placeholder="⚖️ Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            className="input-field"
          />
        </div>
          <div
  style={{
    display: "flex",
    gap: "12px",
    marginTop: "20px",
  }}
>
  <button
    className="back-btn"
    onClick={() => {
      window.history.back();
    }}
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

export default Step1Personal;