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
        className="flex items-center rounded-standard px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 transition duration-200"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
      >
        {t("adminAccess.control.dropDown")}
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <ul className="absolute  mt-14 w-52  border border-gray-200 rounded-extra-rounded shadow-lg z-10">
          {pages.map((page) => (
            <li key={page.id} className="flex justify-center">
              <Link
                to={`/admin/${page.id}`}
                className="w-full flex px-4 py-2 rounded-extra-rounded text-gray-700 hover:bg-gray-100 transition duration-200"
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
