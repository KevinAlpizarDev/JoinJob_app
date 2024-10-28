import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/Logo.png";
import LanguageToggle from "../LanguageToggle";

import { useTranslation } from "react-i18next"; // Asegúrate de importar useTranslation

export default function NavBar({ isLoggedIn, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const { t, i18n } = useTranslation("global"); // Llama a useTranslation dentro del componente

  return (
    <nav className="w-full bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      <div className="max-w-full bg-amarillo-mostaza px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-10 w-10 rounded-lg" src={Logo} alt="Logo" />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink to="/about">
                  {" "}
                  {t("publicAccess.navbar.aboutUs")}
                </NavLink>
                <NavLink to="/contact">
                  {t("publicAccess.navbar.contactUs")}
                </NavLink>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Contenedor flex para Logout y menú */}
            <div className="flex items-center space-x-4">
              {isLoggedIn && (
                <button
                  onClick={onLogout}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-colors duration-200"
                >
                  Logout
                </button>
              )}
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="inline-flex justify-center w-full rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 shadow-none hover:bg-gray-50 dark:hover:bg-gray-700"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-white right-0 z-10 mt-10 w-40 h-36 p-4 rounded-xl shadow-md">
                    <div
                      className="py-2 mx-2 w-full flex items-center justify-center"
                      role="none"
                    >
                      <ThemeToggle />
                    </div>
                    <div
                      className="py-2 mx-2 w-full flex items-center justify-center"
                      role="none"
                    >
                      <LanguageToggle />
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
            <NavLink to="/about" mobile={true}>
              About Us
            </NavLink>
            <NavLink to="/contact" mobile={true}>
              Contact Us
            </NavLink>
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
  const baseClasses =
    "text-sm font-medium text-blue-600 dark:text-blue-400 underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:text-black dark:hover:text-gray-100 whitespace-nowrap";

  const desktopClasses =
    "w-32 px-7 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center"; // Ancho fijo y centrado
  const mobileClasses =
    "block w-32 px-6 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center"; // Ancho fijo y centrado

  return (
    <Link
      to={to}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
      role="link"
      tabIndex={0}
    >
      {children}
    </Link>
  );
}
