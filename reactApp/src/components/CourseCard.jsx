import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div>
      <div>
        <h1>{course.nombre}</h1>
        <p>{course.codigo}</p>
      </div>
    </div>
  );
};

export default  CourseCard ;



// ///////////////////////////////////////////////////////////////
// import { useState } from 'react'

// function CourseCard({ course }) {
//   const [isExpanded, setIsExpanded] = useState(false)

//   return (
//     <div className="w-full mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
//       <div className="bg-[#ff4a00] text-white p-8">
//         <h2 className="text-4xl font-extrabold">Nueva Tarea Espectacular</h2>
//       </div>
//       <div className="p-8 space-y-8 bg-gradient-to-b from-[#fff9e5] to-white">
//         <div className="space-y-4">
//         <h1>{course.nombre}</h1>
//           {/* <input 
//             id="nombre" 
//             placeholder="Ingresa un nombre impactante" 
//             className="rounded-xl text-lg p-4 bg-white border-3 border-[#ff4a00] focus:ring-[#ff6b00] focus:border-[#ff6b00] shadow-lg" 
//             readOnly
//           /> */}
//         </div>
        
//         <div className="space-y-4">
//           <label htmlFor="descripcion" className="text-xl font-bold text-gray-800">Descripción Detallada</label>
//           <textarea 
//             id="descripcion" 
//             placeholder="Describe tu tarea de manera fascinante" 
//             className="rounded-xl text-lg p-4 bg-white border-3 border-[#ff4a00] focus:ring-[#ff6b00] focus:border-[#ff6b00] shadow-lg min-h-[150px]" 
//             readOnly
//           />
//         </div>
        
//         <div className="space-y-4">
//         <p>{course.codigo}</p>y
//           {/* <input 
//             id="codigo" 
//             placeholder="Asigna un código memorable" 
//             className="rounded-xl text-lg p-4 bg-white border-3 border-[#ff4a00] focus:ring-[#ff6b00] focus:border-[#ff6b00] shadow-lg" 
//             readOnly
//           /> */}
//         </div>
        
//         {isExpanded && (
//           <div className="space-y-8">
//             <div className="grid grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 <label htmlFor="fecha-inicio" className="text-xl font-bold text-gray-800">Fecha de Inicio</label>
//                 {/* <input 
//                   id="fecha-inicio" 
//                   type="date" 
//                   className="rounded-xl text-lg p-4 bg-white border-3 border-[#ff4a00] focus:ring-[#ff6b00] focus:border-[#ff6b00] shadow-lg" 
//                   readOnly
//                 /> */}
//               </div>
//               <div className="space-y-4">
//                 <label htmlFor="fecha-fin" className="text-xl font-bold text-gray-800">Fecha de Finalización</label>
//                 <input 
//                   id="fecha-fin" 
//                   type="date" 
//                   className="rounded-xl text-lg p-4 bg-white border-3 border-[#ff4a00] focus:ring-[#ff6b00] focus:border-[#ff6b00] shadow-lg" 
//                   readOnly
//                 />
//               </div>
//             </div>
            
//             <div className="space-y-4">
//               <label htmlFor="cupo" className="text-xl font-bold text-gray-800">Cupo Disponible</label>
//               <input 
//                 id="cupo" 
//                 type="number" 
//                 placeholder="¿Cuántos pueden participar?" 
//                 className="rounded-xl text-lg p-4 bg-white border-3 border-[#ff4a00] focus:ring-[#ff6b00] focus:border-[#ff6b00] shadow-lg" 
//                 readOnly
//               />
//             </div>
            
//             <div className="space-y-4">
//               <label htmlFor="sede" className="text-xl font-bold text-gray-800">Sede Asignada</label>
//               <input 
//                 id="sede" 
//                 placeholder="¿Dónde se llevará a cabo?" 
//                 className="rounded-xl text-lg p-4 bg-white border-3 border-[#ff4a00] focus:ring-[#ff6b00] focus:border-[#ff6b00] shadow-lg" 
//                 readOnly
//               />
//             </div>
            
//             <div className="space-y-4">
//               <label htmlFor="horario" className="text-xl font-bold text-gray-800">Horario Establecido</label>
//               <input 
//                 id="horario" 
//                 placeholder="Ej: Lunes a Viernes, 9:00 - 18:00" 
//                 className="rounded-xl text-lg p-4 bg-white border-3 border-[#ff4a00] focus:ring-[#ff6b00] focus:border-[#ff6b00] shadow-lg" 
//                 readOnly
//               />
//             </div>
//           </div>
//         )}
        
//         <button 
//           onClick={() => setIsExpanded(!isExpanded)} 
//           className="w-full bg-[#ff4a00] hover:bg-[#ff6b00] text-white text-xl font-bold py-4 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
//         >
//           {isExpanded ? '¡Mostrar menos detalles!' : '¡Revelar más detalles!'}
//         </button>
//       </div>
//     </div>
//   )
// }

// export default CourseCard;
