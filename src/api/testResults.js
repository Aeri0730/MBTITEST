import axios from "axios";

const API_URL = import.meta.env.VITE_JSON_API_URL;

export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  console.log(response);
  return response.data;
};
export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};
export const updateTestResultVisibility = async (props) => {
  const response = await axios.patch(`${API_URL}/${props.id}`, {
    visibility: props.visibility,
  });
  return response.data;
};
export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
