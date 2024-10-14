// import NavBar from "../components/main/NavBar";
// import FooterPage from "../components/FooterPage";
// import { Link } from "react-router-dom";

// export default function LandingPage() {
//   return (
//     <>
//       <NavBar />
//       <div className="flex pt-24 items-start justify-center min-h-screen bg-slate-100 dark:bg-slate-600">
//         <div className="text-center">
//         {/* <h1 className="mx-2 mb-6 max-w-4xl font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-7xl">
//   Impulsa tu <span className="text-[#007bff]">Desarrollo</span> con oportunidades<br />
//   de Crecimiento
// </h1> */}

// <h2 className="text-3xl font-poppins text-slate-800 dark:text-white tracking-tight sm:text-4xl md:text-5xl text-center mb-6 font-black">
//             Impulsa tu Desarrollo con <span  className="text-[#007bff]">Oportunidades</span> de Crecimiento
//           </h2>

//           <p className="mx-auto mb-12 max-w-[700px] text-gray-500 dark:text-gray-400">
//           Aprende herramientas y refuerza tus capacidades
//           </p>

//           <div className="flex justify-center">
//             <Link to="/signin">
//               <button className="animate-bounce w-16 h-16 flex items-center justify-center rounded-full font-bold text-[#007bff] border-2 border-[#007bff] bg-transparent transition-all ease-in-out duration-300 hover:bg-[#007bff] hover:text-white">
//                 <svg
//                   className="w-6 h-6"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <FooterPage />
//     </>
//   );
// }
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
        <div className="w-full max-w-3xl px-4 py-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Course List
          </h1>
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
                      {course.fecha_inicio} - {course.fecha_fin}
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    <img
                      src="https://github.com/shadcn.png"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://github.com/vercel.png"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
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
