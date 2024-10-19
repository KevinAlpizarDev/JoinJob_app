// // services/service.js
// import axios from "axios";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000", // Ensure this is the correct backend URL
//   withCredentials: true,
// });

// export const getCurrentUser = () => {
//   return client.get("/api/user/");
// };

// export const registerUser = (email, username, password) => {
//   return client.post("/api/register/", { email, username, password });
// };

// export const loginUser = (email, password) => {
//   return client.post("/api/login/", { email, password });
// };

// export const logoutUser = () => {
//   return client.post("/api/logout/");
// };

// //////////////
// export const getAllCourses = () => {
//   return axios.get("http://localhost:8000/api/courses/");
// };

import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000", // Asegúrate de que esta sea la URL correcta de tu backend
  withCredentials: true,
});

// Funciones para la autenticación
// export const getCurrentUser = () => {
//   return client.get("/api/user/");
// };
export const getCurrentUser = () => {
  const token = localStorage.getItem("accessToken");
  return client.get("/api/user/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


// export const getCurrentUser = async () => {
//   try {
//     const token = localStorage.getItem("accessToken"); // Obtener el token desde el almacenamiento local
//     if (!token) {
//       throw new Error("No token found");
//     }
    
//     const response = await client.get("/api/user/", {
//       headers: {
//         Authorization: `Bearer ${token}`, // Enviar el token en los encabezados
//       },
//     });
//     console.log(response.data); // Ver qué datos trae la respuesta
//     return response;
//   } catch (error) {
//     console.error("Error al obtener el usuario:", error);
//     throw error;
//   }
// };













// export const registerUser = (email, username, password) => {
//   return client.post("/api/register/", { email, username, password });
// };
// export const registerUser = (email, username, password1, password2) => {
//   return client.post("/api/register/", { email, username, password1, password2 });
// };
export const registerUser = (name, username, email, password1, password2) => {
  return client.post("/api/register/", {
    name,
    username,
    email,
    password1,
    password2,
  });
};

export const loginUser = (email, password) => {
  return client.post("/api/login/", { email, password });
};

export const logoutUser = (refreshToken) => {
  return client.post("/api/logout/", { refresh: refreshToken });
};

// . Incluir el token en las solicitudes protegidas:
// Para asegurarte de que el token de acceso se envía en cada solicitud protegida, puedes modificar la configuración de Axios para que siempre envíe el accessToken en las solicitudes. Así, debes actualizar la función getAllCourses para enviar el token de autenticación:
export const getAllCourses = () => {
  const token = localStorage.getItem("accessToken"); // Obtener el token de acceso almacenado
  return axios.get("http://localhost:8000/api/courses/", {
    headers: {
      Authorization: `Bearer ${token}`, // Enviar el token en los encabezados
    },
  });
};
