



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NavBar from "../components/main/NavBar";
import { useAuth } from "../components/AuthProvider";
import Position from "../components/Position";

export default function SignInPage() {
  const { user, setUser } = useAuth();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario está autenticado, redirigir a la página correspondiente
    if (user) {
      if (user.is_staff) {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    }
  }, [user, navigate]);

  function updateFormBtn() {
    setRegistrationToggle(!registrationToggle);
  }

  return (
<>
<Position/>
    <div className="min-w-fi h-screen bg-gray-50 flex items-center justify-center p-4 dark:bg-[#3b3627] py-8">
      <div className="bg-white rounded-3xl max-w-md w-full mb-12 shadow-lg">
        <div className="p-6">
          <button
            onClick={updateFormBtn}
            className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transition-all duration-200 hover:scale-105 shadow-md"
          >
            {registrationToggle ? "Switch to Log In" : "Switch to Register"}
          </button>

          {registrationToggle ? (
           <div>
            <Register/>
           </div>
          ) : (
            <div>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>

</>
  );
}
