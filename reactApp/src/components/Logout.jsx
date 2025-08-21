// Logout.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Para la redirección
import { handleLogout } from "../services/service"; // Importar la función de logout

const Logout = () => {
  const navigate = useNavigate(); // Instancia de useNavigate para redireccionar

  const handleLogoutClick = async () => {
    try {
      await handleLogout(); // Llama a la función de logout
      navigate("/account"); // Redirigir a la página de cuenta
      console.log("Log out successful!"); // Mensaje de éxito
    } catch (error) {
      console.error("Failed to logout", error.message); // Manejo de errores
    }
  };

  return (
    <button
      onClick={handleLogoutClick}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
};

export default Logout;
