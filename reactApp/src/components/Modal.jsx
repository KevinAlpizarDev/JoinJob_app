
import React, { useState } from "react";
import confetti from "canvas-confetti"; // Importar la función correctamente
import axios from "axios";

const Modal = ({ courseId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    id_number: "",
    phone_number: "",
    age: "",
    gender: "male",
  });
  const [error, setError] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setError(null); // Limpiar el mensaje de error al cerrar
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken"); // Obtener el token de acceso
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Configuración de autorización con el token de acceso
      },
    };
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/enrollments/`,
        {
          ...formData,
          course: courseId, // El ID del curso se pasa directamente
        },
        config // Usar la configuración de autorización
      );
      console.log("Inscripción creada:", response.data);
      closeModal(); // Cerrar el modal al completar

      // Ejecutar la animación de confeti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.2 },
      });
    } catch (error) {
      setError("Hubo un error al enviar el formulario. Intenta de nuevo.");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center p-6 mt-6">
      <button
        onClick={openModal}
        className="animate-bounce  inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
      >
        Matrículas abiertas
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 transition-all duration-300 transform scale-100">
            <h2 className="text-lg font-semibold mb-4">
              Formulario de Inscripción
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  DNI
                </label>
                <input
                  type="text"
                  name="id_number"
                  value={formData.id_number}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Ingresa tu DNI"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Ingresa tu número de teléfono"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Edad
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Ingresa tu edad"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Género
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                </select>
              </div>

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
                >
                  Cerrar
                </button>
                <button
                  type="submit"
                  className="ml-2 px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
