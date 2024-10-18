// import React, { useState } from "react";
// import axios from "axios";

// export default function Register() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password1: "",
//     password2: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isLoading) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/register/",
//         formData
//       );
//       console.log("Success!", response.data);
//       setSuccessMessage("Registration Successful!");
//     } catch (error) {
//       console.log("Error during registration!", error.response?.data);
//       if (error.response && error.response.data) {
//         Object.keys(error.response.data).forEach((field) => {
//           const errorMessages = error.response.data[field];
//           if (errorMessages && errorMessages.length > 0) {
//             setError(errorMessages[0]);
//           }
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       <h2>Register:</h2>
//       <form>
//         <label>username:</label>
//         <br />
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         ></input>{" "}
//         <br />
//         <br />
//         <label>email:</label>
//         <br />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         ></input>{" "}
//         <br />
//         <br />
//         <label>password:</label>
//         <br />
//         <input
//           type="password"
//           name="password1"
//           value={formData.password1}
//           onChange={handleChange}
//         ></input>{" "}
//         <br />
//         <br />
//         <label>confirm password:</label>
//         <br />
//         <input
//           type="password"
//           name="password2"
//           value={formData.password2}
//           onChange={handleChange}
//         ></input>{" "}
//         <br />
//         <br />
//         <button type="submit" disabled={isLoading} onClick={handleSubmit}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// Redirect

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// export default function Register() {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password1: "",
//     password2: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isLoading) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         "http://127.0.0.1:8000/api/register/",
//         formData
//       );
//       console.log("Success!", response.data);
//       setSuccessMessage("Registration Successful!");

//       // Redirect to Home after successful registration
//       navigate("/"); // Navigate to Home
//     } catch (error) {
//       console.log("Error during registration!", error.response?.data);
//       if (error.response && error.response.data) {
//         Object.keys(error.response.data).forEach((field) => {
//           const errorMessages = error.response.data[field];
//           if (errorMessages && errorMessages.length > 0) {
//             setError(errorMessages[0]);
//           }
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       <h2>Register:</h2>
//       <form>
//         <label>username:</label>
//         <br />
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
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
//           name="password1"
//           value={formData.password1}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <label>confirm password:</label>
//         <br />
//         <input
//           type="password"
//           name="password2"
//           value={formData.password2}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <button type="submit" disabled={isLoading} onClick={handleSubmit}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../services/service"; // Importar el servicio

// export default function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password1: "",
//     password2: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [error, setError] = useState(null);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (isLoading) {
//   //     return;
//   //   }

//   //   setIsLoading(true);

