// import React, { useState, useEffect } from "react";
// import { addCourse } from "../services/service";
// import axios from "axios";

// import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation

// const CourseForm = () => {
//   const [courseData, setCourseData] = useState({
//     name: "",
//     code: "",
//     description: "",
//     start_date: "",
//     end_date: "",
//     year: "",
//     seats: "",
//     campus: "", // Almacenará el ID del campus seleccionado
//     modality: "in-person",
//   });

//   const [campuses, setCampuses] = useState([]); // Estado para almacenar los campus

//   const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente
//   // Obtener los campus desde la API
//   useEffect(() => {
//     const fetchCampuses = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         const response = await axios.get(
//           "http://localhost:8000/api/campuses/",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setCampuses(response.data); // Establecer los datos de los campus
//       } catch (error) {
//         console.error("Error al obtener los campus:", error);
//       }
//     };

//     fetchCampuses();
//   }, []);

//   const handleChange = (e) => {
//     setCourseData({
//       ...courseData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addCourse(courseData); // Llamar a la función que hace el POST
//       alert("Curso agregado exitosamente");
//       // Limpiar el formulario después de agregar el curso
//       setCourseData({
//         name: "",
//         code: "",
//         description: "",
//         start_date: "",
//         end_date: "",
//         year: "",
//         seats: "",
//         campus: "",
//         modality: "in-person",
//       });
//     } catch (error) {
//       console.error("Error al agregar el curso:", error);
//       alert("Hubo un error al agregar el curso");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col h-full w-full rounded-extra-rounded my-0 bg-gray-200 shadow-sm border border-slate-200 p-6 overflow-auto"
//     >
//       <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
//       {      t("adminAccess.control.registerCourses") }

//       </h2>

//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//           Nombre del curso
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Nombre del curso"
//           value={courseData.name}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="code" className="block text-sm font-medium text-gray-700">
//           Código del curso
//         </label>
//         <input
//           type="text"
//           id="code"
//           name="code"
//           placeholder="Código del curso"
//           value={courseData.code}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//           Descripción
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           placeholder="Descripción"
//           value={courseData.description}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
//           Fecha de inicio
//         </label>
//         <input
//           type="date"
//           id="start_date"
//           name="start_date"
//           value={courseData.start_date}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">
//           Fecha de fin
//         </label>
//         <input
//           type="date"
//           id="end_date"
//           name="end_date"
//           value={courseData.end_date}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full borde rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="year" className="block text-sm font-medium text-gray-700">
//           Año
//         </label>
//         <input
//           type="number"
//           id="year"
//           name="year"
//           placeholder="Año"
//           value={courseData.year}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="seats" className="block text-sm font-medium text-gray-700">
//           Asientos disponibles
//         </label>
//         <input
//           type="number"
//           id="seats"
//           name="seats"
//           placeholder="Asientos disponibles"
//           value={courseData.seats}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="modality" className="block text-sm font-medium text-gray-700">
//           Modalidad
//         </label>
//         <select
//           id="modality"
//           name="modality"
//           value={courseData.modality}
//           onChange={handleChange}
//           className="mt-1 p-2 w-full border rounded-md"
//         >
//           <option value="in-person">Presencial</option>
//           <option value="virtual">Virtual</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="campus" className="block text-sm font-medium text-gray-700">
//           Campus
//         </label>
//         <select
//           id="campus"
//           name="campus"
//           value={courseData.campus}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         >
//           <option value="">Selecciona un campus</option>
//           {campuses.map((campus) => (
//             <option key={campus.id} value={campus.id}>
//               {campus.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="w-full mt-4 bg-blue-600 text-white p-2 rounded-complete hover:bg-blue-700"
//       >
//         Agregar Curso
//       </button>
//     </form>
//   );
// };

// export default CourseForm;

// import React, { useState, useEffect } from "react";
// import { addCourse, updateCourse } from "../services/service"; // Asegúrate de tener la función updateCourse
// import axios from "axios";
// import { useTranslation } from "react-i18next";

// const CourseForm = ({ course }) => {
//   const [courseData, setCourseData] = useState({
//     name: "",
//     code: "",
//     description: "",
//     start_date: "",
//     end_date: "",
//     year: "",
//     seats: "",
//     campus: "",
//     modality: "in-person",
//   });

//   const [campuses, setCampuses] = useState([]);
//   const { t } = useTranslation("global");

