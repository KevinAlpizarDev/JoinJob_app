import React, { useState, useEffect, useRef } from "react";
import Alert from "./main/Alert";
import { getEnrollments, updateEnrollmentStatus } from "../services/service";

const EnrollmentList = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);

  // Estados para controlar las alertas
  const [alert, setAlert] = useState({
    visible: false,
    type: "",
    title: "",
    message: "",
  });

  const modalRef = useRef();

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

      // Actualizar la lista de inscripciones
      setEnrollments(
        enrollments.map((e) => (e.id === enrollmentId ? updatedData : e))
      );

      // Mostrar alerta de éxito
      setAlert({
        visible: true,
        type: "success",
        title: "Éxito",
        message: "El estado de la inscripción se actualizó correctamente.",
      });
    } catch (error) {
      console.error("Error al actualizar el estado de la inscripción:", error);

      // Mostrar alerta de error
      setAlert({
        visible: true,
        type: "error",
        title: "Error",
        message: "No se pudo actualizar el estado de la inscripción.",
      });
    }
  };

  const handleEditEnrollment = (enrollment) => {
    setSelectedEnrollment(enrollment);
  };

  const handleCloseModal = () => {
    setSelectedEnrollment(null);
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
    if (selectedEnrollment) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedEnrollment]);

  if (loading) return <p>Cargando inscripciones...</p>;
  if (error)
    return (
      <p className="flex justify-center items-center text-center text-red-500">
        {error}
      </p>
    );
  if (enrollments.length === 0) return <p>No hay inscripciones disponibles.</p>;

  return (
    <div className="relative flex flex-col rounded-extra-rounded bg-secundary-light dark:bg-secundary-dark shadow-sm border dark:border-none border-slate-200 w-full overflow-hidden">
      <nav className="flex rounded-extra-rounded flex-col gap-1 p-1.5 overflow-y-auto">
        {enrollments.map((enrollment) => (
          <div
            key={enrollment.id}
            className={`flex justify-between items-center mt-1 rounded-standard ${
              enrollment.is_active
                ? "text-white"
                : "bg-tertiary-dark text-white"
            }`}
          >
            <div
              role="button"
              className={`flex w-full items-center p-3 ${
                enrollment.is_active
                  ? "dark:text-secundary-light text-secundary-dark"
                  : "text-white"
              }`}
            >
              {enrollment.user_name} - {enrollment.id_number} -{" "}
              {enrollment.phone_number} - {enrollment.age} años -{" "}
              {enrollment.gender} - {enrollment.course_name}
            </div>
            <button
              className={`px-3 py-1 text-sm rounded-extra-rounded text-white ${
                enrollment.is_active
                  ? "bg-red-500 hover:bg-red-400"
                  : "bg-green-500 hover:bg-green-400"
              }`}
              onClick={() => toggleActiveStatus(enrollment.id)}
            >
              {enrollment.is_active ? "Desactivar" : "Activar"}
            </button>
            <button
              className="px-3 py-1 ml-2 text-sm bg-blue-600 text-white rounded-extra-rounded hover:bg-blue-500"
              onClick={() => handleEditEnrollment(enrollment)}
            >
              Editar
            </button>
          </div>
        ))}
      </nav>

      {selectedEnrollment && (
        <div className="fixed dark:text-white inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md">
          <div
            ref={modalRef}
            className="w-[45%] p-6 rounded bg-primary-light dark:bg-secundary-dark"
          >
            <h3 className="text-lg font-bold mb-4">Editar Inscripción</h3>
            {/* Aquí puedes incluir el formulario de edición de inscripción */}
          </div>
        </div>
      )}

      {/* Renderizar la alerta si es visible */}
      {alert.visible && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={() => setAlert({ ...alert, visible: false })}
        />
      )}
    </div>
  );
};

export default EnrollmentList;
