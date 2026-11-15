import axios from "axios";

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api/auth";

const storage =
  typeof window !== "undefined" ? window.localStorage : null;

export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/register`,
    userData
  );

  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login`,
    userData
  );

  const payload = response.data || {};

  if (storage && payload.token) {
    storage.setItem("token", payload.token);
  }

  if (storage && payload.user) {
    storage.setItem("user", JSON.stringify(payload.user));
  }

  return payload;
};