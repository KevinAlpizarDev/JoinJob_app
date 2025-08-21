import React, { useState, useEffect, useRef } from "react";
import { getAllCampuses, updateCampusStatus } from "../services/service";
import CampusForm from "./CampusForm";

const CampusList = () => {
  const [campuses, setCampuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState(null);

  const modalRef = useRef();

  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        const response = await getAllCampuses();
        setCampuses(response);
      } catch (error) {
        console.error("Error al obtener los campus:", error);
        setError("Hubo un error al obtener los campus.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampuses();
  }, []);

  const toggleActiveStatus = async (campusId, currentStatus) => {
    const confirmAction = window.confirm(
      `¿Estás seguro de que deseas ${
        currentStatus ? "desactivar" : "activar"
      } este campus?`
    );
    if (!confirmAction) return;

    try {
      const updatedStatus = !currentStatus;
      await updateCampusStatus(campusId, updatedStatus);

      setCampuses((prevCampuses) =>
        prevCampuses.map((campus) =>
          campus.id === campusId
            ? { ...campus, is_active: updatedStatus }
            : campus
        )
      );
    } catch (error) {
      console.error("Error al actualizar el estado del campus:", error);
      setError("No se pudo actualizar el estado del campus.");
    }
  };

  const handleEditCampus = (campus) => {
    setSelectedCampus(campus);
  };

  const handleCloseModal = () => {
    setSelectedCampus(null);
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
    if (selectedCampus) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedCampus]);

  if (loading) return <p>Cargando campus...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (campuses.length === 0) return <p>No hay campus disponibles.</p>;

  return (
    <div className="relative flex flex-col rounded-extra-rounded bg-secundary-light dark:bg-secundary-dark shadow-sm border dark:border-none border-slate-200 w-full overflow-hidden">
      <nav className="flex rounded-extra-rounded flex-col gap-1 p-1.5 overflow-y-auto">
        {campuses.map((campus) => (
          <div
            key={campus.id}
            className={`flex justify-between items-center mt-1 rounded-standard ${
              campus.is_active ? "text-white" : "bg-tertiary-dark text-white"
            }`}
          >
            <div
              role="button"
              className={`flex w-full items-center p-3 ${
                campus.is_active
                  ? "dark:text-secundary-light text-secundary-dark"
                  : "text-white"
              }`}
            >
              {campus.name}
            </div>
            <button
              className={`px-3 py-1 text-sm rounded-extra-rounded text-white ${
                campus.is_active
                  ? "bg-red-500 hover:bg-red-400"
                  : "bg-green-500 hover:bg-green-400"
              }`}
              onClick={() => toggleActiveStatus(campus.id, campus.is_active)}
            >
              {campus.is_active ? "Desactivar" : "Activar"}
            </button>
            <button
              className="px-3 py-1 ml-2 text-sm bg-blue-600 text-white rounded-extra-rounded hover:bg-blue-500"
              onClick={() => handleEditCampus(campus)}
            >
              Editar
            </button>
          </div>
        ))}
      </nav>

      {selectedCampus && (
        <div className="fixed dark:text-white inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md">
          <div
            ref={modalRef}
            className="w-[45%] p-6 rounded bg-primary-light dark:bg-secundary-dark"
          >
            <h3 className="text-lg font-bold mb-4">Editar Campus</h3>
            <CampusForm
              campus={selectedCampus}
              onClose={handleCloseModal}
              onUpdate={(updatedCampus) => {
                setCampuses((prev) =>
                  prev.map((campus) =>
                    campus.id === updatedCampus.id ? updatedCampus : campus
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

export default CampusList;
