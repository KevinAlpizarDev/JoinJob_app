// import React, { useState, useEffect } from "react";
// import { getInstitutions } from "../services/service"; // Importar el servicio

// const InstitutionList = () => {
//   const [institutions, setInstitutions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Función para obtener las instituciones al cargar el componente
//   useEffect(() => {
//     const fetchInstitutions = async () => {
//       try {
//         const response = await getInstitutions(); // Llamar al servicio
//         setInstitutions(response.data); // Guardar los datos en el estado
//       } catch (error) {
//         console.error("Error al obtener las instituciones:", error);
//         setError("Hubo un error al obtener las instituciones.");
//       } finally {
//         setLoading(false); // Termina el estado de carga
//       }
//     };

//     fetchInstitutions(); // Ejecutar la función al montar el componente
//   }, []);

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
//             {institution.name} - {institution.type}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InstitutionList;

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

//   // En tu componente, cuando cambies el estado de is_active, primero obtén los datos de la institución y luego envíalos:
//   const toggleActiveStatus = async (institutionId) => {
//     try {
//       const institution = institutions.find((i) => i.id === institutionId); // Encuentra la institución completa
//       const updatedData = { ...institution, is_active: !institution.is_active }; // Actualiza solo el campo is_active
//       await updateInstitutionStatus(institutionId, updatedData); // Enviar los datos actualizados
//       // Actualizar la lista de instituciones en el estado
//       setInstitutions(
//         institutions.map((i) => (i.id === institutionId ? updatedData : i))
//       );
//     } catch (error) {
//       console.error(
//         "Error al actualizar el estado de la institución:",
//         error.response?.data || error
//       );
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
//             {institution.name} - {institution.type} -{" "}
//             {institution.is_active ? "Activa" : "Inactiva"}{" "}
//             <button
//               onClick={() =>
//                 toggleActiveStatus(institution.id, institution.is_active)
//               }
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
    try {
      const institution = institutions.find((i) => i.id === institutionId); // Encuentra la institución completa
      const updatedData = {
        name: institution.name, // Mantener el campo name
        phone_number: institution.phone_number, // Mantener el campo phone_number
        is_active: !institution.is_active, // Solo actualiza el campo is_active
      };

      await updateInstitutionStatus(institutionId, updatedData); // Enviar el objeto actualizado

      // Actualizar la lista de instituciones en el estado
      setInstitutions(
        institutions.map((i) =>
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
      console.log(`No se pudo actualizar la institución ${institutionId}.`); // Log de error
    }
  };

  if (loading) {
    return <p>Cargando instituciones...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Lista de Instituciones</h2>
      <ul>
        {institutions.map((institution) => (
          <li key={institution.id}>
            {institution.name} - {institution.type} -{" "}
            {institution.is_active ? "Activa" : "Inactiva"}{" "}
            <button
              onClick={() => toggleActiveStatus(institution.id)} // Solo pasar el ID
            >
              {institution.is_active ? "Desactivar" : "Activar"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstitutionList;
