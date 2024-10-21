


// import React from "react";
// import AdminPagesList from "../pages/AdminPagesList";
// import { useParams } from "react-router-dom";
// import FooterPage from "./FooterPage";
// const Control = () => {
//   const { pageId } = useParams(); // Captura el parámetro de la URL

//   return (
//     <>
//     <section className="flex h-screen">
//       {/* Sección izquierda con enlaces */}
//       <div className="w-1/2 flex justify-center items-center">
//         <AdminPagesList />
//       </div>

//       {/* Sección derecha donde se muestra el contenido */}
//       <div className="w-1/2 bg-blue-500 flex justify-center items-center">
//         <h1 className="text-white text-4xl font-bold">{pageId}</h1>{" "}
//         {/* Muestra el id de la página */}
//       </div>
//     </section>
//     <FooterPage/>
    
//     </>
    
//   );
// };

// export default Control;
import React from "react";
import AdminPagesList from "../pages/AdminPagesList";
import { useParams } from "react-router-dom";
import FooterPage from "./FooterPage";
import CampusForm from "../components/CampusForm"; // Asegúrate de que la ruta sea correcta
import NavBar from "./main/NavBar";
const Control = () => {
  const { pageId } = useParams(); // Captura el parámetro de la URL

  // Función para renderizar el componente correspondiente según el pageId
  const renderPageContent = () => {
    switch (pageId) {
      case "Institutions":
        return <CampusForm />;
      case "Campus":
        return <div>Contenido del Campus</div>; // Reemplaza esto con el componente Campus si lo tienes
      case "Courses":
        return <div>Contenido de Cursos</div>; // Reemplaza esto con el componente Courses si lo tienes
      default:
        return <div>Seleccione una página</div>; // Mensaje por defecto
    }
  };

  return (
    <>
    
      <section className="flex h-screen">
        {/* Sección izquierda con enlaces */}
        <div className="w-1/2 flex justify-center items-center">
          <AdminPagesList />
        </div>

        {/* Sección derecha donde se muestra el contenido */}
        <div className="w-1/2 bg-blue-500 flex justify-center items-center">
          {renderPageContent()} {/* Renderiza el contenido basado en pageId */}
        </div>
      </section>
      <FooterPage />
    </>
  );
};

export default Control;
