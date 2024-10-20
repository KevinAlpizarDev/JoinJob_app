// import axios from "axios";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000", // Asegúrate de que esta sea la URL correcta de tu backend
//   withCredentials: true,
// });

// // Funciones para la autenticación
// // export const getCurrentUser = () => {
// //   return client.get("/api/user/");
// // };
// export const getCurrentUser = () => {
//   const token = localStorage.getItem("accessToken");
//   return client.get("/api/user/", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const registerUser = (name, username, email, password1, password2) => {
//   return client.post("/api/register/", {
//     name,
//     username,
//     email,
//     password1,
//     password2,
//   });
// };

// export const loginUser = (email, password) => {
//   return client.post("/api/login/", { email, password });
// };

// // export const registerUser = (email, username, password) => {
// //   return client.post("/api/register/", { email, username, password });
// // };
// // export const registerUser = (email, username, password1, password2) => {
// //   return client.post("/api/register/", { email, username, password1, password2 });
// // };

// // . Incluir el token en las solicitudes protegidas:
// // Para asegurarte de que el token de acceso se envía en cada solicitud protegida, puedes modificar la configuración de Axios para que siempre envíe el accessToken en las solicitudes. Así, debes actualizar la función getAllCourses para enviar el token de autenticación:
// export const getAllCourses = () => {
//   const token = localStorage.getItem("accessToken"); // Obtener el token de acceso almacenado
//   return axios.get("http://localhost:8000/api/courses/", {
//     headers: {
//       Authorization: `Bearer ${token}`, // Enviar el token en los encabezados
//     },
//   });
// };

// // Función para agregar un curso nuevo
// export const addCourse = (courseData) => {
//   const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
//   return axios.post("http://localhost:8000/api/courses/", courseData, {
//     headers: {
//       Authorization: `Bearer ${token}`, // Incluir el token en los headers
//       "Content-Type": "application/json", // Asegurar que los datos se envían en formato JSON
//     },
//   });
// };

// // Función para agregar una nueva institución
// export const addInstitution = (institutionData) => {
//   const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
//   return axios.post(
//     "http://localhost:8000/api/institutions/",
//     institutionData,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`, // Incluir el token en los headers
//         "Content-Type": "application/json", // Asegurar que los datos se envían en formato JSON
//       },
//     }
//   );
// };
// //GET
// // import axios from "axios";

// // export const getInstitutions = () => {
// //   const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
// //   return axios.get("http://localhost:8000/api/institutions/", {
// //     headers: {
// //       Authorization: `Bearer ${token}`, // Incluir el token en los headers
// //       "Content-Type": "application/json",
// //     },
// //   });
// // };
// // Función para actualizar una institución
// // import axios from 'axios';

// // Función para obtener las instituciones
// export const getInstitutions = () => {
//   const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
//   return axios.get("http://localhost:8000/api/institutions/", {
//     headers: {
//       Authorization: `Bearer ${token}`, // Incluir el token en los headers
//       "Content-Type": "application/json",
//     },
//   });
// };

// // // Función para actualizar una institución
// // export const updateInstitutionStatus = (institutionId, isActive) => {
// //   const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
// //   return axios.put(
// //     `http://localhost:8000/api/institutions/${institutionId}/`,
// //     { is_active: isActive },
// //     {
// //       headers: {
// //         Authorization: `Bearer ${token}`, // Incluir el token en los headers
// //         "Content-Type": "application/json",
// //       },
// //     }
// //   );
// // };
// // Función para actualizar una institución (usando PUT, enviando todos los campos)
// export const updateInstitutionStatus = (institutionId, institutionData) => {
//   const token = localStorage.getItem("accessToken"); // Obtener el token de acceso
//   return axios.put(
//     `http://localhost:8000/api/institutions/${institutionId}/`,
//     institutionData, // Enviar todos los campos de la institución
//     {
//       headers: {
//         Authorization: `Bearer ${token}`, // Incluir el token en los headers
//         "Content-Type": "application/json",
//       },
//     }
//   );
// };

// const createEnrollment = async (enrollmentData, token) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:8000/api/enrollments/",
//       enrollmentData,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`, // Asegúrate de que el token esté aquí
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
import axios from "axios";

// Configuración inicial para manejar CSRF tokens y credenciales
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

// Crear un cliente Axios con la baseURL de tu backend
const client = axios.create({
  baseURL: "http://127.0.0.1:8000", // URL de tu backend
  withCredentials: true,
});

// Función para obtener el usuario actual con autenticación
export const getCurrentUser = () => {
  const token = localStorage.getItem("accessToken"); // Obtener el token del almacenamiento local
  return client.get("/api/user/", {
    headers: {
      Authorization: `Bearer ${token}`, // Enviar el token en los headers
    },
  });
};

// Función para registrar un nuevo usuario
export const registerUser = (name, username, email, password1, password2) => {
  return client.post("/api/register/", {
    name,
    username,
    email,
    password1,
    password2,
  });
};

// Función para iniciar sesión
export const loginUser = (email, password) => {
  return client.post("/api/login/", { email, password });
};

// Función para obtener todos los cursos con autenticación
export const getAllCourses = () => {
  const token = localStorage.getItem("accessToken");
  return axios.get("http://localhost:8000/api/courses/", {
    headers: {
      Authorization: `Bearer ${token}`,
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

export const updateCourseStatus = (courseId, isActive) => {
  const token = localStorage.getItem("accessToken");
  return axios.patch(
    `http://localhost:8000/api/courses/${courseId}/`,
    { is_active: isActive },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// Función para agregar una nueva institución
export const addInstitution = (institutionData) => {
  const token = localStorage.getItem("accessToken");
  return axios.post(
    "http://localhost:8000/api/institutions/",
    institutionData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// Función para obtener las instituciones
export const getInstitutions = () => {
  const token = localStorage.getItem("accessToken");
  return axios.get("http://localhost:8000/api/institutions/", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// Función para actualizar el estado de una institución
export const updateInstitutionStatus = (institutionId, institutionData) => {
  const token = localStorage.getItem("accessToken");
  return axios.put(
    `http://localhost:8000/api/institutions/${institutionId}/`,
    institutionData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// Función para crear una inscripción
export const createEnrollment = async (enrollmentData, token) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/enrollments/",
      enrollmentData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Función para obtener todas las inscripciones
export const getAllEnrollments = () => {
  const token = localStorage.getItem("accessToken");
  return axios.get("http://localhost:8000/api/enrollments/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Función para actualizar el estado de una inscripción
export const updateEnrollmentStatus = (enrollmentId, isActive) => {
  const token = localStorage.getItem("accessToken");
  return axios.put(
    `http://localhost:8000/api/enrollments/${enrollmentId}/`,
    { is_active: isActive },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
///////////campus
export const addCampus = async (campusData) => {
  const token = localStorage.getItem("accessToken"); // Obtener el token
  return await axios.post("http://localhost:8000/api/campuses/", campusData, {
    headers: {
      Authorization: `Bearer ${token}`, // Uso correcto del template literal
    },
  });
};

export const getAllCampuses = () => {
  const token = localStorage.getItem("accessToken"); // Obtener el token de acceso almacenado
  return axios.get("http://localhost:8000/api/campuses/", {
    headers: {
      Authorization: `Bearer ${token}`, // Enviar el token en los encabezados
      "Content-Type": "application/json",
    },
  });
};

export const updateCampusStatus = (campusId, isActive) => {
  const token = localStorage.getItem("accessToken");
  return axios.patch(
    `http://localhost:8000/api/campuses/${campusId}/`,
    { is_active: isActive },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};
