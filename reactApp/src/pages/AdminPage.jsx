// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { checkLoggedInUser, handleLogout as logout } from "../services/service"; // Importar las funciones del archivo de servicios
// import Control from "../components/Control";
// import NavBar from "../components/main/NavBar";
// import { checkLoggedInUser, handleLogout } from "../services/service";
// const AdminPage = () => {
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

//   return (
//     <>
//       <div className="bg-yellow-400">
//         <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogoutClick} />{" "}
//         {isLoggedIn ? (
//           <>
//             <h2>Hi, admin {username} :)</h2>
//             {/* <button onClick={handleLogout}>Logout</button> */}
//             <Control />
//           </>
//         ) : (
//           <Link to="/account">
//             {/* Aquí podrías agregar un mensaje o botón para que los usuarios inicien sesión */}
//           </Link>
//         )}
//       </div>
//     </>
//   );
// };

// export default AdminPage;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkLoggedInUser, handleLogout as logout } from "../services/service"; // Importar las funciones del archivo de servicios
import Control from "../components/Control";
import NavBar from "../components/main/NavBar";

const AdminPage = () => {
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

  return (
    <>
      <div className="bg-yellow-400">
        {/* <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />{" "} */}
        {/* Pasar props */}
        {isLoggedIn ? (
          <>
            {/* <h2>Hi, admin {username} :)</h2> */}
            <Control />
          </>
        ) : (
          <Link to="/account">
            {/* Aquí podrías agregar un mensaje o botón para que los usuarios inicien sesión */}
            Please log in to access admin features.
          </Link>
        )}
      </div>
    </>
  );
};

export default AdminPage;
