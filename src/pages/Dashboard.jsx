import { useEffect, useState } from "react";

import "../styles/dashboard.css";

import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/dashboard/HeroSection";
import PredictionCard from "../components/dashboard/PredictionCard";
import HealthSnapshot from "../components/dashboard/HealthSnapshot";
import WellnessChart from "../components/dashboard/WellnessChart";
import AssessmentTimeline from "../components/dashboard/AssessmentTimeline";

import { getDashboardData } from "../services/dashboardService";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const data = await getDashboardData();

      console.log("Dashboard Data :", data);

      setDashboard(data);

    } catch (err) {

      console.log("Dashboard Error :", err);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontSize: "24px",
          color: "#ec4899"
        }}
      >
        Loading Dashboard...
      </div>
    );
  }

  if (!dashboard || !dashboard.latest) {

    return (

      <div>

        <Navbar />

        <div
          style={{
            textAlign: "center",
            marginTop: "100px"
          }}
        >

          <h1>No Assessment Found</h1>

          <p>
            Complete your first AI Health Assessment to view
            your dashboard.
          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="dashboard-page">

      <Navbar />

      <div className="dashboard-container">

        <HeroSection
          userName={
            JSON.parse(localStorage.getItem("user"))?.name ||
            "User"
          }
          score={dashboard.latest.overall_wellness_score}
        />

        <PredictionCard
          prediction={dashboard.latest}
        />

        <HealthSnapshot
          assessment={dashboard.latest}
        />

        <WellnessChart
          chartData={dashboard.chartData}
        />

        <AssessmentTimeline
          assessments={dashboard.history}
        />

      </div>

    </div>

  );

}

export default Dashboard;