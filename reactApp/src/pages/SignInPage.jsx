import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import NavBar from "../components/main/NavBar";
import { useAuth } from "../components/AuthProvider";
import Position from "../components/Position";

import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation

export default function SignInPage() {
  const { user, setUser } = useAuth();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const navigate = useNavigate();

  const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente

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
      <Position />
      <div className="min-w-fi h-screen bg-light-blue flex items-center justify-center p-4 dark:bg-[#3b3627] py-8">
        <div className="bg-white rounded-extra-rounded max-w-md w-full mb-12 shadow-lg">
          <div className="p-6">
            <button
              onClick={updateFormBtn}
              className="w-full bg-[#1D3557] text-white rounded-extra-rounded py-3 px-6 font-bold text-lg mb-6 transition-all duration-200 hover:scale-105 shadow-md"
            >
              {registrationToggle
                ? t("publicAccess.account.register.switch")
                : t("publicAccess.account.login.switch")}
            </button>

            {registrationToggle ? (
              <div>
                <Register />
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
