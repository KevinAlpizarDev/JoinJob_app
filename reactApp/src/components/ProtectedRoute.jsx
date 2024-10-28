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



// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthProvider";

// function ProtectedRoute({ children }) {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Logs para verificar el estado del usuario
//     console.log("Estado del usuario en ProtectedRoute:", user);

//     if (user) {
//       if (user.is_staff) {
//         console.log("Usuario es admin, redirigiendo a /admin");
//         navigate("/admin");
//       } else {
//         console.log("Usuario no es admin, redirigiendo a /home");
//         navigate("/home", { replace: true });
//       }
//     } else {
//       console.log("Usuario no autenticado, redirigiendo a /login");
//       navigate("/account");
//     }
//   }, [user, navigate]);

//   return children;
// }

// export default ProtectedRoute;
