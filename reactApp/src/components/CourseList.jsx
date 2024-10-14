import React, { useState } from "react";
import { useEffect } from "react";
import { getAllCourses } from "../services/service";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
 

    async function loadCourses() {
      const res = await getAllCourses();
      //   console.log(res);
      setCourses(res.data);
    }
    loadCourses();
  }, []);

  return (
    <div>
      <h1>Course CourseList</h1>
      {courses.map((course) => (
        <div>
          <h1>{course.nombre}</h1>
          <h1>{course.codigo}</h1>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
