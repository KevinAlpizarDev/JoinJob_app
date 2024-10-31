// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios"; // Asegúrate de que axios esté importado

// const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

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
//           setUser(response.data);
//         } catch (error) {
//           console.error("Error fetching user data", error);
//           setUser(null);
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

// // Exporta el provider como exportación predeterminada
// export { useAuth };
// export default AuthProvider;

//load
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

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
          setUser(response.data); // Actualiza el usuario en el estado
        } catch (error) {
          console.error("Error fetching user data", error);
          setUser(null); // Asegúrate de limpiar el estado en caso de error
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

export { useAuth };
export default AuthProvider;
