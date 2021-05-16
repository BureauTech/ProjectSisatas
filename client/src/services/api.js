import axios from "axios";

export const baseURL = "http://localhost:8080";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": `*`,
  },
});

export default api;
