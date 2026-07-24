import {
  FaHeartbeat,
  FaExclamationTriangle,
  FaShieldAlt,
  FaAppleAlt,
  FaBan,
  FaHands,
  FaShoePrints,
  FaLightbulb
} from "react-icons/fa";

function PredictionCard({ prediction }) {

  if (!prediction) {
    return null;
  }

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: "25px",
        marginTop: "30px",
        marginBottom: "40px"
      }}
    >

      {/* CONDITION */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)"
        }}
      >

        <h2 style={{ color: "#ec4899" }}>
          <FaHeartbeat />
          {" "}
          AI Diagnosis
        </h2>

        <h1
          style={{
            marginTop: "15px",
            color: "#111827"
          }}
        >
          {prediction.condition}
        </h1>

      </div>

      {/* SEVERITY */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)"
        }}
      >

        <h2 style={{ color: "#ef4444" }}>
          <FaExclamationTriangle />
          {" "}
          Severity
        </h2>

        <h1>{prediction.severity}</h1>

      </div>

      {/* RISK */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)"
        }}
      >

        <h2 style={{ color: "#3b82f6" }}>
          <FaShieldAlt />
          {" "}
          Risk Category
        </h2>

        <h1>{prediction.risk_category}</h1>

      </div>

      {/* FOODS */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)"
        }}
      >

        <h2 style={{ color: "#16a34a" }}>
          <FaAppleAlt />
          {" "}
          Recommended Foods
        </h2>

        <p
          style={{
            marginTop: "15px",
            lineHeight: "28px"
          }}
        >
          {prediction.recommended_foods}
        </p>

      </div>

      {/* AVOID */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)"
        }}
      >

        <h2 style={{ color: "#dc2626" }}>
          <FaBan />
          {" "}
          Foods To Avoid
        </h2>

        <p
          style={{
            marginTop: "15px",
            lineHeight: "28px"
          }}
        >
          {prediction.foods_to_avoid}
        </p>

      </div>

      {/* MUDRA */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)"
        }}
      >

        <h2 style={{ color: "#8b5cf6" }}>
          <FaHands />
          {" "}
          Recommended Mudra
        </h2>

        <h3>{prediction.recommended_mudra}</h3>

        <p>

          Duration :
          {" "}
          {prediction.mudra_duration_minutes}
          {" "}minutes

        </p>

        <p>

          Frequency :
          {" "}
          {prediction.mudra_frequency_per_day}
          {" "}times/day

        </p>

      </div>

      {/* REFLEXOLOGY */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)"
        }}
      >

        <h2 style={{ color: "#0ea5e9" }}>
          <FaShoePrints />
          {" "}
          Reflexology
        </h2>

        <h3>

          {prediction.recommended_reflexology_point}

        </h3>

        <p>

          Duration :
          {" "}
          {prediction.reflexology_duration_minutes}
          {" "}minutes

        </p>

      </div>

      {/* AI RECOMMENDATION */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#ec4899,#be185d)",
          color: "white",
          borderRadius: "20px",
          padding: "30px",
          gridColumn: "1/-1",
          boxShadow: "0 12px 30px rgba(236,72,153,.4)"
        }}
      >

        <h2>

          <FaLightbulb />
          {" "}
          Personalized AI Recommendation

        </h2>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "30px",
            fontSize: "18px"
          }}
        >
          {prediction.personalized_recommendation}
        </p>

      </div>

    </div>

  );

}

export default PredictionCard;