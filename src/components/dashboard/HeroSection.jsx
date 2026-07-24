import {
  FaHeartbeat,
  FaLeaf,
  FaSmile,
} from "react-icons/fa";

function HeroSection({ userName, score }) {

  const getStatus = () => {

    if (score >= 80)
      return "Excellent";

    if (score >= 60)
      return "Good";

    return "Needs Attention";

  };

  return (

    <div
      style={{
        background:
          "linear-gradient(135deg,#ff4d94,#ff85a2,#ffd6e8)",
        borderRadius: "30px",
        padding: "40px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: "30px",
        boxShadow:
          "0 20px 45px rgba(236,72,153,.35)"
      }}
    >

      <div>

        <h1
          style={{
            fontSize: "42px",
            marginBottom: "15px"
          }}
        >
          Welcome, {userName} 🌸
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "32px",
            maxWidth: "500px"
          }}
        >
          Your personal AI Women's Wellness Dashboard.

          Track your health, monitor progress,
          improve fertility,
          lifestyle,
          nutrition,
          yoga,
          reflexology
          and AI recommendations
          in one place.
        </p>

        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "30px",
            flexWrap: "wrap"
          }}
        >

          <div
            style={{
              background: "rgba(255,255,255,.2)",
              padding: "12px 18px",
              borderRadius: "14px"
            }}
          >
            <FaHeartbeat />
            {" "}
            Health Tracking
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.2)",
              padding: "12px 18px",
              borderRadius: "14px"
            }}
          >
            <FaLeaf />
            {" "}
            Natural Wellness
          </div>

          <div
            style={{
              background: "rgba(255,255,255,.2)",
              padding: "12px 18px",
              borderRadius: "14px"
            }}
          >
            <FaSmile />
            {" "}
            AI Insights
          </div>

        </div>

      </div>

      <div
        style={{
          width: "230px",
          height: "230px",
          borderRadius: "50%",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#ec4899",
          boxShadow:
            "0 15px 40px rgba(0,0,0,.2)",
          marginTop: "20px"
        }}
      >

        <h1
          style={{
            fontSize: "60px",
            margin: 0
          }}
        >
          {score}
        </h1>

        <p
          style={{
            margin: "10px 0",
            fontWeight: "bold",
            fontSize: "18px"
          }}
        >
          Wellness Score
        </p>

        <span
          style={{
            background: "#ec4899",
            color: "white",
            padding: "8px 18px",
            borderRadius: "30px"
          }}
        >
          {getStatus()}
        </span>

      </div>

    </div>

  );

}

export default HeroSection;