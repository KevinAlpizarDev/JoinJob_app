// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getCurrentUser, registerUser, loginUser } from "../services/service";
// import { useAuth } from "../components/AuthProvider";
// import NavBar from "../components/main/NavBar";
// import FooterPage from "../components/FooterPage";
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
//       // setNetworkError(Network error: ${error.response.status});
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
//           // Suponiendo que `response` contiene el objeto del usuario
//           const { user } = response.data;
//           setUser(true);
//           // console.log(
//           //   user.is_staff ?    navigate("/admin") : "Usuario no es staff"
//           // );
//           // Navegar a otra página o realizar otra acción según sea necesario
//           if (user.is_staff) {
//             navigate("/admin");

//           } else {
//             navigate("/home");

//           }
//         })
//         .catch((error) => handleNetworkError(error));
//     }
//   }

//   /////////////////////////////////////////////
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
//       <div className="min-w-fit bg-[#FFDE82] flex items-center justify-center p-4 dark:bg-[#3b3627] py-8 h-max ">
//         <div className="bg-white rounded-3xl max-w-md w-full mb-12">
//           <div className="p-4">
//             <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
//               JoinJob
//             </h1>
//             <button
//               onClick={updateFormBtn}
//               className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transform transition-transform hover:scale-105"
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
//                     className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                     required
//                     style={emailError ? inputErrorStyle : {}}
//                     aria-invalid={emailError ? "true" : "false"}
//                     aria-describedby={emailError ? "email-error" : undefined}
//                   />
//                   {emailError && (
//                     <p id="email-error" style={errorStyle}>
//                       {emailError}
//                     </p>
//                   )}
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
//                     className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
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
//                     className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                     required
//                     style={passwordError ? inputErrorStyle : {}}
//                     aria-invalid={passwordError ? "true" : "false"}
//                     aria-describedby={
//                       passwordError ? "password-error" : undefined
//                     }
//                   />
//                   {passwordError && (
//                     <p id="password-error" style={errorStyle}>
//                       {passwordError}
//                     </p>
//                   )}
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transform transition-transform hover:scale-105"
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
//                     className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                     required
//                     style={emailError ? inputErrorStyle : {}}
//                     aria-invalid={emailError ? "true" : "false"}
//                     aria-describedby={
//                       emailError ? "login-email-error" : undefined
//                     }
//                   />
//                   {emailError && (
//                     <p id="login-email-error" style={errorStyle}>
//                       {emailError}
//                     </p>
//                   )}
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
//                     className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                     required
//                     style={passwordError ? inputErrorStyle : {}}
//                     aria-invalid={passwordError ? "true" : "false"}
//                     aria-describedby={
//                       passwordError ? "login-password-error" : undefined
//                     }
//                   />
//                   {passwordError && (
//                     <p id="login-password-error" style={errorStyle}>
//                       {passwordError}
//                     </p>
//                   )}
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-[#E63946] text-white rounded-full py-3  font-bold text-lg transform transition-transform hover:scale-105"
//                 >
//                   Log In
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>

//       <FooterPage />
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, registerUser, loginUser } from "../services/service";
import { useAuth } from "../components/AuthProvider";
import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage";
import Position from "../components/Position";

export default function SignInPage() {
  const { user, setUser } = useAuth();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [networkError, setNetworkError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then(() => setUser(true))
      .catch(() => setUser(null));
  }, [setUser]);

  useEffect(() => {
    if (user) {
      if (user.is_staff) {
        navigate("/admin"); // Redirect to /admin if user is staff
      } else {
        navigate("/home"); // Redirect to /home if user is not staff
      }
    }
  }, [user, navigate]);

  function updateFormBtn() {
    setRegistrationToggle(!registrationToggle);
    resetForm();
  }

  function resetForm() {
    setEmail("");
    setUsername("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setFormError("");
    setNetworkError("");
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  function validateForm() {
    let isValid = true;

    if (!email) {
      setEmailError("Email cannot be empty");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password cannot be empty");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (registrationToggle && !username) {
      setFormError("Username cannot be empty");
      isValid = false;
    } else {
      setFormError("");
    }

    return isValid;
  }

  function handleNetworkError(error) {
    if (error.response) {
      setNetworkError("Su contraseña no es correcta o correo no existe");
    } else {
      setNetworkError("Network error: Please check your connection");
    }
  }

  function submitRegistration(e) {
    e.preventDefault();
    if (validateForm()) {
      registerUser(email, username, password)
        .then(() => loginUser(email, password))
        .then(() => setUser(true))
        .catch((error) => handleNetworkError(error));
    }
  }

  function submitLogin(e) {
    e.preventDefault();
    if (validateForm()) {
      loginUser(email, password)
        .then((response) => {
          const { user } = response.data;
          setUser(true);
          if (user.is_staff) {
            navigate("/admin");
          } else {
            navigate("/home");
          }
        })
        .catch((error) => handleNetworkError(error));
    }
  }

  const errorStyle = {
    color: "red",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  };

  const inputErrorStyle = {
    borderColor: "red",
  };

  return (
    <>
      <NavBar />
      <Position />
      <div className="min-w-fit bg-white flex items-center justify-center p-4 dark:bg-[#3b3627] py-8 h-max">
        <div className="bg-white rounded-3xl max-w-md w-full mb-12 shadow-lg">
          <div className="p-6">
            {/* <h1 className="text-4xl font-extrabold text-center text-[#1D3557] mb-8">
              JoinJob
            </h1> */}
            <button
              onClick={updateFormBtn}
              className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transition-all duration-200 hover:scale-105 shadow-md"
            >
              {registrationToggle ? "Switch to Log In" : "Switch to Register"}
            </button>

            {formError && (
              <div style={{ ...errorStyle, marginBottom: "1rem" }}>
                {formError}
              </div>
            )}

            {networkError && (
              <div style={{ ...errorStyle, marginBottom: "1rem" }}>
                {networkError}
              </div>
            )}

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
                    className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
                    required
                    style={emailError ? inputErrorStyle : {}}
                  />
                  {emailError && <p style={errorStyle}>{emailError}</p>}
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
                    className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
                    required
                  />
                  {formError && <p style={errorStyle}>{formError}</p>}
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
                    className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
                    required
                    style={passwordError ? inputErrorStyle : {}}
                  />
                  {passwordError && <p style={errorStyle}>{passwordError}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
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
                    className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
                    required
                    style={emailError ? inputErrorStyle : {}}
                  />
                  {emailError && <p style={errorStyle}>{emailError}</p>}
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
                    className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
                    required
                    style={passwordError ? inputErrorStyle : {}}
                  />
                  {passwordError && <p style={errorStyle}>{passwordError}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#457B9D] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
                >
                  Log In
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}
