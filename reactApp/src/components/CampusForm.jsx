
import React, { useState, useEffect } from "react";
import axios from "axios";
import { addCampus, updateCampus } from "../services/service";
import { useTranslation } from "react-i18next";
import Alert from "../components/main/Alert"; // Asegúrate de que la ruta sea correcta

const CampusForm = ({ campus, onClose = () => {}, onUpdate = () => {} }) => {
  const [campusData, setCampusData] = useState({
    name: "",
    province: "",
    canton: "",
    district: "",
    phone_number: "",
    director: "",
    institution: "",
    latitude: "",
    longitude: "",
  });

  const [institutions, setInstitutions] = useState([]);
  const [alert, setAlert] = useState({ type: "", title: "", message: "" });
  const { t } = useTranslation("global");

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
        setAlert({
          type: "error",
          title: "Error",
          message: "No se pudo cargar la lista de campus.",
        });
      }
    };
    fetchInstitutions();
  }, []);

  useEffect(() => {
    if (campus) {
      setCampusData(campus);
    }
  }, [campus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampusData({
      ...campusData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (campus) {
        const updatedCampus = await updateCampus(campusData.id, campusData);
        onUpdate(updatedCampus);
        setAlert({
          type: "success",
          title: "Éxito",
          message: "Campus actualizado exitosamente.",
        });
      } else {
        await addCampus(campusData);
        setAlert({
          type: "success",
          title: "Éxito",
          message: "Campus agregado exitosamente.",
        });
      }
      setCampusData({
        name: "",
        province: "",
        canton: "",
        district: "",
        phone_number: "",
        director: "",
        institution: "",
        latitude: "",
        longitude: "",
      });
      onClose();
    } catch (error) {
      console.error(
        "Error al agregar o actualizar el campus:",
        error.response ? error.response.data : error.message
      );
      setAlert({
        type: "error",
        title: "Error",
        message: "Hubo un error al agregar o actualizar el campus.",
      });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ type: "", title: "", message: "" }); // Limpiar alerta
  };

  return (
    <div>
      {alert.message && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          onClose={handleCloseAlert}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-full w-full rounded-extra-rounded my-0 bg-secundary-light shadow-sm border dark:border-none p-6 overflow-auto dark:bg-secundary-dark"
      >
        <h2 className="text-xl font-semibold text-secundary-dark text-center mb-4 dark:text-secundary-light">
          {campus
            ? t("adminAccess.control.editCampus")
            : t("adminAccess.control.registerCampuses")}
        </h2>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
          >
            Nombre del campus
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre del campus"
            value={campusData.name}
            onChange={handleChange}
            required
            className="mt-1 text-white dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
          />
        </div>
        <div>
          <label
            htmlFor="province"
            className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
          >
            Provincia
          </label>
          <input
            type="text"
            id="province"
            name="province"
            placeholder="Provincia"
            value={campusData.province}
            onChange={handleChange}
            required
            className="mt-1 text-white dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
          />
        </div>
        <div>
          <label
            htmlFor="canton"
            className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
          >
            Cantón
          </label>
          <input
            type="text"
            id="canton"
            name="canton"
            placeholder="Cantón"
            value={campusData.canton}
            onChange={handleChange}
            required
            className="mt-1 text-white dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
          />
        </div>
        <div>
          <label
            htmlFor="district"
            className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
          >
            Distrito
          </label>
          <input
            type="text"
            id="district"
            name="district"
            placeholder="Distrito"
            value={campusData.district}
            onChange={handleChange}
            required
            className="mt-1 text-white dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
          />
        </div>
        <div>
          <label
            htmlFor="phone_number"
            className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
          >
            Número de Teléfono
          </label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            placeholder="Número de Teléfono"
            value={campusData.phone_number}
            onChange={handleChange}
            required
            className="mt-1 text-white dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
          />
        </div>
        <div>
          <label
            htmlFor="director"
            className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
          >
            Director
          </label>
          <input
            type="text"
            id="director"
            name="director"
            placeholder="Director"
            value={campusData.director}
            onChange={handleChange}
            required
            className="mt-1 text-white dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
          />
        </div>
        <div>
          <label
            htmlFor="institution"
            className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
          >
            Institución
          </label>
          <select
            id="institution"
            name="institution"
            value={campusData.institution}
            onChange={handleChange}
            required
            className="mt-1 dark:text-tertiary-light dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
          >
            <option  value="">Selecciona una institución</option>
            {institutions.map((institution) => (
              <option key={institution.id} value={institution.id}>
                {institution.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="latitude"
            className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
          >
            Latitud
          </label>
          <input
            type="text"
            id="latitude"
            name="latitude"
            placeholder="Latitud"
            value={campusData.latitude}
            onChange={handleChange}
            required
            className="mt-1 text-white dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
          />
        </div>
        <div>
          <label
            htmlFor="longitude"
            className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
          >
            Longitud
          </label>
          <input
            type="text"
            id="longitude"
            name="longitude"
            placeholder="Longitud"
            value={campusData.longitude}
            onChange={handleChange}
            required
            className="mt-1 text-white dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded-complete hover:bg-blue-600 transition"
        >
          {campus
            ? t("adminAccess.control.update")
            : t("adminAccess.control.add")}
        </button>
      </form>
    </div>
  );
};

export default CampusForm;
