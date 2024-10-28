import React, { useState, useEffect } from "react";
import AdminPagesList from "../pages/AdminPagesList";
import { Link, useNavigate } from "react-router-dom";
import { checkLoggedInUser, handleLogout as logout } from "../services/service"; // Importar las funciones del archivo de servicios
// import Control from "../components/Control";
import { useParams } from "react-router-dom";
import FooterPage from "./FooterPage";
import CampusList from "../components/CampusList";
import CampusForm from "../components/CampusForm";
import NavBar from "./main/NavBar";
import InstitutionForm from "./InstitutionForm";
import InstitutionList from "./InstitutionList";
import CourseForm from "../components/CourseForm";
import AdminCourseList from "../components/AdminCourseList";
import EnrollmentList from "../components/EnrollmentList";
import EnrollmentForm from "../components/EnrollementForm";
import Modal from "../components/Modal";
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
        return (
          <div>
            <InstitutionForm />
            <InstitutionList />
          </div>
        );
      case "Campus":
        return (
          <div>
            <CampusForm /> <CampusList />
          </div>
        ); // Reemplaza esto con el componente Campus si lo tienes
      case "Courses":
        return (
          <div>
            <CourseForm />
            <AdminCourseList />
          </div>
        ); // Reemplaza esto con el componente Courses si lo tienes
      case "Enrollments":
        return (
          <div>
            {/* <EnrollmentForm/> */}
            <EnrollmentForm />
            <EnrollmentList />
            {/* <Modal/> */}
          </div>
        ); // Reemplaza esto con el componente Courses si lo tienes
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

// import LocationForm from "../components/LocationForm"; // Importar el componente

// import React, { useState, useEffect } from "react";
// import AdminPagesList from "../pages/AdminPagesList";
// import { Link, useNavigate } from "react-router-dom";
// import { checkLoggedInUser, handleLogout as logout } from "../services/service"; // Importar las funciones del archivo de servicios
// // import Control from "../components/Control";
// import { useParams } from "react-router-dom";
// import FooterPage from "./FooterPage";
// import CampusList from "../components/CampusList";
// import CampusForm from "../components/CampusForm";
// import NavBar from "./main/NavBar";
// import InstitutionForm from "./InstitutionForm";
// import InstitutionList from "./InstitutionList";
// import CourseForm from "../components/CourseForm";
// import AdminCourseList from "../components/AdminCourseList";
// import EnrollmentList from "../components/EnrollmentList";
// import EnrollmentForm from "../components/EnrollementForm";
// import Modal from "../components/Modal";
// const Control = () => {
//   const { pageId } = useParams(); // Captura el parámetro de la URL

//   const [isLoggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const verifyUser = async () => {
//       try {
//         const user = await checkLoggedInUser(); // Usar la función de servicios para verificar el usuario
//         setLoggedIn(true);
//         setUsername(user.username);
//         console.log(user.is_staff);
//       } catch (error) {
//         setLoggedIn(false);
//         setUsername("");
//       }
//     };
//     verifyUser();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await logout(); // Usar la función de servicios para cerrar sesión
//       setLoggedIn(false);
//       setUsername("");
//       navigate("/account"); // Redirigir después de cerrar sesión
//     } catch (error) {
//       console.error("Failed to logout", error.message);
//     }
//   };

//   // Función para renderizar el componente correspondiente según el pageId
//   // const renderPageContent = () => {
//   //   switch (pageId) {
//   //     case "Institutions":
//   //       return (
//   //         <div>
//   //           <InstitutionForm />
//   //           <InstitutionList />
//   //         </div>
//   //       );
//   //     case "Campus":
//   //       return (
//   //         <div>
//   //           <CampusForm />{" "}
//   //           <CampusList />
//   //         </div>
//   //       ); // Reemplaza esto con el componente Campus si lo tienes
//   //     case "Courses":
//   //       return (
//   //         <div>
//   //           <CourseForm />
//   //           <AdminCourseList/>
//   //         </div>
//   //       ); // Reemplaza esto con el componente Courses si lo tienes
//   //       case "Enrollments":
//   //         return (
//   //           <div>
//   //        {/* <EnrollmentForm/> */}
//   //        <EnrollmentForm/>
//   //        <EnrollmentList/>
//   //        {/* <Modal/> */}
//   //           </div>
//   //         ); // Reemplaza esto con el componente Courses si lo tienes
//   //     default:
//   //       return <div>Seleccione una página</div>; // Mensaje por defecto
//   //   }
//   // };

//   const renderPageContent = () => {
//     switch (pageId) {
//       case "Institutions":
//         return (
//           <div>
//             <InstitutionForm />
//             <InstitutionList />
//           </div>
//         );
//       case "Campus":
//         return (
//           <div>
//             <CampusForm />
//             <CampusList />
//           </div>
//         );
//       case "Courses":
//         return (
//           <div>
//             <CourseForm />
//             <AdminCourseList />
//           </div>
//         );
//       case "Enrollments":
//         return (
//           <div>
//             <EnrollmentForm />
//             <EnrollmentList />
//           </div>
//         );
//       case "Locations": // Agrega el caso para Locations
//         return <LocationForm />;
//       default:
//         return <div>Seleccione una página</div>;
//     }
//   };
//   return (
//     <>
//       {/* <NavBar /> */}
//       {/* <NavBar/> */}
//       <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />{" "}
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
