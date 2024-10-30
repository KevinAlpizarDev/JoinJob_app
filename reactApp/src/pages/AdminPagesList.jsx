// import { Link } from "react-router-dom";
// import { useState } from "react";
// import NavBar from "../components/main/NavBar";

// export default function AdminPagesList() {
//   // Array de páginas administrativas
//   const pages = [
//     { id: "Institutions", label: "Institución" },
//     { id: "Campus", label: "Campus" },
//     { id: "Courses", label: "Cursos" },
//     { id: "Enrollments", label: "Matriculas" },
//   ];

//   // Estado para manejar la visibilidad del dropdown
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   // Función para alternar el estado del dropdown
//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   return (
//     <>
//       {/* Aquí se muestra el NavBar */}

//       <div className="relative mt-4">
//         {/* Botón del dropdown */}
//         <button
//           className="flex bg-blue-300 items-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//           type="button"
//           id="dropdownMenuButton"
//           onClick={toggleDropdown}
//           aria-expanded={isDropdownOpen}
//         >
//           Páginas Administrativas
//           <span className="ms-2 w-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </span>
//         </button>

//         {/* Dropdown menu */}
//         {isDropdownOpen && (
//           <ul
//             className="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg dark:bg-surface-dark"
//             aria-labelledby="dropdownMenuButton"
//           >
//             {pages.map((page) => (
//               <li key={page.id}>
//                 <Link
//                   to={`/admin/${page.id}`} // Ruta a la que se redirige al hacer clic
//                   className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
//                 >
//                   {page.label} {/* Texto del enlace */}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// }
import { Link } from "react-router-dom";
import { useState } from "react";




import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation


export default function AdminPagesList() {
  const pages = [
    { id: "Institutions", label: "Institución" },
    { id: "Campus", label: "Campus" },
    { id: "Courses", label: "Cursos" },
    { id: "Enrollments", label: "Matriculas" },
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente

  return (
    <div className="relative mt-4  rounded-extra-rounded">
      {/* Botón del dropdown */}
      <button
        className="flex items-center  rounded-standard px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-200"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
      >
 {t("adminAccess.control.dropDown")}
        <span className="ml-2 w-4 h-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`transform transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
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
        <ul className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {pages.map((page) => (
            <li key={page.id}>
              <Link
                to={`/admin/${page.id}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-200"
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
