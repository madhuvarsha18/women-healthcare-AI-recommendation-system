import axios from "axios";

const API_URL =
  "http://localhost:5000/api/prediction";

export const predictCondition =
  async (data) => {
    const response = await axios.post(
      `${API_URL}/predict`,
      data
    );

    return response.data;
  };