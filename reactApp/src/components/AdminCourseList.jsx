// import React, { useState, useEffect } from "react";
// import { getAllCourses, updateCourseStatus } from "../services/service";
// import CourseForm from "./CourseForm";

// const AdminCourseList = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editCourse, setEditCourse] = useState(null);

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
//       setError("No se pudo actualizar el estado del curso.");
//     }
//   };

//   const handleEditClick = (course) => {
//     setEditCourse(course);
//   };

//   const handleEditSubmit = () => {
//     setEditCourse(null);
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
//                   course.is_active
//                     ? "bg-red-500 hover:bg-red-400"
//                     : "bg-green-500 hover:bg-green-400"
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

import React, { useState, useEffect, useRef } from "react";
import { getAllCourses, updateCourseStatus } from "../services/service";
import CourseForm from "./CourseForm";

const AdminCourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const modalRef = useRef();

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
    if (!confirmAction) return;

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
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal();
    }
  };

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (selectedCourse) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedCourse]);

  if (loading) return <p>Cargando cursos...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (courses.length === 0) return <p>No hay cursos disponibles.</p>;

  return (
    <div className="relative flex flex-col rounded-extra-rounded bg-secundary-light dark:bg-secundary-dark shadow-sm border dark:border-none border-slate-200 w-full overflow-hidden">
      <nav className="flex rounded-extra-rounded flex-col gap-1 p-1.5 overflow-y-auto">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`flex justify-between items-center mt-1 rounded-standard ${
              course.is_active ? "text-white" : "bg-tertiary-dark text-white"
            }`}
          >
            <div
              className={`flex w-full items-center p-3 ${
                course.is_active
                  ? "dark:text-secundary-light text-secundary-dark"
                  : "text-white"
              }`}
            >
              {course.campus_name} - {course.name} - {course.code}
            </div>
            <button
              className={`px-3 py-1 text-sm rounded-extra-rounded text-white ${
                course.is_active
                  ? "bg-red-500 hover:bg-red-400"
                  : "bg-green-500 hover:bg-green-400"
              }`}
              onClick={() => handleToggleStatus(course.id, course.is_active)}
            >
              {course.is_active ? "Desactivar" : "Activar"}
            </button>
            <button
              className="px-3 py-1 ml-2 text-sm bg-blue-600 text-white rounded-extra-rounded hover:bg-blue-500"
              onClick={() => handleEditClick(course)}
            >
              Editar
            </button>
          </div>
        ))}
      </nav>

      {selectedCourse && (
        <div className="fixed dark:text-white inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md">
          <div
            ref={modalRef}
            className="w-[45%] p-6 rounded bg-primary-light dark:bg-secundary-dark"
          >
            <h3 className="text-lg font-bold mb-4">Editar Curso</h3>
            <CourseForm
              course={selectedCourse}
              onClose={handleCloseModal}
              onUpdate={(updatedCourse) => {
                setCourses((prev) =>
                  prev.map((course) =>
                    course.id === updatedCourse.id ? updatedCourse : course
                  )
                );
                handleCloseModal();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCourseList;
