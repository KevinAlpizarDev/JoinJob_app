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
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   getCurrentUser,
//   registerUser,
//   loginUser,
//   logoutUser,
// } from "../services/service";
// // import { useAuth } from "./AuthProvider";

// import { useAuth } from "../components/AuthProvider";
// const SignInPage = () => {
//   const { user, setUser } = useAuth(); // Obtenemos el estado de user y setUser del contexto
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setUser(true)) // Establecemos el user como true si la autenticación es exitosa
//       .catch(() => setUser(null)); // Lo establecemos como null si falla
//   }, [setUser]);

//   useEffect(() => {
//     if (user) {
//       navigate("/"); // Redirigimos a la ruta protegida si el usuario está autenticado
//     }
//   }, [user, navigate]);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     registerUser(email, username, password)
//       .then(() => loginUser(email, password))
//       .then(() => setUser(true)); // Actualizamos el user como true tras autenticarse
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     loginUser(email, password).then(() => setUser(true));
//   }

//   function submitLogout(e) {
//     e.preventDefault();
//     logoutUser().then(() => setUser(null)); // Al desloguearse, user es null
//   }

//   return (
//     <div className="h-screen bg-lime-400 dark:bg-lime-600">
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
///////////V37/////////////////////////////////////////////////////7
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  registerUser,
  loginUser,
  logoutUser,
} from "../services/service";
import { useAuth } from "../components/AuthProvider";

export default function SignInPage() {
  const { user, setUser } = useAuth();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then(() => setUser(true))
      .catch(() => setUser(null));
  }, [setUser]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  function update_form_btn() {
    setRegistrationToggle(!registrationToggle);
  }

  function submitRegistration(e) {
    e.preventDefault();
    registerUser(email, username, password)
      .then(() => loginUser(email, password))
      .then(() => setUser(true));
  }

  function submitLogin(e) {
    e.preventDefault();
    loginUser(email, password).then(() => setUser(true));
  }

  return (
    <div className="min-h-screen bg-[#FFDE82] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-md w-full transform -rotate-1 transition-transform hover:rotate-0">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6 text-center text-[#1D3557]">
            Welcome!
          </h1>
          <button
            onClick={update_form_btn}
            className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transform transition-transform hover:scale-105"
          >
            {registrationToggle ? "Switch to Log In" : "Switch to Register"}
          </button>

          {registrationToggle ? (
            <form onSubmit={submitRegistration} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transform transition-transform hover:scale-105"
              >
                Register
              </button>
            </form>
          ) : (
            <form onSubmit={submitLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transform transition-transform hover:scale-105"
              >
                Log In
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
