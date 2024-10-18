//////////////////////////////////////////////////////////////3
// import { createContext, useContext, useState } from "react";

// // Auth context and provider component
// const AuthContext = createContext(null);

// const AuthProvider = ({ children, isSignedIn }) => {
//   // isSignedIn controla si el usuario está autenticado en el inicio
//   const [user, setUser] = useState(isSignedIn ? { id: 1 } : null);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook para usar el contexto de autenticación
// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export { useAuth };
// export default AuthProvider;
///////////////////////////////////////////////token

// import { createContext, useContext, useState, useEffect } from "react";

// // Auth context and provider component
// const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Comprobación del token al montar el componente
//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       // Aquí puedes hacer una llamada para verificar si el token sigue siendo válido
//       setUser({ id: 1 }); // Esto se ajustaría con los datos reales del usuario si es válido
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook para usar el contexto de autenticación
// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export { useAuth };
// export default AuthProvider;
// useEffect(() => {
//   const token = localStorage.getItem("accessToken");

//   if (token) {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/api/user/", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(response.data); // Establece el usuario con los datos reales
//       } catch (error) {
//         console.error("Error fetching user data", error);
//         setUser(null); // Si hay un error, asegúrate de que el usuario se establezca en null
//       }
//     };

//     fetchUserData();
//   }
// }, []);
// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios"; // Asegúrate de que axios esté importado

// // Crea el contexto de autenticación
// const AuthContext = createContext(null);

// // Proveedor del contexto de autenticación
// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Comprobación del token al montar el componente
//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       const fetchUserData = async () => {
//         try {
//           const response = await axios.get("http://127.0.0.1:8000/api/user/", {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           setUser(response.data); // Establece el usuario con los datos reales
//         } catch (error) {
//           console.error("Error fetching user data", error);
//           setUser(null); // Si hay un error, asegúrate de que el usuario se establezca en null
//         }
//       };
//       fetchUserData();
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook para usar el contexto de autenticación
// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export { useAuth, AuthProvider }; // Asegúrate de exportar tanto useAuth como AuthProvider
// AuthProvider.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; // Asegúrate de que axios esté importado

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/user/", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user data", error);
          setUser(null);
        }
      };
      fetchUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto de autenticación
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Exporta el provider como exportación predeterminada
export { useAuth };
export default AuthProvider;
