// import { Link } from "react-router-dom";
// import CampusForm from "../components/CampusForm";
// export default function AdminPagesList() {
//   // Array de páginas administrativas
//   const pages = [
//     { id: "Institutions", label: "Institución" },
//     { id: "Campus", label: "Campus" },
//     { id: "Courses", label: "Cursos" },
//   ];

//   return (
//     <div className="flex flex-col">
//       {/* Mapeamos las páginas y creamos enlaces */}
//       {pages.map((page) => (
//         <Link
//           key={page.id}
//           to={`/admin/${page.id}`} // Ruta a la que se redirige al hacer clic
//           className="text-blue-600 hover:underline p-2" // Estilos para el enlace
//         >
//           {page.label} {/* Texto del enlace */}
//         </Link>
//       ))}
//     </div>
//   );
// }
import { Link } from "react-router-dom";

export default function AdminPagesList() {
  // Array de páginas administrativas
  const pages = [
    { id: "Institutions", label: "Institución" },
    { id: "Campus", label: "Campus" },
    { id: "Courses", label: "Cursos" },
  ];

  return (
    <div className="flex flex-col">
      {/* Mapeamos las páginas y creamos enlaces */}
      {pages.map((page) => (
        <Link
          key={page.id}
          to={`/admin/${page.id}`} // Ruta a la que se redirige al hacer clic
          className="text-blue-600 hover:underline p-2" // Estilos para el enlace
        >
          {page.label} {/* Texto del enlace */}
        </Link>
      ))}
    </div>
  );
}
