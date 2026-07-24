import api from "./api";

export const getLatestAssessment = async () => {
  const response = await api.get("/assessment/latest");
  return response.data;
};

export const getAssessmentHistory = async () => {
  const response = await api.get("/assessment/history");
  return response.data;
};