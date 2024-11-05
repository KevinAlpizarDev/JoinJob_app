//////////////////////////////////////////////////////////////////////////////////////////////////3
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario está autenticado, redirigir a la página correspondiente
    if (user) {
      if (user.is_staff) {
        navigate("/admin");
      } else {
        // navigate("/home");
        navigate("/home", { replace: true });
      }
    }
  }, [user, navigate]);

  return children;
}

export default ProtectedRoute;


