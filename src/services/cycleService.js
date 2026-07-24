import axios from "axios";

const API_URL = "http://localhost:5000/api/cycles";

export const createCycle = async (cycleData) => {
  const token = localStorage.getItem("token");

  const response = await axios.post(
    API_URL,
    cycleData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getMyCycles = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(
    API_URL,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};