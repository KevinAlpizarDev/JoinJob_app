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

// import React from "react";
// import AdminPagesList from "../pages/AdminPagesList";
// import { useParams } from "react-router-dom";
// import FooterPage from "./FooterPage";
// import CampusForm from "../components/CampusForm"; // Asegúrate de que la ruta sea correcta
// import NavBar from "./main/NavBar";
// const Control = () => {
//   const { pageId } = useParams(); // Captura el parámetro de la URL

//   // Función para renderizar el componente correspondiente según el pageId
//   const renderPageContent = () => {
//     switch (pageId) {
//       case "Institutions":
//         return <CampusForm />;
//       case "Campus":
//         return <div>Contenido del Campus</div>; // Reemplaza esto con el componente Campus si lo tienes
//       case "Courses":
//         return <div>Contenido de Cursos</div>; // Reemplaza esto con el componente Courses si lo tienes
//       default:
//         return <div>Seleccione una página</div>; // Mensaje por defecto
//     }
//   };

//   return (
//     <>

//       <section className="flex h-screen">
//         {/* Sección izquierda con enlaces */}
//         <div className="w-1/2 flex justify-center items-center">
//           <AdminPagesList />
//         </div>

//         {/* Sección derecha donde se muestra el contenido */}
//         <div className="w-1/2 bg-blue-500 flex justify-center items-center">
//           {renderPageContent()} {/* Renderiza el contenido basado en pageId */}
//         </div>
//       </section>
//       <FooterPage />
//     </>
//   );
// };

// export default Control;


import React, { useState, useEffect } from "react";
import AdminPagesList from "../pages/AdminPagesList";
import { Link, useNavigate } from "react-router-dom";
 import { checkLoggedInUser, handleLogout as logout } from "../services/service"; // Importar las funciones del archivo de servicios
// import Control from "../components/Control";
import { useParams } from "react-router-dom";
import FooterPage from "./FooterPage";
import CampusForm from "../components/CampusForm"; // Asegúrate de que la ruta sea correcta
import NavBar from "./main/NavBar";
const Control = () => {



  const { pageId } = useParams(); // Captura el parámetro de la URL




  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const user = await checkLoggedInUser(); // Usar la función de servicios para verificar el usuario
        setLoggedIn(true);
        setUsername(user.username);
        console.log(user.is_staff);
      } catch (error) {
        setLoggedIn(false);
        setUsername("");
      }
    };
    verifyUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logout(); // Usar la función de servicios para cerrar sesión
      setLoggedIn(false);
      setUsername("");
      navigate("/account"); // Redirigir después de cerrar sesión
    } catch (error) {
      console.error("Failed to logout", error.message);
    }
  };


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

    
    {/* <NavBar /> */}
        {/* <NavBar/> */}
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />{" "}
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


