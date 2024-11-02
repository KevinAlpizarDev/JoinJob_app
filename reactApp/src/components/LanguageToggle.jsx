
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/LanguageSlice";

const LanguageToggle = () => {
  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.lang);

  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Guarda el idioma en localStorage
  };

  useEffect(() => {
    // Recupera el idioma del localStorage al cargar el componente
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      changeLanguage(storedLanguage); // Cambia el idioma si hay uno almacenado
    }
  }, []);

  return (
    <div className="flex  items-center justify-center w-full">
      <label className="flex  w-full  items-center cursor-pointer py-2 rounded-lg">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={language === "en"}
          onChange={(e) => changeLanguage(e.target.checked ? "en" : "es")} // Cambia el idioma basado en el estado del checkbox
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-extra-rounded dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-extra-rounded after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <div className="ml-2 text-sm font-bold text-gray-700 dark:text-gray-300">
          {language === "en" ?` / ${t("adminAccess.language.en") }` : ` / ${t("adminAccess.language.es") }`}
        </div>
      </label>
    </div>
  );
};

export default LanguageToggle;
