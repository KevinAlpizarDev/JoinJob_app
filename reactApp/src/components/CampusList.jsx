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
//       setCampuses((prevCampuses) =>
//         prevCampuses.map((campus) =>
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

//   // Mensaje cuando no hay campus disponibles
//   if (campuses.length === 0) {
//     return <p>No hay campus disponibles.</p>;
//   }

//   // Renderizado de la tabla de campus
//   return (
//     <div className="relative flex flex-col rounded-extra-rounded bg-white shadow-sm border border-slate-200 w-full overflow-hidden">
//       <nav className="flex flex-col gap-1 p-1.5 overflow-y-auto">
//         {campuses.map((campus) => (
//           <div
//             key={campus.id}
//             className={`flex justify-between items-center mt-1 rounded-md transition-all ${
//               campus.is_active ? "hover:bg-slate-100" : "bg-gray-200"
//             }`}
//           >
//             <div
//               role="button"
//               className={`flex w-full items-center p-3 transition-all ${
//                 campus.is_active ? "text-slate-800" : "text-slate-500"
//               }`}
//             >
//               {campus.institution_name} - {campus.name} - {campus.province} -{" "}
//               {campus.canton} - {campus.district}
//             </div>
//             <button
//               className={`px-3 py-1 text-sm rounded-md text-white transition-all ${
//                 campus.is_active
//                   ? "bg-red-500 hover:bg-red-400"
//                   : "bg-green-500 hover:bg-green-400"
//               }`}
//               onClick={() => toggleActiveStatus(campus.id, campus.is_active)}
//             >
//               {campus.is_active ? "Desactivar" : "Activar"}
//             </button>
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default CampusList;

// import React, { useState, useEffect } from "react";
// import { getAllCampuses, updateCampusStatus } from "../services/service";
// import CampusForm from "./CampusForm"; // Importa el formulario de campus

// const CampusList = () => {
//   const [campuses, setCampuses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCampus, setSelectedCampus] = useState(null); // Estado para el campus seleccionado para editar

//   useEffect(() => {
//     const fetchCampuses = async () => {
//       try {
//         const response = await getAllCampuses();
//         setCampuses(response);
//       } catch (error) {
//         console.error("Error al obtener los campus:", error);
//         setError("Hubo un error al obtener los campus.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCampuses();
//   }, []);

//   const toggleActiveStatus = async (campusId, currentStatus) => {
//     const confirmAction = window.confirm(
//       `¿Estás seguro de que deseas ${
//         currentStatus ? "desactivar" : "activar"
//       } este campus?`
//     );
//     if (!confirmAction) return;

//     try {
//       const updatedStatus = !currentStatus;
//       await updateCampusStatus(campusId, updatedStatus);

//       setCampuses((prevCampuses) =>
//         prevCampuses.map((campus) =>
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

//   const handleEditCampus = (campus) => {
//     setSelectedCampus(campus); // Establece el campus seleccionado para editar
//   };

//   const handleCloseEdit = () => {
//     setSelectedCampus(null); // Cierra el formulario de edición
//   };

//   if (loading) return <p>Cargando campus...</p>;
//   if (error) return <p>{error}</p>;

//   if (campuses.length === 0) {
//     return <p>No hay campus disponibles.</p>;
//   }

//   return (
//     <div className="relative flex flex-col rounded-extra-rounded bg-white shadow-sm border border-slate-200 p-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">
//         Lista de Campus
//       </h2>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className="text-left py-2">Nombre</th>
//             <th className="text-left py-2">Estado</th>
//             <th className="text-left py-2">Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {campuses.map((campus) => (
//             <tr key={campus.id}>
//               <td className="py-2">{campus.name}</td>
//               <td className="py-2">
//                 {campus.is_active ? "Activo" : "Inactivo"}
//               </td>
//               <td className="py-2">
//                 <button
//                   onClick={() =>
//                     toggleActiveStatus(campus.id, campus.is_active)
//                   }
//                   className={`py-1 px-2 rounded-complete ${
//                     campus.is_active ? "bg-red-500" : "bg-green-500"
//                   } text-white`}
//                 >
//                   {campus.is_active ? "Desactivar" : "Activar"}
//                 </button>
//                 <button
//                   onClick={() => handleEditCampus(campus)}
//                   className="ml-2 py-1 px-2 bg-yellow-500 text-white rounded-complete"
//                 >
//                   Editar
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal de edición */}
//       {selectedCampus && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <CampusForm
//               campus={selectedCampus}
//               onClose={handleCloseEdit}
//               onUpdate={(updatedCampus) => {
//                 setCampuses((prev) =>
//                   prev.map((campus) =>
//                     campus.id === updatedCampus.id ? updatedCampus : campus
//                   )
//                 );
//                 handleCloseEdit();
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CampusList;

