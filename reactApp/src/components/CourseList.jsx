// import React, { useState, useEffect } from "react";
// import { getAllCourses } from "../services/service";
// import FooterPage from "../components/FooterPage";

// const CourseList = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     async function loadCourses() {
//       const res = await getAllCourses();
//       setCourses(res.data);
//     }
//     loadCourses();
//   }, []);

//   return (
//     <>
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//         <div className="w-full max-w-5xl px-4 py-6">
//           <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
//             Course List
//           </h1>
//           <div className="space-y-6">
//             {courses.map((course) => (
//               <div
//                 key={course.id}
//                 className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer w-full"
//               >
//                 <div className="p-6">
//                   <div className="flex justify-between items-start">
//                     <h2 className="text-xl font-medium text-gray-900">
//                       {course.nombre}
//                     </h2>
//                     <button className="text-gray-500 hover:text-gray-700">
//                       <svg
//                         className="h-5 w-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M12 6v12M6 12h12"
//                         ></path>
//                       </svg>
//                     </button>
//                   </div>
//                   <p className="text-sm text-gray-600 my-2">
//                     {course.descripcion}
//                   </p>
//                   <div className="flex space-x-1 mb-3">
//                     <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
//                       {course.cupo} Cupo
//                     </span>
//                     <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
//                       {course.sede}
//                     </span>
//                   </div>
//                   <div className="text-sm text-gray-500">
//                     <span className="block font-semibold text-gray-700">
//                       Código
//                     </span>
//                     {course.codigo}
//                   </div>
//                 </div>
//                 <div className="border-t border-gray-200 p-6 flex justify-between items-center">
//                   <div className="flex items-center text-sm text-gray-500">
//                     <svg
//                       className="h-4 w-4 mr-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8 7v10M8 7a4 4 0 014-4m0 0a4 4 0 014 4m0 0v10"
//                       ></path>
//                     </svg>
//                     <span>
//                       {course.fecha_inicio} - {course.fecha_fin}
//                     </span>
//                   </div>
//                   <div className="flex -space-x-2">
//                     <img
//                       src="https://github.com/shadcn.png"
//                       alt="Avatar"
//                       className="w-8 h-8 rounded-full border-2 border-white"
//                     />
//                     <img
//                       src="https://github.com/vercel.png"
//                       alt="Avatar"
//                       className="w-8 h-8 rounded-full border-2 border-white"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <FooterPage />
//     </>
//   );
// };

// export default CourseList;



import React, { useState, useEffect } from "react";
import { getAllCourses } from "../services/service";
import FooterPage from "../components/FooterPage";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadCourses() {
      const res = await getAllCourses();
      setCourses(res.data);
    }
    loadCourses();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-5xl px-4 py-6">

          <h1 className="text-3xl font-extrabold mb-4 text-blue-500 text-center">JoinJob</h1>
          <div className="space-y-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer w-full"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-medium text-gray-900">
                      {course.nombre}
                    </h2>
                    <button className="text-gray-500 hover:text-gray-700">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v12M6 12h12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 my-2">
                    {course.descripcion}
                  </p>
                  <div className="flex space-x-1 mb-3">
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {course.cupo} Cupo
                    </span>
                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {course.sede}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="block font-semibold text-gray-700">
                      Código
                    </span>
                    {course.codigo}
                  </div>
                </div>
                <div className="border-t border-gray-200 p-6 flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7v10M8 7a4 4 0 014-4m0 0a4 4 0 014 4m0 0v10"
                      ></path>
                    </svg>
                    <span>
                      Desde: {course.fecha_inicio} - Hasta: {course.fecha_fin}
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    {/* <img
                      src="https://github.com/shadcn.png"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://github.com/vercel.png"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    /> */}
                            <div className="mt-6 flex justify-center p-6">
          <a
            href="#"
            className=" animate-bounce  inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-teal-700  hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0079BF] transition-all duration-150"
          >
            Matricula abierta
            {/* <ArrowUpRight className="ml-2 -mr-1 h-4 w-4" /> */}
          </a>
        </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
};

export default CourseList;
