// ///////////////////////////////////////////////2
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthProvider";

// function ProtectedRoute({ children }) {
//   const user = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user === null) {
//       navigate("/signin", { replace: true });
//     }
//   }, [navigate, user]);

//   return children;
// }

// export default ProtectedRoute;
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
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthProvider"; // Hook para obtener el usuario

// function ProtectedRoute({ children, requireStaff }) {
//   const { user } = useAuth(); // Obtener el usuario desde el contexto
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Si el usuario es null, redirige a /signin
//     if (!user) {
//       navigate("/signin", { replace: true });
//     } else if (requireStaff && !user.is_staff) {
//       // Si se requiere staff y el usuario no es staff, redirige a la página de inicio
//       navigate("/", { replace: true });
//     }
//   }, [user, requireStaff, navigate]);

//   // Si el usuario existe y tiene permisos (si se requiere), renderiza los componentes hijos
//   if (user && (!requireStaff || user.is_staff)) {
//     return children;
//   }

//   // Mientras redirige, puedes mostrar un loader o un mensaje
//   return <div>Loading...</div>;
// }

// export default ProtectedRoute;
//////////////////////////////////////////////////////is stuff
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthProvider";

// function ProtectedRoute({ children, requireStaff }) {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/signin", { replace: true });
//     } else if (requireStaff && !user.is_staff && !user) {
//       navigate("/admin", { replace: true });
//     }
//   }, [user, requireStaff, navigate]);

//   if (user && (!requireStaff || user.is_staff)) {
//     return children;
//   }

//   return <div>Loading...</div>;
// }

// export default ProtectedRoute;
//////////////////////////////////////////////////////////////////////////is_stuff 2
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthProvider";

// function ProtectedRoute({ children, requireStaff }) {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log("User state in ProtectedRoute:", user);
//     console.log("To home");

//     if (!user) {
//       navigate("/signin", { replace: true });
//     } else if (requireStaff && !user.is_staff) {
//       console.log("User is not staff, redirecting to home.");
//       navigate("/", { replace: true });
//     } else if (requireStaff && user.is_staff) {
//       console.log("User is staff, redirecting to admin.");
//       console.log("to admin");
//       navigate("/admin", { replace: true });
//     }
//   }, [user, requireStaff, navigate]);

//   // Renderizar hijos si el usuario está autenticado y cumple con los requisitos
//   if (user && (!requireStaff || user.is_staff)) {
//     return children;
//   }

//   // Mostrar mensaje de carga mientras se comprueba la autenticación
//   return <div>Loading...</div>;
// }

// export default ProtectedRoute;


// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthProvider";

// function ProtectedRoute({ children, requireStaff }) {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log("User state in ProtectedRoute:", user);

//     // Si no hay usuario, redirige a /signin
//     if (!user) {
//       console.log("No user, redirecting to /signin");
//       navigate("/home", { replace: true });
//     }
//     // Si se requiere staff y el usuario es staff, redirige a /admin
//     else if (requireStaff && user.is_staff) {
//       console.log("User is staff, redirecting to /admin");
//       navigate("/admin", { replace: true });
//     }
//     // Si no es staff, redirige a la página de inicio
//     else if (requireStaff && !user.is_staff) {
//       console.log("User is not staff, redirecting to /");
//       navigate("/", { replace: true });
//     }
//   }, [user, requireStaff, navigate]);

//   // Renderizar si el usuario está autenticado y cumple con los requisitos de staff
//   if (user && (!requireStaff || user.is_staff)) {
//     return children;
//   }

//   return <div>Loading...</div>;
// }

// export default ProtectedRoute;
