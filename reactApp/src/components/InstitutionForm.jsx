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
//       <input
//         type="text"
//         name="name"
//         placeholder="Nombre de la institución"
//         value={institutionData.name}
//         onChange={handleChange}
//         required
//       />
//       <select name="type" value={institutionData.type} onChange={handleChange}>
//         <option value="public">Pública</option>
//         <option value="private">Privada</option>
//       </select>
//       <input
//         type="text"
//         name="phone_number"
//         placeholder="Número de teléfono"
//         value={institutionData.phone_number}
//         onChange={handleChange}
//         required
//       />
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
    type: "public", // Valor predeterminado
    phone_number: "",
    is_active: true, // Puedes usar un checkbox para is_active si lo necesitas
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
      await addInstitution(institutionData); // Llamada para hacer el POST
      alert("Institución agregada exitosamente");
    } catch (error) {
      console.error("Error al agregar la institución:", error);
      alert("Hubo un error al agregar la institución");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre de la institución</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre de la institución"
          value={institutionData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Tipo de institución</label>
        <select
          id="type"
          name="type"
          value={institutionData.type}
          onChange={handleChange}
        >
          <option value="public">Pública</option>
          <option value="private">Privada</option>
        </select>
      </div>
      <div>
        <label htmlFor="phone_number">Número de teléfono</label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          placeholder="Número de teléfono"
          value={institutionData.phone_number}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Agregar Institución</button>
    </form>
  );
};

export default InstitutionForm;
