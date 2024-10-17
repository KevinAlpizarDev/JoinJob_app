// ///////////////////////////////////////////////3
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthProvider"; // Hook para obtener el usuario

// function ProtectedRoute({ children }) {
//   const { user } = useAuth(); // Obtener el usuario desde el contexto
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Si el usuario es null, redirige a /signin
//     if (!user) {
//       navigate("/home", { replace: true });
//     }
//   }, [user, navigate]);

//   // Si el usuario existe, renderiza los componentes hijos
//   // if (user) {
//   //   // return children;

//   // }
//   return children;

//   // Mientras redirige, puedes mostrar un loader o un mensaje
//   // return <div>Loading...</div>;
//   // return children;
// }

// export default ProtectedRoute;
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

////////////////////////////////////chat


// ProtectedRoute.js

// function ProtectedRoute({ children }) {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/account", { replace: true }); // Si no está autenticado, redirigir a iniciar sesión
//     } else if (user.is_staff) {
//       navigate("/admin", { replace: true }); // Si es staff, redirigir a /admin
//     } else {
//       navigate("/home", { replace: true }); // Si es un usuario normal, redirigir a /home
//     }
//   }, [user, navigate]);

//   return user ? children : null;
// }

// export default ProtectedRoute;
