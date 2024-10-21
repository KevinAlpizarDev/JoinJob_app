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

import React, { useState, useEffect } from "react";
import { getAllEnrollments, updateEnrollmentStatus } from "../services/service";

const EnrollmentList = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function fetchEnrollments() {
      try {
        const response = await getAllEnrollments();
        setEnrollments(response.data);
      } catch (error) {
        console.error("Error al cargar las inscripciones:", error);
      }
    }
    fetchEnrollments();
  }, []);

  const handleStatusToggle = async (enrollmentId, isActive) => {
    try {
      await updateEnrollmentStatus(enrollmentId, !isActive);
      setEnrollments((prevEnrollments) =>
        prevEnrollments.map((enrollment) =>
          enrollment.id === enrollmentId
            ? { ...enrollment, is_active: !isActive }
            : enrollment
        )
      );
    } catch (error) {
      console.error("Error al actualizar el estado de la inscripción:", error);
    }
  };

  return (
    <div>
      <h1>Administración de Inscripciones</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre del Usuario</th>
            <th>Número de Identificación</th>
            <th>Teléfono</th>
            <th>Edad</th>
            <th>Género</th>
            <th>Curso</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((enrollment, index) => (
            <tr key={`${enrollment.id}-${index}`}>
              <td>
                {enrollment.user
                  ? `${enrollment.user.name} (${enrollment.user.username})`
                  : "Desconocido"}
              </td>
              <td>{enrollment.id_number}</td>
              <td>{enrollment.phone_number}</td>
              <td>{enrollment.age}</td>
              <td>{enrollment.gender}</td>
              <td>
                {enrollment.course ? enrollment.course.name : "Sin curso"}
              </td>
              <td>{enrollment.is_active ? "Sí" : "No"}</td>
              <td>
                <button
                  onClick={() =>
                    handleStatusToggle(enrollment.id, enrollment.is_active)
                  }
                >
                  {enrollment.is_active ? "Desactivar" : "Activar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollmentList;
