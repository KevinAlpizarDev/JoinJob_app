// import React, { useState, useEffect } from "react";
// import { getAllCampuses, updateCampusStatus } from "../services/service";

// const CampusList = () => {
//   const [campuses, setCampuses] = useState([]); // Estado para almacenar la lista de campus
//   const [loading, setLoading] = useState(true); // Estado de carga
//   const [error, setError] = useState(null); // Estado de error

//   // Cargar los campus al montar el componente
//   useEffect(() => {
//     const fetchCampuses = async () => {
//       try {
//         const response = await getAllCampuses(); // Llamada al servicio para obtener los campus
//         setCampuses(response); // Guardar la lista de campus en el estado
//       } catch (error) {
//         console.error("Error al obtener los campus:", error);
//         setError("Hubo un error al obtener los campus.");
//       } finally {
//         setLoading(false); // Dejar de mostrar el estado de carga
//       }
//     };

//     fetchCampuses();
//   }, []);

//   // Función para alternar el estado activo/inactivo de un campus
//   const toggleActiveStatus = async (campusId, currentStatus) => {
//     const confirmAction = window.confirm(
//       `¿Estás seguro de que deseas ${
//         currentStatus ? "desactivar" : "activar"
//       } este campus?`
//     );
//     if (!confirmAction) return;

//     try {
//       const updatedStatus = !currentStatus;
//       await updateCampusStatus(campusId, updatedStatus); // Llamada para actualizar el estado

//       // Actualizar el estado local de los campus
//       setCampuses(
//         campuses.map((campus) =>
//           campus.id === campusId
//             ? { ...campus, is_active: updatedStatus }
//             : campus
//         )
//       );
//       console.log(
//         `Campus ${campusId} ${
//           updatedStatus ? "activado" : "desactivado"
//         } exitosamente`
//       );
//     } catch (error) {
//       console.error("Error al actualizar el estado del campus:", error);
//       setError("No se pudo actualizar el estado del campus.");
//     }
//   };

//   // Manejar el estado de carga y error
//   if (loading) return <p>Cargando campus...</p>;
//   if (error) return <p>{error}</p>;

//   // Renderizado de la tabla de campus
//   return (
//     <div>
//       <h2>Lista de Campus</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Institución</th>
//             <th>Nombre</th>
//             <th>Provincia</th>
//             <th>Cantón</th>
//             <th>Distrito</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {campuses.map((campus) => (
//             <tr key={campus.id}>
//               <td>{campus.institution_name}</td>
//               <td>{campus.name}</td>
//               <td>{campus.province}</td>
//               <td>{campus.canton}</td>
//               <td>{campus.district}</td>
//               <td>
//                 <button
//                   onClick={() =>
//                     toggleActiveStatus(campus.id, campus.is_active)
//                   }
//                 >
//                   {campus.is_active ? "Desactivar" : "Activar"}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CampusList;


import React, { useState, useEffect } from "react";
import { getAllCampuses, updateCampusStatus } from "../services/service";

const CampusList = () => {
  const [campuses, setCampuses] = useState([]); // Estado para almacenar la lista de campus
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Cargar los campus al montar el componente
  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        const response = await getAllCampuses(); // Llamada al servicio para obtener los campus
        setCampuses(response); // Guardar la lista de campus en el estado
      } catch (error) {
        console.error("Error al obtener los campus:", error);
        setError("Hubo un error al obtener los campus.");
      } finally {
        setLoading(false); // Dejar de mostrar el estado de carga
      }
    };

    fetchCampuses();
  }, []);

  // Función para alternar el estado activo/inactivo de un campus
  const toggleActiveStatus = async (campusId, currentStatus) => {
    const confirmAction = window.confirm(
      `¿Estás seguro de que deseas ${currentStatus ? "desactivar" : "activar"} este campus?`
    );
    if (!confirmAction) return;

    try {
      const updatedStatus = !currentStatus;
      await updateCampusStatus(campusId, updatedStatus); // Llamada para actualizar el estado

      // Actualizar el estado local de los campus
      setCampuses((prevCampuses) =>
        prevCampuses.map((campus) =>
          campus.id === campusId
            ? { ...campus, is_active: updatedStatus }
            : campus
        )
      );
      console.log(
        `Campus ${campusId} ${updatedStatus ? "activado" : "desactivado"} exitosamente`
      );
    } catch (error) {
      console.error("Error al actualizar el estado del campus:", error);
      setError("No se pudo actualizar el estado del campus.");
    }
  };

  // Manejar el estado de carga y error
  if (loading) return <p>Cargando campus...</p>;
  if (error) return <p>{error}</p>;

  // Mensaje cuando no hay campus disponibles
  if (campuses.length === 0) {
    return <p>No hay campus disponibles.</p>;
  }

  // Renderizado de la tabla de campus
  return (
    <div>
      <h2>Lista de Campus</h2>
      <table>
        <thead>
          <tr>
            <th>Institución</th>
            <th>Nombre</th>
            <th>Provincia</th>
            <th>Cantón</th>
            <th>Distrito</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {campuses.map((campus) => (
            <tr key={campus.id}>
              <td>{campus.institution_name}</td>
              <td>{campus.name}</td>
              <td>{campus.province}</td>
              <td>{campus.canton}</td>
              <td>{campus.district}</td>
              <td>
                <button
                  onClick={() => toggleActiveStatus(campus.id, campus.is_active)}
                >
                  {campus.is_active ? "Desactivar" : "Activar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampusList;
