// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { addCampus } from "../services/service";

// import { useTranslation } from "react-i18next";

// const CampusForm = () => {
//   const [campusData, setCampusData] = useState({
//     name: "",
//     province: "",
//     canton: "",
//     district: "",
//     phone_number: "",
//     director: "",
//     institution: "",
//     latitude: "",
//     longitude: "",
//   });

//   const [institutions, setInstitutions] = useState([]);
//   const { t } = useTranslation("global");

//   useEffect(() => {
//     const fetchInstitutions = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         const response = await axios.get(
//           "http://localhost:8000/api/institutions/",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setInstitutions(response.data);
//       } catch (error) {
//         console.error("Error al obtener instituciones:", error);
//       }
//     };
//     fetchInstitutions();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCampusData({
//       ...campusData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addCampus(campusData);
//       alert("Campus agregado exitosamente");
//     } catch (error) {
//       console.error(
//         "Error al agregar el campus:",
//         error.response ? error.response.data : error.message
//       );
//       alert("Hubo un error al agregar el campus");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col h-full w-full rounded-extra-rounded my-0 bg-gray-200 shadow-sm border border-slate-200 p-6 overflow-auto"
//     >

//       <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
//       {      t("adminAccess.control.registerCampuses") }
//       </h2>

//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//           Nombre del campus
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Nombre del campus"
//           value={campusData.name}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="province" className="block text-sm font-medium text-gray-700">
//           Provincia
//         </label>
//         <input
//           type="text"
//           id="province"
//           name="province"
//           placeholder="Provincia"
//           value={campusData.province}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="canton" className="block text-sm font-medium text-gray-700">
//           Cantón
//         </label>
//         <input
//           type="text"
//           id="canton"
//           name="canton"
//           placeholder="Cantón"
//           value={campusData.canton}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="district" className="block text-sm font-medium text-gray-700">
//           Distrito
//         </label>
//         <input
//           type="text"
//           id="district"
//           name="district"
//           placeholder="Distrito"
//           value={campusData.district}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
//           Número de teléfono
//         </label>
//         <input
//           type="number"
//           id="phone_number"
//           name="phone_number"
//           placeholder="Teléfono"
//           value={campusData.phone_number}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="director" className="block text-sm font-medium text-gray-700">
//           Director
//         </label>
//         <input
//           type="text"
//           id="director"
//           name="director"
//           placeholder="Director"
//           value={campusData.director}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">
//           Latitud
//         </label>
//         <input
//           type="number"
//           id="latitude"
//           name="latitude"
//           placeholder="Latitud"
//           value={campusData.latitude}
//           onChange={handleChange}
//           step="0.000001"
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">
//           Longitud
//         </label>
//         <input
//           type="number"
//           id="longitude"
//           name="longitude"
//           placeholder="Longitud"
//           value={campusData.longitude}
//           onChange={handleChange}
//           step="0.000001"
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
//           Institución
//         </label>
//         <select
//           id="institution"
//           name="institution"
//           value={campusData.institution}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         >
//           <option value="">Selecciona una institución</option>
//           {institutions.map((institution) => (
//             <option key={institution.id} value={institution.id}>
//               {institution.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="w-full mt-4 bg-blue-600 text-white p-2 rounded-complete hover:bg-blue-700"
//       >
//         Agregar Campus
//       </button>
//     </form>
//   );
// };

// export default CampusForm;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { addCampus, updateCampus } from "../services/service";
import { useTranslation } from "react-i18next";

const CampusForm = ({ campus, onClose, onUpdate }) => {
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
      }
    };
    fetchInstitutions();
  }, []);

  useEffect(() => {
    if (campus) {
      setCampusData(campus); // Establece los datos del campus a editar
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
        onUpdate(updatedCampus); // Llama a la función de actualización
        alert("Campus actualizado exitosamente");
      } else {
        await addCampus(campusData);
        alert("Campus agregado exitosamente");
      }
      // Reiniciar el formulario
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
      onClose(); // Cierra el formulario
    } catch (error) {
      console.error(
        "Error al agregar o actualizar el campus:",
        error.response ? error.response.data : error.message
      );
      alert("Hubo un error al agregar o actualizar el campus");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full w-full rounded-extra-rounded my-0 bg-gray-200 shadow-sm border border-slate-200 p-6 overflow-auto"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
        {campus
          ? t("adminAccess.control.editCampus")
          : t("adminAccess.control.registerCampuses")}
      </h2>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
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
          className="mt-1 p-2 w-full border rounded-complete"
        />
      </div>
      <div>
        <label
          htmlFor="province"
          className="block text-sm font-medium text-gray-700"
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
          className="mt-1 p-2 w-full border rounded-complete"
        />
      </div>
      <div>
        <label
          htmlFor="canton"
          className="block text-sm font-medium text-gray-700"
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
          className="mt-1 p-2 w-full border rounded-complete"
        />
      </div>
      <div>
        <label
          htmlFor="district"
          className="block text-sm font-medium text-gray-700"
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
          className="mt-1 p-2 w-full border rounded-complete"
        />
      </div>
      <div>
        <label
          htmlFor="phone_number"
          className="block text-sm font-medium text-gray-700"
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
          className="mt-1 p-2 w-full border rounded-complete"
        />
      </div>
      <div>
        <label
          htmlFor="director"
          className="block text-sm font-medium text-gray-700"
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
          className="mt-1 p-2 w-full border rounded-complete"
        />
      </div>
      <div>
        <label
          htmlFor="institution"
          className="block text-sm font-medium text-gray-700"
        >
          Institución
        </label>
        <select
          id="institution"
          name="institution"
          value={campusData.institution}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded-complete"
        >
          <option value="">Selecciona una institución</option>
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
          className="block text-sm font-medium text-gray-700"
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
          className="mt-1 p-2 w-full border rounded-complete"
        />
      </div>
      <div>
        <label
          htmlFor="longitude"
          className="block text-sm font-medium text-gray-700"
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
          className="mt-1 p-2 w-full border rounded-complete"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-complete"
      >
        {campus
          ? t("adminAccess.control.update")
          : t("adminAccess.control.create")}
      </button>
      <button
        type="button"
        onClick={onClose}
        className="mt-2 bg-gray-500 text-white py-2 px-4 rounded-complete"
      >
        Cancelar
      </button>
    </form>
  );
};

export default CampusForm;
