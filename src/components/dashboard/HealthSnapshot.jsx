import {
  FaWeight,
  FaTint,
  FaMoon,
  FaRunning,
  FaHeartbeat,
  FaCalendarAlt,
} from "react-icons/fa";

function HealthSnapshot({ assessment }) {

  const bmi = assessment.bmi;

  const sleep =
    Number(assessment.sleep_hours);

  const water =
    Number(assessment.water_intake_liters);

  const exercise =
    Number(assessment.exercise_frequency_per_week);

  const cycle =
    Number(assessment.cycle_length_days);

  const sleepScore =
    sleep >= 8 ? 100 :
    sleep >= 7 ? 90 :
    sleep >= 6 ? 70 :
    sleep >= 5 ? 50 : 30;

  const hydrationScore =
    water >= 3 ? 100 :
    water >= 2 ? 80 :
    water >= 1.5 ? 60 : 40;

  const activityScore =
    exercise >= 5 ? 100 :
    exercise >= 3 ? 75 :
    exercise >= 1 ? 50 : 20;

  return (

    <div
      style={{
        marginTop: "35px",
        marginBottom: "35px"
      }}
    >

      <h2
        style={{
          color: "#ec4899",
          marginBottom: "25px"
        }}
      >
        Health Snapshot
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(230px,1fr))",
          gap: "20px"
        }}
      >

        <Card
          icon={<FaWeight />}
          title="BMI"
          value={bmi}
          color="#3b82f6"
        />

        <Card
          icon={<FaMoon />}
          title="Sleep Score"
          value={`${sleepScore}%`}
          color="#8b5cf6"
        />

        <Card
          icon={<FaTint />}
          title="Hydration"
          value={`${hydrationScore}%`}
          color="#06b6d4"
        />

        <Card
          icon={<FaRunning />}
          title="Activity"
          value={`${activityScore}%`}
          color="#22c55e"
        />

        <Card
          icon={<FaHeartbeat />}
          title="Stress"
          value={assessment.stress_level}
          color="#ef4444"
        />

        <Card
          icon={<FaCalendarAlt />}
          title="Cycle Length"
          value={`${cycle} Days`}
          color="#ec4899"
        />

      </div>

    </div>

  );

}

function Card({

  icon,

  title,

  value,

  color

}) {

  return (

    <div
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "25px",
        boxShadow:
          "0 10px 25px rgba(0,0,0,.08)",
        transition: ".3s",
        cursor: "pointer"
      }}
    >

      <div
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          background: color,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          marginBottom: "20px"
        }}
      >

        {icon}

      </div>

      <h3
        style={{
          color: "#555"
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          marginTop: "10px",
          color: "#111827"
        }}
      >
        {value}
      </h1>

    </div>

  );

}

export default HealthSnapshot;