// import React, { useState, useEffect } from "react";
// import { getAllCampuses, updateCampusStatus } from "../services/service";
// import CampusForm from "./CampusForm";

// const CampusList = () => {
//   const [campuses, setCampuses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCampus, setSelectedCampus] = useState(null);

//   useEffect(() => {
//     const fetchCampuses = async () => {
//       try {
//         const response = await getAllCampuses();
//         setCampuses(response);
//       } catch (error) {
//         console.error("Error al obtener los campus:", error);
//         setError("Hubo un error al obtener los campus.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCampuses();
//   }, []);

//   const toggleActiveStatus = async (campusId, currentStatus) => {
//     const confirmAction = window.confirm(
//       `¿Estás seguro de que deseas ${
//         currentStatus ? "desactivar" : "activar"
//       } este campus?`
//     );
//     if (!confirmAction) return;

//     try {
//       const updatedStatus = !currentStatus;
//       await updateCampusStatus(campusId, updatedStatus);

//       setCampuses((prevCampuses) =>
//         prevCampuses.map((campus) =>
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

//   const handleEditCampus = (campus) => {
//     setSelectedCampus(campus);
//   };

//   const handleCloseEdit = () => {
//     setSelectedCampus(null);
//   };

//   if (loading) return <p>Cargando campus...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   if (campuses.length === 0) {
//     return <p>No hay campus disponibles.</p>;
//   }