//   // Obtener los campus desde la API
//   useEffect(() => {
//     const fetchCampuses = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         const response = await axios.get("http://localhost:8000/api/campuses/", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setCampuses(response.data);
//       } catch (error) {
//         console.error("Error al obtener los campus:", error);
//       }
//     };

//     fetchCampuses();
//   }, []);

//   // Cargar los datos del curso si están disponibles (en caso de edición)
//   useEffect(() => {
//     if (course) {
//       setCourseData({
//         name: course.name || "",
//         code: course.code || "",
//         description: course.description || "",
//         start_date: course.start_date || "",
//         end_date: course.end_date || "",
//         year: course.year || "",
//         seats: course.seats || "",
//         campus: course.campus || "",
//         modality: course.modality || "in-person",
//       });
//     }
//   }, [course]);

//   const handleChange = (e) => {
//     setCourseData({
//       ...courseData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (course) {
//         // Si hay un curso, se trata de una actualización
//         await updateCourse(course.id, courseData); // Asegúrate de que `updateCourse` esté bien definida
//         alert("Curso actualizado exitosamente");
//       } else {
//         // Si no hay un curso, se trata de una creación
//         await addCourse(courseData);
//         alert("Curso agregado exitosamente");
//       }

//       // Limpiar el formulario después de agregar o actualizar el curso
//       setCourseData({
//         name: "",
//         code: "",
//         description: "",
//         start_date: "",
//         end_date: "",
//         year: "",
//         seats: "",
//         campus: "",
//         modality: "in-person",
//       });
//     } catch (error) {
//       console.error("Error al agregar o actualizar el curso:", error);
//       alert("Hubo un error al procesar el curso");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col h-full w-full rounded-extra-rounded my-0 bg-gray-200 shadow-sm border border-slate-200 p-6 overflow-auto"
//     >
//       <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
//         {t("adminAccess.control.registerCourses")}
//       </h2>

//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//           Nombre del curso
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Nombre del curso"
//           value={courseData.name}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="code" className="block text-sm font-medium text-gray-700">
//           Código del curso
//         </label>
//         <input
//           type="text"
//           id="code"
//           name="code"
//           placeholder="Código del curso"
//           value={courseData.code}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//           Descripción
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           placeholder="Descripción"
//           value={courseData.description}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
//           Fecha de inicio
//         </label>
//         <input
//           type="date"
//           id="start_date"
//           name="start_date"
//           value={courseData.start_date}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">
//           Fecha de fin
//         </label>
//         <input
//           type="date"
//           id="end_date"
//           name="end_date"
//           value={courseData.end_date}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="year" className="block text-sm font-medium text-gray-700">
//           Año
//         </label>
//         <input
//           type="number"
//           id="year"
//           name="year"
//           placeholder="Año"
//           value={courseData.year}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="seats" className="block text-sm font-medium text-gray-700">
//           Asientos disponibles
//         </label>
//         <input
//           type="number"
//           id="seats"
//           name="seats"
//           placeholder="Asientos disponibles"
//           value={courseData.seats}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         />
//       </div>

//       <div>
//         <label htmlFor="modality" className="block text-sm font-medium text-gray-700">
//           Modalidad
//         </label>
//         <select
//           id="modality"
//           name="modality"
//           value={courseData.modality}
//           onChange={handleChange}
//           className="mt-1 p-2 w-full border rounded-md"
//         >
//           <option value="in-person">Presencial</option>
//           <option value="virtual">Virtual</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="campus" className="block text-sm font-medium text-gray-700">
//           Campus
//         </label>
//         <select
//           id="campus"
//           name="campus"
//           value={courseData.campus}
//           onChange={handleChange}
//           required
//           className="mt-1 p-2 w-full border rounded-complete"
//         >
//           <option value="">Selecciona un campus</option>
//           {campuses.map((campus) => (
//             <option key={campus.id} value={campus.id}>
//               {campus.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="w-full mt-4 bg-blue-600 text-white p-2 rounded-complete hover:bg-blue-700"
//       >
//         {course ? "Actualizar Curso" : "Agregar Curso"}
//       </button>
//     </form>
//   );
// };

// export default CourseForm;


// import React, { useState, useEffect } from "react";
// import { addCourse, updateCourse } from "../services/service";
// import axios from "axios";
// import { useTranslation } from "react-i18next";

// const CourseForm = ({ course, onSubmit, onClose }) => {
//   const [courseData, setCourseData] = useState({
//     name: "",
//     code: "",
//     description: "",
//     start_date: "",
//     end_date: "",
//     year: "",
//     seats: "",
//     campus: "",
//     modality: "in-person",
//   });

