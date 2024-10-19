// // AdminPage.jsx
// import React from "react";
// import { useLogout } from "../utils/authUtils"; // Ajusta la ruta según sea necesario

// const AdminPage = () => {
//   const submitLogout = useLogout(); // Usa la función de logout

//   return (
//     <div>
//       <h1>Si Soy Admin!</h1>

//     </div>
//   );
// };

// export default AdminPage;

// AdminPage.jsx

import axios from "axios";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate para redireccionar
// // import { useLogout } from "../utils/authUtils"; // Asegúrate de ajustar la ruta
// import CourseList from "../components/CourseList"; // Importar el componente de lista de cursos
import CourseForm from "../components/CourseForm";
import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage"; // Importar el pie de página

const AdminPage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false); // Estado para verificar si el usuario está autenticado
  // const submitLogout = useLogout(); // Usa la función del hook
  const [username, setUsername] = useState(""); // Estado para almacenar el nombre de usuario
  const navigate = useNavigate(); // Crear una instancia de useNavigate para la navegación

  useEffect(() => {
    // Efecto para comprobar si el usuario está logueado
    const checkLoggedInUser = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Obtener el token de acceso del almacenamiento local
        if (token) {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`, // Configuración de autorización con el token
            },
          };
          const response = await axios.get(
            "http://127.0.0.1:8000/api/user/",
            config
          ); // Llamada a la API para obtener el usuario
          setLoggedIn(true); // Marcar al usuario como logueado
          setUsername(response.data.username); // Establecer el nombre de usuario desde la respuesta
          console.log(response.data.is_staff);
        } else {
          setLoggedIn(false); // Si no hay token, establecer estado de logueo como falso
          setUsername(""); // Limpiar el nombre de usuario
        }
      } catch (error) {
        setLoggedIn(false); // En caso de error, establecer estado de logueo como falso
        setUsername(""); // Limpiar el nombre de usuario
      }
    };
    checkLoggedInUser(); // Llamar a la función para comprobar el estado de logueo
  }, []); // Ejecutar solo al montar el componente

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken"); // Obtener el token de acceso
      const refreshToken = localStorage.getItem("refreshToken"); // Obtener el token de actualización

      if (accessToken && refreshToken) {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Configuración de autorización con el token de acceso
          },
        };
        await axios.post(
          "http://127.0.0.1:8000/api/logout/",
          { refresh: refreshToken }, // Enviar el token de actualización al servidor para cerrar sesión
          config
        );
        localStorage.removeItem("accessToken"); // Eliminar el token de acceso del almacenamiento local
        localStorage.removeItem("refreshToken"); // Eliminar el token de actualización del almacenamiento local
        setLoggedIn(false); // Establecer estado de logueo como falso
        setUsername(""); // Limpiar el nombre de usuario
        console.log("Log out successful!"); // Mensaje de éxito
        navigate("/account"); // Navegar a la ruta de cuenta después de cerrar sesión
      }
    } catch (error) {
      console.error("Failed to logout", error.response?.data || error.message); // Manejo de errores en caso de fallo
    }
  };

  return (


    <>
    <NavBar/>
    <div>
      {isLoggedIn ? ( // Verificar si el usuario está logueado
        <>
          <h2>Hi, admin {username} :)</h2>
          <button onClick={handleLogout}>Logout</button> 
          <CourseForm/>
          {/* <CourseList /> */}
          {/* Botón para cerrar sesión */}
          {/* <CourseList />{" "} */}
          {/* Mostrar la lista de cursos si el usuario está logueado */}
        </>
      ) : (
        // Si el usuario no está logueado, redirigir a la página de cuenta
        <Link to="/account">
          {/* Aquí podrías agregar un mensaje o botón para que los usuarios inicien sesión */}
          {/* <h2>Por favor, inicia sesión para acceder a los cursos.</h2> */}
        </Link>
      )}
    </div>
    
    {/* <FooterPage/> */}
    </>
  );
};

export default AdminPage;
