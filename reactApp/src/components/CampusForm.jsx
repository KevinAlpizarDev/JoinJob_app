import React, { useState, useEffect } from "react";
import axios from "axios";
import { addCampus } from "../services/service"; // Asegúrate de crear esta función en tu archivo de servicios

const CampusForm = () => {
  const [campusData, setCampusData] = useState({
    name: "",
    province: "",
    canton: "",
    district: "",
    phone_number: "",
    director: "",
    is_active: true,
    institution: "", // Para almacenar el ID de la institución seleccionada
  });

  const [institutions, setInstitutions] = useState([]);

  // Obtener las instituciones desde la API
  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          "http://localhost:8000/api/institutions/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setInstitutions(response.data);
      } catch (error) {
        console.error("Error al obtener instituciones:", error);
      }
    };
    fetchInstitutions();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCampusData({
      ...campusData,
      [name]: type === "checkbox" ? checked : value, // Manejo del checkbox
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(campusData); // Verifica los datos antes de enviarlos
    try {
      await addCampus(campusData); // Llama a la función que hace el POST
      alert("Campus agregado exitosamente");
    } catch (error) {
      console.error(
        "Error al agregar el campus:",
        error.response ? error.response.data : error.message
      );
      alert("Hubo un error al agregar el campus");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre del campus"
        value={campusData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="province"
        placeholder="Provincia"
        value={campusData.province}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="canton"
        placeholder="Cantón"
        value={campusData.canton}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="district"
        placeholder="Distrito"
        value={campusData.district}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="phone_number"
        placeholder="Teléfono"
        value={campusData.phone_number}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="director"
        placeholder="Director"
        value={campusData.director}
        onChange={handleChange}
        required
      />
      <select
        name="institution"
        value={campusData.institution}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona una institución</option>
        {institutions.map((institution) => (
          <option key={institution.id} value={institution.id}>
            {institution.name}
          </option>
        ))}
      </select>
      <label>
        <input
          type="checkbox"
          name="is_active"
          checked={campusData.is_active}
          onChange={handleChange}
        />
        ¿Campus activo?
      </label>
      <button type="submit">Agregar Campus</button>
    </form>
  );
};

export default CampusForm;
