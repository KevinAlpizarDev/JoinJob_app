// import React, { useState, useEffect } from "react";
// import { getAllEnrollments, updateEnrollmentStatus } from "../services/service";

// const EnrollmentList = () => {
//   const [enrollments, setEnrollments] = useState([]);

//   // Obtener las inscripciones al cargar el componente
//   useEffect(() => {
//     async function fetchEnrollments() {
//       try {
//         const response = await getAllEnrollments();
//         setEnrollments(response.data);
//       } catch (error) {
//         console.error("Error al cargar las inscripciones:", error);
//       }
//     }
//     fetchEnrollments();
//   }, []);

//   // Función para manejar el cambio de estado is_active
//   const handleStatusToggle = async (enrollmentId, isActive) => {
//     try {
//       await updateEnrollmentStatus(enrollmentId, !isActive); // Invertir el estado de is_active
//       setEnrollments((prevEnrollments) =>
//         prevEnrollments.map((enrollment) =>
//           enrollment.id === enrollmentId
//             ? { ...enrollment, is_active: !isActive }
//             : enrollment
//         )
//       );
//     } catch (error) {
//       console.error("Error al actualizar el estado de la inscripción:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Administración de Inscripciones</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Nombre del Usuario</th>
//             <th>Número de Identificación</th>
//             <th>Teléfono</th>
//             <th>Edad</th>
//             <th>Género</th>
//             <th>Curso</th>
//             <th>Activo</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {enrollments.map((enrollment) => (
//             <tr key={enrollment.id}>
//               <td>
//                 {enrollment.user
//                   ? `${enrollment.user.name} (${enrollment.user.username})`
//                   : "Desconocido"}
//               </td>
//               <td>{enrollment.id_number}</td>
//               <td>{enrollment.phone_number}</td>
//               <td>{enrollment.age}</td>
//               <td>{enrollment.gender}</td>
//               <td>
//                 {enrollment.course ? enrollment.course.name : "Sin curso"}
//               </td>
//               <td>{enrollment.is_active ? "Sí" : "No"}</td>
//               <td>
//                 <button
//                   onClick={() =>
//                     handleStatusToggle(enrollment.id, enrollment.is_active)
//                   }
//                 >
//                   {enrollment.is_active ? "Desactivar" : "Activar"}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EnrollmentList;
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
  const token = localStorage.getItem("accessToken");
  return axios.post("http://localhost:8000/api/courses/", courseData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json", // Asegura que los datos se envían en formato JSON
    },
  });
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
