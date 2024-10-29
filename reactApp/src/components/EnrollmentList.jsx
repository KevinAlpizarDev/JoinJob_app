// import React, { useState, useEffect } from "react";
// import { getEnrollments, updateEnrollmentStatus } from "../services/service";

// const EnrollmentList = () => {
//   const [enrollments, setEnrollments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEnrollments = async () => {
//       try {
//         const response = await getEnrollments();
//         setEnrollments(response);
//       } catch (error) {
//         console.error("Error al obtener las inscripciones:", error);
//         setError("Hubo un error al obtener las inscripciones.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEnrollments();
//   }, []);

//   const toggleActiveStatus = async (enrollmentId) => {
//     const confirmAction = window.confirm(
//       "¿Estás seguro de que deseas cambiar el estado de esta inscripción?"
//     );
//     if (!confirmAction) return;

//     try {
//       const enrollment = enrollments.find((e) => e.id === enrollmentId);
//       const updatedData = {
//         ...enrollment,
//         is_active: !enrollment.is_active,
//       };

//       await updateEnrollmentStatus(enrollmentId, updatedData);

//       setEnrollments(
//         enrollments.map((e) => (e.id === enrollmentId ? updatedData : e))
//       );
//     } catch (error) {
//       console.error("Error al actualizar el estado de la inscripción:", error);
//     }
//   };

//   if (loading) {
//     return <p>Cargando inscripciones...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       <h2>Listado de Inscripciones</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Nombre del Usuario</th>
//             <th>Número de Identificación</th>
//             <th>Teléfono</th>
//             <th>Edad</th>
//             <th>Género</th>
//             <th>Curso</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {enrollments.map((enrollment) => (
//             <tr
//               key={enrollment.id}
//               className={enrollment.is_active ? "active-row" : "inactive-row"}
//             >
//               <td>{enrollment.user_name}</td>
//               <td>{enrollment.id_number}</td>
//               <td>{enrollment.phone_number}</td>
//               <td>{enrollment.age}</td>
//               <td>{enrollment.gender}</td>
//               <td>{enrollment.course_name}</td>
//               <td>
//                 <button onClick={() => toggleActiveStatus(enrollment.id)}>
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
import { getEnrollments, updateEnrollmentStatus } from "../services/service";

const EnrollmentList = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const response = await getEnrollments();
        setEnrollments(response);
      } catch (error) {
        console.error("Error al obtener las inscripciones:", error);
        setError("Hubo un error al obtener las inscripciones.");
      } finally {
        setLoading(false);
      }
    };
    fetchEnrollments();
  }, []);

  const toggleActiveStatus = async (enrollmentId) => {
    const confirmAction = window.confirm(
      "¿Estás seguro de que deseas cambiar el estado de esta inscripción?"
    );
    if (!confirmAction) return;

    try {
      const enrollment = enrollments.find((e) => e.id === enrollmentId);
      const updatedData = {
        ...enrollment,
        is_active: !enrollment.is_active,
      };

      await updateEnrollmentStatus(enrollmentId, updatedData);

      setEnrollments(
        enrollments.map((e) => (e.id === enrollmentId ? updatedData : e))
      );
    } catch (error) {
      console.error("Error al actualizar el estado de la inscripción:", error);
    }
  };

  if (loading) {
    return <p>Cargando inscripciones...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (enrollments.length === 0) {
    return <p>No hay inscripciones disponibles.</p>;
  }

  return (
    <div>
      <h2>Listado de Inscripciones</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del Usuario</th>
            <th>Número de Identificación</th>
            <th>Teléfono</th>
            <th>Edad</th>
            <th>Género</th>
            <th>Curso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((enrollment) => (
            <tr key={enrollment.id}>
              <td>{enrollment.user_name}</td>
              <td>{enrollment.id_number}</td>
              <td>{enrollment.phone_number}</td>
              <td>{enrollment.age}</td>
              <td>{enrollment.gender}</td>
              <td>{enrollment.course_name}</td>
              <td>
                <button onClick={() => toggleActiveStatus(enrollment.id)}>
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
