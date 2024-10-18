// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const EnrollmentForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     first_name: "",
//     middle_name: "",
//     last_name: "",
//     second_last_name: "",
//     id_number: "",
//     email: "",
//     phone_number: "",
//     age: "",
//     gender: "male",
//     course: "",
//   });

//   const [error, setError] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isLoading) return;

//     setIsLoading(true);
//     const token = localStorage.getItem("accessToken"); // Asegúrate de obtener el token correcto

//     try {
//       const response = await axios.post("/api/enrollments/", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Añadir el token en los encabezados
//         },
//       });
//       setSuccessMessage("Matrícula exitosa!");
//       navigate("/enrollments");
//     } catch (error) {
//       console.log("Error during enrollment!", error.response?.data);
//       if (error.response && error.response.data) {
//         Object.keys(error.response.data).forEach((field) => {
//           const errorMessages = error.response.data[field];
//           if (errorMessages && errorMessages.length > 0) {
//             setError(errorMessages[0]);
//           }
//         });
//       } else {
//         setError("Error desconocido. Por favor, inténtalo de nuevo.");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Campos de entrada aquí... */}
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Cargando..." : "Matricular"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EnrollmentForm;
