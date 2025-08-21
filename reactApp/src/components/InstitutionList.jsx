import React, { useState, useEffect, useRef } from "react";
import { getInstitutions, updateInstitutionStatus } from "../services/service";
import InstitutionForm from "./InstitutionForm";
import Alert from "../components/main/Alert"; // Importa el componente Alert

const InstitutionList = () => {
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // Nuevo estado para el mensaje de éxito
  const [editInstitution, setEditInstitution] = useState(null);

  const modalRef = useRef();

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await getInstitutions();
        setInstitutions(response.data);
      } catch (error) {
        console.error("Error al obtener las instituciones:", error);
        setError("Hubo un error al obtener las instituciones.");
      } finally {
        setLoading(false);
      }
    };

    fetchInstitutions();
  }, []);

  const toggleActiveStatus = async (institutionId) => {
    const confirmAction = window.confirm(
      "¿Estás seguro de que deseas cambiar el estado de esta institución?"
    );
    if (!confirmAction) return;

    try {
      const institution = institutions.find((i) => i.id === institutionId);
      const updatedData = {
        name: institution.name,
        phone_number: institution.phone_number,
        is_active: !institution.is_active,
      };

      await updateInstitutionStatus(institutionId, updatedData);

      setInstitutions((prevInstitutions) =>
        prevInstitutions.map((i) =>
          i.id === institutionId ? { ...institution, ...updatedData } : i
        )
      );
      setSuccessMessage(
        `Institución ${institution.name} actualizada con éxito.`
      ); // Mensaje de éxito
      setError(null); // Limpiar el mensaje de error si hay éxito
    } catch (error) {
      console.error(
        "Error al actualizar el estado de la institución:",
        error.response?.data || error
      );
      setError(`No se pudo actualizar la institución ${institutionId}.`);
      setSuccessMessage(null); // Limpiar el mensaje de éxito si hay error
    }
  };

  const handleEditClick = (institution) => {
    setEditInstitution(institution);
  };

  const handleEditSubmit = () => {
    setEditInstitution(null);
    getInstitutions().then((response) => setInstitutions(response.data));
    setSuccessMessage("Institución editada con éxito."); // Mensaje de éxito para edición
    setError(null); // Limpiar el mensaje de error si hay éxito
  };

  const handleCloseModal = () => {
    setEditInstitution(null);
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
    if (editInstitution) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [editInstitution]);

  if (loading) return <p>Cargando instituciones...</p>;
  if (error)
    return (
      <Alert type="error" message={error} onClose={() => setError(null)} />
    );
  if (institutions.length === 0)
    return <p>No hay instituciones disponibles.</p>;

  return (
    <div className="relative flex flex-col rounded-extra-rounded bg-secundary-light dark:bg-secundary-dark shadow-sm border dark:border-none border-slate-200 w-full overflow-hidden">
      <nav className="flex rounded-extra-rounded flex-col gap-1 p-1.5 overflow-y-auto">
        {institutions.map((institution) => (
          <div
            key={institution.id}
            className={`flex justify-between items-center mt-1 rounded-standard ${
              institution.is_active
                ? "text-white"
                : "bg-tertiary-dark text-white"
            }`}
          >
            <div
              role="button"
              className={`flex w-full items-center p-3 ${
                institution.is_active
                  ? "dark:text-secundary-light text-secundary-dark"
                  : "text-white"
              }`}
            >
              {institution.name} - {institution.type} -{" "}
              {institution.phone_number}
            </div>
            <button
              className={`px-3 py-1 text-sm rounded-extra-rounded text-white ${
                institution.is_active
                  ? "bg-red-500 hover:bg-red-400"
                  : "bg-green-500 hover:bg-green-400"
              }`}
              onClick={() => toggleActiveStatus(institution.id)}
            >
              {institution.is_active ? "Desactivar" : "Activar"}
            </button>
            <button
              className="px-3 py-1 ml-2 text-sm bg-blue-600 text-white rounded-extra-rounded hover:bg-blue-500"
              onClick={() => handleEditClick(institution)}
            >
              Editar
            </button>
          </div>
        ))}
      </nav>
      {successMessage && (
        <Alert
          type="success"
          message={successMessage}
          onClose={() => setSuccessMessage(null)}
        />
      )}{" "}
      {/* Mostrar mensaje de éxito */}
      {editInstitution && (
        <div className="fixed dark:text-white inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md">
          <div
            ref={modalRef}
            className="w-[45%] p-6 rounded bg-primary-light dark:bg-secundary-dark"
          >
            <h3 className="text-lg font-bold mb-4">Editar Institución</h3>
            <InstitutionForm
              institution={editInstitution}
              onSubmit={handleEditSubmit}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InstitutionList;
