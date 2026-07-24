import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "../styles/login.css";
function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response =
        await loginUser(formData);

      localStorage.setItem(
        "token",
        response.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      navigate("/dashboard");
    } catch (error) {
      setMessage("Login failed");
    }
  };

  return (
  <div className="login-container">
    <h1>Login</h1>

    <div className="login-form">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <button
        className="login-btn"
        onClick={handleSubmit}
      >
        Login
      </button>

      {message && (
        <p className="login-message">{message}</p>
      )}
    </div>
  </div>
);
}

export default Login;