import { Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/main/NavBar";

export default function AdminPagesList() {
  // Array de páginas administrativas
  const pages = [
    { id: "Institutions", label: "Institución" },
    { id: "Campus", label: "Campus" },
    { id: "Courses", label: "Cursos" },
    { id: "Enrollments", label: "Matriculas" },
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


// import { Link } from "react-router-dom";
// import { useState } from "react";
// import NavBar from "../components/main/NavBar";

// export default function AdminPagesList() {
//   // Array de páginas administrativas
//   const pages = [
//     { id: "Institutions", label: "Institución" },
//     { id: "Campus", label: "Campus" },
//     { id: "Courses", label: "Cursos" },
//     { id: "Enrollments", label: "Matrículas" },
//     { id: "Locations", label: "Ubicaciones" }, // Nueva página para Ubicaciones
//   ];

//   // Estado para manejar la visibilidad del dropdown
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   // Función para alternar el estado del dropdown
//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   return (
//     <>
//       {/* NavBar si necesitas mostrarlo */}
//       {/* <NavBar /> */}

//       <div className="relative mt-4">
//         {/* Botón del dropdown */}
//         <button
//           className="flex items-center rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-0 active:bg-blue-700"
//           type="button"
//           id="dropdownMenuButton"
//           onClick={toggleDropdown}
//           aria-expanded={isDropdownOpen}
//         >
//           Páginas Administrativas
//           <span className="ml-2">
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
//             className="absolute z-10 mt-2 min-w-max list-none rounded-lg bg-white shadow-lg dark:bg-neutral-800"
//             aria-labelledby="dropdownMenuButton"
//           >
//             {pages.map((page) => (
//               <li key={page.id}>
//                 <Link
//                   to={`/admin/${page.id}`} // Ruta a la que se redirige al hacer clic
//                   className="block w-full px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-200 focus:bg-neutral-200 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
