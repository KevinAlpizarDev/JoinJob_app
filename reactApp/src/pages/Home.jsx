// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate para redireccionar
// import axios from "axios";
// import CourseList from "../components/CourseList"; // Importar el componente de lista de cursos
// import NavBar from "../components/main/NavBar"; // Importar la barra de navegación
// import FooterPage from "../components/FooterPage"; // Importar el pie de página

// export default function Home() {
//   const [username, setUsername] = useState(""); // Estado para almacenar el nombre de usuario
//   const [isLoggedIn, setLoggedIn] = useState(false); // Estado para verificar si el usuario está autenticado
//   const navigate = useNavigate(); // Crear una instancia de useNavigate para la navegación

//   useEffect(() => {
//     // Efecto para comprobar si el usuario está logueado
//     const checkLoggedInUser = async () => {
//       try {
//         const token = localStorage.getItem("accessToken"); // Obtener el token de acceso del almacenamiento local
//         if (token) {
//           const config = {
//             headers: {
//               Authorization: `Bearer ${token}`, // Configuración de autorización con el token
//             },
//           };
//           const response = await axios.get(
//             "http://127.0.0.1:8000/api/user/",
//             config
//           ); // Llamada a la API para obtener el usuario
//           setLoggedIn(true); // Marcar al usuario como logueado
//           setUsername(response.data.username); // Establecer el nombre de usuario desde la respuesta
//         } else {
//           setLoggedIn(false); // Si no hay token, establecer estado de logueo como falso
//           setUsername(""); // Limpiar el nombre de usuario
//         }
//       } catch (error) {
//         setLoggedIn(false); // En caso de error, establecer estado de logueo como falso
//         setUsername(""); // Limpiar el nombre de usuario
//       }
//     };
//     checkLoggedInUser(); // Llamar a la función para comprobar el estado de logueo
//   }, []); // Ejecutar solo al montar el componente

//   const handleLogout = async () => {
//     try {
//       const accessToken = localStorage.getItem("accessToken"); // Obtener el token de acceso
//       const refreshToken = localStorage.getItem("refreshToken"); // Obtener el token de actualización

//       if (accessToken && refreshToken) {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${accessToken}`, // Configuración de autorización con el token de acceso
//           },
//         };
//         await axios.post(
//           "http://127.0.0.1:8000/api/logout/",
//           { refresh: refreshToken }, // Enviar el token de actualización al servidor para cerrar sesión
//           config
//         );
//         localStorage.removeItem("accessToken"); // Eliminar el token de acceso del almacenamiento local
//         localStorage.removeItem("refreshToken"); // Eliminar el token de actualización del almacenamiento local
//         setLoggedIn(false); // Establecer estado de logueo como falso
//         setUsername(""); // Limpiar el nombre de usuario
//         console.log("Log out successful!"); // Mensaje de éxito
//         navigate("/account"); // Navegar a la ruta de cuenta después de cerrar sesión
//       }
//     } catch (error) {
//       console.error("Failed to logout", error.response?.data || error.message); // Manejo de errores en caso de fallo
//     }
//   };

//   return (
//     <>
//       <NavBar />
//       <div>
//         {isLoggedIn ? ( // Verificar si el usuario está logueado
//           <>
//             <h2>Hi, {username}. Thanks for logging in!</h2>
//             <button onClick={handleLogout}>Logout</button>{" "}
//             {/* Botón para cerrar sesión */}
//             <CourseList />{" "}
//             {/* Mostrar la lista de cursos si el usuario está logueado */}
//           </>
//         ) : (
//           // Si el usuario no está logueado, redirigir a la página de cuenta
//           <Link to="/account">
//             {/* Aquí podrías agregar un mensaje o botón para que los usuarios inicien sesión */}
//             <h2>Por favor, inicia sesión para acceder a los cursos.</h2>
//           </Link>
//         )}
//       </div>
//       <FooterPage />
//     </>
//   );
// }
// // Explicación de las Cambios y Adiciones:
// // Comprobación de la Autenticación:

// // Al iniciar, se verifica si hay un accessToken en el almacenamiento local. Si existe, se intenta hacer una llamada a la API para obtener información del usuario.
// // Si la llamada es exitosa, se establece el estado isLoggedIn en true y se almacena el nombre de usuario.
// // Manejo de Cierre de Sesión:

