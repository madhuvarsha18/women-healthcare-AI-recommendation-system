import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/register.css";
function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    language: "English",
    healthGoal: "",
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
      await registerUser(formData);
        console.log(formData);
      navigate("/login");
    }catch (error) {
  console.log("REGISTER ERROR:", error);
  console.log("RESPONSE:", error.response?.data);

  setMessage(
    error.response?.data?.message ||
    error.message
  );
}
  };

  return (
  <div className="register-container">
    <h1>Register</h1>

    <div className="register-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

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

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />

      <input
        type="text"
        name="language"
        placeholder="Language"
        value={formData.language}
        onChange={handleChange}
      />

      <input
        type="text"
        name="healthGoal"
        placeholder="Health Goal"
        value={formData.healthGoal}
        onChange={handleChange}
      />

      <button className="register-btn" onClick={handleSubmit}>
        Register
      </button>

      {message && <p className="register-message">{message}</p>}
    </div>
  </div>
);
}

export default Register;