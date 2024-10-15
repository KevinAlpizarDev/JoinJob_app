// // export default HomePage;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import NavBar from "../components/main/NavBar";
// import { useAuth } from "../components/AuthProvider";

// const HomePage = () => {
//   const { setUser } = useAuth();
//   const navigate = useNavigate();

//   // Maneja la acción de logout
//   const submitLogout = (e) => {
//     e.preventDefault();
//     setUser(null); // Limpia el estado del usuario
//     navigate("/signin"); // Redirige a la página de inicio de sesión
//   };

//   return (
//     <>
//       <NavBar />
//       <div className="h-screen bg-red-500 dark:bg-black">
//         <h1 className="text-xl font-extrabold  mb-4 text-blue-500">JoinJob</h1>
//         <h2>You're logged in!</h2>
//         <form onSubmit={submitLogout}>
//           <button type="submit">Log out</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default HomePage;
// HomePage.jsx
import React from "react";
import { useLogout } from "../utils/authUtils"; // Ajusta la ruta según sea necesario
import CourseList from "../components/CourseList";

import NavBar from "../components/main/NavBar";

const HomePage = () => {
  const submitLogout = useLogout(); // Usa la función de logout

  return (
    <>
      <NavBar />
      <div className="h-screen bg-gray-50 dark:bg-black">
      
        <h2>You're logged in!</h2>
{/* 
<Modal/> */}
        <form onSubmit={submitLogout}>
          <button type="submit">Log out</button>
        </form>
<CourseList/>


      </div>
    </>
  );
};

export default HomePage;
