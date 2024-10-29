
// ///////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { getAllCourses } from "../services/service";
// import Info from "./Info";
// import Modal from "./Modal";

// const CourseList = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const loadCourses = async () => {
//       try {
//         const res = await getAllCourses();
//         const activeCourses = res.data.filter((course) => course.is_active);
//         setCourses(activeCourses);
//       } catch (error) {
//         console.error("Error loading courses:", error);
//       }
//     };
//     loadCourses();
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700">
//       <div className="w-full max-w-3xl px-4 py-6">
//         <h1 className="text-3xl font-extrabold mb-4 text-blue-500 text-center">
//           JoinJob
//         </h1>
//         <div className="space-y-6 ">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white p-6 rounded-lg transition-shadow duration-200 cursor-pointer w-full"
//             >
//               <div className="px-4 py-6">
//                 <div className="flex justify-between items-start">
//                   <h2 className="text-xl font-bold text-gray-900">
//                     {course.name}
//                   </h2>
//                   <div className="text-sm text-gray-500">
//                     <span className="block font-semibold text-gray-700">
//                       Código
//                     </span>
//                     <div className="flex justify-center">

//                     {course.code}
//                     </div>
//                   </div>
//                 </div>
//                 <p className="text-sm text-gray-600 my-2">
//                   {course.description}
//                 </p>
//                 <div className="flex space-x-1 mb-3">
//                   <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
//                     {course.seats} Cupo
//                   </span>
//                   <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
//                     {course.modality}
//                   </span>
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   <span className="block font-semibold text-gray-700">
//                     Campus:
//                   </span>
//                   <Info
//                     courseId={course.id}
//                     latitude={course.campus_latitude}
//                     longitude={course.campus_longitude}
//                   />
//                   <span>{course.campus_name}</span>
//                 </div>
//               </div>
//               <div className="border-t border-gray-200 px-4 py-6 flex justify-between items-center">
//                 <div className="flex items-center text-sm text-gray-500">
//                   <span>
//                     Desde: {course.start_date} - Hasta: {course.end_date}
//                   </span>
//                 </div>
//                 <div className="flex -space-x-2">
//                   <Modal courseId={course.id} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

 
//   );
// };

// export default CourseList;

























///////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import { getAllCourses } from "../services/service";
import Info from "./Info";
import Modal from "./Modal";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await getAllCourses();
        const activeCourses = res.data.filter((course) => course.is_active);
        setCourses(activeCourses);
      } catch (error) {
        console.error("Error loading courses:", error);
      }
    };
    loadCourses();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700">
      <div className="w-full max-w-3xl px-4 py-6">
        <h1 className="text-3xl font-extrabold mb-4 text-blue-500 text-center">
          Cursos disponibles
        </h1>
        <div className="space-y-6 ">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-lg transition-shadow duration-200 cursor-pointer w-full"
            >
              <div className="px-4 py-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-gray-900">
                    {course.name}
                  </h2>
                  <div className="text-sm text-gray-500">
                    <span className="block font-semibold text-gray-700">
                      Código
                    </span>
                    <div className="flex justify-center">

                    {course.code}
                    </div>
                  </div>
                </div>
                {/* <p className="text-sm text-gray-600 my-2">
                  {course.description}
                </p> */}
                <div className="flex space-x-1 mb-3">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {course.seats} Cupo
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {course.modality}
                  </span>
                </div>
                <p className="text-sm text-gray-600 my-2">
                  {course.description}
                </p>
                <div className="text-sm text-gray-500">
                  <span className="block font-semibold text-gray-700">
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
              <div className="border-t border-gray-200 px-4 py-6 flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <span>
                    Desde: {course.start_date} - Hasta: {course.end_date}
                  </span>
                </div>
                <div className="flex -space-x-2">
                  <Modal courseId={course.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-700">
    //   <div className="w-full max-w-5xl px-4 py-6">
    //     <h1 className="text-3xl font-extrabold mb-4 text-blue-500 text-center">
    //       JoinJob
    //     </h1>
    //     <div className="space-y-6">
    //       {courses.map((course) => (
    //         <div
    //           key={course.id}
    //           className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer w-full"
    //         >
    //           <div className="p-6">
    //             <div className="flex justify-between items-start">
    //               <h2 className="text-xl font-medium text-gray-900">
    //                 {course.name}
    //               </h2>
    //               <div className="text-sm text-gray-500">
    //                 <span className="block font-semibold text-gray-700">
    //                   Código
    //                 </span>
    //                 {course.code}
    //               </div>
    //             </div>
    //             <p className="text-sm text-gray-600 my-2">
    //               {course.description}
    //             </p>
    //             <div className="flex space-x-1 mb-3">
    //               <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
    //                 {course.seats} Cupo
    //               </span>
    //               <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
    //                 {course.modality}
    //               </span>
    //             </div>
    //             <div className="text-sm text-gray-500">
    //               <span className="block font-semibold text-gray-700">
    //                 Campus:
    //               </span>
    //               <Info
    //                 courseId={course.id}
    //                 latitude={course.campus_latitude}
    //                 longitude={course.campus_longitude}
    //                 />{" "}
    //                 <span>{course.campus_name}</span>
    //               {/* Pasa el ID del curso y las coordenadas */}
    //             </div>
    //           </div>
    //           <div className="border-t border-gray-200 p-6 flex justify-between items-center">
    //             <div className="flex items-center text-sm text-gray-500">
    //               <span>
    //                 Desde: {course.start_date} - Hasta: {course.end_date}
    //               </span>
    //             </div>
    //             <div className="flex -space-x-2">
    //               <Modal courseId={course.id} />
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default CourseList;
