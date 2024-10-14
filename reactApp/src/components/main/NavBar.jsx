import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { Link } from "react-router-dom";

import Logo from "../../assets/imgs/Logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="w-full bg-white dark:bg-gray-900  border-gray-200 dark:border-gray-800 ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-10 w-10 rounded-lg" src={Logo} alt="Logo" />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* Dropdown menu */}
              <div className="relative inline-block text-left">
                <div>
                <button
  type="button"
  onClick={toggleDropdown}
  className="inline-flex justify-center w-full rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-none hover:bg-gray-50 dark:hover:bg-gray-700"
  id="menu-button"
  aria-expanded={isDropdownOpen}
  aria-haspopup="true"
>
  <Menu className="block h-6 w-6" aria-hidden="true" />
</button>
                </div>
                {isDropdownOpen && (
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg bg-white dark:bg-gray-800 shadow-lg focus:outline-none">
    <div className="py-4 mx-6" role="none">
      <ThemeToggle />
      <Link
        to="#"
        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
        role="menuitem"
      >
        License
      </Link>
    </div>
  </div>
)}

              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
            <NavLink to="/about" mobile={true}>About Us</NavLink>
            <NavLink to="/contact" mobile={true}>Contact Us</NavLink>
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
  const baseClasses = "text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200";
  const desktopClasses = "px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700";
  const mobileClasses = "block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700";

  return (
    <Link to={to} className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}>
      {children}
    </Link>
  );
}
