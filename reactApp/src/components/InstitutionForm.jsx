

// import React, { useState } from "react";
// import { addInstitution } from "../services/service";

// const InstitutionForm = () => {
//   const [institutionData, setInstitutionData] = useState({
//     name: "",
//     type: "public", // Valor predeterminado
//     phone_number: "",
//     is_active: true, // Puedes usar un checkbox para is_active si lo necesitas
//   });

//   const handleChange = (e) => {
//     setInstitutionData({
//       ...institutionData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addInstitution(institutionData); // Llamada para hacer el POST
//       alert("Institución agregada exitosamente");
//     } catch (error) {
//       console.error("Error al agregar la institución:", error);
//       alert("Hubo un error al agregar la institución");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Nombre de la institución</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Nombre de la institución"
//           value={institutionData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="type">Tipo de institución</label>
//         <select
//           id="type"
//           name="type"
//           value={institutionData.type}
//           onChange={handleChange}
//         >
//           <option value="public">Pública</option>
//           <option value="private">Privada</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="phone_number">Número de teléfono</label>
//         <input
//           type="text"
//           id="phone_number"
//           name="phone_number"
//           placeholder="Número de teléfono"
//           value={institutionData.phone_number}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <button type="submit">Agregar Institución</button>
//     </form>
//   );
// };

// export default InstitutionForm;


import React, { useState } from "react";
import { addInstitution } from "../services/service";

const InstitutionForm = () => {
  const [institutionData, setInstitutionData] = useState({
    name: "",
    type: "public",
    phone_number: "",
    is_active: true,
  });

  const handleChange = (e) => {
    setInstitutionData({
      ...institutionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addInstitution(institutionData);
      alert("Institución agregada exitosamente");
      setInstitutionData({
        name: "",
        type: "public",
        phone_number: "",
        is_active: true,
      });
    } catch (error) {
      console.error("Error al agregar la institución:", error);
      alert("Hubo un error al agregar la institución");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  flex-col h-full w-full rounded-extra-rounded my-0 bg-gray-400 shadow-sm border border-slate-200 p-6 overflow-auto"
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
        Agregar Institución
      </h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
          className="mt-1 p-2 w-full border rounded-complete"
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 ">
          Tipo de institución
        </label>
        <select
          id="type"
          name="type"
          value={institutionData.type}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-complete"
        >
          <option value="public">Pública</option>
          <option value="private">Privada</option>
        </select>
      </div>

      <div>
        <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
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
          className="mt-1 p-2 w-full border rounded-complete"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 text-white p-2 rounded-complete hover:bg-blue-700"
      >
        Agregar Institución
      </button>
    </form>
  );
};

export default InstitutionForm;