//   const [campuses, setCampuses] = useState([]);
//   const { t } = useTranslation("global");

//   // Obtener los campus desde la API
//   useEffect(() => {
//     const fetchCampuses = async () => {
//       try {
//         const token = localStorage.getItem("accessToken");
//         const response = await axios.get(
//           "http://localhost:8000/api/campuses/",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         setCampuses(response.data);
//       } catch (error) {
//         console.error("Error al obtener los campus:", error);
//       }
//     };

//     fetchCampuses();
//   }, []);

//   // Cargar los datos del curso si están disponibles (en caso de edición)
//   useEffect(() => {
//     if (course) {
//       setCourseData({
//         name: course.name || "",
//         code: course.code || "",
//         description: course.description || "",
//         start_date: course.start_date || "",
//         end_date: course.end_date || "",
//         year: course.year || "",
//         seats: course.seats || "",
//         campus: course.campus || "",
//         modality: course.modality || "in-person",
//       });
//     }
//   }, [course]);

//   const handleChange = (e) => {
//     setCourseData({
//       ...courseData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (course) {
//         await updateCourse(course.id, courseData);
//         alert("Curso actualizado exitosamente");
//       } else {
//         await addCourse(courseData);
//         alert("Curso agregado exitosamente");
//       }

//       setCourseData({
//         name: "",
//         code: "",
//         description: "",
//         start_date: "",
//         end_date: "",
//         year: "",
//         seats: "",
//         campus: "",
//         modality: "in-person",
//       });
//       if (onSubmit) onSubmit();
//       if (onClose) onClose();
//     } catch (error) {
//       console.error("Error al procesar el curso:", error);
//       alert("Hubo un error al procesar el curso");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col h-full w-full rounded-extra-rounded my-0 bg-secundary-light shadow-sm border dark:border-none p-6 overflow-auto dark:bg-secundary-dark"
//     >
//       <h2 className="text-xl font-semibold text-secundary-dark text-center mb-4 dark:text-secundary-light">
//         {t("adminAccess.control.registerCourses")}
//       </h2>

//       <div>
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
//         >
//           Nombre del curso
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Nombre del curso"
//           value={courseData.name}
//           onChange={handleChange}
//           required
//           className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="code"
//           className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
//         >
//           Código del curso
//         </label>
//         <input
//           type="text"
//           id="code"
//           name="code"
//           placeholder="Código del curso"
//           value={courseData.code}
//           onChange={handleChange}
//           required
//           className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="description"
//           className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
//         >
//           Descripción
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           placeholder="Descripción"
//           value={courseData.description}
//           onChange={handleChange}
//           required
//           className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="start_date"
//           className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
//         >
//           Fecha de inicio
//         </label>
//         <input
//           type="date"
//           id="start_date"
//           name="start_date"
//           value={courseData.start_date}
//           onChange={handleChange}
//           required
//           className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="end_date"
//           className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
//         >
//           Fecha de fin
//         </label>
//         <input
//           type="date"
//           id="end_date"
//           name="end_date"
//           value={courseData.end_date}
//           onChange={handleChange}
//           required
//           className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="year"
//           className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
//         >
//           Año
//         </label>
//         <input
//           type="number"
//           id="year"
//           name="year"
//           placeholder="Año"
//           value={courseData.year}
//           onChange={handleChange}
//           required
//           className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="seats"
//           className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
//         >
//           Asientos disponibles
//         </label>
//         <input
//           type="number"
//           id="seats"
//           name="seats"
//           placeholder="Asientos disponibles"
//           value={courseData.seats}
//           onChange={handleChange}
//           required
//           className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="modality"
//           className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
//         >
//           Modalidad
//         </label>
//         <select
//           id="modality"
//           name="modality"
//           value={courseData.modality}
//           onChange={handleChange}
//           className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
//         >
//           <option value="in-person">Presencial</option>
//           <option value="virtual">Virtual</option>
//         </select>
//       </div>

//       <div>
//         <label
//           htmlFor="campus"
//           className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
//         >
//           Campus
//         </label>
//         <select
//           id="campus"
//           name="campus"
//           value={courseData.campus}
//           onChange={handleChange}
//           required
//           className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
//         >
//           <option value="">Selecciona un campus</option>
//           {campuses.map((campus) => (
//             <option key={campus.id} value={campus.id}>
//               {campus.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button
//         type="submit"
//         className="w-full mt-4 bg-blue-600 text-white p-2 rounded-complete hover:bg-blue-700"
//       >
//         {course ? "Actualizar Curso" : "Agregar Curso"}
//       </button>
//     </form>
//   );
// };

