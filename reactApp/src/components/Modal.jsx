// import React, { useState } from "react";
// import confetti from "canvas-confetti";
// import axios from "axios";
// // import Alert from "./Alert"; // Importa el componente de alerta
// import Alert from "./main/Alert";
// const Modal = ({ courseId }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     id_number: "",
//     phone_number: "",
//     age: "",
//     gender: "male",
//   });
//   const [error, setError] = useState(null);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setError(null);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const accessToken = localStorage.getItem("accessToken");
//     const config = {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };
//     try {
//       const response = await axios.post(
//         `http://127.0.0.1:8000/api/enrollments/`,
//         {
//           ...formData,
//           course: courseId,
//         },
//         config
//       );
//       console.log("Inscripción creada:", response.data);
//       closeModal();
//       confetti({
//         particleCount: 100,
//         spread: 70,
//         origin: { y: 0.9 },
//       });
//     } catch (error) {
//       setError("Ya estás matriculado");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="flex justify-center p-6 mt-6">
//       <button
//         onClick={openModal}
//         className="animate-bounce inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-extra-rounded shadow-sm text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
//       >
//         Matrícular
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white rounded-extra-rounded shadow-lg max-w-md w-full p-6 transition-all duration-300 transform scale-100">
//             <h2 className="text-lg font-semibold mb-4">
//               Formulario de Inscripción
//             </h2>

//             {error && (
//               <Alert
//                 type="warning"
//                 title="Advertencia"
//                 message={error}
//                 onClose={() => setError(null)} // Cierra la alerta al hacer clic en el icono de cierre
//               />
//             )}

//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   DNI
//                 </label>
//                 <input
//                   type="text"
//                   name="id_number"
//                   value={formData.id_number}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="Ingresa tu DNI"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Teléfono
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone_number"
//                   value={formData.phone_number}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="Ingresa tu número de teléfono"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Edad
//                 </label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="Ingresa tu edad"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Género
//                 </label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                 >
//                   <option value="male">Masculino</option>
//                   <option value="female">Femenino</option>
//                 </select>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-standard hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
//                 >
//                   Cerrar
//                 </button>
//                 <button
//                   type="submit"
//                   className="ml-2 px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-standard hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
//                 >
//                   Enviar
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Modal;

import React, { useState } from "react";
import confetti from "canvas-confetti";
import axios from "axios";
import Alert from "./main/Alert";

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
    setError(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/enrollments/`,
        {
          ...formData,
          course: courseId,
        },
        config
      );
      console.log("Inscripción creada:", response.data);
      closeModal();
      // confetti({
      //   particleCount: 100,
      //   spread: 70,
      //   origin: { y: 1.5 },
      // });
      confetti({
        particleCount: 217, // Aumentar el número de partículas
        spread: 1000, // Aumentar la dispersión
        origin: { y: 0.4 * 0.1 }, // Cambiar el origen para que sea aleatorio
        //angle: 1, // Ajustar el ángulo para que el confeti caiga más recto
      });
    } catch (error) {
      setError("Ya estás matriculado");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center p-6 mt-6">
      <button
        onClick={openModal}
        className="animate-bounce inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-extra-rounded shadow-sm text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
      >
        Matrícular
      </button>

      {isOpen && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center">
          {/* Fondo oscuro con opacidad y desenfoque */}
          <div
            className="absolute inset-0 bg-black bg-opacity-5 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Contenedor del modal */}
          <div className="relativ bg-primary-light   rounded-extra-rounded shadow-lg max-w-md w-full p-6 transition-all duration-300 transform scale-100">
            <h2 className="text-lg font-semibold mb-4">
              Formulario de Inscripción
            </h2>

            {error && (
              <Alert
                type="warning"
                title="Advertencia"
                message={error}
                onClose={() => setError(null)}
              />
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4 ">
                <label className="block text-sm font-medium text-gray-700">
                  DNI
                </label>
                <input
                  type="text"
                  name="id_number"
                  value={formData.id_number}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Ingresa tu DNI"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
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
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
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
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-standard hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
                >
                  Cerrar
                </button>
                <button
                  type="submit"
                  className="ml-2 px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-standard hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
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

// import React, { useState, useEffect } from "react";
// import confetti from "canvas-confetti";
// import axios from "axios";
// // import Alert from "./Alert"; // Importa el componente de alerta
// import Alert from "./main/Alert";

// const Modal = ({ courseId }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     id_number: "",
//     phone_number: "",
//     age: "",
//     gender: "male",
//   });
//   const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   // Mostrar confeti cada vez que se carga el componente
//   //   confetti({
//   //     particleCount: 17, // Aumentar el número de partículas
//   //     spread: 400, // Aumentar la dispersión
//   //     origin: { y:  0.2 * 0.3 }, // Cambiar el origen para que sea aleatorio
//   //     angle: 11, // Ajustar el ángulo para que el confeti caiga más recto
//   //   });
//   // }, []); // El array vacío significa que se ejecuta solo una vez al montar el componente

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setError(null);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const accessToken = localStorage.getItem("accessToken");
//     const config = {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };
//     try {
//       const response = await axios.post(
//         `http://127.0.0.1:8000/api/enrollments/`,
//         {
//           ...formData,
//           course: courseId,
//         },
//         config
//       );
//       console.log("Inscripción creada:", response.data);
//       closeModal();
//       confetti({
//         particleCount: 217, // Aumentar el número de partículas
//         spread: 1000, // Aumentar la dispersión
//         origin: { y:  0.4 * 0.1 }, // Cambiar el origen para que sea aleatorio
//       //angle: 1, // Ajustar el ángulo para que el confeti caiga más recto
//       });
//       // Aquí puedes quitar el confeti, ya que se muestra solo al recargar
//     } catch (error) {
//       setError("Ya estás matriculado");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="flex justify-center p-6 mt-6">
//       <button
//         onClick={openModal}
//         className="animate-bounce inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-extra-rounded shadow-sm text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
//       >
//         Matrícular
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white rounded-extra-rounded shadow-lg max-w-md w-full p-6 transition-all duration-300 transform scale-100">
//             <h2 className="text-lg font-semibold mb-4">
//               Formulario de Inscripción
//             </h2>

//             {error && (
//               <Alert
//                 type="warning"
//                 title="Advertencia"
//                 message={error}
//                 onClose={() => setError(null)} // Cierra la alerta al hacer clic en el icono de cierre
//               />
//             )}

//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   DNI
//                 </label>
//                 <input
//                   type="text"
//                   name="id_number"
//                   value={formData.id_number}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="Ingresa tu DNI"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Teléfono
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone_number"
//                   value={formData.phone_number}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="Ingresa tu número de teléfono"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Edad
//                 </label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="Ingresa tu edad"
//                   required
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Género
//                 </label>
//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-complete shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                 >
//                   <option value="male">Masculino</option>
//                   <option value="female">Femenino</option>
//                 </select>
//               </div>

//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-standard hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
//                 >
//                   Cerrar
//                 </button>
//                 <button
//                   type="submit"
//                   className="ml-2 px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-standard hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
//                 >
//                   Enviar
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Modal;
