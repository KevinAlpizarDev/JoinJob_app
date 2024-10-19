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

// export const registerUser = (email, username, password) => {
//   return client.post("/api/register/", { email, username, password });
// };
// export const registerUser = (email, username, password1, password2) => {
//   return client.post("/api/register/", { email, username, password1, password2 });
// };

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

// Función para agregar un curso nuevo
export const addCourse = (courseData) => {
  const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
  return axios.post("http://localhost:8000/api/courses/", courseData, {
    headers: {
      Authorization: `Bearer ${token}`, // Incluir el token en los headers
      "Content-Type": "application/json", // Asegurar que los datos se envían en formato JSON
    },
  });
};

// Función para agregar una nueva institución
export const addInstitution = (institutionData) => {
  const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
  return axios.post(
    "http://localhost:8000/api/institutions/",
    institutionData,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Incluir el token en los headers
        "Content-Type": "application/json", // Asegurar que los datos se envían en formato JSON
      },
    }
  );
};
//GET
// import axios from "axios";

// export const getInstitutions = () => {
//   const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
//   return axios.get("http://localhost:8000/api/institutions/", {
//     headers: {
//       Authorization: `Bearer ${token}`, // Incluir el token en los headers
//       "Content-Type": "application/json",
//     },
//   });
// };
// Función para actualizar una institución
// import axios from 'axios';

// Función para obtener las instituciones
export const getInstitutions = () => {
  const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
  return axios.get("http://localhost:8000/api/institutions/", {
    headers: {
      Authorization: `Bearer ${token}`, // Incluir el token en los headers
      "Content-Type": "application/json",
    },
  });
};

// // Función para actualizar una institución
// export const updateInstitutionStatus = (institutionId, isActive) => {
//   const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
//   return axios.put(
//     `http://localhost:8000/api/institutions/${institutionId}/`, 
//     { is_active: isActive },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`, // Incluir el token en los headers
//         "Content-Type": "application/json",
//       },
//     }
//   );
// };
// Función para actualizar una institución (usando PUT, enviando todos los campos)
export const updateInstitutionStatus = (institutionId, institutionData) => {
  const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
  return axios.put(
    `http://localhost:8000/api/institutions/${institutionId}/`, 
    institutionData, // Enviar todos los campos de la institución
    {
      headers: {
        Authorization: `Bearer ${token}`, // Incluir el token en los headers
        "Content-Type": "application/json",
      },
    }
  );
};