// // En el handleLogout, se eliminan ambos tokens del almacenamiento local, se actualiza el estado de logueo y se navega a la página de cuenta.
// // Renderizado Condicional:

// // Se muestra un saludo al usuario si está autenticado y un botón para cerrar sesión.
// // Si el usuario no está autenticado, se muestra un mensaje pidiendo que inicie sesión, junto con un enlace a la página de cuenta.
// // Posibles Problemas y Errores:
// // Error en la Llamada a la API: Si el backend no responde o si hay un problema con el token, se capturará un error y se actualizará el estado de isLoggedIn a false.
// // Redirección Inmediata: Si deseas redirigir al usuario a la página de cuenta inmediatamente si no está autenticado, deberías hacerlo dentro del useEffect después de la verificación de autenticación.
// // Sugerencia Adicional:
// // Asegúrate de que la URL de la API y el manejo de tokens se ajusten a la configuración de tu backend y la forma en que se manejan las sesiones. Además, verifica que el backend esté preparado para manejar la solicitud de cierre de sesión correctamente.

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate para redireccionar
import axios from "axios";
import CourseList from "../components/CourseList"; // Importar el componente de lista de cursos
import NavBar from "../components/main/NavBar"; // Importar la barra de navegación
import FooterPage from "../components/FooterPage"; // Importar el pie de página
import { getCurrentUser } from "../services/service";

export default function Home() {
  const [username, setUsername] = useState(""); // Estado para almacenar el nombre de usuario
  const [isLoggedIn, setLoggedIn] = useState(false); // Estado para verificar si el usuario está autenticado
  const navigate = useNavigate(); // Crear una instancia de useNavigate para la navegación





  // useEffect(() => {
  //   getCurrentUser()
  //     .then((response) => {
  //       console.log(response.data); // Inspeccionar la respuesta en el componente
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);






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
      <NavBar />
      <div>
        {isLoggedIn ? ( // Verificar si el usuario está logueado
          <>
            <h2>Hi, {username}. Thanks for logging in!</h2>
            <button onClick={handleLogout}>Logout</button>{" "}
            {/* Botón para cerrar sesión */}
            <CourseList />{" "}
            {/* Mostrar la lista de cursos si el usuario está logueado */}
          </>
        ) : (
          // Si el usuario no está logueado, redirigir a la página de cuenta
          <Link to="/account">
            {/* Aquí podrías agregar un mensaje o botón para que los usuarios inicien sesión */}
            <h2>Por favor, inicia sesión para acceder a los cursos.</h2>
          </Link>
        )}
      </div>
      <FooterPage />
    </>
  );
}
// Explicación de las Cambios y Adiciones:
// Comprobación de la Autenticación:

// Al iniciar, se verifica si hay un accessToken en el almacenamiento local. Si existe, se intenta hacer una llamada a la API para obtener información del usuario.
// Si la llamada es exitosa, se establece el estado isLoggedIn en true y se almacena el nombre de usuario.
// Manejo de Cierre de Sesión:

// En el handleLogout, se eliminan ambos tokens del almacenamiento local, se actualiza el estado de logueo y se navega a la página de cuenta.
// Renderizado Condicional:

// Se muestra un saludo al usuario si está autenticado y un botón para cerrar sesión.
// Si el usuario no está autenticado, se muestra un mensaje pidiendo que inicie sesión, junto con un enlace a la página de cuenta.
// Posibles Problemas y Errores:
// Error en la Llamada a la API: Si el backend no responde o si hay un problema con el token, se capturará un error y se actualizará el estado de isLoggedIn a false.
// Redirección Inmediata: Si deseas redirigir al usuario a la página de cuenta inmediatamente si no está autenticado, deberías hacerlo dentro del useEffect después de la verificación de autenticación.
// Sugerencia Adicional:
// Asegúrate de que la URL de la API y el manejo de tokens se ajusten a la configuración de tu backend y la forma en que se manejan las sesiones. Además, verifica que el backend esté preparado para manejar la solicitud de cierre de sesión correctamente.
