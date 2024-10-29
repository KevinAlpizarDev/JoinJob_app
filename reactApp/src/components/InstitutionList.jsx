import React, { useState, useEffect } from "react";
import { getInstitutions, updateInstitutionStatus } from "../services/service";

const InstitutionList = () => {
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await getInstitutions();
        setInstitutions(response.data);
      } catch (error) {
        console.error("Error al obtener las instituciones:", error);
        setError("Hubo un error.");
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

      console.log(
        `Institución ${institutionId} actualizada a: ${
          updatedData.is_active ? "Activa" : "Inactiva"
        }`
      );
    } catch (error) {
      console.error(
        "Error al actualizar el estado de la institución:",
        error.response?.data || error
      );
      setError(`No se pudo actualizar la institución ${institutionId}.`);
    }
  };

  if (loading) {
    return <p>Cargando instituciones...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500">{error}</p>
    );
  }

  if (institutions.length === 0) {
    return <p>No hay instituciones disponibles.</p>;
  }

  return (
    <div className="relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200 w-full overflow-hidden">
      <nav className="flex flex-col gap-1 p-1.5 overflow-y-auto ">
        {institutions.map((institution) => (
          <div
            key={institution.id}
            className={`flex justify-between items-center mt-1 rounded-md transition-all ${
              institution.is_active ? "hover:bg-slate-100" : "bg-gray-200"
            }`}
          >
            <div
              role="button"
              className={`flex w-full items-center p-3 transition-all ${
                institution.is_active ? "text-slate-800" : "text-slate-500"
              }`}
            >
              {institution.name} - {institution.type} - {institution.phone_number}
            </div>
            <button
              className={`px-3 py-1 text-sm rounded-md text-white transition-all ${
                institution.is_active
                  ? "bg-red-500 hover:bg-red-400"
                  : "bg-green-500 hover:bg-green-400"
              }`}
              onClick={() => toggleActiveStatus(institution.id)}
            >
              {institution.is_active ? "Desactivar" : "Activar"}
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default InstitutionList;
