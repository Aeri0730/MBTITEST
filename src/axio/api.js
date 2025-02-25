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
