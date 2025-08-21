import React, { useState, useEffect } from "react";
import { getAllCourses } from "../services/service";
import Info from "./Info";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const { t } = useTranslation("global");

  useEffect(() => {
    const loadCourses = async () => {
      setLoading(true);
      try {
        const res = await getAllCourses();
        const activeCourses = res.data.filter((course) => course.is_active);
        setCourses(activeCourses);
      } catch (error) {
        console.error("Error loading courses:", error);
        setError("Hubo un error al cargar los cursos.");
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  const handleEnrollment = (courseId) => {
    setEnrolledCourses((prev) => [...prev, courseId]);
  };

  if (loading) {
    return <p>Cargando cursos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-primary-light justify-center bg-light-main dark:bg-primary-dark">
      <h1 className="text-2xl font-bold text-secundary-dark mx-0 dark:text-secundary-light">
        {" "}
        {t("userAccess.availableCourses.available")}
      </h1>

      <div className="w-full bg-primary-light max-w-3xl px-4 py-6 dark:bg-primary-dark">
        <div className="space-y-6 bg-primary-light dark:bg-primary-dark">
          {courses.length === 0 ? (
            <p className="w-full flex justify-center bg-primary-light dark:bg-primary-dark dark:text-secundary-light">
              {t("userAccess.availableCourses.noAvailable")}
            </p>
          ) : (
            courses.map((course) => (
              <div
                key={course.id}
                className="bg-secundary-light dark:bg-secundary-dark p-6 rounded-extra-rounded transition-shadow duration-200 cursor-pointer w-full shadow-md"
              >
                <div className="px-4 py-6">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-blue-sky mx-0 dark:text-blue-sky">
                      {course.name}
                    </h2>
                    <div className="text-sm text-gray-500">
                      <span className="block font-semibold text-secundary-dark dark:text-tertiary-light">
                        Código
                      </span>
                      <div className="flex font-bold justify-center">
                        {course.code}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-3">
                    <span className="bg-tertiary-light font-bold text-secundary-dark px-3 py-2 rounded-extra-rounded text-xs dark:bg-tertiary-dark dark:text-secundary-light">
                      {course.seats} Cupo
                    </span>
                    <span className="bg-tertiary-light font-bold text-secundary-dark px-3 py-2 rounded-extra-rounded text-xs dark:bg-tertiary-dark dark:text-secundary-light">
                      {course.modality}
                    </span>
                  </div>
                  <p className="mx-auto py-8 max-w-[700px] text-gray-500 md:text-xl dark:text-tertiary-light">
                    {course.description}
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="block  font-semibold  text-primary-dark dark:text-primary-light">
                      Campus:
                    </span>
                    <Info
                      courseId={course.id}
                      latitude={course.campus_latitude}
                      longitude={course.campus_longitude}
                    />
                    <span className="text-blue-sky font-semibold">
                      {course.campus_name}
                    </span>
                  </div>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-600 px-4 py-6 flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>
                      Desde: {course.start_date} - Hasta: {course.end_date}
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    <Modal
                      courseId={course.id}
                      enrolled={
                        enrolledCourses.includes(course.id) ||
                        course.seats === 0
                      }
                      onEnroll={() => handleEnrollment(course.id)}
                    />
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
