// import React from 'react';
// import ControlButton from './ControlButton';
// import AdminPagesList from '../pages/AdminPagesList';
// const Control = () => {
//   return (
//     <>
//       <section className="flex h-screen">
//         {/* Primera mitad - Color de fondo rojo */}
//         <div className="w-1/2 flex justify-center items-center">
//         {/* <h1 className="text-white text-4xl font-bold">Home</h1> */}
// <AdminPagesList/>
//         </div>

//         {/* Segunda mitad - Color de fondo azul */}
//         <div className="w-1/2 bg-blue-500 flex justify-center items-center">
//           <h1 className="text-white text-4xl font-bold">.</h1>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Control;
import React from "react";
import AdminPagesList from "../pages/AdminPagesList";
import { useParams } from "react-router-dom";

const Control = () => {
  const { pageId } = useParams(); // Captura el parámetro de la URL

  return (
    <section className="flex h-screen">
      {/* Sección izquierda con enlaces */}
      <div className="w-1/2 flex justify-center items-center">
        <AdminPagesList />
      </div>

      {/* Sección derecha donde se muestra el contenido */}
      <div className="w-1/2 bg-blue-500 flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">{pageId}</h1>{" "}
        {/* Muestra el id de la página */}
      </div>
    </section>
  );
};

export default Control;
