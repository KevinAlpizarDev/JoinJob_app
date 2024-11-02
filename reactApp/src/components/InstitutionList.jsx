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
//         setError("Hubo un error.");
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
//     return <p className="text-center text-red-500">{error}</p>;
//   }

//   if (institutions.length === 0) {
//     return <p>No hay instituciones disponibles.</p>;
//   }

//   return (
//     <div className="relative flex flex-col rounded-extra-rounded bg-white shadow-sm border border-slate-200 w-full overflow-hidden">
//       <nav className="flex rounded-extra-rounded flex-col gap-1 p-1.5 overflow-y-auto ">
//         {institutions.map((institution) => (
//           <div
//             key={institution.id}
//             className={`flex justify-between items-center mt-1 rounded-standard transition-all ${
//               institution.is_active ? "hover:bg-slate-100" : "bg-gray-200"
//             }`}
//           >
//             <div
//               role="button"
//               className={`flex w-full items-center p-3 transition-all rounded-extra-rounded ${
//                 institution.is_active ? "text-slate-800" : "text-slate-500"
//               }`}
//             >
//               {institution.name} - {institution.type} -{" "}
//               {institution.phone_number}
//             </div>
//             <button
//               className={`px-3 py-1 text-sm rounded-extra-rounded text-white transition-all ${
//                 institution.is_active
//                   ? "bg-red-500 hover:bg-red-400"
//                   : "bg-green-500 hover:bg-green-400"
//               }`}
//               onClick={() => toggleActiveStatus(institution.id)}
//             >
//               {institution.is_active ? "Desactivar" : "Activar"}
//             </button>
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default InstitutionList;

// import React, { useState, useEffect } from "react";
// import { getInstitutions, updateInstitutionStatus } from "../services/service";
// import InstitutionForm from "./InstitutionForm";

// const InstitutionList = () => {
//   const [institutions, setInstitutions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editInstitution, setEditInstitution] = useState(null);

//   useEffect(() => {
//     const fetchInstitutions = async () => {
//       try {
//         const response = await getInstitutions();
//         setInstitutions(response.data);
//       } catch (error) {
//         console.error("Error al obtener las instituciones:", error);
//         setError("Hubo un error.");
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
//     } catch (error) {
//       console.error(
//         "Error al actualizar el estado de la institución:",
//         error.response?.data || error
//       );
//       setError(`No se pudo actualizar la institución ${institutionId}.`);
//     }
//   };

//   const handleEditClick = (institution) => {
//     setEditInstitution(institution);
//   };

//   const handleEditSubmit = () => {
//     setEditInstitution(null);
//     // Refresca la lista de instituciones después de la edición
//     getInstitutions().then((response) => setInstitutions(response.data));
//   };

//   const handleCloseModal = () => {
//     setEditInstitution(null);
//   };

//   if (loading) return <p>Cargando instituciones...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;
//   if (institutions.length === 0)
//     return <p>No hay instituciones disponibles.</p>;

//   return (
//     <div className="relative flex flex-col rounded-extra-rounded bg-white shadow-sm border border-slate-200 w-full overflow-hidden">
//       <nav className="flex rounded-extra-rounded flex-col gap-1 p-1.5 overflow-y-auto ">
//         {institutions.map((institution) => (
//           <div
//             key={institution.id}
//             className={`flex justify-between items-center mt-1 rounded-standard ${
//               institution.is_active ? "hover:bg-slate-100" : "bg-gray-200"
//             }`}
//           >
//             <div
//               role="button"
//               className={`flex w-full items-center p-3 ${
//                 institution.is_active ? "text-slate-800" : "text-slate-500"
//               }`}
//             >
//               {institution.name} - {institution.type} -{" "}
//               {institution.phone_number}
//             </div>
//             <button
//               className={`px-3 py-1 text-sm rounded-extra-rounded text-white ${
//                 institution.is_active
//                   ? "bg-red-500 hover:bg-red-400"
//                   : "bg-green-500 hover:bg-green-400"
//               }`}
//               onClick={() => toggleActiveStatus(institution.id)}
//             >
//               {institution.is_active ? "Desactivar" : "Activar"}
//             </button>
//             <button
//               className="px-3 py-1 ml-2 text-sm bg-blue-600 text-white rounded-extra-rounded hover:bg-blue-500"
//               onClick={() => handleEditClick(institution)}
//             >
//               Editar
//             </button>
//           </div>
//         ))}
//       </nav>

//       {editInstitution && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-md w-96">
//             <h3 className="text-lg font-bold mb-4">Editar Institución</h3>
//             <InstitutionForm
//               institution={editInstitution}
//               onSubmit={handleEditSubmit}
//               onClose={handleCloseModal}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InstitutionList;


import React, { useState, useEffect } from "react";
import { getInstitutions, updateInstitutionStatus } from "../services/service";
import InstitutionForm from "./InstitutionForm";

const InstitutionList = () => {
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editInstitution, setEditInstitution] = useState(null);

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
    } catch (error) {
      console.error(
        "Error al actualizar el estado de la institución:",
        error.response?.data || error
      );
      setError(`No se pudo actualizar la institución ${institutionId}.`);
    }
  };

  const handleEditClick = (institution) => {
    setEditInstitution(institution);
  };

  const handleEditSubmit = () => {
    setEditInstitution(null);
    getInstitutions().then((response) => setInstitutions(response.data));
  };

  const handleCloseModal = () => {
    setEditInstitution(null);
  };

  if (loading) return <p>Cargando instituciones...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (institutions.length === 0)
    return <p>No hay instituciones disponibles.</p>;

  return (
    <div className="relative flex flex-col rounded-extra-rounded bg-white shadow-sm border border-slate-200 w-full overflow-hidden">
      <nav className="flex rounded-extra-rounded flex-col gap-1 p-1.5 overflow-y-auto ">
        {institutions.map((institution) => (
          <div
            key={institution.id}
            className={`flex justify-between items-center mt-1 rounded-standard ${
              institution.is_active ? "hover:bg-slate-100" : "bg-gray-200"
            }`}
          >
            <div
              role="button"
              className={`flex w-full items-center p-3 ${
                institution.is_active ? "text-slate-800" : "text-slate-500"
              }`}
            >
              {institution.name} - {institution.type} -{" "}
              {institution.phone_number}
            </div>
            <button
              className={`px-3 py-1 text-sm rounded-extra-rounded text-white ${
                institution.is_active
                  ? "bg-red-500 hover:bg-red-400"
                  : "bg-green-500 hover:bg-green-400"
              }`}
              onClick={() => toggleActiveStatus(institution.id)}
            >
              {institution.is_active ? "Desactivar" : "Activar"}
            </button>
            <button
              className="px-3 py-1 ml-2 text-sm bg-blue-600 text-white rounded-extra-rounded hover:bg-blue-500"
              onClick={() => handleEditClick(institution)}
            >
              Editar
            </button>
          </div>
        ))}
      </nav>

      {editInstitution && (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md">
       <div className="w-[45%] p-6 rounded">
         <h3 className="text-lg font-bold mb-4">Editar Institución</h3>
         <InstitutionForm
           institution={editInstitution}
           onSubmit={handleEditSubmit}
           onClose={handleCloseModal}
         />
       </div>
     </div>
     
      )}
    </div>
  );
};

export default InstitutionList;
