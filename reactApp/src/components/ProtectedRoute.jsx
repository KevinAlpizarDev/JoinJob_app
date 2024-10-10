///////////////////////////////////////////////3
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider"; // Hook para obtener el usuario

function ProtectedRoute({ children }) {
  const { user } = useAuth(); // Obtener el usuario desde el contexto
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario es null, redirige a /signin
    if (!user) {
      navigate("/signin", { replace: true });
    }
  }, [user, navigate]);

  // Si el usuario existe, renderiza los componentes hijos
  if (user) {
    return children;
  }

  // Mientras redirige, puedes mostrar un loader o un mensaje
  return <div>Loading...</div>;
}

export default ProtectedRoute;
