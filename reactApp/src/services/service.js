// services/service.js
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000", // Ensure this is the correct backend URL
  withCredentials: true,
});

export const getCurrentUser = () => {
  return client.get("/api/user/");
};

export const registerUser = (email, username, password) => {
  return client.post("/api/register/", { email, username, password });
};

export const loginUser = (email, password) => {
  return client.post("/api/login/", { email, password });
};

export const logoutUser = () => {
  return client.post("/api/logout/");
};
