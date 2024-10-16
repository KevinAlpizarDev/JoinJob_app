// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import CourseList from "../components/CourseList";

// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [isLoggedIn, setLoggedIn] = useState(false);

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
//           setLoggedIn(true);
//           setUsername(response.data.username);
//         } else {
//           setLoggedIn(false);
//           setUsername("");
//         }
//       } catch (error) {
//         setLoggedIn(false);
//         setUsername("");
//       }
//     };
//     checkLoggedInUser();
//   }, []);

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
//         setUsername("");
//         console.log("Log out successful!");
//       }
//     } catch (error) {
//       console.error("Failed to logout", error.response?.data || error.message);
//     }
//   };
//   return (
//     <div>
//       {isLoggedIn ? (
//         <>
//         <CourseList/>
//           <h2>Hi, {username}. Thanks for loggin in!</h2>
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <h2>Please Login</h2>
//       )}
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { logoutUser } from "../services/service"; // Importar la función de logout
// import CourseList from "../components/CourseList";
// export default function Home() {
//   const [username, setUsername] = useState("");
//   const [isLoggedIn, setLoggedIn] = useState(false);

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
//           setLoggedIn(true);
//           setUsername(response.data.username);
//         } else {
//           setLoggedIn(false);
//           setUsername("");
//         }
//       } catch (error) {
//         setLoggedIn(false);
//         setUsername("");
//       }
//     };
//     checkLoggedInUser();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const refreshToken = localStorage.getItem("refreshToken");

//       if (refreshToken) {
//         await logoutUser(refreshToken); // Usar la función de logout
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         setLoggedIn(false);
//         setUsername("");
//         console.log("Log out successful!");
//       }
//     } catch (error) {
//       console.error("Failed to logout", error.response?.data || error.message);
//     }
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <>
//           <h2>Hi, {username}. Thanks for logging in!</h2>
//           <CourseList/>
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <h2>Please Login</h2>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/main/NavBar";

import Position from "../components/Position";

export default function SignInPage() {
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  // Manejador para cambiar entre registro e inicio de sesión
  function updateFormBtn() {
    setRegistrationToggle(!registrationToggle);
    resetForm();
  }

  // Reiniciar formulario
  function resetForm() {
    setEmail("");
    setUsername("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setFormError("");
  }

  // Validar el formato del email
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  // Validar los datos del formulario
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
      <div className="min-w-fi h-screen bg-gray-50 flex items-center justify-center p-4 dark:bg-[#3b3627] py-8">
        <div className="bg-white rounded-3xl max-w-md w-full mb-12 shadow-lg">
          <div className="p-6">
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

            {registrationToggle ? (
              <form className="space-y-4">
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
              <form className="space-y-4">
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
                  className="w-full bg-blue-600 text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
                >
                  Log In
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

    </>
  );
}
