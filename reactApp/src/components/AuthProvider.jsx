//////////////////////////////////////////////////////////////3
import { createContext, useContext, useState } from "react";

// Auth context and provider component
const AuthContext = createContext(null);

const AuthProvider = ({ children, isSignedIn }) => {
  // isSignedIn controla si el usuario está autenticado en el inicio
  const [user, setUser] = useState(isSignedIn ? { id: 1 } : null);

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
