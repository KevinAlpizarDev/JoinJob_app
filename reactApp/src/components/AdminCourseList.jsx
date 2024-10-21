
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
    <div>
      <div>
        <h1>Administración de Cursos</h1>
        <div>
          {courses.map((course) => (
            <div key={course.id}>
              <div>
                <h2>{course.name}</h2>

                <div>
                  <span>Código</span>
                  {course.code}
                </div>
              </div>
              <div>Campus ID: {course.campus}</div>
              <div>
                <span>Estado: {course.is_active ? "Activo" : "Inactivo"}</span>
                <button
                  onClick={() =>
                    handleToggleActive(course.id, course.is_active)
                  }
                >
                  {course.is_active ? "Desactivar" : "Activar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCourseList;
