import React, { useEffect, useState } from "react";
import { getAllCourses, updateCourseStatus } from "../services/service";

const AdminCourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener todos los cursos al montar el componente
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

  // Función para activar/desactivar el estado del curso
  const handleToggleStatus = async (courseId, currentStatus) => {
    const confirmAction = window.confirm(
      `¿Estás seguro de que quieres ${currentStatus ? "desactivar" : "activar"} este curso?`
    );
    if (!confirmAction) {
      return;
    }

    try {
      await updateCourseStatus(courseId, !currentStatus);
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === courseId ? { ...course, is_active: !currentStatus } : course
        )
      );
    } catch (error) {
      console.error("Error al actualizar el estado del curso:", error);
      setError("No se pudo actualizar el estado del curso.");
    }
  };

  if (loading) {
    return <p>Cargando cursos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
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
                  course.is_active ? "bg-red-500 hover:bg-red-400" : "bg-green-500 hover:bg-green-400"
                }`}
                onClick={() => handleToggleStatus(course.id, course.is_active)}
              >
                {course.is_active ? "Desactivar" : "Activar"}
              </button>
            </div>
          ))
        )}
      </nav>
    </div>
  );
};

export default AdminCourseList;
