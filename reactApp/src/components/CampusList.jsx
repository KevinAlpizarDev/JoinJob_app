import React, { useState, useEffect } from "react";
import { getAllCampuses, updateCampusStatus } from "../services/service";

const CampusList = () => {
  const [campuses, setCampuses] = useState([]);

  // Obtener los campus al cargar el componente
  useEffect(() => {
    async function fetchCampuses() {
      try {
        const response = await getAllCampuses();
        setCampuses(response.data);
      } catch (error) {
        console.error("Error al cargar los campus:", error);
      }
    }
    fetchCampuses();
  }, []);

  // Función para manejar el cambio de estado is_active
  const handleStatusToggle = async (campusId, isActive) => {
    try {
      await updateCampusStatus(campusId, !isActive); // Invertir el estado de is_active
      setCampuses((prevCampuses) =>
        prevCampuses.map((campus) =>
          campus.id === campusId ? { ...campus, is_active: !isActive } : campus
        )
      );
    } catch (error) {
      console.error("Error al actualizar el estado del campus:", error);
    }
  };

  return (
    <div>
      <h1>Administración de Campus</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Provincia</th>
            <th>Distrito</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {campuses.map((campus) => (
            <tr key={campus.id}>
              <td>{campus.name}</td>
              <td>{campus.province}</td>
              <td>{campus.district}</td>
              <td>{campus.is_active ? "Sí" : "No"}</td>
              <td>
                <button
                  onClick={() =>
                    handleStatusToggle(campus.id, campus.is_active)
                  }
                >
                  {campus.is_active ? "Desactivar" : "Activar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampusList;
