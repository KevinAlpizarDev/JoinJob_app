// import React from 'react'

// const NavBar = () => {
//   return (
//     <nav
//     class="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4"
//     data-twe-navbar-ref
//   >
//     <div class="flex w-full flex-wrap items-center justify-between px-3">
//       <div>

//         <a class="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
//           {/* <img
//             class="me-2"
//             src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
//             style="height: 20px"
//             alt="TE Logo"
//             loading="lazy"
//           /> */}

//         </a>
//       </div>

//       <button
//         class="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
//         type="button"
//         data-twe-collapse-init
//         data-twe-target="#navbarSupportedContent4"
//         aria-controls="navbarSupportedContent4"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
//               clip-rule="evenodd"
//             />
//           </svg>
//         </span>
//       </button>

//       <div
//         class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
//         id="navbarSupportedContent4"
//         data-twe-collapse-item
//       >
//         <ul
//           class="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
//           data-twe-navbar-nav-ref
//         >
//           <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2" data-twe-nav-item-ref>
//             <a
//               class="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
//               aria-current="page"
//               href="#"
//               data-twe-nav-link-ref
//             >
//               Dashboard
//             </a>
//           </li>
//         </ul>

//         <div class="flex items-center">
//           <button
//             type="button"
//             data-twe-ripple-init
//             data-twe-ripple-color="light"
//             class="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
//           >
//             Login
//           </button>

//           {/* <button
//             type="button"
//             data-twe-ripple-init
//             data-twe-ripple-color="light"
//             class="me-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//           >
//             Sign up for free
//           </button> */}
//           <label class="inline-flex items-center cursor-pointer">
//   <input type="checkbox" value="" class="p-4 sr-only peer"/>
//   <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//   {/* <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Large toggle</span> */}
// </label>
//           <button
//             type="button"
//             data-twe-ripple-init
//             data-twe-ripple-color="light"
//             class="me-6 inline-block rounded bg-neutral-800 px-3 py-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//           >
//             <span class="[&>svg]:w-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//               </svg>
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   </nav>

//   )
// }

// export default NavBar
// import React from "react";
// import ThemeToggle from "../ThemeToggle";

// const NavBar = () => {
//   return (
//     <nav
//       className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4"
//       data-twe-navbar-ref
//     >
//       <div className="flex w-full flex-wrap items-center justify-between px-3">
//         <div>
//           <a className="mx-2 my-1 flex items-center lg:mb-0 lg:mt-0" href="#">
//             {/* Logo o imagen aquí */}
//           </a>
//         </div>

//         <button
//           className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
//           type="button"
//           data-twe-collapse-init
//           data-twe-target="#navbarSupportedContent4"
//           aria-controls="navbarSupportedContent4"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd" // Cambiado de fill-rule a fillRule
//                 d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
//                 clipRule="evenodd" // Cambiado de clip-rule a clipRule
//               />
//             </svg>
//           </span>
//         </button>

//         <div
//           className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
//           id="navbarSupportedContent4"
//           data-twe-collapse-item
//         >
//           <ul
//             className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
//             data-twe-navbar-nav-ref
//           >
//             <li
//               className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
//               data-twe-nav-item-ref
//             >
//               <a
//                 className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
//                 aria-current="page"
//                 href="#"
//                 data-twe-nav-link-ref
//               >
//                 Dashboard
//               </a>
//             </li>
//           </ul>

//           <div className="flex items-center">
//             <button
//               type="button"
//               data-twe-ripple-init
//               data-twe-ripple-color="light"
//               className="me-3 inline-block rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-secondary-600 dark:hover:text-secondary-500 dark:focus:text-secondary-500 dark:active:text-secondary-500"
//             >
//               Login
//             </button>

//             {/* <label className="inline-flex items-center cursor-pointer">
//               <input type="checkbox" value="" className="p-4 sr-only peer" />
//               <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//             </label> */}
//           <ThemeToggle/>

//             <button
//               type="button"
//               data-twe-ripple-init
//               data-twe-ripple-color="light"
//               className="me-6 inline-block rounded bg-neutral-800 px-3 py-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//             >
//               <span className="[&>svg]:w-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
//////////////////////////////////////////////
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Ensure only the necessary icons are imported
import ThemeToggle from "../ThemeToggle"; // Import the ThemeToggle component
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
              />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <ThemeToggle />{" "}
              {/* Use ThemeToggle component for theme switching */}
              {/* <a
                href="#"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </a> */}
              {/* <Link
                to="/signin"
                className="flex text-xl font-light text-[#444444] hover:text-black dark:text-[#d4d4d4] dark:hover:text-white"
              >
                <p>Product</p>
              </Link> */}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Team
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Projects
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-5">
              <ThemeToggle /> {/* ThemeToggle component for mobile as well */}
              {/* <a
                href="#"
                className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </a> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

