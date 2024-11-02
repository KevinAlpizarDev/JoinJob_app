// import React, { useState, useEffect } from "react";
// import { createEnrollment, getAllCourses } from "../services/service";
// import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation

// const EnrollmentForm = () => {
//   const [enrollmentData, setEnrollmentData] = useState({
//     id_number: "",
//     phone_number: "",
//     age: "",
//     gender: "male",
//     course: "",
//     is_active: true,
//   });

//   const [courses, setCourses] = useState([]);

//   const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await getAllCourses();
//         setCourses(response.data);
//       } catch (error) {
//         console.error("Error al obtener los cursos:", error);
//       }
//     };
//     fetchCourses();
//   }, []);

//   const handleChange = (e) => {
//     setEnrollmentData({
//       ...enrollmentData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createEnrollment(enrollmentData);
//       alert("Inscripción creada exitosamente");
//       // Reiniciar formulario
//       setEnrollmentData({
//         id_number: "",
//         phone_number: "",
//         age: "",
//         gender: "male",
//         course: "",
//         is_active: true,
//       });
//     } catch (error) {
//       alert("Hubo un error al crear la inscripción");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col h-full w-full rounded-2xl my-0 bg-gray-200 shadow-sm border border-slate-200 p-6 overflow-auto"
//     >
//       <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
//       {      t("adminAccess.control.registerEnrollments") }

//       </h2>

//       <div>
//         <label htmlFor="id_number" className="block text-sm font-medium text-gray-700">
//           Número de Identificación
//         </label>
//         <input
//           type="text"
//           id="id_number"
//           name="id_number"
//           placeholder="Número de Identificación"
//           value={enrollmentData.id_number}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-md"
//         />
//       </div>

//       <div>
//         <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
//           Teléfono
//         </label>
//         <input
//           type="text"
//           id="phone_number"
//           name="phone_number"
//           placeholder="Teléfono"
//           value={enrollmentData.phone_number}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-md"
//         />
//       </div>

//       <div>
//         <label htmlFor="age" className="block text-sm font-medium text-gray-700">
//           Edad
//         </label>
//         <input
//           type="number"
//           id="age"
//           name="age"
//           placeholder="Edad"
//           value={enrollmentData.age}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-md"
//         />
//       </div>

//       <div>
//         <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
//           Género
//         </label>
//         <select
//           id="gender"
//           name="gender"
//           value={enrollmentData.gender}
//           onChange={handleChange}
//           className="mt-1 p-2 w-full border rounded-md"
//         >
//           <option value="male">Masculino</option>
//           <option value="female">Femenino</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="course" className="block text-sm font-medium text-gray-700">
//           Curso
//         </label>
//         <select
//           id="course"
//           name="course"
//           value={enrollmentData.course}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-md"
//         >
//           <option value="" disabled>
//             Selecciona un curso
//           </option>
//           {courses.map((course) => (
//             <option key={course.id} value={course.id}>
//               {course.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
//       >
//         Crear Inscripción
//       </button>
//     </form>
//   );
// };

// export default EnrollmentForm;
import React, { useState, useEffect } from "react";
import { createEnrollment, getAllCourses } from "../services/service";
import { useTranslation } from "react-i18next";

const EnrollmentForm = () => {
  const [enrollmentData, setEnrollmentData] = useState({
    id_number: "",
    phone_number: "",
    age: "",
    gender: "male",
    course: "",
    is_active: true,
  });

  const [courses, setCourses] = useState([]);
  const { t } = useTranslation("global");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCourses();
        setCourses(response.data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setEnrollmentData({
      ...enrollmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEnrollment(enrollmentData);
      alert("Inscripción creada exitosamente");
      setEnrollmentData({
        id_number: "",
        phone_number: "",
        age: "",
        gender: "male",
        course: "",
        is_active: true,
      });
    } catch (error) {
      alert("Hubo un error al crear la inscripción");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full w-full rounded-extra-rounded my-0 bg-secundary-light shadow-sm border dark:border-none p-6 overflow-auto dark:bg-secundary-dark"
    >
      <h2 className="text-xl font-semibold text-secundary-dark text-center mb-4 dark:text-secundary-light">
        {t("adminAccess.control.registerEnrollments")}
      </h2>

      <div>
        <label
          htmlFor="id_number"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Número de Identificación
        </label>
        <input
          type="text"
          id="id_number"
          name="id_number"
          placeholder="Número de Identificación"
          value={enrollmentData.id_number}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <div>
        <label
          htmlFor="phone_number"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Teléfono
        </label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          placeholder="Teléfono"
          value={enrollmentData.phone_number}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <div>
        <label
          htmlFor="age"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Edad
        </label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Edad"
          value={enrollmentData.age}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <div>
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Género
        </label>
        <select
          id="gender"
          name="gender"
          value={enrollmentData.gender}
          onChange={handleChange}
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        >
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="course"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Curso
        </label>
        <select
          id="course"
          name="course"
          value={enrollmentData.course}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        >
          <option value="">Selecciona un curso</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 text-white p-2 rounded-complete hover:bg-blue-700"
      >
        Crear Inscripción
      </button>
    </form>
  );
};

export default EnrollmentForm;
