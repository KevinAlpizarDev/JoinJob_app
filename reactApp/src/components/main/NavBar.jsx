import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/Logo.png";
import LanguageToggle from "../LanguageToggle";
import { useTranslation } from "react-i18next";

export default function NavBar({ isLoggedIn, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const { t } = useTranslation("global");

  return (
    <nav className="w-full bg-amarillo-mostaza dark:bg-secundary-dark dark:border-primary-light  border-gray-200  dark:bg-dark-main">
      <div className="max-w-7xl rounded-extra-rounded   mx-auto px-4 sm:px-6 lg:px-8 py-">
        <div className="flex rounded-extra-rounded   items-center justify-between h-16">
          <div className="flex rounded-extra-rounded  w-96 items-center">
            {/* <div className="rounded-extra-rounded">
              
            <Link to="/" className="flex-shrink-0 rounded-extra-rounded  ">
              <img className="h-10 w-10 rounded-standard" src={Logo} alt="Logo" />
            </Link>
            </div> */}
               <Link to="/" className="flex items-center space-x-2">
              {/* <img
                className="h-10 w-10 rounded-standard"
                src={Logo}
                alt="Logo"
              /> */}
              <span className="text-2xl font-bold text-blue-sky-light mx-0 dark:text-blue-sky">
                JoinJob
              </span>
            </Link>
            <div className="hidden text-2xl text-blue-300 md:flex flex-grow ml-6">
              <div className="flex-1 text-2xl text-blue-300  font-bold flex items-center justify-center">
                <NavLink
                  to="/about"
                  className="w-24 text-blue-300 flex items-center justify-center h-full"
                >
                  {t("publicAccess.navbar.aboutUs")}
                </NavLink>
                <span>
                  
                </span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <NavLink
                  to="/contact"
                  className="w-24 flex items-center justify-center h-full"
                >
                  {t("publicAccess.navbar.contactUs")}
                </NavLink>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {isLoggedIn && (
              <button
                onClick={onLogout}
                className="text-white font-semibold w-32 bg-blue-sky  rounded-standard hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-st px-2 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-150 ease-in-out"
              >
                {t("publicAccess.navbar.logout")}
              </button>
            )}

            <button
              type="button"
              onClick={toggleDropdown}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
              aria-expanded={isDropdownOpen}
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>

            {isDropdownOpen && (
              <div className=" bg-white absolute top-[15vh] left-[89%] transform -translate-x-1/2 w-[13vw] h-[20vh] dark:bg-tertiary-dark rounded-complete shadow-lg z-20 py-4 flex flex-col items-center justify-between transition-all duration-300">
                <div className="flex-1 flex items-center justify-center">
                  <ThemeToggle />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <LanguageToggle />
                </div>
              </div>
            )}
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/about" mobile>
              {t("publicAccess.navbar.aboutUs")}
            </NavLink>
            <NavLink to="/contact" mobile>
              {t("publicAccess.navbar.contactUs")}
            </NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700 ">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children, mobile = false }) {
  const baseClasses =
    "text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-200";
  const desktopClasses = "px py-2 rounded-md";
  const mobileClasses = "block px-4 py-2 rounded-md";

  return (
    <Link
      to={to}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {children}
    </Link>
  );
}
