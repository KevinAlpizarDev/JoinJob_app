


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getCurrentUser, registerUser, loginUser } from "../services/service";
// import { useAuth } from "../components/AuthProvider";
// import NavBar from "../components/main/NavBar";
// // import FooterPage from "../components/FooterPage";
// import Position from "../components/Position";

// export default function SignInPage() {
//   const { user, setUser } = useAuth();
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [formError, setFormError] = useState("");
//   const [networkError, setNetworkError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setUser(true))
//       .catch(() => setUser(null));
//   }, [setUser]);

//   useEffect(() => {
//     if (user) {
//       if (user.is_staff) {
//         navigate("/admin"); // Redirect to /admin if user is staff
//       } else {
//         navigate("/home"); // Redirect to /home if user is not staff
//       }
//     }
//   }, [user, navigate]);

//   function updateFormBtn() {
//     setRegistrationToggle(!registrationToggle);
//     resetForm();
//   }

//   function resetForm() {
//     setEmail("");
//     setUsername("");
//     setPassword("");
//     setEmailError("");
//     setPasswordError("");
//     setFormError("");
//     setNetworkError("");
//   }

//   function validateEmail(email) {
//     const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return re.test(String(email).toLowerCase());
//   }

//   function validateForm() {
//     let isValid = true;

//     if (!email) {
//       setEmailError("Email cannot be empty");
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       setEmailError("Please enter a valid email address");
//       isValid = false;
//     } else {
//       setEmailError("");
//     }

//     if (!password) {
//       setPasswordError("Password cannot be empty");
//       isValid = false;
//     } else if (password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long");
//       isValid = false;
//     } else {
//       setPasswordError("");
//     }

//     if (registrationToggle && !username) {
//       setFormError("Username cannot be empty");
//       isValid = false;
//     } else {
//       setFormError("");
//     }

//     return isValid;
//   }

