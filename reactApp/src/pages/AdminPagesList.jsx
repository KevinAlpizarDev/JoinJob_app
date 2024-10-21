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

// import { Link } from "react-router-dom";

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

// import { Link } from "react-router-dom";

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

// import { Link } from "react-router-dom";

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
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function AdminPagesList() {
//   // Array de páginas administrativas
//   const pages = [
//     { id: "Institutions", label: "Institución" },
//     { id: "Campus", label: "Campus" },
//     { id: "Courses", label: "Cursos" },
//   ];

//   // Estado para manejar la visibilidad del dropdown
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   // Función para alternar el estado del dropdown
//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

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

//       {/* Botón del dropdown */}
//       <button
//         id="dropdownDefaultButton"
//         onClick={toggleDropdown}
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
//         type="button"
//       >
//         Dropdown button
//         <svg
//           className="w-2.5 h-2.5 ms-3"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 10 6"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m1 1 4 4 4-4"
//           />
//         </svg>
//       </button>

//       {/* Dropdown menu */}
//       {isDropdownOpen && (
//         <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-2">
//           <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//             <li>
//               <Link
//                 to="/admin/dashboard"
//                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/admin/settings"
//                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Settings
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/admin/earnings"
//                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Earnings
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/admin/signout"
//                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//               >
//                 Sign out
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function AdminPagesList() {
//   // Array de páginas administrativas
//   const pages = [
//     { id: "Institutions", label: "Institución" },
//     { id: "Campus", label: "Campus" },
//     { id: "Courses", label: "Cursos" },
//   ];

//   // Estado para manejar la visibilidad del dropdown
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   // Función para alternar el estado del dropdown
//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   return (
//     <div className="flex flex-col">
//       {/* Botón del dropdown */}
//       <button
//         id="dropdownDefaultButton"
//         onClick={toggleDropdown}
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
//         type="button"
//       >
//         Páginas Administrativas
//         <svg
//           className="w-2.5 h-2.5 ms-3"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 10 6"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m1 1 4 4 4-4"
//           />
//         </svg>
//       </button>

//       {/* Dropdown menu */}
//       {isDropdownOpen && (
//         <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-2">
//           <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//             {pages.map((page) => (
//               <li key={page.id}>
//                 <Link
//                   to={`/admin/${page.id}`} // Ruta a la que se redirige al hacer clic
//                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                 >
//                   {page.label} {/* Texto del enlace */}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/main/NavBar";

export default function AdminPagesList() {
  // Array de páginas administrativas
  const pages = [
    { id: "Institutions", label: "Institución" },
    { id: "Campus", label: "Campus" },
    { id: "Courses", label: "Cursos" },
  ];

  // Estado para manejar la visibilidad del dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Función para alternar el estado del dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      {/* Aquí se muestra el NavBar */}


      <div className="relative mt-4">
        {/* Botón del dropdown */}
        <button
          className="flex bg-blue-300 items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          type="button"
          id="dropdownMenuButton"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
        >
          Páginas Administrativas
          <span className="ms-2 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <ul
            className="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg dark:bg-surface-dark"
            aria-labelledby="dropdownMenuButton"
          >
            {pages.map((page) => (
              <li key={page.id}>
                <Link
                  to={`/admin/${page.id}`} // Ruta a la que se redirige al hacer clic
                  className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                >
                  {page.label} {/* Texto del enlace */}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
