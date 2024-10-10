// AdminPage.jsx
import React from "react";
import { useLogout } from "../utils/authUtils"; // Ajusta la ruta según sea necesario

const AdminPage = () => {
  const submitLogout = useLogout(); // Usa la función de logout

  return (
    <div>
      <h1>Si Soy Admin! :)</h1>
      <form onSubmit={submitLogout}>
        <button type="submit">Log out</button>
      </form>
    </div>
  );
};

export default AdminPage;
