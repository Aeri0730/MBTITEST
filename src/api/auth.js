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

export const getUserProfile = async () => {
  const response = await authApi.get("/user");
  return response.data;
};

export const updateProfile = async (profileData) => {
  const formData = new FormData();
  if (profileData.nickname) {
    formData.append("nickname", profileData.nickname);
  }

  const response = await authApi.patch("/profile", formData, {
    headers: {
     "Content-Type": "application/json", //text만 보내줄땐 "application/json"
    },
  });

  return response.data;
};
