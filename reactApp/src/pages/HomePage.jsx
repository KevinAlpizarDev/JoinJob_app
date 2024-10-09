// import React from "react";
// import NavBar from "../components/main/NavBar";
// // import {submitLogout} from "./SignInPage"
// // import LoginForm from "../components/RegisterForm";
// // import RegisterForm from "../components/RegisterForm";
// // import ThemeButton from "../components/ThemeButton";
// const HomePage = ({ submitLogout }) => {
//   return (

// <> 
// <NavBar/>

//     <div className="h-screen bg-red-500 dark:bg-black">
//       <h1 className="text-xl font-extrabold  mb-4 text-blue-500">JoinJob</h1>
//       <h2>You're logged in!</h2>
//       <form onSubmit={submitLogout}>
//         <button type="submit">Log out</button>
//       </form>
//       {/* <h1 className="h-screen bg-blue-500 text-white p-4 dark:bg-black">Home Page</h1> */}
//       {/* <ThemeButton /> */}
//       {/* <RegisterForm /> */}
//       {/* // <div>
//       //   <h2>You're logged in!</h2>
//       //   <form onSubmit={submitLogout}>
//       //     <button type="submit">Log out</button>
//       //   </form>
//       // </div> */}
//     </div>

// </>

//   );
// };

// export default HomePage;
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/main/NavBar";
import { useAuth } from "../components/AuthProvider";

const HomePage = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  // Maneja la acción de logout
  const submitLogout = (e) => {
    e.preventDefault();
    setUser(null); // Limpia el estado del usuario
    navigate("/signin"); // Redirige a la página de inicio de sesión
  };

  return (
    <>
      <NavBar />
      <div className="h-screen bg-red-500 dark:bg-black">
        <h1 className="text-xl font-extrabold  mb-4 text-blue-500">JoinJob</h1>
        <h2>You're logged in!</h2>
        <form onSubmit={submitLogout}>
          <button type="submit">Log out</button>
        </form>
      </div>
    </>
  );
};

export default HomePage;