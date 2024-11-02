import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AdminPagesList() {
  const { t } = useTranslation("global");

  const pages = [
    { id: "Institutions", label: t("adminAccess.control.institution") },
    { id: "Campus", label: t("adminAccess.control.campus") },
    { id: "Courses", label: t("adminAccess.control.courses") },
    { id: "Enrollments", label: t("adminAccess.control.enrollments") },
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <div className="flex flex-col items-center py-8 rounded-extra-rounded">
      {/* Botón del dropdown */}
      <button
        className={`flex font-semibold items-center rounded-standard px-4 py-2 ${
          isDropdownOpen
            ? "bg-secundary-dark dark:bg-tertiary-dark text-primary-light"
            
            
            
            
            
            : "bg-secundary-dark dark:bg-tertiary-dark text-primary-light"
        } hover:bg-secundary-dark   transition duration-200`}
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
      >
        <span className="text-secundary-light font-semibold">
          {t("adminAccess.control.dropDown")}
        </span>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <ul className="absolute mt-14 w-52 bg-secundary-light dark:bg-primary-dark rounded-extra-rounded shadow-lg z-10">
          {pages.map((page) => (
            <li
              key={page.id}
              className="flex rounded-extra-rounded hover:bg-secundary-light dark:hover:bg-tertiary-dark justify-center transition duration-200"
            >
              <Link
                to={`/admin/${page.id}`}
                className="w-full flex px-4 py-2 rounded-extra-rounded text-dark-main dark:text-primary-light hover:bg-tertiary-light dark:hover:bg-secundary-dark transition duration-200"
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
