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
    <div className="flex bg-secundary-main flex-col items-center py-8 rounded-extra-rounded">
      {/* Botón del dropdown */}
      <button
        className={`flex items-center rounded-standard px-4 py-2 ${
          isDropdownOpen
            ? "bg-primary-dark font-semibold dark:bg-third-dark-main"
            : "bg-primary-dark dark:bg-second-dark-main"
        } text-secundary-main dark:text-light-main hover:bg-light-star dark:hover:bg-dark-main transition duration-200`}
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
      >

<span className="text-secundary-light"> {t("adminAccess.control.dropDown")}</span>

       
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <ul className="absolute mt-14 w-52 border bg-w
         border-gray-200 bg-tertiary-light  dark:bg-second-dark-main rounded-extra-rounded shadow-lg z-10">
          {pages.map((page) => (
            <li key={page.id} className="flex rounded-extra-rounded hover:bg-primary-light justify-center">
              <Link
                to={`/admin/${page.id}`}
                className="w-full flex px-4 py-2 rounded-extra-rounded text-dark-main dark:text-light-main hover:bg-third-light-main dark:hover:bg-third-dark-main transition duration-200"
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
