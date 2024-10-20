import React, { useState, useEffect } from "react";
import { getAllCourses, updateCourseStatus } from "../services/service";

const AdminCourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Cargar los cursos al montar el componente
    const loadCourses = async () => {
      try {
        const res = await getAllCourses();
        setCourses(res.data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    loadCourses();
  }, []);

  const handleToggleActive = async (courseId, isActive) => {
    try {
      // Actualizar el estado de is_active
      await updateCourseStatus(courseId, !isActive);
      // Refrescar la lista de cursos
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === courseId ? { ...course, is_active: !isActive } : course
        )
      );
    } catch (error) {
      console.error("Error al actualizar el estado del curso:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700">
      <div className="w-full max-w-5xl px-4 py-6">
        <h1 className="text-3xl font-extrabold mb-4 text-blue-500 text-center">
          Administración de Cursos
        </h1>
        <div className="space-y-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer w-full"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-medium text-gray-900">
                    {course.name}
                  </h2>

                  <div className="text-sm text-gray-500">
                    <span className="block font-semibold text-gray-700">
                      Código
                    </span>
                    {course.code}
                  </div>
                </div>
                <div className="text-sm text-gray-600 my-2">
                  Campus ID: {course.campus}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">
                    Estado: {course.is_active ? "Activo" : "Inactivo"}
                  </span>
                  <button
                    className={`px-4 py-2 rounded ${
                      course.is_active ? "bg-red-500" : "bg-green-500"
                    } text-white`}
                    onClick={() =>
                      handleToggleActive(course.id, course.is_active)
                    }
                  >
                    {course.is_active ? "Desactivar" : "Activar"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCourseList;
