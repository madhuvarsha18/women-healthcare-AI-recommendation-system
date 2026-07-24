import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="home-content">

        <p
          style={{
            color: "#ec4899",
            letterSpacing: "4px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          AI POWERED WOMEN WELLNESS PLATFORM
        </p>

        <h1 className="home-title">
          Adaptive Women Wellness Intelligence
        </h1>

        <p className="home-description">
          Personalized wellness ecosystem focused on PCOS,
          fertility wellness, stress management,
          reflexology, mudras, emotional balance,
          and adaptive AI-driven recommendations.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >

          {/* DASHBOARD BUTTON */}
          <Link to="/register">
            <button className="home-button">
              Register
            </button>
          </Link>

          {/* FEATURES BUTTON */}
          <Link to="/login">
           <button 
  style={{ 
    backgroundImage: 'linear-gradient(to right, #ec4899, #8b5cf6)', 
    color: 'rgb(226, 204, 204)', 
    border: 'none', 
    padding: '18px 40px', 
    borderRadius: '20px', 
    fontSize: '18px', 
    cursor: 'pointer' 
  }}

            >
              Login
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Home;