// import React, { useState } from "react";
// import { addCourse } from "../services/service";

// const CourseForm = () => {
//   const [courseData, setCourseData] = useState({
//     name: "",
//     code: "",
//     description: "",
//     start_date: "",
//     end_date: "",
//     year: "",
//     seats: "",
//     campus: "",  // Debes tener una lista de opciones o un campo para seleccionar el campus
//     modality: "in-person",
//   });

//   const handleChange = (e) => {
//     setCourseData({
//       ...courseData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addCourse(courseData);  // Llamar a la función que hace el POST
//       alert("Curso agregado exitosamente");
//     } catch (error) {
//       console.error("Error al agregar el curso:", error);
//       alert("Hubo un error al agregar el curso");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Nombre del curso"
//         value={courseData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="code"
//         placeholder="Código del curso"
//         value={courseData.code}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         name="description"
//         placeholder="Descripción"
//         value={courseData.description}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="date"
//         name="start_date"
//         value={courseData.start_date}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="date"
//         name="end_date"
//         value={courseData.end_date}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="year"
//         placeholder="Año"
//         value={courseData.year}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="seats"
//         placeholder="Asientos disponibles"
//         value={courseData.seats}
//         onChange={handleChange}
//         required
//       />
//       <select name="modality" value={courseData.modality} onChange={handleChange}>
//         <option value="in-person">Presencial</option>
//         <option value="virtual">Virtual</option>
//       </select>
//       <input
//         type="text"
//         name="campus"
//         placeholder="Campus"
//         value={courseData.campus}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Agregar Curso</button>
//     </form>
//   );
// };

// export default CourseForm;

// import React, { useState, useEffect } from "react";
// import { addCourse } from "../services/service";
// import axios from "axios";

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
//     } catch (error) {
//       console.error("Error al agregar el curso:", error);
//       alert("Hubo un error al agregar el curso");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Nombre del curso"
//         value={courseData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="code"
//         placeholder="Código del curso"
//         value={courseData.code}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         name="description"
//         placeholder="Descripción"
//         value={courseData.description}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="date"
//         name="start_date"
//         value={courseData.start_date}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="date"
//         name="end_date"
//         value={courseData.end_date}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="year"
//         placeholder="Año"
//         value={courseData.year}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="seats"
//         placeholder="Asientos disponibles"
//         value={courseData.seats}
//         onChange={handleChange}
//         required
//       />
//       <select
//         name="modality"
//         value={courseData.modality}
//         onChange={handleChange}
//       >
//         <option value="in-person">Presencial</option>
//         <option value="virtual">Virtual</option>
//       </select>
//       {/* Select para seleccionar el campus */}
//       <select
//         name="campus"
//         value={courseData.campus}
//         onChange={handleChange}
//         required
//       >
//         <option value="">Selecciona un campus</option>
//         {campuses.map((campus) => (
//           <option key={campus.id} value={campus.id}>
//             {campus.name}
//           </option>
//         ))}
//       </select>
//       <button type="submit">Agregar Curso</button>
//     </form>
//   );
// };

// export default CourseForm;

// import React, { useState, useEffect } from "react";
// import { addCourse } from "../services/service";
// import axios from "axios";

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
//     is_active: true, // Añadir is_active con valor predeterminado como true
//   });

//   const [campuses, setCampuses] = useState([]); // Estado para almacenar los campus

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
//     const { name, value, type, checked } = e.target;
//     setCourseData({
//       ...courseData,
//       [name]: type === "checkbox" ? checked : value, // Manejar checkbox
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addCourse(courseData); // Llamar a la función que hace el POST
//       alert("Curso agregado exitosamente");
//     } catch (error) {
//       console.error("Error al agregar el curso:", error);
//       alert("Hubo un error al agregar el curso");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Nombre del curso"
//         value={courseData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="code"
//         placeholder="Código del curso"
//         value={courseData.code}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         name="description"
//         placeholder="Descripción"
//         value={courseData.description}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="date"
//         name="start_date"
//         value={courseData.start_date}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="date"
//         name="end_date"
//         value={courseData.end_date}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="year"
//         placeholder="Año"
//         value={courseData.year}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="seats"
//         placeholder="Asientos disponibles"
//         value={courseData.seats}
//         onChange={handleChange}
//         required
//       />
//       <select
//         name="modality"
//         value={courseData.modality}
//         onChange={handleChange}
//       >
//         <option value="in-person">Presencial</option>
//         <option value="virtual">Virtual</option>
//       </select>
//       {/* Select para seleccionar el campus */}
//       <select
//         name="campus"
//         value={courseData.campus}
//         onChange={handleChange}
//         required
//       >
//         <option value="">Selecciona un campus</option>
//         {campuses.map((campus) => (
//           <option key={campus.id} value={campus.id}>
//             {campus.name}
//           </option>
//         ))}
//       </select>
//       {/* Checkbox para is_active */}
//       <label>
//         <input
//           type="checkbox"
//           name="is_active"
//           checked={courseData.is_active}
//           onChange={handleChange}
//         />
//         ¿Curso activo?
//       </label>
//       <button type="submit">Agregar Curso</button>
//     </form>
//   );
// };

// export default CourseForm;
import React, { useState, useEffect } from "react";
import { addCourse } from "../services/service";
import axios from "axios";

const CourseForm = () => {
  const [courseData, setCourseData] = useState({
    name: "",
    code: "",
    description: "",
    start_date: "",
    end_date: "",
    year: "",
    seats: "",
    campus: "", // Almacenará el ID del campus seleccionado
    modality: "in-person",
    is_active: true, // Mantén el campo is_active en el estado, pero no en el formulario
  });

  const [campuses, setCampuses] = useState([]); // Estado para almacenar los campus

  // Obtener los campus desde la API
  useEffect(() => {
    const fetchCampuses = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get(
          "http://localhost:8000/api/campuses/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setCampuses(response.data); // Establecer los datos de los campus
      } catch (error) {
        console.error("Error al obtener los campus:", error);
      }
    };

    fetchCampuses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target; // Remover la lógica del checkbox
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCourse(courseData); // Llamar a la función que hace el POST
      alert("Curso agregado exitosamente");
    } catch (error) {
      console.error("Error al agregar el curso:", error);
      alert("Hubo un error al agregar el curso");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre del curso"
        value={courseData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="code"
        placeholder="Código del curso"
        value={courseData.code}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Descripción"
        value={courseData.description}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="start_date"
        value={courseData.start_date}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="end_date"
        value={courseData.end_date}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="year"
        placeholder="Año"
        value={courseData.year}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="seats"
        placeholder="Asientos disponibles"
        value={courseData.seats}
        onChange={handleChange}
        required
      />
      <select
        name="modality"
        value={courseData.modality}
        onChange={handleChange}
      >
        <option value="in-person">Presencial</option>
        <option value="virtual">Virtual</option>
      </select>
      {/* Select para seleccionar el campus */}
      <select
        name="campus"
        value={courseData.campus}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona un campus</option>
        {campuses.map((campus) => (
          <option key={campus.id} value={campus.id}>
            {campus.name}
          </option>
        ))}
      </select>
      {/* Eliminar el checkbox para is_active */}
      <button type="submit">Agregar Curso</button>
    </form>
  );
};

export default CourseForm;
