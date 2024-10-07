// import React from "react";

// const AuthProvider = () => {
//   return <div>a</div>;
// };

// export default AuthProvider;
/////////////////////////////////////////////////////////////
// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext(null);

// function AuthProvider({ children, isSignedIn }) {
//   // Uses `isSignedIn` prop to determine whether or not to render a user
//   const [user] = useState(isSignedIn ? { id: 1 } : null);

//   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
// }

// function useAuth() {
//   const context = useContext(AuthContext);

//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }

//   return context;
// }

// export { AuthProvider, useAuth };
////////////////////////////////////////////////////////
// import React from 'react'
// import { createContext, useContext, useState } from "react";

// const AuthProvider = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default AuthProvider
////////////////////////////////////////////////////////
// import { createContext, useContext, useState } from "react";

// // Auth context and provider component
// const AuthContext = createContext(null);

// const AuthProvider = ({ children, isSignedIn }) => {
//   // Uses `isSignedIn` prop to determine whether or not to render a user
//   const [user] = useState(isSignedIn ? { id: 1 } : null);

//   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
// };

// // Hook to use authentication context
// const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }

//   return context;
// };

// // Main component
// const AuthComponent = ({ isSignedIn }) => {
//   const user = useAuth();

//   return (
//     <div>
//       {user ? (
//         <p>User is signed in with ID: {user.id}</p>
//       ) : (
//         <p>No user signed in</p>
//       )}
//     </div>
//   );
// };

// export { AuthProvider, useAuth, AuthComponent };
// import { createContext, useContext, useState } from "react";

// // Auth context and provider component
// const AuthContext = createContext(null);

// const AuthProvider = ({ children, isSignedIn }) => {
//   const [user] = useState(isSignedIn ? { id: 1 } : null);
//   return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
// };

// // Hook to use authentication context
// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export { useAuth }; // Named export for `useAuth`
// export default AuthProvider; // Default export for `AuthProvider`
///////////////////////////////////////////////////////////////////2

// import { createContext, useContext, useState } from "react";

// // Auth context and provider component
// const AuthContext = createContext(null);

// const AuthProvider = ({ children, isSignedIn }) => {
//   const [user, setUser] = useState(isSignedIn ? { id: 1 } : null);
//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook to use authentication context
// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export { useAuth }; // Named export for `useAuth`
// export default AuthProvider; // Default export for `AuthProvider`
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
///////////////////////////////IS STUFF

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Auth context and provider component
const AuthContext = createContext(null);

const AuthProvider = ({ children, isSignedIn }) => {
  const [user, setUser] = useState(
    isSignedIn ? { id: 1, is_staff: false } : null
  );

  // const loginUser = (userData) => {
  //   setUser(userData);
  // };
  const loginUser = (userData) => {
    console.log("Logging in user:", userData); // <-- Asegúrate de que `is_staff` aparece aquí
    setUser({
      ...userData.user, 
      is_staff: userData.is_staff, // Guardar el valor correcto de is_staff
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loginUser }}>
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