// export default CourseForm;

import React, { useState, useEffect } from "react";
import { addCourse, updateCourse } from "../services/service";
import axios from "axios";
import { useTranslation } from "react-i18next";

const CourseForm = ({ course, onSubmit, onClose }) => {
  const [courseData, setCourseData] = useState({
    name: "",
    code: "",
    description: "",
    start_date: "",
    end_date: "",
    year: "",
    seats: "",
    campus: "",
    modality: "in-person",
  });

  const [campuses, setCampuses] = useState([]);
  const { t } = useTranslation("global");

  // Obtener los campus desde la API
  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get("http://localhost:8000/api/campuses/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCampuses(response.data);
      } catch (error) {
        console.error("Error al obtener los campus:", error);
      }
    };

    fetchCampuses();
  }, []);

  // Cargar los datos del curso si están disponibles (en caso de edición)
  useEffect(() => {
    if (course) {
      setCourseData({
        name: course.name || "",
        code: course.code || "",
        description: course.description || "",
        start_date: course.start_date || "",
        end_date: course.end_date || "",
        year: course.year || "",
        seats: course.seats || "",
        campus: course.campus || "",
        modality: course.modality || "in-person",
      });
    }
  }, [course]);

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (course) {
        await updateCourse(course.id, courseData);
        alert("Curso actualizado exitosamente");
      } else {
        await addCourse(courseData);
        alert("Curso agregado exitosamente");
      }

      setCourseData({
        name: "",
        code: "",
        description: "",
        start_date: "",
        end_date: "",
        year: "",
        seats: "",
        campus: "",
        modality: "in-person",
      });
      if (onSubmit) onSubmit();
      if (onClose) onClose();
    } catch (error) {
      console.error("Error al procesar el curso:", error);
      alert("Hubo un error al procesar el curso");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full w-full rounded-extra-rounded my-0 bg-secundary-light shadow-sm border dark:border-none p-6 overflow-auto dark:bg-secundary-dark"
    >
      <h2 className="text-xl font-semibold text-secundary-dark text-center mb-4 dark:text-secundary-light">
        {t("adminAccess.control.registerCourses")}
      </h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Nombre del curso
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre del curso"
          value={courseData.name}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <div>
        <label
          htmlFor="code"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Código del curso
        </label>
        <input
          type="text"
          id="code"
          name="code"
          placeholder="Código del curso"
          value={courseData.code}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Descripción"
          value={courseData.description}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <div>
        <label
          htmlFor="start_date"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Fecha de inicio
        </label>
        <input
          type="date"
          id="start_date"
          name="start_date"
          value={courseData.start_date}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <div>
        <label
          htmlFor="end_date"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Fecha de fin
        </label>
        <input
          type="date"
          id="end_date"
          name="end_date"
          value={courseData.end_date}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <div>
        <label
          htmlFor="year"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Año
        </label>
        <input
          type="number"
          id="year"
          name="year"
          placeholder="Año"
          value={courseData.year}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <div>
        <label
          htmlFor="seats"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Asientos disponibles
        </label>
        <input
          type="number"
          id="seats"
          name="seats"
          placeholder="Asientos disponibles"
          value={courseData.seats}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        />
      </div>

      <div>
        <label
          htmlFor="modality"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Modalidad
        </label>
        <select
          id="modality"
          name="modality"
          value={courseData.modality}
          onChange={handleChange}
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        >
          <option value="in-person">Presencial</option>
          <option value="virtual">Virtual</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="campus"
          className="block text-sm font-medium text-secundary-dark dark:text-secundary-light"
        >
          Campus
        </label>
        <select
          id="campus"
          name="campus"
          value={courseData.campus}
          onChange={handleChange}
          required
          className="mt-1 dark:bg-tertiary-dark p-2 w-full border dark:border-none rounded-complete"
        >
          <option value="">Selecciona un campus</option>
          {campuses.map((campus) => (
            <option key={campus.id} value={campus.id}>
              {campus.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 text-white p-2 rounded-complete hover:bg-blue-700"
      >
        {course ? "Actualizar Curso" : "Agregar Curso"}
      </button>
    </form>
  );
};

export default CourseForm;
