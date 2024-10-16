// //////////////////////////////////////////////////////////////3
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



// import { createContext, useContext, useState, useEffect } from "react";

// // Auth context and provider component
// const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Estado inicial

//   useEffect(() => {
//     // Verificar si hay un token de autenticación guardado en localStorage
//     const accessToken = localStorage.getItem("accessToken");
//     if (accessToken) {
//       setUser({ id: 1 }); // Aquí puedes establecer el usuario si el token es válido
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