//   function handleNetworkError(error) {
//     if (error.response) {
//       setNetworkError("Su contraseña no es correcta o correo no existe");
//     } else {
//       setNetworkError("Network error: Please check your connection");
//     }
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     if (validateForm()) {
//       registerUser(email, username, password)
//         .then(() => loginUser(email, password))
//         .then(() => setUser(true))
//         .catch((error) => handleNetworkError(error));
//     }
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     if (validateForm()) {
//       loginUser(email, password)
//         .then((response) => {
//           const { user } = response.data;
//           setUser(true);
//           if (user.is_staff) {
//             navigate("/admin");
//           } else {
//             navigate("/home");
//           }
//         })
//         .catch((error) => handleNetworkError(error));
//     }
//   }

//   const errorStyle = {
//     color: "red",
//     fontSize: "0.875rem",
//     marginTop: "0.25rem",
//   };

//   const inputErrorStyle = {
//     borderColor: "red",
//   };

//   return (
//     <>
//       <NavBar />
//       <Position />
//       <div className="min-w-fi h-screen bg-gray-50 flex items-center justify-center p-4 dark:bg-[#3b3627] py-8">
//         <div className="bg-white rounded-3xl max-w-md w-full mb-12 shadow-lg">
//           <div className="p-6">
//             {/* <h1 className="text-4xl font-extrabold text-center text-[#1D3557] mb-8">
//               JoinJob
//             </h1> */}
//             <button
//               onClick={updateFormBtn}
//               className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transition-all duration-200 hover:scale-105 shadow-md"
//             >
//               {registrationToggle ? "Switch to Log In" : "Switch to Register"}
//             </button>

//             {formError && (
//               <div style={{ ...errorStyle, marginBottom: "1rem" }}>
//                 {formError}
//               </div>
//             )}

//             {networkError && (
//               <div style={{ ...errorStyle, marginBottom: "1rem" }}>
//                 {networkError}
//               </div>
//             )}

//             {registrationToggle ? (
//               <form onSubmit={submitRegistration} className="space-y-4">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                     required
//                     style={emailError ? inputErrorStyle : {}}
//                   />
//                   {emailError && <p style={errorStyle}>{emailError}</p>}
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="username"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Username
//                   </label>
//                   <input
//                     id="username"
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                     required
//                   />
//                   {formError && <p style={errorStyle}>{formError}</p>}
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Password
//                   </label>
//                   <input
//                     id="password"
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                     required
//                     style={passwordError ? inputErrorStyle : {}}
//                   />
//                   {passwordError && <p style={errorStyle}>{passwordError}</p>}
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
//                 >
//                   Register
//                 </button>
//               </form>
//             ) : (
//               <form onSubmit={submitLogin} className="space-y-4">
//                 <div>
//                   <label
//                     htmlFor="login-email"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Email
//                   </label>
//                   <input
//                     id="login-email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                     required
//                     style={emailError ? inputErrorStyle : {}}
//                   />
//                   {emailError && <p style={errorStyle}>{emailError}</p>}
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="login-password"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Password
//                   </label>
//                   <input
//                     id="login-password"
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                     required
//                     style={passwordError ? inputErrorStyle : {}}
//                   />
//                   {passwordError && <p style={errorStyle}>{passwordError}</p>}
//                 </div>
//                 {/* <button
//                   type="submit"
//                   className="w-full bg-[#457B9D] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
//                 >
//                   Log In
//                 </button> */}
//                 <button
//   type="submit"
//   className="w-full bg-blue-600  hover:text-white border-blue-600 hover:bg-blue-800 text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
// >
//   Log In
// </button>

//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* <FooterPage /> */}
//     </>
//   );
// }
///////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { loginUser } from "../services/service"; // Importar la función de login

  
// const navigate = useNavigate(); // Inicializar useNavigate
// const [formData, setFormData] = useState({
//   email: "",
//   password: "",
// });

// const handleChange = (e) => {
//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value,
//   });
// };

// const [isLoading, setIsLoading] = useState(false);
// const [successMessage, setSuccessMessage] = useState(null);
// const [error, setError] = useState(null);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (isLoading) {
//     return;
//   }

//   setIsLoading(true);

//   try {
//     const response = await loginUser(formData.email, formData.password); // Usar la función de login
//     console.log("Success!", response.data);
//     setSuccessMessage("Login Successful!");
//     localStorage.setItem("accessToken", response.data.tokens.access);
//     localStorage.setItem("refreshToken", response.data.tokens.refresh);

//     // Redirigir a Home después de un inicio de sesión exitoso
//     navigate("/"); // Navegar a Home
//   } catch (error) {
//     console.log("Error during Login!", error.response?.data);
//     if (error.response && error.response.data) {
//       Object.keys(error.response.data).forEach((field) => {
//         const errorMessages = error.response.data[field];
//         if (errorMessages && errorMessages.length > 0) {
//           setError(errorMessages[0]);
//         }
//       });
//     }
//   } finally {
//     setIsLoading(false);
//   }
// };




// export default function SignInPage() {
//   const [registrationToggle, setRegistrationToggle] = useState(false);

//   function updateFormBtn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   return (
//     <div className="min-w-fi h-screen bg-gray-50 flex items-center justify-center p-4 dark:bg-[#3b3627] py-8">
//       <div className="bg-white rounded-3xl max-w-md w-full mb-12 shadow-lg">
//         <div className="p-6">
//           <button
//             onClick={updateFormBtn}
//             className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transition-all duration-200 hover:scale-105 shadow-md"
//           >
//             {registrationToggle ? "Switch to Log In" : "Switch to Register"}
//           </button>

//           {registrationToggle ? (
//             <form className="space-y-4">
//                 {/* {error && <p style={{ color: "red" }}>{error}</p>}
//                 {successMessage && <p style={{ color: "green" }}>{successMessage}</p>} */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
//               >
//                 Register
//               </button>
//             </form>
//           ) : (









//             <form className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 {/* <input
//                   type="email"
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                   required
//                 /> */}
//                   <input
//           type="email"
//              className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 {/* <input
//                   type="password"
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                   required
//                 /> */}
//    <input
//           type="password"
//                className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//               </div>
//               {/* <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:text-white border-blue-600 hover:bg-blue-800 text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
//               >
//                 Log In
//               </button> */}
//               <button  className="w-full bg-blue-600 hover:text-white border-blue-600 hover:bg-blue-800 text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md" type="submit" disabled={isLoading} onClick={handleSubmit}>
//           Login
//         </button>

//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { loginUser } from "../services/service"; // Importar la función de login

// export default function Login() {


  // const navigate = useNavigate(); // Inicializar useNavigate
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const [isLoading, setIsLoading] = useState(false);
  // const [successMessage, setSuccessMessage] = useState(null);
  // const [error, setError] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (isLoading) {
  //     return;
  //   }

  //   setIsLoading(true);

  //   try {
  //     const response = await loginUser(formData.email, formData.password); // Usar la función de login
  //     console.log("Success!", response.data);
  //     setSuccessMessage("Login Successful!");
  //     localStorage.setItem("accessToken", response.data.tokens.access);
  //     localStorage.setItem("refreshToken", response.data.tokens.refresh);

  //     // Redirigir a Home después de un inicio de sesión exitoso
  //     navigate("/"); // Navegar a Home
  //   } catch (error) {
  //     console.log("Error during Login!", error.response?.data);
  //     if (error.response && error.response.data) {
  //       Object.keys(error.response.data).forEach((field) => {
  //         const errorMessages = error.response.data[field];
  //         if (errorMessages && errorMessages.length > 0) {
  //           setError(errorMessages[0]);
  //         }
  //       });
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       <h2>Login:</h2>
//       <form>
//         <label>email:</label>
//         <br />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <label>password:</label>
//         <br />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <button type="submit" disabled={isLoading} onClick={handleSubmit}>
//           Login
//         </button>
//       </form>
   
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////////////
// import React, { useState } from "react";
// import Login from "./Login";

// export default function SignInPage() {
//   const [registrationToggle, setRegistrationToggle] = useState(false);

//   function updateFormBtn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   return (
//     <div className="min-w-fi h-screen bg-gray-50 flex items-center justify-center p-4 dark:bg-[#3b3627] py-8">
//       <div className="bg-white rounded-3xl max-w-md w-full mb-12 shadow-lg">
//         <div className="p-6">
//           <button
//             onClick={updateFormBtn}
//             className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transition-all duration-200 hover:scale-105 shadow-md"
//           >
//             {registrationToggle ? "Switch to Log In" : "Switch to Register"}
//           </button>

//           {registrationToggle ? (
//             // <form className="space-y-4">
//             //   <div>
//             //     <label className="block text-sm font-medium text-gray-700 mb-1">
//             //       Email
//             //     </label>
//             //     <input
//             //       type="email"
//             //       className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             //       required
//             //     />
//             //   </div>
//             //   <div>
//             //     <label className="block text-sm font-medium text-gray-700 mb-1">
//             //       Username
//             //     </label>
//             //     <input
//             //       type="text"
//             //       className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             //       required
//             //     />
//             //   </div>
//             //   <div>
//             //     <label className="block text-sm font-medium text-gray-700 mb-1">
//             //       Password
//             //     </label>
//             //     <input
//             //       type="password"
//             //       className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             //       required
//             //     />
//             //   </div>
//             //   <button
//             //     type="submit"
//             //     className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
//             //   >
//             //     Register
//             //   </button>
//             // </form>
//             <h1>Register</h1>
//           ) : (
//             <div>

//               <Login/>

//             </div>
//             // <form className="space-y-4">
//             //   <div>
//             //     <label className="block text-sm font-medium text-gray-700 mb-1">
//             //       Email
//             //     </label>
//             //     <input
//             //       type="email"
//             //       className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             //       required
//             //     />
//             //   </div>
//             //   <div>
//             //     <label className="block text-sm font-medium text-gray-700 mb-1">
//             //       Password
//             //     </label>
//             //     <input
//             //       type="password"
//             //       className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             //       required
//             //     />
//             //   </div>
//             //   <button
//             //     type="submit"
//             //     className="w-full bg-blue-600 hover:text-white border-blue-600 hover:bg-blue-800 text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
//             //   >
//             //     Log In
//             //   </button>
//             // </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }













// import React, { useState, useEffect } from "react";
// import Login from "./Login";
// import Register from "./Register";
// import NavBar from "../components/main/NavBar";
//  import { useAuth } from "../components/AuthProvider";
//  import { useNavigate } from "react-router-dom";
// export default function SignInPage() {
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const { user, setUser } = useAuth();




//   function updateFormBtn() {
//     setRegistrationToggle(!registrationToggle);
//   }


//   useEffect(() => {
//     if (user) {
//       if (user.is_staff) {
//         navigate("/admin"); // Redirect to /admin if user is staff
//       } else {
//         navigate("/home"); // Redirect to /home if user is not staff
//       }
//     }
//   }, [user, navigate]);



//   return (
// <>
// <NavBar/>
//     <div className="min-w-fi h-screen bg-gray-50 flex items-center justify-center p-4 dark:bg-[#3b3627] py-8">
//       <div className="bg-white rounded-3xl max-w-md w-full mb-12 shadow-lg">
//         <div className="p-6">
//           <button
//             onClick={updateFormBtn}
//             className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transition-all duration-200 hover:scale-105 shadow-md"
//           >
//             {registrationToggle ? "Switch to Log In" : "Switch to Register"}
//           </button>

//           {registrationToggle ? (
//            <div>
//             <Register/>
//            </div>
//           ) : (
//             <div>
//               <Login />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>

// </>
//   );
// }












import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NavBar from "../components/main/NavBar";
import { useAuth } from "../components/AuthProvider";

export default function SignInPage() {
  const { user, setUser } = useAuth();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario está autenticado, redirigir a la página correspondiente
    if (user) {
      if (user.is_staff) {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    }
  }, [user, navigate]);

  function updateFormBtn() {
    setRegistrationToggle(!registrationToggle);
  }

  return (
<>

    <div className="min-w-fi h-screen bg-gray-50 flex items-center justify-center p-4 dark:bg-[#3b3627] py-8">
      <div className="bg-white rounded-3xl max-w-md w-full mb-12 shadow-lg">
        <div className="p-6">
          <button
            onClick={updateFormBtn}
            className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transition-all duration-200 hover:scale-105 shadow-md"
          >
            {registrationToggle ? "Switch to Log In" : "Switch to Register"}
          </button>

          {registrationToggle ? (
           <div>
            <Register/>
           </div>
          ) : (
            <div>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>

</>
  );
}
