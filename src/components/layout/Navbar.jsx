import { Link } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">DietCare </h1>

      <div className="nav-links">
        <Link className="nav-item" to="/dashboard">
          Dashboard
        </Link>


        
        <Link className="nav-item" to="/assessment">
          AI Assessment
        </Link>
        <Link className="nav-item" to="/cycle-tracker">
  Cycle Tracker
</Link>
      </div>
    </div>
  );
}

export default Navbar;