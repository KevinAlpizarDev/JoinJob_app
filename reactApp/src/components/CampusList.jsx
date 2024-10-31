
import React, { useState, useEffect } from "react";
import { getAllCampuses, updateCampusStatus } from "../services/service";

const CampusList = () => {
  const [campuses, setCampuses] = useState([]); // Estado para almacenar la lista de campus
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Cargar los campus al montar el componente
  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        const response = await getAllCampuses(); // Llamada al servicio para obtener los campus
        setCampuses(response); // Guardar la lista de campus en el estado
      } catch (error) {
        console.error("Error al obtener los campus:", error);
        setError("Hubo un error al obtener los campus.");
      } finally {
        setLoading(false); // Dejar de mostrar el estado de carga
      }
    };

    fetchCampuses();
  }, []);

  // Función para alternar el estado activo/inactivo de un campus
  const toggleActiveStatus = async (campusId, currentStatus) => {
    const confirmAction = window.confirm(
      `¿Estás seguro de que deseas ${
        currentStatus ? "desactivar" : "activar"
      } este campus?`
    );
    if (!confirmAction) return;

    try {
      const updatedStatus = !currentStatus;
      await updateCampusStatus(campusId, updatedStatus); // Llamada para actualizar el estado

      // Actualizar el estado local de los campus
      setCampuses((prevCampuses) =>
        prevCampuses.map((campus) =>
          campus.id === campusId
            ? { ...campus, is_active: updatedStatus }
            : campus
        )
      );
      console.log(
        `Campus ${campusId} ${
          updatedStatus ? "activado" : "desactivado"
        } exitosamente`
      );
    } catch (error) {
      console.error("Error al actualizar el estado del campus:", error);
      setError("No se pudo actualizar el estado del campus.");
    }
  };

  // Manejar el estado de carga y error
  if (loading) return <p>Cargando campus...</p>;
  if (error) return <p>{error}</p>;

  // Mensaje cuando no hay campus disponibles
  if (campuses.length === 0) {
    return <p>No hay campus disponibles.</p>;
  }

  // Renderizado de la tabla de campus
  return (
    <div className="relative flex flex-col rounded-extra-rounded bg-white shadow-sm border border-slate-200 w-full overflow-hidden">
      <nav className="flex flex-col gap-1 p-1.5 overflow-y-auto">
        {campuses.map((campus) => (
          <div
            key={campus.id}
            className={`flex justify-between items-center mt-1 rounded-md transition-all ${
              campus.is_active ? "hover:bg-slate-100" : "bg-gray-200"
            }`}
          >
            <div
              role="button"
              className={`flex w-full items-center p-3 transition-all ${
                campus.is_active ? "text-slate-800" : "text-slate-500"
              }`}
            >
              {campus.institution_name} - {campus.name} - {campus.province} -{" "}
              {campus.canton} - {campus.district}
            </div>
            <button
              className={`px-3 py-1 text-sm rounded-md text-white transition-all ${
                campus.is_active
                  ? "bg-red-500 hover:bg-red-400"
                  : "bg-green-500 hover:bg-green-400"
              }`}
              onClick={() => toggleActiveStatus(campus.id, campus.is_active)}
            >
              {campus.is_active ? "Desactivar" : "Activar"}
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default CampusList;
