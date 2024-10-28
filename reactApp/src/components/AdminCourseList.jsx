import React, { useEffect, useState } from "react";
import { getAllCourses, updateCourseStatus } from "../services/service";

const AdminCourseList = () => {
  const [courses, setCourses] = useState([]);

  // Obtener todos los cursos al montar el componente
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();
        setCourses(response.data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    fetchCourses();
  }, []);

  // Función para activar/desactivar el estado del curso
  const handleToggleStatus = async (courseId, currentStatus) => {
    const confirmAction = window.confirm(
      `¿Estás seguro de que quieres ${
        currentStatus ? "desactivar" : "activar"
      } este curso?`
    );
    if (!confirmAction) {
      return;
    }

    try {
      await updateCourseStatus(courseId, !currentStatus);
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === courseId
            ? { ...course, is_active: !currentStatus }
            : course
        )
      );
    } catch (error) {
      console.error("Error al actualizar el estado del curso:", error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Campus</th>
          <th>Nombre del Curso</th>
          <th>Código</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td>{course.campus_name}</td>
            <td>{course.name}</td>
            <td>{course.code}</td>
            <td>
              <button
                onClick={() => handleToggleStatus(course.id, course.is_active)}
                className={course.is_active ? "active-class" : "inactive-class"}
              >
                {course.is_active ? "Desactivar" : "Activar"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminCourseList;

// import React, { useEffect, useState } from "react";
// import { getAllCourses, updateCourseStatus } from "../services/service";

// const AdminCourseList = () => {
//   const [courses, setCourses] = useState([]);

//   // Obtener todos los cursos al montar el componente
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await getAllCourses();
//         setCourses(response.data);
//       } catch (error) {
//         console.error("Error al obtener los cursos:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   // Función para activar/desactivar el estado del curso
//   const handleToggleStatus = async (courseId, currentStatus) => {
//     const confirmAction = window.confirm(
//       `¿Estás seguro de que quieres ${
//         currentStatus ? "desactivar" : "activar"
//       } este curso?`
//     );
//     if (!confirmAction) {
//       return;
//     }

//     try {
//       await updateCourseStatus(courseId, !currentStatus);
//       setCourses((prevCourses) =>
//         prevCourses.map((course) =>
//           course.id === courseId
//             ? { ...course, is_active: !currentStatus }
//             : course
//         )
//       );
//     } catch (error) {
//       console.error("Error al actualizar el estado del curso:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Lista de Cursos Administrativa</h1>
//       {courses.length === 0 ? ( // Verificación para cursos vacíos
//         <p>No hay cursos disponibles.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Campus</th>
//               <th>Nombre del Curso</th>
//               <th>Código</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course) => (
//               <tr key={course.id}>
//                 <td>{course.campus_name}</td>
//                 <td>{course.name}</td>
//                 <td>{course.code}</td>
//                 <td>
//                   <button
//                     onClick={() =>
//                       handleToggleStatus(course.id, course.is_active)
//                     }
//                   >
//                     {course.is_active ? "Desactivar" : "Activar"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminCourseList;

// import React, { useEffect, useState } from "react";
// import { getAllCourses, updateCourseStatus } from "../services/service";

// const AdminCourseList = () => {
//   const [courses, setCourses] = useState([]);

//   // Obtener todos los cursos al montar el componente
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await getAllCourses();
//         // Filtrar solo los cursos activos
//         const activeCourses = response.data.filter(
//           (course) => course.is_active === 1
//         );
//         setCourses(activeCourses);
//       } catch (error) {
//         console.error("Error al obtener los cursos:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   // Función para activar/desactivar el estado del curso
//   const handleToggleStatus = async (courseId, currentStatus) => {
//     const confirmAction = window.confirm(
//       `¿Estás seguro de que quieres ${
//         currentStatus ? "desactivar" : "activar"
//       } este curso?`
//     );
//     if (!confirmAction) {
//       return;
//     }

//     try {
//       await updateCourseStatus(courseId, !currentStatus);
//       setCourses((prevCourses) =>
//         prevCourses.map((course) =>
//           course.id === courseId
//             ? { ...course, is_active: !currentStatus }
//             : course
//         )
//       );
//     } catch (error) {
//       console.error("Error al actualizar el estado del curso:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Lista de Cursos Administrativa</h1>
//       {courses.length === 0 ? ( // Verificación para cursos vacíos
//         <p>No hay cursos disponibles.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Campus</th>
//               <th>Nombre del Curso</th>
//               <th>Código</th>
//               <th>Acciones</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course) => (
//               <tr key={course.id}>
//                 <td>{course.campus_name}</td>
//                 <td>{course.name}</td>
//                 <td>{course.code}</td>
//                 <td>
//                   <button
//                     onClick={() =>
//                       handleToggleStatus(course.id, course.is_active)
//                     }
//                   >
//                     {course.is_active ? "Desactivar" : "Activar"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminCourseList;
