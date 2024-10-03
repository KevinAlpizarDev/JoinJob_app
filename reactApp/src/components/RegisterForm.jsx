/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000",
// });

// const RegisterForm = () => {
//   const [currentUser, setCurrentUser] = useState();
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     client
//       .get("/api/user")
//       .then(() => setCurrentUser(true))
//       .catch(() => setCurrentUser(false));
//   }, []);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     client
//       .post("/api/register", { email, username, password })
//       .then(() => {
//         return client.post("/api/login", { email, password });
//       })
//       .then(() => {
//         setCurrentUser(true);
//       });
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     client.post("/api/login", { email, password }).then(() => {
//       setCurrentUser(true);
//     });
//   }

//   function submitLogout(e) {
//     e.preventDefault();
//     client.post("/api/logout", { withCredentials: true }).then(() => {
//       setCurrentUser(false);
//     });
//   }

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

//   return (
//     <div>
//       <h1>Authentication App</h1>
//       <button onClick={update_form_btn}>
//         {registrationToggle ? "Log in" : "Register"}
//       </button>
//       {registrationToggle ? (
//       ////////////////////////////////////////////
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
//                 ////////////////////////////////////////////
//       ) : (

//         ////////////////////////////////////////////
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
//         ////////////////////////////////////////////
//       )}
//     </div>
//   );
// };

// export default RegisterForm;
// //////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000",
// });

// const RegisterForm = () => {
//   const [currentUser, setCurrentUser] = useState();
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     client
//       .get("/api/user")
//       .then(() => setCurrentUser(true))
//       .catch(() => setCurrentUser(false));
//   }, []);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     client
//       .post("/api/register", { email, username, password })
//       .then(() => {
//         return client.post("/api/login", { email, password });
//       })
//       .then(() => {
//         setCurrentUser(true);
//       });
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     client.post("/api/login", { email, password }).then(() => {
//       setCurrentUser(true);
//     });
//   }

//   function submitLogout(e) {
//     e.preventDefault();
//     client.post("/api/logout", {}, { withCredentials: true }).then(() => {
//       setCurrentUser(false);
//     });
//   }

//   return (
//     <div className="font-[sans-serif] bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
//       <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
//         <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4">
//           <div>
//             <h4 className="text-white text-lg font-semibold">Create Your Account</h4>
//             <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Welcome to our registration page! Get started by creating your account.</p>
//           </div>
//           <div>
//             <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
//             <p className="text-[13px] text-gray-300 mt-3 leading-relaxed">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
//           </div>
//         </div>

//         <form className="md:col-span-2 w-full py-6 px-6 sm:px-16" onSubmit={registrationToggle ? submitRegistration : submitLogin}>
//           <div className="mb-6">
//             <h3 className="text-gray-800 text-2xl font-bold">{registrationToggle ? "Create an Account" : "Login"}</h3>
//           </div>

//           <div className="space-y-6">
//             {registrationToggle && (
//               <div>
//                 <label className="text-gray-800 text-sm mb-2 block">Username</label>
//                 <input
//                   type="text"
//                   required
//                   className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
//                   placeholder="Enter username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//             )}

//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
//               <input
//                 type="email"
//                 required
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">Password</label>
//               <input
//                 type="password"
//                 required
//                 className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             {registrationToggle && (
//               <div className="flex items-center">
//                 <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
//                 <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
//                   I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
//                 </label>
//               </div>
//             )}
//           </div>

//           <div className="!mt-12">
//             <button type="submit" className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
//               {registrationToggle ? "Create an account" : "Login"}
//             </button>
//           </div>
//           {!registrationToggle && (
//             <p className="text-gray-800 text-sm mt-6 text-center">Don't have an account? <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1" onClick={update_form_btn}>Register here</a></p>
//           )}
//           {registrationToggle && (
//             <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1" onClick={update_form_btn}>Login here</a></p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;
//////////////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000", // Asegúrate de que sea la URL correcta de tu backend.
});

const RegisterForm = () => {
  const [currentUser, setCurrentUser] = useState(null); // Estado para el usuario actual
  const [registrationToggle, setRegistrationToggle] = useState(false); // Alternar entre registro y login
  const [email, setEmail] = useState(""); // Estado del campo de email
  const [username, setUsername] = useState(""); // Estado del campo de username
  const [password, setPassword] = useState(""); // Estado del campo de password

  // Efecto para verificar si el usuario está autenticado al cargar la página
  useEffect(() => {
    client
      .get("/api/user") // Ruta para obtener el usuario actual
      .then(() => setCurrentUser(true)) // Si hay un usuario, se establece el estado a true
      .catch(() => setCurrentUser(false)); // Si no hay usuario, se establece a false
  }, []);

  // Alterna entre mostrar el formulario de registro o el de login
  function update_form_btn() {
    setRegistrationToggle(!registrationToggle);
  }

  // Envía el formulario de registro
  function submitRegistration(e) {
    e.preventDefault();
    client
      .post("/api/register", { email, username, password }) // Envío de los datos de registro
      .then(() => {
        return client.post("/api/login", { email, password }); // Inicia sesión automáticamente después de registrar
      })
      .then(() => {
        setCurrentUser(true); // Establece el estado como autenticado
      });
  }

  // Envía el formulario de inicio de sesión
  function submitLogin(e) {
    e.preventDefault();
    client.post("/api/login", { email, password }).then(() => {
      setCurrentUser(true); // Establece el estado como autenticado
    });
  }

  // Envía el formulario de logout
  function submitLogout(e) {
    e.preventDefault();
    client.post("/api/logout", { withCredentials: true }).then(() => {
      setCurrentUser(false); // Establece el estado como no autenticado
    });
  }

  // Si el usuario está autenticado, muestra el mensaje de logout
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
  // if (currentUser) {
  //   return <LoggedInMessage submitLogout={submitLogout} />;
  // }
  // Si el usuario no está autenticado, muestra los formularios de login/registro
  return (
    <div>
      <h1>Authentication App</h1>
      <button onClick={update_form_btn}>
        {registrationToggle ? "Log in" : "Register"}
      </button>

      {/* Formulario de registro */}
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
        // Formulario de login
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
