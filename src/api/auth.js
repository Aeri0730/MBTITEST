import axios from "axios";
import { authApi } from "../axio/api";

export const register = async (userData) => {
  const response = await authApi.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await authApi.post("/login", userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await authApi.get("/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateProfile = async (token, formData) => {
  const profileHeader = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await authApi.patch("/profile", formData, profileHeader);
  return response.data;
};
