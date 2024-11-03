// ////////////////////////////////////////////////////////token

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../services/service"; // Importar la función de login
// import { useAuth } from "../components/AuthProvider";
// import { getCurrentUser } from "../services/service";


// import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation






// export default function Login() {
//   const { setUser } = useAuth();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [error, setError] = useState(null);

//   const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente


//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isLoading) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await loginUser(formData.email, formData.password);
//       console.log("Success!", response.data);
//       setSuccessMessage("Login Successful!");
//       localStorage.setItem("accessToken", response.data.tokens.access);
//       localStorage.setItem("refreshToken", response.data.tokens.refresh);
//       setUser(response.data.user); // Actualizar el usuario en el contexto

//       if (response.data.is_staff) {
//         navigate("/admin");
//       } else {
//         navigate("/home");
//       }

//       // console.log(response.data.is_staff);
//       // Redirigir a Home después de un inicio de sesión exitoso
//       // navigate("/home");
//     } catch (error) {
//       console.log("Error during Login!", error.response?.data);
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

//   // useEffect(() => {
//   //   getCurrentUser().then(response => {
//   //     console.log(response.data); // Inspeccionar la respuesta en el componente
//   //   }).catch(error => {
//   //     console.error("Error:", error);
//   //   });
//   // }, []);

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       <form className="space-y-4 " onSubmit={handleSubmit}>
//         <div>
//           <label className=" block text-sm font-medium text-secundary-dark dark:text-secundary-light mb-1">
//           {t("publicAccess.account.login.email")}
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-extra-rounded border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-secundary-dark dark:text-secundary-light mb-1">
//           {t("publicAccess.account.login.password")}
//           </label>
//           <input
//             className="w-full px-4 py-3 rounded-extra-rounded border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none shadow-sm"
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-sky hover:text-white hover:bg-blue-sky-light text-white rounded-extra-rounded py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
//           disabled={isLoading}
//         >
//            {t("publicAccess.account.login.loginButton")}
//         </button>
//       </form>
//     </div>
//   );
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/service";
import { useAuth } from "../components/AuthProvider";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const { t } = useTranslation("global");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await loginUser(formData.email, formData.password);
      setSuccessMessage(t("publicAccess.account.login.success"));
      localStorage.setItem("accessToken", response.data.tokens.access);
      localStorage.setItem("refreshToken", response.data.tokens.refresh);
      setUser(response.data.user);

      navigate(response.data.is_staff ? "/admin" : "/home");
    } catch (error) {
      
      setError(t("publicAccess.account.login.error"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-secundary-light dark:bg-secundary-dark rounded-extra-rounded dark:border-none">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-secundary-dark dark:text-secundary-light mb-1">
            {t("publicAccess.account.login.email")}
          </label>
          <input
            className="w-full px-4 py-3 rounded-extra-rounded border-2 border-gray-300 focus:border-blue-700 focus:outline-none shadow-sm dark:bg-tertiary-dark"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-secundary-dark dark:text-secundary-light mb-1">
            {t("publicAccess.account.login.password")}
          </label>
          <input
            className="w-full px-4 py-3 rounded-extra-rounded border-2 border-gray-300 focus:border-blue-700 focus:outline-none shadow-sm dark:bg-tertiary-dark"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-extra-rounded py-3 px-6 font-bold text-lg transition-all duration-200 hover:scale-105 shadow-md"
          disabled={isLoading}
        >
          {t("publicAccess.account.login.loginButton")}
        </button>
      </form>
    </div>
  );
}
