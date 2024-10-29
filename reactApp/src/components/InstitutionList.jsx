// import React, { useState, useEffect } from "react";
// import { getInstitutions, updateInstitutionStatus } from "../services/service"; // Importar los servicios

// const InstitutionList = () => {
//   const [institutions, setInstitutions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchInstitutions = async () => {
//       try {
//         const response = await getInstitutions(); // Llamar al servicio
//         setInstitutions(response.data);
//       } catch (error) {
//         console.error("Error al obtener las instituciones:", error);
//         setError("Hubo un error al obtener las instituciones.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInstitutions();
//   }, []);

//   const toggleActiveStatus = async (institutionId) => {
//     // Confirmación antes de realizar la acción
//     const confirmAction = window.confirm(
//       "¿Estás seguro de que deseas cambiar el estado de esta institución?"
//     );
//     if (!confirmAction) return; // Si el usuario cancela, salir de la función

//     try {
//       const institution = institutions.find((i) => i.id === institutionId); // Encuentra la institución completa
//       const updatedData = {
//         name: institution.name, // Mantener el campo name
//         phone_number: institution.phone_number, // Mantener el campo phone_number
//         is_active: !institution.is_active, // Solo actualiza el campo is_active
//       };

//       await updateInstitutionStatus(institutionId, updatedData); // Enviar el objeto actualizado

//       // Actualizar la lista de instituciones en el estado
//       setInstitutions(
//         institutions.map((i) =>
//           i.id === institutionId ? { ...institution, ...updatedData } : i
//         )
//       );

//       console.log(
//         `Institución ${institutionId} actualizada a: ${
//           updatedData.is_active ? "Activa" : "Inactiva"
//         }`
//       ); // Log de éxito
//     } catch (error) {
//       console.error(
//         "Error al actualizar el estado de la institución:",
//         error.response?.data || error
//       );
//       console.log(`No se pudo actualizar la institución ${institutionId}.`); // Log de error
//     }
//   };

//   if (loading) {
//     return <p>Cargando instituciones...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       <h2>Lista de Instituciones</h2>
//       <ul>
//         {institutions.map((institution) => (
//           <li key={institution.id}>
//             {institution.name} - {institution.type} - {institution.phone_number}{" "}
//             <button onClick={() => toggleActiveStatus(institution.id)}>
//               {institution.is_active ? "Desactivar" : "Activar"}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InstitutionList;


// import React, { useState, useEffect } from "react";
// import { getInstitutions, updateInstitutionStatus } from "../services/service";

// const InstitutionList = () => {
//   const [institutions, setInstitutions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchInstitutions = async () => {
//       try {
//         const response = await getInstitutions();
//         setInstitutions(response.data);
//       } catch (error) {
//         console.error("Error al obtener las instituciones:", error);
//         setError("Hubo un error al obtener las instituciones.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchInstitutions();
//   }, []);

//   const toggleActiveStatus = async (institutionId) => {
//     const confirmAction = window.confirm(
//       "¿Estás seguro de que deseas cambiar el estado de esta institución?"
//     );
//     if (!confirmAction) return;

//     try {
//       const institution = institutions.find((i) => i.id === institutionId);
//       const updatedData = {
//         name: institution.name,
//         phone_number: institution.phone_number,
//         is_active: !institution.is_active,
//       };

//       await updateInstitutionStatus(institutionId, updatedData);

//       setInstitutions((prevInstitutions) =>
//         prevInstitutions.map((i) =>
//           i.id === institutionId ? { ...institution, ...updatedData } : i
//         )
//       );

//       console.log(
//         `Institución ${institutionId} actualizada a: ${
//           updatedData.is_active ? "Activa" : "Inactiva"
//         }`
//       );
//     } catch (error) {
//       console.error(
//         "Error al actualizar el estado de la institución:",
//         error.response?.data || error
//       );
//       setError(`No se pudo actualizar la institución ${institutionId}.`);
//     }
//   };

//   if (loading) {
//     return <p>Cargando instituciones...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (institutions.length === 0) {
//     return <p>No hay instituciones disponibles.</p>;
//   }

//   return (
//     <div className="h-full w-full flex flex-col items-center p-4 overflow-auto">
//       <h2 className="text-xl font-bold mb-4">Lista de Instituciones</h2>
//       <ul className="w-full overflow-y-auto">
//         {institutions.map((institution) => (
//           <li
//             key={institution.id}
//             className="flex justify-between items-center py-2 border-b"
//           >
//             <span>
//               {institution.name} - {institution.type} - {institution.phone_number}
//             </span>
//             <button
//               className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-700"
//               onClick={() => toggleActiveStatus(institution.id)}
//             >
//               {institution.is_active ? "Desactivar" : "Activar"}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InstitutionList;


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
    return <p>{error}</p>;
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
