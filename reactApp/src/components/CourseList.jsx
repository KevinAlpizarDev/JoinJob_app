// import React, { useState, useEffect } from "react";
// import { getAllCourses } from "../services/service";
// import Info from "./Info";
// import Modal from "./Modal";


// import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation




// const CourseList = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
 
//     const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente
  
  
//   useEffect(() => {
//     const loadCourses = async () => {
//       setLoading(true); // Establecer loading en verdadero antes de cargar cursos
//       try {
//         const res = await getAllCourses();
//         const activeCourses = res.data.filter((course) => course.is_active);
//         setCourses(activeCourses);
//       } catch (error) {
//         console.error("Error loading courses:", error);
//         setError("Hubo un error al cargar los cursos."); // Establecer el mensaje de error
//       } finally {
//         setLoading(false); // Finalizar la carga
//       }
//     };
//     loadCourses();
//   }, []);

//   if (loading) {
//     return <p>Cargando cursos...</p>; // Mensaje de carga
//   }

//   if (error) {
//     return <p>{error}</p>; // Mostrar mensaje de error
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700">
//       <div className="w-full max-w-3xl px-4 py-6">
//         <h1 className="text-3xl font-extrabold mb-4 text-blue-600 text-center">
//         {t("userAccess.availableCourses.available")}
//         </h1>
//         <div className="space-y-6 ">
//           {courses.length === 0 ? (
//             <p> {t("userAccess.availableCourses.noAvailable")}</p> // Mensaje si no hay cursos
//           ) : (
//             courses.map((course) => (
//               <div
//                 key={course.id}
//                 className="bg-white p-6  rounded-extra-rounded transition-shadow duration-200 cursor-pointer w-full"
//               >
//                 <div className="px-4 py-6">
//                   <div className="flex justify-between items-start">
//                     <h2 className="text-xl font-bold text-gray-900">
//                       {course.name}
//                     </h2>
//                     <div className="text-sm text-gray-500">
//                       <span className="block font-semibold text-gray-700">
//                         Código
//                       </span>
//                       <div className="flex justify-center">
//                         {course.code}
//                       </div>
//                     </div>
//                   </div>
//                   {/* <p className="text-sm text-gray-600 my-2">
//                     {course.description}
//                   </p> */}
//                   <div className="flex space-x-1 mb-3">
//                     <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-extra-rounded text-xs font-medium">
//                       {course.seats} Cupo
//                     </span>
//                     <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-extra-rounded text-xs font-medium">
//                       {course.modality}
//                     </span>
//                   </div>
//                   <p className="text-sm text-gray-600 my-2">
//                     {course.description}
//                   </p>
//                   <div className="text-sm text-gray-500">
//                     <span className="block font-semibold text-gray-700">
//                       Campus:
//                     </span>
//                     <Info
//                       courseId={course.id}
//                       latitude={course.campus_latitude}
//                       longitude={course.campus_longitude}
//                     />
//                     <span>{course.campus_name}</span>
//                   </div>
//                 </div>
//                 <div className="border-t border-gray-200 px-4 py-6 flex justify-between items-center">
//                   <div className="flex items-center text-sm text-gray-500">
//                     <span>
//                       Desde: {course.start_date} - Hasta: {course.end_date}
//                     </span>
//                   </div>
//                   <div className="flex -space-x-2">
//                     <Modal courseId={course.id} />
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseList;
import React, { useState, useEffect } from "react";
import { getAllCourses } from "../services/service";
import Info from "./Info";
import Modal from "./Modal";
import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente

  useEffect(() => {
    const loadCourses = async () => {
      setLoading(true); // Establecer loading en verdadero antes de cargar cursos
      try {
        const res = await getAllCourses();
        const activeCourses = res.data.filter((course) => course.is_active);
        setCourses(activeCourses);
      } catch (error) {
        console.error("Error loading courses:", error);
        setError("Hubo un error al cargar los cursos."); // Establecer el mensaje de error
      } finally {
        setLoading(false); // Finalizar la carga
      }
    };
    loadCourses();
  }, []);

  if (loading) {
    return <p>Cargando cursos...</p>; // Mensaje de carga
  }

  if (error) {
    return <p>{error}</p>; // Mostrar mensaje de error
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-primary-light justify-center bg-light-main  dark:bg-primary-dark">
    <div className="w-full bg-primary-light max-w-3xl px-4 py-6  dark:bg-primary-dark">
      <div className="space-y-6 bg-primary-light dark:bg-primary-dark ">
        {courses.length === 0 ? (
          <p className="w-full flex  justify-center bg-primary-light  dark:bg-primary-dark dark:text-secundary-light">
            {t("userAccess.availableCourses.noAvailable")}
          </p> // Mensaje si no hay cursos
        ) : (
          courses.map((course) => (
            <div
              key={course.id}
              className="bg-secundary-light dark:bg-gray-800 p-6 rounded-extra-rounded transition-shadow duration-200 cursor-pointer w-full shadow-md"
            >
              <div className="px-4 py-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-light-star">
                    {course.name}
                  </h2>
                  <div className="text-sm text-gray-500">
                    <span className="block font-semibold text-gray-700">Código</span>
                    <div className="flex justify-center">
                      {course.code}
                    </div>
                  </div>
                </div>
                {/* <p className="text-sm text-gray-600 my-2">
                  {course.description}
                </p> */}
                <div className="flex space-x-1 mb-3">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-extra-rounded text-xs font-medium">
                    {course.seats} Cupo
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-extra-rounded text-xs font-medium">
                    {course.modality}
                  </span>
                </div>
                <p className="text-sm text-gray-600 my-2 dark:text-gray-400">
                  {course.description}
                </p>
                <div className="text-sm text-gray-500">
                  <span className="block font-semibold text-gray-700 dark:text-light-star">
                    Campus:
                  </span>
                  <Info
                    courseId={course.id}
                    latitude={course.campus_latitude}
                    longitude={course.campus_longitude}
                  />
                  <span>{course.campus_name}</span>
                </div>
              </div>
              <div className="border-t border-gray-200  dark:border-gray-600 px-4 py-6 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>
                    Desde: {course.start_date} - Hasta: {course.end_date}
                  </span>
                </div>
                <div className="flex -space-x-2">
                  <Modal courseId={course.id} />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
  
  );
};

export default CourseList;