//   //   try {
//   //     const response = await registerUser(
//   //       formData.email,
//   //       formData.username,
//   //       formData.password1
//   //     ); // Usar la función de registro
//   //     console.log("Success!", response.data);
//   //     setSuccessMessage("Registration Successful!");
//   //     navigate("/"); // Redirigir a Home
//   //   } catch (error) {
//   //     console.log("Error during registration!", error.response?.data);
//   //     if (error.response && error.response.data) {
//   //       Object.keys(error.response.data).forEach((field) => {
//   //         const errorMessages = error.response.data[field];
//   //         if (errorMessages && errorMessages.length > 0) {
//   //           setError(errorMessages[0]);
//   //         }
//   //       });
//   //     }
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isLoading) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await registerUser(
//         formData.email,
//         formData.username,
//         formData.password1,
//         formData.password2 // Asegúrate de pasar el campo de confirmación de contraseña
//       );
//       console.log("Success!", response.data);
//       setSuccessMessage("Registration Successful!");
//       navigate("/account"); // Redirigir a Home
//     } catch (error) {
//       console.log("Error during registration!", error.response?.data);
//       if (error.response && error.response.data) {
//         Object.keys(error.response.data).forEach((field) => {
//           const errorMessages = error.response.data[field];
//           if (errorMessages && errorMessages.length > 0) {
//             setError(errorMessages[0]);
//           }
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {/* {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       <h2>Register:</h2> */}

//       {/* /////////// */}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

//       <form className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Username
//                 </label>
//                 <input
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                            type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 <input
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                   type="password"
//                   name="password1"
//                   value={formData.password1}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 confirm password</label>
//                 <input
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//                   type="password"
//                   name="password2"
//                   value={formData.password2}
//                   onChange={handleChange}
//                 />
//               </div>

//               {/* <button
//                 type="submit"
//                 className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
//               >
//                 Register
//               </button> */}
//                  <button       className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md" type="submit" disabled={isLoading} onClick={handleSubmit}>
//           Register
//         </button>
//             </form>
//     </div>
//   );
// }

/////////////////////////////////////////////////////////////////////////////Name

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../services/service"; // Importar el servicio

// export default function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "", // Agregando name al estado
//     username: "",
//     email: "",
//     password1: "",
//     password2: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isLoading) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await registerUser(
//         formData.name, // Asegurarse de pasar name al registrar
//         formData.email,
//         formData.username,
//         formData.password1,
//         formData.password2
//       );
//       console.log("Success!", response.data);
//       setSuccessMessage("Registration Successful!");
//       navigate("/account");
//     } catch (error) {
//       console.log("Error during registration!", error.response?.data);
//       if (error.response && error.response.data) {
//         Object.keys(error.response.data).forEach((field) => {
//           const errorMessages = error.response.data[field];
//           if (errorMessages && errorMessages.length > 0) {
//             setError(errorMessages[0]);
//           }
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Name
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Username
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Password
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="password"
//             name="password1"
//             value={formData.password1}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Confirm Password
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="password"
//             name="password2"
//             value={formData.password2}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button
//           className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
//           type="submit"
//           disabled={isLoading}
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../services/service";

// export default function Register() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password1: "",
//     password2: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isLoading) return;

//     setIsLoading(true);

//     try {
//       const response = await registerUser(
//         formData.name,
//         formData.username,
//         formData.email,
//         formData.password1,
//         formData.password2
//       );
//       console.log("Success!", response.data);
//       setSuccessMessage("Registration Successful!");
//       navigate("/account");
//     } catch (error) {
//       console.log("Error during registration!", error.response?.data);
//       if (error.response && error.response.data) {
//         Object.keys(error.response.data).forEach((field) => {
//           const errorMessages = error.response.data[field];
//           if (errorMessages && errorMessages.length > 0) {
//             setError(errorMessages[0]);
//           }
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Name
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Username
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Password
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="password"
//             name="password1"
//             value={formData.password1}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Confirm Password
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="password"
//             name="password2"
//             value={formData.password2}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button
//           className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
//           type="submit"
//           disabled={isLoading}
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../services/service"; // Asegúrate de que este servicio esté configurado correctamente.
// import { useAuth } from "../components/AuthProvider";
// export default function Register() {
//   const { setUser } = useAuth();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password1: "",
//     password2: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isLoading) return;

//     setIsLoading(true);

//     try {
//       const response = await registerUser(
//         formData.name, // Asegúrate de pasar el campo name
//         formData.username,
//         formData.email,
//         formData.password1,
//         formData.password2
//       );
//       console.log("Success!", response.data);
//       setSuccessMessage("Registration Successful!");
//       setUser(response.data.user); // Actualizar el usuario en el contexto
//       navigate("/home");
//     } catch (error) {
//       console.log("Error during registration!", error.response?.data);
//       if (error.response && error.response.data) {
//         Object.keys(error.response.data).forEach((field) => {
//           const errorMessages = error.response.data[field];
//           if (errorMessages && errorMessages.length > 0) {
//             setError(errorMessages[0]);
//           }
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Name
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Username
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Password
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="password"
//             name="password1"
//             value={formData.password1}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Confirm Password
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="password"
//             name="password2"
//             value={formData.password2}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button
//           className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
//           type="submit"
//           disabled={isLoading}
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/service"; // Asegúrate de que este servicio esté configurado correctamente.
import { useAuth } from "../components/AuthProvider";

export default function Register() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await registerUser(
        formData.name, // Asegúrate de pasar el campo name
        formData.username,
        formData.email,
        formData.password1,
        formData.password2
      );
      console.log("Success!", response.data);
      setSuccessMessage("Registration Successful!");

      // Guardar tokens en el almacenamiento local
      localStorage.setItem("accessToken", response.data.tokens.access);
      localStorage.setItem("refreshToken", response.data.tokens.refresh);

      // Actualizar el usuario en el contexto
      setUser(response.data.user);

      // Redirigir a Home después de un registro exitoso
      navigate("/home");
    } catch (error) {
      console.log("Error during registration!", error.response?.data);
      if (error.response && error.response.data) {
        Object.keys(error.response.data).forEach((field) => {
          const errorMessages = error.response.data[field];
          if (errorMessages && errorMessages.length > 0) {
            setError(errorMessages[0]);
          }
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
            type="password"
            name="password1"
            value={formData.password1}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
          type="submit"
          disabled={isLoading}
        >
          Register
        </button>
      </form>
    </div>
  );
}
