import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

const navItems = [
  { path: "/", label: "Home", icon: "🏠", exact: true },
  { path: "/dashboard", label: "Dashboard", icon: "📊" },
  { path: "/checkin", label: "Daily Check-In", icon: "✍️" },
  { path: "/recommendations", label: "Wellness Guide", icon: "🌿" },
  { path: "/assistant", label: "AI Assistant", icon: "🤖" },
  { path: "/progress", label: "My Journey", icon: "🏆" },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="mobile-topbar">
        <div className="mobile-brand">
          <span className="brand-icon">🌸</span>
          <span className="brand-name">Aaroha</span>
        </div>
        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-logo">🌸</div>
          <div>
            <div className="brand-name">Aaroha</div>
            <div className="brand-tagline">Wellness Intelligence</div>
          </div>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">P</div>
          <div className="user-info">
            <div className="user-name">Priya Sharma</div>
            <div className="user-plan">Wellness Member</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-label">Navigation</div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                `nav-item ${isActive ? "nav-item-active" : ""}`
              }
              onClick={() => setMobileOpen(false)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label-text">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="wellness-tip">
            <div className="tip-icon">💡</div>
            <div className="tip-text">
              <strong>Today's Tip</strong>
              <p>Drink warm jeera water in the morning to support hormonal balance.</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}