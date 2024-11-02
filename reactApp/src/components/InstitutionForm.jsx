// import React, { useState } from "react";
// import { addInstitution } from "../services/service";

// import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation

// const InstitutionForm = () => {
//   const [institutionData, setInstitutionData] = useState({
//     name: "",
//     type: "public",
//     phone_number: "",
//     is_active: true,
//   });

//   const handleChange = (e) => {
//     setInstitutionData({
//       ...institutionData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addInstitution(institutionData);
//       alert("Institución agregada exitosamente");
//       setInstitutionData({
//         name: "",
//         type: "public",
//         phone_number: "",
//         is_active: true,
//       });
//     } catch (error) {
//       console.error("Error al agregar la institución:", error);
//       alert("Hubo un error al agregar la institución");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex  flex-col h-full w-full rounded-extra-rounded my-0 bg-gray-400 shadow-sm border border-slate-200 p-6 overflow-auto"
//     >
//       <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
// {      t("adminAccess.control.registerInstitutions") }
//       </h2>

//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//           Nombre de la institución
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Nombre de la institución"
//           value={institutionData.name}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="type" className="block text-sm font-medium text-gray-700 ">
//           Tipo de institución
//         </label>
//         <select
//           id="type"
//           name="type"
//           value={institutionData.type}
//           onChange={handleChange}
//           className="mt-1 p-2 w-full border rounded-complete"
//         >
//           <option value="public">Pública</option>
//           <option value="private">Privada</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
//           Número de teléfono
//         </label>
//         <input
//           type="text"
//           id="phone_number"
//           name="phone_number"
//           placeholder="Número de teléfono"
//           value={institutionData.phone_number}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full mt-4 bg-blue-600 text-white p-2 rounded-complete hover:bg-blue-700"
//       >
//         Agregar Institución
//       </button>
//     </form>
//   );
// };

// export default InstitutionForm;


// import React, { useState, useEffect } from "react";
// import { addInstitution, updateInstitution } from "../services/service";
// import { useTranslation } from "react-i18next";

// const InstitutionForm = ({ institution, onSubmit, onClose }) => {
//   const [institutionData, setInstitutionData] = useState({
//     name: "",
//     type: "public",
//     phone_number: "",
//     is_active: true,
//   });

//   const { t } = useTranslation("global");

//   useEffect(() => {
//     if (institution) {
//       setInstitutionData(institution);
//     }
//   }, [institution]);

//   const handleChange = (e) => {
//     setInstitutionData({
//       ...institutionData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (institution) {
//         await updateInstitution(institution.id, institutionData);
//         alert("Institución actualizada exitosamente");
//       } else {
//         await addInstitution(institutionData);
//         alert("Institución agregada exitosamente");
//       }
//       setInstitutionData({
//         name: "",
//         type: "public",
//         phone_number: "",
//         is_active: true,
//       });
//       onSubmit(); // Llama a la función de callback para refrescar la lista
//       onClose(); // Cierra el formulario/modal de edición
//     } catch (error) {
//       console.error("Error al enviar la institución:", error);
//       alert("Hubo un error al enviar la institución");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col h-full w-full rounded-extra-rounded my-0 bg-gray-400 shadow-sm border border-slate-200 p-6 overflow-auto"
//     >
//       <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
//         {t("adminAccess.control.registerInstitutions")}
//       </h2>

//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//           Nombre de la institución
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Nombre de la institución"
//           value={institutionData.name}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="type" className="block text-sm font-medium text-gray-700">
//           Tipo de institución
//         </label>
//         <select
//           id="type"
//           name="type"
//           value={institutionData.type}
//           onChange={handleChange}
//           className="mt-1 p-2 w-full border rounded-complete"
//         >
//           <option value="public">Pública</option>
//           <option value="private">Privada</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
//           Número de teléfono
//         </label>
//         <input
//           type="text"
//           id="phone_number"
//           name="phone_number"
//           placeholder="Número de teléfono"
//           value={institutionData.phone_number}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full mt-4 bg-blue-600 text-white p-2 rounded-complete hover:bg-blue-700"
//       >
//         {institution ? "Actualizar Institución" : "Agregar Institución"}
//       </button>
//     </form>
//   );
// };

// export default InstitutionForm;
import React, { useState, useEffect } from "react";
import { addInstitution, updateInstitution } from "../services/service";
import { useTranslation } from "react-i18next";

const InstitutionForm = ({ institution, onSubmit, onClose }) => {
  const [institutionData, setInstitutionData] = useState({
    name: "",
    type: "public",
    phone_number: "",
    is_active: true,
  });

  const { t } = useTranslation("global");

  useEffect(() => {
    if (institution) {
      setInstitutionData(institution);
    }
  }, [institution]);

  const handleChange = (e) => {
    setInstitutionData({
      ...institutionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (institution) {
        await updateInstitution(institution.id, institutionData);
        alert("Institución actualizada exitosamente");
      } else {
        await addInstitution(institutionData);
        alert("Institución agregada exitosamente");
      }
      setInstitutionData({
        name: "",
        type: "public",
        phone_number: "",
        is_active: true,
      });
      if (onSubmit) onSubmit(); // Verificación adicional
      if (onClose) onClose();
    } catch (error) {
      console.error("Error al enviar la institución:", error);
      alert("Hubo un error al enviar la institución");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full w-full rounded-extra-rounded my-0 bg-secundary-light  shadow-sm border dark:border-none  p-6 overflow-auto dark:bg-secundary-dark"
    >
      <h2 className="text-xl font-semibold text-secundary-dark  text-center mb-4 dark:text-secundary-light">
        {t("adminAccess.control.registerInstitutions")}
      </h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secundary-dark dark:text-secundary-light">
          Nombre de la institución
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre de la institución"
          value={institutionData.name}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-secundary-dark dark:text-secundary-light">
          Tipo de institución
        </label>
        <select
          id="type"
          name="type"
          value={institutionData.type}
          onChange={handleChange}
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        >
          <option value="public">Pública</option>
          <option value="private">Privada</option>
        </select>
      </div>

      <div>
        <label htmlFor="phone_number" className="block text-sm font-medium text-secundary-dark dark:text-secundary-light">
          Número de teléfono
        </label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          placeholder="Número de teléfono"
          value={institutionData.phone_number}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 text-white p-2 rounded-complete hover:bg-blue-700"
      >
        {institution ? "Actualizar Institución" : "Agregar Institución"}
      </button>
    </form>
  );
};

export default InstitutionForm;
