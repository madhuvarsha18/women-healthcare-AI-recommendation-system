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
import { getMudraImage, reflexologyImage } from "../../data/recommendationImages";
import FoodGallery from "../FoodGallery";

function PredictionCard({ prediction }) {

  if (!prediction) {
    return null;
  }

  const mudraName = prediction.recommended_mudra || "Gyan Mudra";
  const reflexologyPoint = prediction.recommended_reflexology_point || "Solar plexus point";
  const mudraImage = getMudraImage(mudraName);

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

        <FoodGallery foods={prediction.recommended_foods} />

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

        <FoodGallery foods={prediction.foods_to_avoid} avoid />

      </div>

      {/* MUDRA */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "0 0 25px",
          overflow: "hidden",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)"
        }}
      >

        <img src={mudraImage.src} alt={`${mudraName} hand gesture`} loading="lazy" style={{ width: "100%", height: "150px", objectFit: "cover", display: "block" }} />

        <div style={{ padding: "0 25px" }}>

        <h2 style={{ color: "#8b5cf6", marginTop: "20px" }}>
          <FaHands />
          {" "}
          Recommended Mudra
        </h2>

        <h3>{mudraName}</h3>

        <small style={{ color: "#64748b" }}>Image: <a href={mudraImage.source} target="_blank" rel="noreferrer">{mudraImage.credit}</a></small>

        <p style={{ lineHeight: 1.65, color: "#475569" }}>
          A mudra is a hand gesture used in some breathing and meditation practices. Your recommended mudra is <strong>{mudraName}</strong>. The exact finger position depends on the mudra, so follow a trusted visual guide or ask a qualified practitioner to show you. Keep your hands comfortable and breathe naturally.
        </p>

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

      </div>

      {/* REFLEXOLOGY */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "0 0 25px",
          overflow: "hidden",
          boxShadow: "0 8px 25px rgba(0,0,0,.08)"
        }}
      >

        <img src={reflexologyImage.src} alt="A practitioner gently pressing the sole of a foot" loading="lazy" style={{ width: "100%", height: "150px", objectFit: "cover", display: "block" }} />

        <div style={{ padding: "0 25px" }}>

        <h2 style={{ color: "#0ea5e9", marginTop: "20px" }}>
          <FaShoePrints />
          {" "}
          Reflexology
        </h2>

        <h3>

          {reflexologyPoint}

        </h3>

        <small style={{ color: "#64748b" }}>Image: <a href={reflexologyImage.source} target="_blank" rel="noreferrer">{reflexologyImage.credit}</a></small>

        <p style={{ lineHeight: 1.65, color: "#475569" }}>
          Reflexology means using gentle pressure on specific areas of the feet. Sit comfortably and use your thumb to make small, comfortable circles on the recommended spot. It should feel soothing, never painful; stop if you feel discomfort.
        </p>

        <p>

          Duration :
          {" "}
          {prediction.reflexology_duration_minutes}
          {" "}minutes

        </p>

        </div>

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
