
//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-indigo-400  dark:bg-gray-800 ">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl ">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center  ">
//             <a href="#" className="flex-shrink-0">
//               <img
//                 className="h-8 w-8"
//                 src="/placeholder.svg?height=32&width=32"
//                 alt="Logo"
//               />
//             </a>
//             <div className="hidden md:block">
//               <div className="">
//                 <a
//                   href="#"
//                   className="px-3 py-2 font-bold rounded-md text-sm  text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//                 >
//                   Dashboard
//                 </a>
//                 <a
//                   href="#"
//                   className="px-3 py-2 rounded-md text-sm font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//                 >
//                   Team
//                 </a>
//                 {/* <a
//                   href="#"
//                   className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//                 >
//                   Projects
//                 </a> */}
//               </div>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6">
//               <ThemeToggle />{" "}
//               {/* Use ThemeToggle component for theme switching */}
//               {/* <a
//                 href="#"
//                 className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Sign up
//               </a> */}
//               {/* <Link
//                 to="/signin"
//                 className="flex text-xl font-light text-[#444444] hover:text-black dark:text-[#d4d4d4] dark:hover:text-white"
//               >
//                 <p>Product</p>
//               </Link> */}
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden font-bold">
//           <div className="px-2 font-bold pt-2 pb-3 space-y-1 sm:px-3">
//           <p className="font-bold"> Dashboard</p>
//             <a
//               href="#"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//             >
//               Team
//             </a>
//             <a
//               href="#"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//             >
//               Projects
//             </a>
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
//             <div className="flex items-center px-5 mx-24 bg-yellow-400">
//               <div className="bg-gray-200">
//                 <ThemeToggle /> {/* ThemeToggle component for mobile as well */}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;

// import React, { useState } from "react";
// import { Menu, X } from "lucide-react"; // Ensure only the necessary icons are imported
// import ThemeToggle from "../ThemeToggle"; // Import the ThemeToggle component
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-indigo-400 dark:bg-gray-800 shadow-xl">
//       {" "}
//       {/* shadow-xl added here */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <a href="#" className="flex-shrink-0">
//               <img
//                 className="h-8 w-8"
//                 src="/placeholder.svg?height=32&width=32"
//                 alt="Logo"
//               />
//             </a>
//             <div className="hidden md:block">
//               <div className="">
//                 <a
//                   href="#"
//                   className="px-3 py-2 font-bold rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//                 >
//                   Dashboard
//                 </a>

//                 <a
//                   href="#"
//                   className="px-3 py-2 rounded-md text-sm font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//                 >
//                   Team
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6">
//               <ThemeToggle />{" "}
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden font-bold">
//           <div className="px-2 font-bold pt-2 pb-3 space-y-1 sm:px-3">
//             <p className="font-bold">Dashboard</p>
//             <a
//               href="#"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//             >
//               Team
//             </a>
//             <a
//               href="#"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//             >
//               Projects
//             </a>
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
//             <div className="flex items-center px-5 mx-24 bg-yellow-400">
//               <div className="bg-gray-200">
//                 <ThemeToggle />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
// import React, { useState } from "react";
// import { Menu, X } from "lucide-react"; // Ensure only the necessary icons are imported
// import ThemeToggle from "../ThemeToggle"; // Import the ThemeToggle component
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-indigo-400 dark:bg-gray-800 shadow-xl">
//       {" "}
//       {/* shadow-xl added here */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0">
//               <img
//                 className="h-8 w-8"
//                 src="/placeholder.svg?height=32&width=32"
//                 alt="Logo"
//               />
//             </Link>
//             <div className="hidden md:block">
//               <div className="">
//                 <Link
//                   to="/admin"
//                   className="px-3 py-2 font-bold rounded-md text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//                 >
//                   Dashboard
//                 </Link>

//                 <Link
//                   to="/team"
//                   className="px-3 py-2 rounded-md text-sm font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//                 >
//                   Team
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6">
//               <ThemeToggle />{" "}
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden font-bold">
//           <div className="px-2 font-bold pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/dashboard"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//             >
//               Dashboard
//             </Link>
//             <Link
//               to="/team"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//             >
//               Team
//             </Link>
//             <Link
//               to="/projects"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//             >
//               Projects
//             </Link>
//             <Link
//               to="/admin"
//               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
//             >
//               Admin
//             </Link>
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
//             <div className="flex items-center px-5 mx-24 bg-yellow-400">
//               <div className="bg-gray-200">
//                 <ThemeToggle />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
              />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {/* <NavLink to="/signin">Signin</NavLink> */}
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                {/* <NavLink to="/projects">Projects</NavLink> */}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <ThemeToggle />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-gray-300"
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
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-5">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children, mobile = false }) {
  const baseClasses = "text-sm font-medium text-gray-900 dark:text-gray-100";
  const desktopClasses = "px-3 py-2";
  const mobileClasses = "block px-3 py-2";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </Link>
  );
}
