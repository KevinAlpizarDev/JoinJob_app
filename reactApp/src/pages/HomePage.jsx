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

//////////////////////////////////////////Inlove

import React, { useEffect, useState } from "react";
import NavBar from "../components/main/NavBar";
import Position from "../components/Position";
import { getCursos } from "../services/service"; // Asegúrate de que esta ruta sea correcta

const HomePage = ({ submitLogout }) => {
  const [cursos, setCursos] = useState([]); // Estado para los cursos
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await getCursos();
        setCursos(response.data); // Suponiendo que tu API devuelve la lista de cursos directamente
      } catch (error) {
        console.error("Error fetching cursos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCursos(); // Llama a la función para obtener los cursos
  }, []);

  return (
    <>
      <NavBar />
      <div className="h-screen bg-red-500 dark:bg-black">
        <h1 className="text-xl font-extrabold mb-4 text-blue-500">JoinJob</h1>
        <h2>You're logged in!</h2>
        <form onSubmit={submitLogout}>
          <button type="submit">Log out</button>
        </form>

        {/* Renderizar los cursos */}
        {loading ? (
          <p>Cargando cursos...</p> // Mensaje de carga
        ) : (
          <div>
            <h3>Lista de Cursos:</h3>
            <ul>
              {cursos.map((curso) => (
                <li key={curso.id}>
                  {curso.nombre} - {curso.descripcion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Position />
    </>
  );
};

export default HomePage;
