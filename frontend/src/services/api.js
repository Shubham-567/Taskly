import axios from "axios";

// base api instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// automatically add jwt token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
