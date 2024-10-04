// import React, { useState, useEffect } from "react";
// // import { useAuth } from "./AuthProvider"; // Importar el hook de autenticación
// import {
//   getCurrentUser,
//   registerUser,
//   loginUser,
//   logoutUser,
// } from "../services/service";
// // import HomePage from "./HomePage";
// const SignInPage = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setCurrentUser(true))
//       .catch(() => setCurrentUser(false));
//   }, []);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     registerUser(email, username, password)
//       .then(() => loginUser(email, password))
//       .then(() => setCurrentUser(true));
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     loginUser(email, password).then(() => setCurrentUser(true));
//   }

//   function submitLogout(e) {
//     e.preventDefault();
//     logoutUser().then(() => setCurrentUser(false));
//   }

//   if (currentUser) {
//     return (
//       // <div>
//       //   <h2>You're logged in!</h2>
//       //   <form onSubmit={submitLogout}>
//       //     <button type="submit">Log out</button>
//       //   </form>
//       // </div>
//       <HomePage/>
//     );
//   }

//   return (
//     <div>
//       <h1>Authentication App</h1>
//       <button onClick={update_form_btn}>
//         {registrationToggle ? "Log in" : "Register"}
//       </button>

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

// // const SignInPage = () => {
// //   return (
// //     <div>
// //       <h1>Sign In</h1>
// //       <RegisterForm />
// //     </div>
// //   );
// // };

// export default SignInPage;
///////////////////////////////////////////////////////1
// import React, { useState, useEffect } from "react";
// import {
//   getCurrentUser,
//   registerUser,
//   loginUser,
//   logoutUser,
// } from "../services/service";
// import HomePage from "./HomePage";

// const SignInPage = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setCurrentUser(true))
//       .catch(() => setCurrentUser(false));
//   }, []);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     registerUser(email, username, password)
//       .then(() => loginUser(email, password))
//       .then(() => setCurrentUser(true));
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     loginUser(email, password).then(() => setCurrentUser(true));
//   }

//   function submitLogout(e) {
//     e.preventDefault();
//     logoutUser().then(() => setCurrentUser(false));
//   }

//   if (currentUser) {
//     // Pasa la función `submitLogout` como prop a `HomePage`
//     return <HomePage submitLogout={submitLogout} />;
//   }

//   return (
//     <div>
//       <h1>Authentication App</h1>
//       <button onClick={update_form_btn}>
//         {registrationToggle ? "Log in" : "Register"}
//       </button>

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

// export default SignInPage;
///////////////////////////////////////////////////////////2
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getCurrentUser, registerUser, loginUser, logoutUser } from "../services/service";
// import { useAuth } from "../components/AuthProvider"; // Usar el hook de autenticación
// import HomePage from "./HomePage";

// const SignInPage = () => {
//   const { user, setUser } = useAuth(); // Obtener el usuario y setUser del contexto
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setUser(true))
//       .catch(() => setUser(false));
//   }, [setUser]);

//   useEffect(() => {
//     if (user) {
//       navigate("/"); // Redirigir a la ruta protegida si el usuario está autenticado
//     }
//   }, [user, navigate]);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     registerUser(email, username, password)
//       .then(() => loginUser(email, password))
//       .then(() => setUser(true));
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     loginUser(email, password).then(() => setUser(true));
//   }

//   function submitLogout(e) {
//     e.preventDefault();
//     logoutUser().then(() => setUser(false));
//   }

//   return (
//     <div>
//       <h1>Authentication App</h1>
//       <button onClick={update_form_btn}>
//         {registrationToggle ? "Log in" : "Register"}
//       </button>

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

// export default SignInPage;
////////////////////////////////////////////////////////////3
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  registerUser,
  loginUser,
  logoutUser,
} from "../services/service";
// import { useAuth } from "./AuthProvider";

import { useAuth } from "../components/AuthProvider";
const SignInPage = () => {
  const { user, setUser } = useAuth(); // Obtenemos el estado de user y setUser del contexto
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then(() => setUser(true)) // Establecemos el user como true si la autenticación es exitosa
      .catch(() => setUser(null)); // Lo establecemos como null si falla
  }, [setUser]);

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirigimos a la ruta protegida si el usuario está autenticado
    }
  }, [user, navigate]);

  function update_form_btn() {
    setRegistrationToggle(!registrationToggle);
  }

  function submitRegistration(e) {
    e.preventDefault();
    registerUser(email, username, password)
      .then(() => loginUser(email, password))
      .then(() => setUser(true)); // Actualizamos el user como true tras autenticarse
  }

  function submitLogin(e) {
    e.preventDefault();
    loginUser(email, password).then(() => setUser(true));
  }

  function submitLogout(e) {
    e.preventDefault();
    logoutUser().then(() => setUser(null)); // Al desloguearse, user es null
  }

  return (
    <div className="h-screen bg-lime-400 dark:bg-lime-600">
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

export default SignInPage;
