import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/service"; // Asegúrate de que este servicio esté configurado correctamente.
import { useAuth } from "../components/AuthProvider";
import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation

export default function Register() {
  const [step, setStep] = useState(1); // Manejador del paso actual
  const { setUser } = useAuth(); // Contexto para manejar la autenticación
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente

  // Manejador para avanzar al siguiente paso
  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  // Manejador para retroceder al paso anterior
  const handlePrev = () => setStep(step - 1);

  // Manejador para los cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Estado para manejar el estado de carga, mensajes de éxito y errores
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  // Validaciones por paso
  const validateStep = (step) => {
    if (step === 1) {
      if (!formData.name || !formData.username || !formData.email) {
        setError("Todos los campos son obligatorios en este paso.");
        return false;
      }
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        setError("Por favor, introduce un correo electrónico válido.");
        return false;
      }
    } else if (step === 2) {
      if (!formData.password1 || !formData.password2) {
        setError("Ambos campos de contraseña son obligatorios.");
        return false;
      }
      if (formData.password1 !== formData.password2) {
        setError("Las contraseñas no coinciden.");
        return false;
      }
      if (formData.password1.length < 8) {
        setError("La contraseña debe tener al menos 8 caracteres.");
        return false;
      }
    }
    setError(null); // Limpia el error si no hay problemas
    return true;
  };

  // Manejador para el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await registerUser(
        formData.name,
        formData.username,
        formData.email,
        formData.password1,
        formData.password2
      );
      console.log("Success!", response.data);
      setSuccessMessage("¡Registro exitoso!");

      // Guardar tokens en el almacenamiento local
      localStorage.setItem("accessToken", response.data.tokens.access);
      localStorage.setItem("refreshToken", response.data.tokens.refresh);

      // Actualizar el usuario en el contexto
      setUser(response.data.user);

      // Redirigir a Home después de un registro exitoso
      navigate("/home");
    } catch (error) {
      console.log("Error durante el registro!", error.response?.data);
      if (error.response && error.response.data) {
        Object.keys(error.response.data).forEach((field) => {
          const errorMessages = error.response.data[field];
          if (errorMessages && errorMessages.length > 0) {
            setError(errorMessages[0]);
          }
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-secundary-light dark:bg-secundary-dark rounded-extra-rounded dark:border-none">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      {/* PASO 1: Información personal */}
      {step === 1 && (
        <div className="">
          <h2 className="text-lg py-4 font-bold dark:text-tertiary-light">
            {t("publicAccess.account.register.personalInformation")}
          </h2>
          <div>
            <label className="block text-sm font-medium text-secundary-dark dark:text-secundary-light mb-1">
              {t("publicAccess.account.register.name")}
            </label>
            <input
              className="w-full dark:text-white px-4 py-3 rounded-extra-rounded border-2 border-gray-300 focus:border-blue-700 focus:outline-none shadow-sm dark:bg-tertiary-dark"
              placeholder="Ej: Paola"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secundary-dark dark:text-secundary-light mb-1">
              {t("publicAccess.account.register.userName")}
            </label>
            <input
              className="w-full dark:text-white px-4 py-3 rounded-extra-rounded border-2 border-gray-300 focus:border-blue-700 focus:outline-none shadow-sm dark:bg-tertiary-dark"
              placeholder="Ej: Pao"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secundary-dark dark:text-secundary-light mb-1">
              {t("publicAccess.account.register.email")}
            </label>
            <input
              className="w-full dark:text-white px-4 py-3 rounded-extra-rounded border-2 border-gray-300 focus:border-blue-700 focus:outline-none shadow-sm dark:bg-tertiary-dark"
              placeholder="Ej: paola@joinjob.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="w-full bg-blue-sky hover:bg-blue-sky-light my-4 text-sm font-medium text text-secundary-dark rounded-extra-rounded py-3 px-6  mb-6 transition-all duration-200 hover:scale-105 shadow-md"
            onClick={handleNext}
          >
            {t("publicAccess.account.register.registerButton")}
          </button>
        </div>
      )}

      {/* PASO 2: Información de la cuenta */}
      {step === 2 && (
        <div>
          <h2 className="text-lg font-bold dark:text-tertiary-light">
            Paso 2: Información de la cuenta
          </h2>

          <div>
            <label className="block text-sm font-medium text-secundary-dark dark:text-secundary-light mb-1">
              Contraseña
            </label>
            <input
              className="w-full dark:text-white px-4 py-3 rounded-extra-rounded border-2 border-gray-300 focus:border-blue-700 focus:outline-none shadow-sm dark:bg-tertiary-dark"
              placeholder="********"
              type="password"
              name="password1"
              value={formData.password1}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secundary-dark dark:text-secundary-light mb-1">
              Confirmar contraseña
            </label>
            <input
              className="w-full dark:text-white px-4 py-3 rounded-extra-rounded border-2 border-gray-300 focus:border-blue-700 focus:outline-none shadow-sm dark:bg-tertiary-dark"
              placeholder="********"
              type="password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              className="w-full bg-tertiary-light hover:bg-primary-light text-sm font-medium text-secundary-dark rounded-extra-rounded py-3 px-6 my-2   transition-all duration-200 hover:scale-105 shadow-m "
              onClick={handlePrev}
            >
              Anterior
            </button>
            <button
              className="w-full bg-blue-sky text-sm font-medium text-secundary-dark rounded-extra-rounded py-3 px-6   transition-all duration-200 hover:scale-105 shadow-m  dark:to-blue-sky-light"
              onClick={handleNext}
            >
              Continuar
              {/* {t("publicAccess.account.register.next")} */}
            </button>
          </div>
          {/* <div className="flex justify-between mt-4">
        <button
          className="rounded-extra-rounded bg-gray-300 px-6 py-2 h-12 text-sm font-semibold text-blue-700 hover:bg-gray-200 w-full mr-2"
          onClick={handlePrev}
        >
          {t("publicAccess.account.register.previous")}
        </button>
        <button
          className="rounded-extra-rounded bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 w-full"
          onClick={handleNext}
        >
          {t("publicAccess.account.register.next")}
        </button>
      </div> */}
        </div>
      )}

      {/* PASO 3: Confirmación */}
      {step === 3 && (
        <div>
          <h2 className="text-lg font-bold dark:text-tertiary-light">
            Paso 3: Confirmación
          </h2>

          <div className="mt-12 space-y-4 block text-sm font-medium text-secundary-dark dark:text-secundary-light mb-1">
            <p>Nombre: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Nombre de usuario: {formData.username}</p>
          </div>

          <div className="mt-4">
            <button
              className="w-full bg-tertiary-light hover:bg-primary-light text-sm font-medium text-secundary-dark rounded-extra-rounded py-3 px-6 my-2   transition-all duration-200 hover:scale-105 shadow-m "
              onClick={handlePrev}
            >
              Anterior
            </button>
            <form onSubmit={handleSubmit}>
              <button
                className="w-full bg-[#4CAF50] hover:bg-[#66BB6A] text-sm font-medium text-secundary-dark rounded-extra-rounded py-3 px-6 my-2 transition-all duration-200 hover:scale-105 shadow-m"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Cargando..." : "Confirmar y Registrarse"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
