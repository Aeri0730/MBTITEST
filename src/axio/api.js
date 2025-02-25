// src > axios > api.js
import axios from "axios";
const BASE_URL_AUTH = import.meta.env.VITE_AUTH_API_URL;
const BASE_URL_JSON = import.meta.env.VITE_JSON_API_URL;
const API_URL = BASE_URL_JSON + "/testResults";

export const authApi = axios.create({
  baseURL: BASE_URL_AUTH,
});
export const jsonApi = axios.create({
  baseURL: API_URL,
});

authApi.interceptors.request.use(
  (config) => {
    const {
      state: { token, user },
    } = JSON.parse(localStorage.getItem("now-user-storage"));
    console.log("Interceptor Token:", token); // 디버깅용 콘솔 출력
    if (user && token) {
      // Authorization 헤더에 토큰 추가
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// jsonApi.interceptors.response.use();
