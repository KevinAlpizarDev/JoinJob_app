// export default function Info({ courseId, latitude, longitude }) {
//     const handleClick = () => {
//       console.log("ID del curso:", courseId); // Registra el ID del curso
//       console.log("Latitud:", latitude); // Registra la latitud
//       console.log("Longitud:", longitude); // Registra la longitud
//     };

//     return (
//       <button
//         onClick={handleClick}
//         className="relative p-3 m-3 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-12"
//         aria-label="Información"
//       >
//         <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-75"></div>
//         {/* Icono simulado en lugar de Info */}
//         <span className="relative z-10 w-6 h-6 text-white"></span>
//         <div className="text-xs text-white mt-1">
//           {`Lat: ${latitude}, Lon: ${longitude}`} {/* Muestra la latitud y longitud */}
//         </div>
//       </button>
//     );
//   }

// import { useState } from "react";
// import MapView from "./map/MapView";

// export default function Info({ courseId, latitude, longitude }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleClick = () => {
//     console.log("ID del curso:", courseId);
//     console.log("Latitud:", latitude);
//     console.log("Longitud:", longitude);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <button
//         onClick={handleClick}
//         className="relative p-3 m-3 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-12"
//         aria-label="Información"
//       >
//         <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-75"></div>
//         <span className="relative z-10 w-6 h-6 text-white"></span>
//         {/* <div className="text-xs text-white mt-1">
//           {`Lat: ${latitude}, Lon: ${longitude}`}
//         </div> */}
//       </button>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
//           {/* <div className="bg-white p-6 rounded-lg z-10 shadow-lg max-w-md mx-auto">
//             <h2 className="text-lg font-bold mb-4">Información del Curso</h2>
//             <p>ID del curso: {courseId}</p>
//             <p>Latitud: {latitude}</p>
//             <p>Longitud: {longitude}</p>
//           </div> */}
//           {/* <h1>hola</h1> */}
//           <MapView/>
//             <button
//               onClick={closeModal}
//               className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
//             >
//               Cerrar
//             </button>
//         </div>
//       )}
//     </div>
//   );
// }
///////////////////////////////////////////////////////////////////////
// Info.js

// import { useState } from "react";
// import MapView from "./map/MapView";

// export default function Info({ courseId, latitude, longitude }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleClick = () => {
//     console.log("ID del curso:", courseId);
//     console.log("Latitud:", latitude);
//     console.log("Longitud:", longitude);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <button
//         onClick={handleClick}
//         className="relative p-3 m-3 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-12"
//         aria-label="Información"
//       >
//         <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-75"></div>
//         <span className="relative z-10 w-6 h-6 text-white"></span>
//       </button>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div
//             className="fixed inset-0 bg-black opacity-50"
//             onClick={closeModal}
//           ></div>
//           <div className="bg-white p-6 rounded-lg z-10 shadow-lg max-w-md mx-auto">
//             <MapView latitude={latitude} longitude={longitude} />
//             <button
//               onClick={closeModal}
//               className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none"
//             >
//               Cerrar
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// import { useState } from "react";
// import MapView from "./map/MapView";

// export default function Info({ courseId, latitude, longitude }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleClick = () => {
//     console.log("ID del curso:", courseId);
//     console.log("Latitud:", latitude);
//     console.log("Longitud:", longitude);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <button
//         onClick={handleClick}
//         className="relative p-3 m-3 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500"
//         aria-label="Información"
//       >
//         <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-75"></div>
//         <span className="relative z-10 w-6 h-6 text-white"></span>
//       </button>

//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           <div
//             className="absolute inset-0 bg-black opacity-50"
//             onClick={closeModal}
//           ></div>
//           <div className="relative bg-white rounded-lg shadow-lg w-full h-full max-w-6xl max-h-4xl flex flex-col">
//             <MapView latitude={latitude} longitude={longitude} />
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
//             >
//               Cerrar
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState } from "react";
import MapView from "./map/MapView";

export default function Info({ courseId, latitude, longitude }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    console.log("ID del curso:", courseId);
    console.log("Latitud:", latitude);
    console.log("Longitud:", longitude);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="relative p-3 m-3 bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500"
        aria-label="Información"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-75"></div>
        <span className="relative z-10 w-6 h-6 text-white"></span>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fondo oscuro */}
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          
          {/* Contenedor del modal */}
          <div className="relative bg-white rounded-lg shadow-lg w-[80%] h-[80%] max-w-4xl max-h-[600px] flex flex-col items-center justify-center">
            <MapView latitude={latitude} longitude={longitude} />

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
