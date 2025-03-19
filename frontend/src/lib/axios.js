import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-ec4f.onrender.com" : "/api",
  withCredentials: true,
});
