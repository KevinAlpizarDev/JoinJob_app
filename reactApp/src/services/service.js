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

// Nueva función para obtener los cursos
// export const getCursos = () => {
//   return client.get("/api/cursos/");
// };
// export const getCourses = () => {
//   return axios.get("/api/cursos/", {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`, // o donde guardes el token
//     },
//   });
// };
// services/service.js
// export const getCourses = () => {
//   return client.get("/api/courses/", { // Cambié "/api/cursos/" a "/api/courses/"
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`, // o donde guardes el token
//     },
//   });
// };
/////////////////////////////inlove
export const getCursos = () => {
  return client.get("/api/cursos/"); // Asegúrate de que esta ruta sea correcta
};
