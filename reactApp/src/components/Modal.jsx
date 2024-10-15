// import React, { useState } from "react";

// const Modal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="flex justify-center p-6 mt-6">
//       <a
//         onClick={openModal}
//         className="animate-bounce inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
//       >
//         Matricula abierta
//       </a>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 transition-all duration-300 transform scale-100">
//             <h2 className="text-lg font-semibold mb-4">
//               Formulario de Inscripción
//             </h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Nombre
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="Ingresa tu nombre"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Correo Electrónico
//                 </label>
//                 <input
//                   type="email"
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="Ingresa tu correo electrónico"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Teléfono
//                 </label>
//                 <input
//                   type="tel"
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
//                   placeholder="Ingresa tu número de teléfono"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
//                 >
//                   Cerrar
//                 </button>
//                 <button
//                   type="submit"
//                   className="ml-2 px-4 py-2 text-sm font-medium text-white bg-teal-700 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
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

const Modal = ({ courseId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log(`Modal ${courseId}`); // Log the modal number
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center p-6 mt-6">
      <a
        onClick={openModal}
        className="animate-bounce inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-teal-700 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
      >
        Matricula abierta
      </a>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 transition-all duration-300 transform scale-100">
            <h2 className="text-lg font-semibold mb-4">
              Formulario de Inscripción
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Ingresa tu número de teléfono"
                  required
                />
              </div>
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
