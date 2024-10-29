// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { addCampus } from "../services/service"; // Asegúrate de crear esta función en tu archivo de servicios

// const CampusForm = () => {
//   const [campusData, setCampusData] = useState({
//     name: "",
//     province: "",
//     canton: "",
//     district: "",
//     phone_number: "",
//     director: "",
//     institution: "", // Para almacenar el ID de la institución seleccionada
//   });

//   const [institutions, setInstitutions] = useState([]);

//   // Obtener las instituciones desde la API
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
//       [name]: value, // Manejo de cambios en los campos
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(campusData); // Verifica los datos antes de enviarlos
//     try {
//       await addCampus(campusData); // Llama a la función que hace el POST
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
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Nombre del campus"
//         value={campusData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="province"
//         placeholder="Provincia"
//         value={campusData.province}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="canton"
//         placeholder="Cantón"
//         value={campusData.canton}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="district"
//         placeholder="Distrito"
//         value={campusData.district}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="phone_number"
//         placeholder="Teléfono"
//         value={campusData.phone_number}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="director"
//         placeholder="Director"
//         value={campusData.director}
//         onChange={handleChange}
//         required
//       />
//       <select
//         name="institution"
//         value={campusData.institution}
//         onChange={handleChange}
//         required
//       >
//         <option value="">Selecciona una institución</option>
//         {institutions.map((institution) => (
//           <option key={institution.id} value={institution.id}>
//             {institution.name}
//           </option>
//         ))}
//       </select>
//       <button type="submit">Agregar Campus</button>
//     </form>
//   );
// };

// export default CampusForm;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { addCampus } from "../services/service"; // Asegúrate de crear esta función en tu archivo de servicios

// const CampusForm = () => {
//   const [campusData, setCampusData] = useState({
//     name: "",
//     province: "",
//     canton: "",
//     district: "",
//     phone_number: "",
//     director: "",
//     institution: "", // Para almacenar el ID de la institución seleccionada
//   });

//   const [institutions, setInstitutions] = useState([]);

//   // Obtener las instituciones desde la API
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
//       [name]: value, // Manejo de cambios en los campos
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(campusData); // Verifica los datos antes de enviarlos
//     try {
//       await addCampus(campusData); // Llama a la función que hace el POST
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
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Nombre del campus</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Nombre del campus"
//           value={campusData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="province">Provincia</label>
//         <input
//           type="text"
//           id="province"
//           name="province"
//           placeholder="Provincia"
//           value={campusData.province}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="canton">Cantón</label>
//         <input
//           type="text"
//           id="canton"
//           name="canton"
//           placeholder="Cantón"
//           value={campusData.canton}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="district">Distrito</label>
//         <input
//           type="text"
//           id="district"
//           name="district"
//           placeholder="Distrito"
//           value={campusData.district}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="phone_number">Número de teléfono</label>
//         <input
//           type="number"
//           id="phone_number"
//           name="phone_number"
//           placeholder="Teléfono"
//           value={campusData.phone_number}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="director">Director</label>
//         <input
//           type="text"
//           id="director"
//           name="director"
//           placeholder="Director"
//           value={campusData.director}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="institution">Institución</label>
//         <select
//           id="institution"
//           name="institution"
//           value={campusData.institution}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Selecciona una institución</option>
//           {institutions.map((institution) => (
//             <option key={institution.id} value={institution.id}>
//               {institution.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Agregar Campus</button>
//     </form>
//   );
// };

// export default CampusForm;
//////////////////////////////////////////////////////////////////////////////////////



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { addCampus } from "../services/service"; // Asegúrate de crear esta función en tu archivo de servicios

// const CampusForm = () => {
//   const [campusData, setCampusData] = useState({
//     name: "",
//     province: "",
//     canton: "",
//     district: "",
//     phone_number: "",
//     director: "",
//     institution: "", // Para almacenar el ID de la institución seleccionada
//     latitude: "",  // Nueva propiedad para latitud
//     longitude: "", // Nueva propiedad para longitud
//   });

//   const [institutions, setInstitutions] = useState([]);

//   // Obtener las instituciones desde la API
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
//       [name]: value, // Manejo de cambios en los campos
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(campusData); // Verifica los datos antes de enviarlos
//     try {
//       await addCampus(campusData); // Llama a la función que hace el POST
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
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Nombre del campus</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Nombre del campus"
//           value={campusData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="province">Provincia</label>
//         <input
//           type="text"
//           id="province"
//           name="province"
//           placeholder="Provincia"
//           value={campusData.province}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="canton">Cantón</label>
//         <input
//           type="text"
//           id="canton"
//           name="canton"
//           placeholder="Cantón"
//           value={campusData.canton}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="district">Distrito</label>
//         <input
//           type="text"
//           id="district"
//           name="district"
//           placeholder="Distrito"
//           value={campusData.district}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="phone_number">Número de teléfono</label>
//         <input
//           type="number"
//           id="phone_number"
//           name="phone_number"
//           placeholder="Teléfono"
//           value={campusData.phone_number}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="director">Director</label>
//         <input
//           type="text"
//           id="director"
//           name="director"
//           placeholder="Director"
//           value={campusData.director}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="latitude">Latitud</label>
//         <input
//           type="number"
//           id="latitude"
//           name="latitude"
//           placeholder="Latitud"
//           value={campusData.latitude}
//           onChange={handleChange}
//           step="0.000001"  // Para manejar decimales de precisión
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="longitude">Longitud</label>
//         <input
//           type="number"
//           id="longitude"
//           name="longitude"
//           placeholder="Longitud"
//           value={campusData.longitude}
//           onChange={handleChange}
//           step="0.000001"  // Para manejar decimales de precisión
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="institution">Institución</label>
//         <select
//           id="institution"
//           name="institution"
//           value={campusData.institution}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Selecciona una institución</option>
//           {institutions.map((institution) => (
//             <option key={institution.id} value={institution.id}>
//               {institution.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Agregar Campus</button>
//     </form>
//   );
// };

// export default CampusForm;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { addCampus } from "../services/service";

const CampusForm = () => {
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
    const { name, value } = e.target;
    setCampusData({
      ...campusData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCampus(campusData);
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full w-full rounded-2xl my-0 bg-gray-200 shadow-sm border border-slate-200 p-6 overflow-auto"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
        Agregar Campus
      </h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="province" className="block text-sm font-medium text-gray-700">
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
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="canton" className="block text-sm font-medium text-gray-700">
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
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="district" className="block text-sm font-medium text-gray-700">
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
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
          Número de teléfono
        </label>
        <input
          type="number"
          id="phone_number"
          name="phone_number"
          placeholder="Teléfono"
          value={campusData.phone_number}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="director" className="block text-sm font-medium text-gray-700">
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
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="latitude" className="block text-sm font-medium text-gray-700">
          Latitud
        </label>
        <input
          type="number"
          id="latitude"
          name="latitude"
          placeholder="Latitud"
          value={campusData.latitude}
          onChange={handleChange}
          step="0.000001"
          required
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="longitude" className="block text-sm font-medium text-gray-700">
          Longitud
        </label>
        <input
          type="number"
          id="longitude"
          name="longitude"
          placeholder="Longitud"
          value={campusData.longitude}
          onChange={handleChange}
          step="0.000001"
          required
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div>
        <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
          Institución
        </label>
        <select
          id="institution"
          name="institution"
          value={campusData.institution}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border rounded-md"
        >
          <option value="">Selecciona una institución</option>
          {institutions.map((institution) => (
            <option key={institution.id} value={institution.id}>
              {institution.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
      >
        Agregar Campus
      </button>
    </form>
  );
};

export default CampusForm;
