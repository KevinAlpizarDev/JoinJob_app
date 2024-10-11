// import React, { useEffect, useState } from "react";
// import { getAllCourse } from "../services/service";
// import CourseCard from "./CourseCard";

// const CoursesList = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     async function loadCourses() {
//       try {
//         const res = await getAllCourse();
//         setCourses(res.data);
//       } catch (error) {
//         setError("Error fetching courses. Please try again later.");
//       } finally {
//         setLoading(false); // Stop loading once request is complete
//       }
//     }
//     loadCourses();
//   }, []);

//   if (loading) {
//     return <p>Loading courses...</p>; // Show loading message while data is being fetched
//   }

//   if (error) {
//     return <p>{error}</p>; // Show error message if fetching data failed
//   }

//   return (
//     <div>
//       <h1>Courses</h1>
//       {courses.length > 0 ? (
//         courses.map((course) => (
//           <CourseCard key={course.id} course={course} />
//         ))
//       ) : (
//         <p>No courses available</p> // Show message if no courses are available
//       )}
//     </div>
//   );
// };

// export default CoursesList;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { getAllCourse } from "../services/service";

// const CoursesList = () => {
//   const [courses, setCourses] = useState([])
//   useEffect(() => {
//     async function loadTasks() {
//       try {
//         const res = await getAllCourse();
//         console.log(res.data);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     }
//     loadTasks(); // Call the function
//   }, []);

//   return (
//     <div key={courses.id}>
//       {courses.map((course) => {
//         <div>
//           <h1>{course.nombre}</h1>
//           <p>{course.codigo}</p>
//         </div>;
//       })}
//     </div>
//   );
// };

// export default CoursesList;

import React, { useEffect, useState } from "react";
import { getAllCourse } from "../services/service";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      try {
        const res = await getAllCourse();
        setCourses(res.data); // Store the courses in the state
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    loadTasks();
  }, []);

  return (
    <div>
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id}>
            <h1>{course.nombre}</h1>
            <p>{course.codigo}</p>
          </div>
        ))
      ) : (
        <p>No courses available</p>
      )}
    </div>
  );
};

export default CoursesList;
