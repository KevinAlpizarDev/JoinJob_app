// SIN SERVICE
//////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000", // Asegúrate de que sea la URL correcta de tu backend.
// });

// const RegisterForm = () => {
//   const [currentUser, setCurrentUser] = useState(null); // Estado para el usuario actual
//   const [registrationToggle, setRegistrationToggle] = useState(false); // Alternar entre registro y login
//   const [email, setEmail] = useState(""); // Estado del campo de email
//   const [username, setUsername] = useState(""); // Estado del campo de username
//   const [password, setPassword] = useState(""); // Estado del campo de password

//   // Efecto para verificar si el usuario está autenticado al cargar la página
//   useEffect(() => {
//     client
//       .get("/api/user") // Ruta para obtener el usuario actual
//       .then(() => setCurrentUser(true)) // Si hay un usuario, se establece el estado a true
//       .catch(() => setCurrentUser(false)); // Si no hay usuario, se establece a false
//   }, []);

//   // Alterna entre mostrar el formulario de registro o el de login
//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   // Envía el formulario de registro
//   function submitRegistration(e) {
//     e.preventDefault();
//     client
//       .post("/api/register", { email, username, password }) // Envío de los datos de registro
//       .then(() => {
//         return client.post("/api/login", { email, password }); // Inicia sesión automáticamente después de registrar
//       })
//       .then(() => {
//         setCurrentUser(true); // Establece el estado como autenticado
//       });
//   }

//   // Envía el formulario de inicio de sesión
//   function submitLogin(e) {
//     e.preventDefault();
//     client.post("/api/login", { email, password }).then(() => {
//       setCurrentUser(true); // Establece el estado como autenticado
//     });
//   }

//   // Envía el formulario de logout
//   function submitLogout(e) {
//     e.preventDefault();
//     client.post("/api/logout", { withCredentials: true }).then(() => {
//       setCurrentUser(false); // Establece el estado como no autenticado
//     });
//   }

//   // Si el usuario está autenticado, muestra el mensaje de logout
//   if (currentUser) {
//     return (
//       <div>
//         <h2>You're logged in!</h2>
//         <form onSubmit={submitLogout}>
//           <button type="submit">Log out</button>
//         </form>
//       </div>
//     );
//   }
//   // if (currentUser) {
//   //   return <LoggedInMessage submitLogout={submitLogout} />;
//   // }
//   // Si el usuario no está autenticado, muestra los formularios de login/registro
//   return (
//     <div>
//       <h1>Authentication App</h1>
//       <button onClick={update_form_btn}>
//         {registrationToggle ? "Log in" : "Register"}
//       </button>

//       {/* Formulario de registro */}
//       {registrationToggle ? (
//         <form onSubmit={submitRegistration}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Username:
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       ) : (
//         // Formulario de login
//         <form onSubmit={submitLogin}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default RegisterForm;

// CON SERVICE
//////////////////////////////////////////////////////////////
// RegisterForm.js
import React, { useState, useEffect } from "react";
import {
  getCurrentUser,
  registerUser,
  loginUser,
  logoutUser,
} from "../services/service";

const RegisterForm = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getCurrentUser()
      .then(() => setCurrentUser(true))
      .catch(() => setCurrentUser(false));
  }, []);

  function update_form_btn() {
    setRegistrationToggle(!registrationToggle);
  }

  function submitRegistration(e) {
    e.preventDefault();
    registerUser(email, username, password)
      .then(() => loginUser(email, password))
      .then(() => setCurrentUser(true));
  }

  function submitLogin(e) {
    e.preventDefault();
    loginUser(email, password).then(() => setCurrentUser(true));
  }

  function submitLogout(e) {
    e.preventDefault();
    logoutUser().then(() => setCurrentUser(false));
  }

  if (currentUser) {
    return (
      <div>
        <h2>You're logged in!</h2>
        <form onSubmit={submitLogout}>
          <button type="submit">Log out</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Authentication App</h1>
      <button onClick={update_form_btn}>
        {registrationToggle ? "Log in" : "Register"}
      </button>

      {registrationToggle ? (
        <form onSubmit={submitRegistration}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <form onSubmit={submitLogin}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
