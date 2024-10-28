import React, { useState, useEffect } from "react";
import { createEnrollment, getAllCourses } from "../services/service";

const EnrollmentForm = () => {
  const [enrollmentData, setEnrollmentData] = useState({
    id_number: "",
    phone_number: "",
    age: "",
    gender: "male",
    course: "",
    is_active: true,
  });

  const [courses, setCourses] = useState([]);

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

  const handleChange = (e) => {
    setEnrollmentData({
      ...enrollmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEnrollment(enrollmentData);
      alert("Inscripción creada exitosamente");
      // Opcional: Reiniciar formulario
      setEnrollmentData({
        id_number: "",
        phone_number: "",
        age: "",
        gender: "male",
        course: "",
        is_active: true,
      });
    } catch (error) {
      alert("Hubo un error al crear la inscripción");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id_number"
        placeholder="Número de Identificación"
        value={enrollmentData.id_number}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone_number"
        placeholder="Teléfono"
        value={enrollmentData.phone_number}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Edad"
        value={enrollmentData.age}
        onChange={handleChange}
        required
      />
      <select
        name="gender"
        value={enrollmentData.gender}
        onChange={handleChange}
      >
        <option value="male">Masculino</option>
        <option value="female">Femenino</option>
      </select>
      <select
        name="course"
        value={enrollmentData.course}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Selecciona un curso
        </option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
      <button type="submit">Crear Inscripción</button>
    </form>
  );
};

export default EnrollmentForm;

