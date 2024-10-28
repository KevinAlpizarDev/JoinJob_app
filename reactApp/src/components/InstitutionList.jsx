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



import React, { useState, useEffect } from "react";
import { getInstitutions, updateInstitutionStatus } from "../services/service"; // Importar los servicios

const InstitutionList = () => {
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstitutions = async () => {
      try {
        const response = await getInstitutions(); // Llamar al servicio
        setInstitutions(response.data);
      } catch (error) {
        console.error("Error al obtener las instituciones:", error);
        setError("Hubo un error al obtener las instituciones.");
      } finally {
        setLoading(false);
      }
    };

    fetchInstitutions();
  }, []);

  const toggleActiveStatus = async (institutionId) => {
    // Confirmación antes de realizar la acción
    const confirmAction = window.confirm(
      "¿Estás seguro de que deseas cambiar el estado de esta institución?"
    );
    if (!confirmAction) return; // Si el usuario cancela, salir de la función

    try {
      const institution = institutions.find((i) => i.id === institutionId); // Encuentra la institución completa
      const updatedData = {
        name: institution.name, // Mantener el campo name
        phone_number: institution.phone_number, // Mantener el campo phone_number
        is_active: !institution.is_active, // Solo actualiza el campo is_active
      };

      await updateInstitutionStatus(institutionId, updatedData); // Enviar el objeto actualizado

      // Actualizar la lista de instituciones en el estado
      setInstitutions((prevInstitutions) =>
        prevInstitutions.map((i) =>
          i.id === institutionId ? { ...institution, ...updatedData } : i
        )
      );

      console.log(
        `Institución ${institutionId} actualizada a: ${
          updatedData.is_active ? "Activa" : "Inactiva"
        }`
      ); // Log de éxito
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
    return <p>No hay instituciones disponibles.</p>; // Mensaje cuando no hay instituciones
  }

  return (
    <div>
      <h2>Lista de Instituciones</h2>
      <ul>
        {institutions.map((institution) => (
          <li key={institution.id}>
            {institution.name} - {institution.type} - {institution.phone_number}{" "}
            <button onClick={() => toggleActiveStatus(institution.id)}>
              {institution.is_active ? "Desactivar" : "Activar"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstitutionList;
