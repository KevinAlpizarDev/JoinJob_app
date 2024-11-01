// import React, { useState, useEffect } from "react";
// import { getAllCourses, updateCourseStatus } from "../services/service";
// import CourseForm from "./CourseForm"; // Asegúrate de tener un componente CourseForm para editar

// const AdminCourseList = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editCourse, setEditCourse] = useState(null); // Para manejar la edición de cursos

//   // Obtener todos los cursos al montar el componente
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await getAllCourses();
//         setCourses(response.data);
//       } catch (error) {
//         console.error("Error al obtener los cursos:", error);
//         setError("Hubo un error al cargar los cursos.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   // Función para activar/desactivar el estado del curso
//   const handleToggleStatus = async (courseId, currentStatus) => {
//     const confirmAction = window.confirm(
//       `¿Estás seguro de que quieres ${currentStatus ? "desactivar" : "activar"} este curso?`
//     );
//     if (!confirmAction) {
//       return;
//     }

//     try {
//       await updateCourseStatus(courseId, !currentStatus);
//       setCourses((prevCourses) =>
//         prevCourses.map((course) =>
//           course.id === courseId ? { ...course, is_active: !currentStatus } : course
//         )
//       );
//     } catch (error) {
//       console.error("Error al actualizar el estado del curso:", error);
//       setError("No se pudo actualizar el estado del curso.");
//     }
//   };

//   const handleEditClick = (course) => {
//     setEditCourse(course); // Establece el curso a editar
//   };

//   const handleEditSubmit = () => {
//     setEditCourse(null);
//     // Refresca la lista de cursos después de la edición
//     getAllCourses().then((response) => setCourses(response.data));
//   };

//   const handleCloseModal = () => {
//     setEditCourse(null);
//   };

//   if (loading) {
//     return <p>Cargando cursos...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500">{error}</p>;
//   }

//   return (
//     <div className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200 w-full overflow-hidden">
//       <nav className="flex flex-col gap-1 p-1.5 overflow-y-auto">
//         {courses.length === 0 ? (
//           <p>No hay cursos disponibles.</p>
//         ) : (
//           courses.map((course) => (
//             <div
//               key={course.id}
//               className={`flex justify-between items-center mt-1 rounded-md transition-all ${
//                 course.is_active ? "hover:bg-slate-100" : "bg-gray-200"
//               }`}
//             >
//               <div
//                 className={`flex w-full items-center p-3 transition-all ${
//                   course.is_active ? "text-slate-800" : "text-slate-500"
//                 }`}
//               >
//                 {course.campus_name} - {course.name} - {course.code}
//               </div>
//               <button
//                 className={`px-3 py-1 text-sm rounded-md text-white transition-all ${
//                   course.is_active ? "bg-red-500 hover:bg-red-400" : "bg-green-500 hover:bg-green-400"
//                 }`}
//                 onClick={() => handleToggleStatus(course.id, course.is_active)}
//               >
//                 {course.is_active ? "Desactivar" : "Activar"}
//               </button>
//               <button
//                 className="px-3 py-1 ml-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-500"
//                 onClick={() => handleEditClick(course)}
//               >
//                 Editar
//               </button>
//             </div>
//           ))
//         )}
//       </nav>

//       {editCourse && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-md w-96">
//             <h3 className="text-lg font-bold mb-4">Editar Curso</h3>
//             <CourseForm
//               course={editCourse}
//               onSubmit={handleEditSubmit}
//               onClose={handleCloseModal}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminCourseList;


import React, { useState, useEffect } from "react";
import { getAllCourses, updateCourseStatus } from "../services/service";
import CourseForm from "./CourseForm";

const AdminCourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editCourse, setEditCourse] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();
        setCourses(response.data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
        setError("Hubo un error al cargar los cursos.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

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
      setError("No se pudo actualizar el estado del curso.");
    }
  };

  const handleEditClick = (course) => {
    setEditCourse(course);
  };

  const handleEditSubmit = () => {
    setEditCourse(null);
    getAllCourses().then((response) => setCourses(response.data));
  };

  const handleCloseModal = () => {
    setEditCourse(null);
  };

  if (loading) {
    return <p>Cargando cursos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200 w-full overflow-hidden">
      <nav className="flex flex-col gap-1 p-1.5 overflow-y-auto">
        {courses.length === 0 ? (
          <p>No hay cursos disponibles.</p>
        ) : (
          courses.map((course) => (
            <div
              key={course.id}
              className={`flex justify-between items-center mt-1 rounded-md transition-all ${
                course.is_active ? "hover:bg-slate-100" : "bg-gray-200"
              }`}
            >
              <div
                className={`flex w-full items-center p-3 transition-all ${
                  course.is_active ? "text-slate-800" : "text-slate-500"
                }`}
              >
                {course.campus_name} - {course.name} - {course.code}
              </div>
              <button
                className={`px-3 py-1 text-sm rounded-md text-white transition-all ${
                  course.is_active
                    ? "bg-red-500 hover:bg-red-400"
                    : "bg-green-500 hover:bg-green-400"
                }`}
                onClick={() => handleToggleStatus(course.id, course.is_active)}
              >
                {course.is_active ? "Desactivar" : "Activar"}
              </button>
              <button
                className="px-3 py-1 ml-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-500"
                onClick={() => handleEditClick(course)}
              >
                Editar
              </button>
            </div>
          ))
        )}
      </nav>

      {editCourse && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h3 className="text-lg font-bold mb-4">Editar Curso</h3>
            <CourseForm
              course={editCourse}
              onSubmit={handleEditSubmit}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCourseList;