//   return (
//     <div className="relative flex flex-col rounded-extra-rounded bg-white shadow-sm border border-slate-200 p-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">
//         Lista de Campus
//       </h2>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className="text-left py-2">Nombre</th>
//             <th className="text-left py-2">Estado</th>
//             <th className="text-left py-2">Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {campuses.map((campus) => (
//             <tr key={campus.id}>
//               <td className="py-2">{campus.name}</td>
//               <td className="py-2">
//                 {campus.is_active ? "Activo" : "Inactivo"}
//               </td>
//               <td className="py-2">
//                 <button
//                   onClick={() =>
//                     toggleActiveStatus(campus.id, campus.is_active)
//                   }
//                   className={`py-1 px-2 rounded-complete ${
//                     campus.is_active ? "bg-red-500" : "bg-green-500"
//                   } text-white`}
//                 >
//                   {campus.is_active ? "Desactivar" : "Activar"}
//                 </button>
//                 <button
//                   onClick={() => handleEditCampus(campus)}
//                   className="ml-2 py-1 px-2 bg-yellow-500 text-white rounded-complete"
//                 >
//                   Editar
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {selectedCampus && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <CampusForm
//               campus={selectedCampus}
//               onClose={handleCloseEdit}
//               onUpdate={(updatedCampus) => {
//                 setCampuses((prev) =>
//                   prev.map((campus) =>
//                     campus.id === updatedCampus.id ? updatedCampus : campus
//                   )
//                 );
//                 handleCloseEdit();
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CampusList;

import React, { useState, useEffect, useRef } from "react";
import { getAllCampuses, updateCampusStatus } from "../services/service";
import CampusForm from "./CampusForm";

const CampusList = () => {
  const [campuses, setCampuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState(null);

  const modalRef = useRef();

  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        const response = await getAllCampuses();
        setCampuses(response);
      } catch (error) {
        console.error("Error al obtener los campus:", error);
        setError("Hubo un error al obtener los campus.");
      } finally {
        setLoading(false);
      }
    };

    fetchCampuses();
  }, []);

  const toggleActiveStatus = async (campusId, currentStatus) => {
    const confirmAction = window.confirm(
      `¿Estás seguro de que deseas ${
        currentStatus ? "desactivar" : "activar"
      } este campus?`
    );
    if (!confirmAction) return;

    try {
      const updatedStatus = !currentStatus;
      await updateCampusStatus(campusId, updatedStatus);

      setCampuses((prevCampuses) =>
        prevCampuses.map((campus) =>
          campus.id === campusId
            ? { ...campus, is_active: updatedStatus }
            : campus
        )
      );
    } catch (error) {
      console.error("Error al actualizar el estado del campus:", error);
      setError("No se pudo actualizar el estado del campus.");
    }
  };

  const handleEditCampus = (campus) => {
    setSelectedCampus(campus);
  };

  const handleCloseModal = () => {
    setSelectedCampus(null);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleCloseModal();
    }
  };

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (selectedCampus) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeKey);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedCampus]);

  if (loading) return <p>Cargando campus...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (campuses.length === 0) return <p>No hay campus disponibles.</p>;

  return (
    <div className="relative flex flex-col rounded-extra-rounded bg-secundary-light dark:bg-secundary-dark shadow-sm border dark:border-none border-slate-200 w-full overflow-hidden">
      <nav className="flex rounded-extra-rounded flex-col gap-1 p-1.5 overflow-y-auto">
        {campuses.map((campus) => (
          <div
            key={campus.id}
            className={`flex justify-between items-center mt-1 rounded-standard ${
              campus.is_active ? "text-white" : "bg-tertiary-dark text-white"
            }`}
          >
            <div
              role="button"
              className={`flex w-full items-center p-3 ${
                campus.is_active
                  ? "dark:text-secundary-light text-secundary-dark"
                  : "text-white"
              }`}
            >
              {campus.name}
            </div>
            <button
              className={`px-3 py-1 text-sm rounded-extra-rounded text-white ${
                campus.is_active
                  ? "bg-red-500 hover:bg-red-400"
                  : "bg-green-500 hover:bg-green-400"
              }`}
              onClick={() => toggleActiveStatus(campus.id, campus.is_active)}
            >
              {campus.is_active ? "Desactivar" : "Activar"}
            </button>
            <button
              className="px-3 py-1 ml-2 text-sm bg-blue-600 text-white rounded-extra-rounded hover:bg-blue-500"
              onClick={() => handleEditCampus(campus)}
            >
              Editar
            </button>
          </div>
        ))}
      </nav>

      {selectedCampus && (
        <div className="fixed dark:text-white inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md">
          <div
            ref={modalRef}
            className="w-[45%] p-6 rounded bg-primary-light dark:bg-secundary-dark"
          >
            <h3 className="text-lg font-bold mb-4">Editar Campus</h3>
            <CampusForm
              campus={selectedCampus}
              onClose={handleCloseModal}
              onUpdate={(updatedCampus) => {
                setCampuses((prev) =>
                  prev.map((campus) =>
                    campus.id === updatedCampus.id ? updatedCampus : campus
                  )
                );
                handleCloseModal();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CampusList;




//  // Asegúrate de que la ruta sea correcta


// import React, { useState, useEffect, useRef } from "react";
// import { getAllCampuses, updateCampusStatus } from "../services/service";
// import CampusForm from "./CampusForm";
// import Alert from "../components/main/Alert";
// const CampusList = () => {
//   const [campuses, setCampuses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null); // Estado para el mensaje de éxito
//   const [selectedCampus, setSelectedCampus] = useState(null);

//   const modalRef = useRef();

//   useEffect(() => {
//     const fetchCampuses = async () => {
//       try {
//         const response = await getAllCampuses();
//         setCampuses(response);
//       } catch (error) {
//         console.error("Error al obtener los campus:", error);
//         setError("Hubo un error al obtener los campus.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCampuses();
//   }, []);

//   const toggleActiveStatus = async (campusId, currentStatus) => {
//     const confirmAction = window.confirm(
//       `¿Estás seguro de que deseas ${
//         currentStatus ? "desactivar" : "activar"
//       } este campus?`
//     );
//     if (!confirmAction) return;

//     try {
//       const updatedStatus = !currentStatus;
//       await updateCampusStatus(campusId, updatedStatus);

//       setCampuses((prevCampuses) =>
//         prevCampuses.map((campus) =>
//           campus.id === campusId
//             ? { ...campus, is_active: updatedStatus }
//             : campus
//         )
//       );

//       // Mostrar mensaje de éxito
//       setSuccessMessage(
//         `Campus ${updatedStatus ? "activado" : "desactivado"} con éxito.`
//       );
//       setError(null); // Limpiar el mensaje de error si hay éxito
//     } catch (error) {
//       console.error("Error al actualizar el estado del campus:", error);
//       setError("No se pudo actualizar el estado del campus.");
//       setSuccessMessage(null); // Limpiar el mensaje de éxito si hay error
//     }
//   };

//   const handleEditCampus = (campus) => {
//     setSelectedCampus(campus);
//   };

//   const handleCloseModal = () => {
//     setSelectedCampus(null);
//   };

//   const handleOutsideClick = (e) => {
//     if (modalRef.current && !modalRef.current.contains(e.target)) {
//       handleCloseModal();
//     }
//   };

//   const handleEscapeKey = (e) => {
//     if (e.key === "Escape") {
//       handleCloseModal();
//     }
//   };

//   useEffect(() => {
//     if (selectedCampus) {
//       document.addEventListener("mousedown", handleOutsideClick);
//       document.addEventListener("keydown", handleEscapeKey);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       document.removeEventListener("keydown", handleEscapeKey);
//     };
//   }, [selectedCampus]);

//   const handleCloseAlert = () => {
//     setError(null); // Cierra el mensaje de error
//     setSuccessMessage(null); // Cierra el mensaje de éxito
//   };

//   if (loading) return <p>Cargando campus...</p>;
//   if (error)
//     return (
//       <Alert type="error" message={error} onClose={handleCloseAlert} />
//     );
//   if (successMessage)
//     return (
//       <Alert
//         type="success"
//         message={successMessage}
//         onClose={handleCloseAlert}
//       />
//     );
//   if (campuses.length === 0) return <p>No hay campus disponibles.</p>;

//   return (
//     <div className="relative flex flex-col rounded-extra-rounded bg-secundary-light dark:bg-secundary-dark shadow-sm border dark:border-none border-slate-200 w-full overflow-hidden">
//       <nav className="flex rounded-extra-rounded flex-col gap-1 p-1.5 overflow-y-auto">
//         {campuses.map((campus) => (
//           <div
//             key={campus.id}
//             className={`flex justify-between items-center mt-1 rounded-standard ${
//               campus.is_active ? "text-white" : "bg-tertiary-dark text-white"
//             }`}
//           >
//             <div
//               role="button"
//               className={`flex w-full items-center p-3 ${
//                 campus.is_active
//                   ? "dark:text-secundary-light text-secundary-dark"
//                   : "text-white"
//               }`}
//             >
//               {campus.name}
//             </div>
//             <button
//               className={`px-3 py-1 text-sm rounded-extra-rounded text-white ${
//                 campus.is_active
//                   ? "bg-red-500 hover:bg-red-400"
//                   : "bg-green-500 hover:bg-green-400"
//               }`}
//               onClick={() => toggleActiveStatus(campus.id, campus.is_active)}
//             >
//               {campus.is_active ? "Desactivar" : "Activar"}
//             </button>
//             <button
//               className="px-3 py-1 ml-2 text-sm bg-blue-600 text-white rounded-extra-rounded hover:bg-blue-500"
//               onClick={() => handleEditCampus(campus)}
//             >
//               Editar
//             </button>
//           </div>
//         ))}
//       </nav>

//       {selectedCampus && (
//         <div className="fixed dark:text-white inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-md">
//           <div
//             ref={modalRef}
//             className="w-[45%] p-6 rounded bg-primary-light dark:bg-secundary-dark"
//           >
//             <h3 className="text-lg font-bold mb-4">Editar Campus</h3>
//             <CampusForm
//               campus={selectedCampus}
//               onClose={handleCloseModal}
//               onUpdate={(updatedCampus) => {
//                 setCampuses((prev) =>
//                   prev.map((campus) =>
//                     campus.id === updatedCampus.id ? updatedCampus : campus
//                   )
//                 );
//                 handleCloseModal();
//                 setSuccessMessage("Campus editado con éxito."); // Mensaje de éxito para edición
//                 setError(null); // Limpiar el mensaje de error si hay éxito
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CampusList;
