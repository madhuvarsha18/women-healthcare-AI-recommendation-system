import axios from "axios";

const API_URL =
  "http://localhost:5000/api/checkins";

export const createCheckIn = async (
  checkInData
) => {
  const token =
  localStorage.getItem("token");

const response = await axios.post(
  API_URL,
  checkInData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

  return response.data;
};

export const getAllCheckIns = async () => {
  const token =
    localStorage.getItem("token");

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