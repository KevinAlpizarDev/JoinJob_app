// AdminPage.jsx
import React from "react";
import { useLogout } from "../utils/authUtils"; // Ajusta la ruta según sea necesario

const AdminPage = () => {
  const submitLogout = useLogout(); // Usa la función de logout

  return (
    <div>
      <h1>Si Soy Admin!</h1>
      <form onSubmit={submitLogout}>
        <button type="submit">Log out</button>
      </form>
    </div>
  );
};

export default AdminPage;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AdminPage = () => {
//   const [username, setUsername] = useState("");
//   const [isLoggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkLoggedInUser = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         if (token) {
//           const config = {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           };
//           const response = await axios.get(
//             "http://127.0.0.1:8000/api/user/",
//             config
//           );
//           if (response.data.is_staff) { // Comprobar si el usuario es staff
//             setLoggedIn(true);
//             setUsername(response.data.username);
//           } else {
//             navigate("/home"); // Si no es staff, redirigir a /home
//           }
//         } else {
//           setLoggedIn(false);
//           navigate("/account"); // Si no está logueado, redirigir a /account
//         }
//       } catch (error) {
//         setLoggedIn(false);
//         navigate("/account");
//       }
//     };
//     checkLoggedInUser();
//   }, [navigate]);

//   const handleLogout = async () => {
//     try {
//       const accessToken = localStorage.getItem("accessToken");
//       const refreshToken = localStorage.getItem("refreshToken");

//       if (accessToken && refreshToken) {
//         const config = {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         };
//         await axios.post(
//           "http://127.0.0.1:8000/api/logout/",
//           { refresh: refreshToken },
//           config
//         );
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         setLoggedIn(false);
//         navigate("/account"); // Redirigir a /account después del logout
//       }
//     } catch (error) {
//       console.error("Failed to logout", error.response?.data || error.message);
//     }
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <>
//           <h1>¡Bienvenido Admin, {username}!</h1>
//           <button onClick={handleLogout}>Cerrar sesión</button>
//         </>
//       ) : (
//         <p>Redirigiendo...</p>
//       )}
//     </div>
//   );
// };

// export default AdminPage;
