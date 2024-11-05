import React, { useState, useEffect } from "react";
import { getAllCampuses, addLocation } from "../services/service";

const LocationForm = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [campusId, setCampusId] = useState("");
  const [campuses, setCampuses] = useState([]);

  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        const campusData = await getAllCampuses();
        setCampuses(campusData);
      } catch (error) {
        console.error("Error fetching campuses:", error);
        alert("Error al obtener los campus. Intente nuevamente.");
      }
    };
    fetchCampuses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const locationData = {
      latitude: parseFloat(latitude), // Convierte a número
      longitude: parseFloat(longitude),
      campus: campusId, // Asegura que campusId se envíe como 'campus'
    };

    try {
      await addLocation(locationData);
      alert("Ubicación añadida exitosamente.");
      setLatitude("");
      setLongitude("");
      setCampusId("");
    } catch (error) {
      console.error("Error adding location:", error);
      if (error.response) {
        console.error("Detalles del error:", error.response.data);
        alert("Error al añadir la ubicación: " + error.response.data.message);
      } else {
        alert("Error al añadir la ubicación. Por favor, intente de nuevo.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <label>
        Latitud:
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="input"
          required
        />
      </label>
      <label>
        Longitud:
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="input"
          required
        />
      </label>
      <label>
        Campus:
        <select
          value={campusId}
          onChange={(e) => setCampusId(e.target.value)}
          className="select"
          required
        >
          <option value="">Seleccione un campus</option>
          {campuses.map((campus) => (
            <option key={campus.id} value={campus.id}>
              {campus.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className="btn">
        Añadir Ubicación
      </button>
    </form>
  );
};

export default LocationForm;
