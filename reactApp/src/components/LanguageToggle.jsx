// import React, { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { useDispatch, useSelector } from "react-redux";
// import { setLanguage } from "../redux/LanguageSlice";

// const LanguageToggle = () => {
//   const [t, i18n] = useTranslation("global");

//   const dispatch = useDispatch();
//   const language = useSelector((state) => state.language.lang);

//   const changeLanguage = (lang) => {
//     dispatch(setLanguage(lang));
//     i18n.changeLanguage(lang);
//     localStorage.setItem("language", lang); // Guarda el idioma en localStorage
//   };

//   useEffect(() => {
//     // Recupera el idioma del localStorage al cargar el componente
//     const storedLanguage = localStorage.getItem("language");
//     if (storedLanguage) {
//       changeLanguage(storedLanguage); // Cambia el idioma si hay uno almacenado
//     }
//   }, []);

//   return (
//     <label className="flex flex-col items-center cursor-pointer">
//       <input
//         type="checkbox"
//         className="sr-only peer"
//         checked={language === "en"}
//         onChange={(e) => changeLanguage(e.target.checked ? "en" : "es")} // Cambia el idioma basado en el estado del checkbox
//       />
//       <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 mb-2"></div>
//       <div className="flex justify-between w-full px-4">
//         <div className="mr-4">ES</div>
//         <div className="ml-4">EN</div>
//       </div>
//     </label>
//   );
// };

// export default LanguageToggle;

// import React, { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { useDispatch, useSelector } from "react-redux";
// import { setLanguage } from "../redux/LanguageSlice";

// const LanguageToggle = () => {
//   const [t, i18n] = useTranslation("global");
//   const dispatch = useDispatch();
//   const language = useSelector((state) => state.language.lang);

//   const changeLanguage = (lang) => {
//     dispatch(setLanguage(lang));
//     i18n.changeLanguage(lang);
//     localStorage.setItem("language", lang);
//   };

//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("language");
//     if (storedLanguage) {
//       changeLanguage(storedLanguage);
//     }
//   }, []);

//   return (
//     <label className="flex bg-white  flex-col items-center cursor-pointer">
//       <input
//         type="checkbox"
//         className="sr-only peer"
//         checked={language === "en"}
//         onChange={(e) => changeLanguage(e.target.checked ? "en" : "es")}
//       />
//       {/* Toggle switch container */}
//       <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 mb-2"></div>
//       {/* Language labels */}
//       <div className="flex justify-between w-full px-4">
//         <div className="mr-4 font-bold">ES</div>
//         <div className="ml-4 font-bold text-dark-gray">EN</div>
//       </div>
//     </label>
//   );
// };

// export default LanguageToggle;

// import React, { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { useDispatch, useSelector } from "react-redux";
// import { setLanguage } from "../redux/LanguageSlice";

// const LanguageToggle = () => {
//   const [t, i18n] = useTranslation("global");
//   const dispatch = useDispatch();
//   const language = useSelector((state) => state.language.lang);

//   const changeLanguage = (lang) => {
//     dispatch(setLanguage(lang));
//     i18n.changeLanguage(lang);
//     localStorage.setItem("language", lang);
//   };

//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("language");
//     if (storedLanguage) {
//       changeLanguage(storedLanguage);
//     }
//   }, []);

//   return (
//     <label className="flex flex-col items-center cursor-pointer w-full h-1/2">
//       <input
//         type="checkbox"
//         className="sr-only peer"
//         checked={language === "en"}
//         onChange={(e) => changeLanguage(e.target.checked ? "en" : "es")}
//       />
//       {/* Toggle switch container */}
//       <div className="relative w-8 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-4 rtl:peer-checked:after:-translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 mb-1"></div>
//       {/* Language labels */}
//       <div className="flex justify-between w-full px-4 text-xs font-bold">
//         <div
//           className={`${language === "es" ? "text-blue-600" : "text-gray-500"}`}
//         >
//           ES
//         </div>
//         <div
//           className={`${language === "en" ? "text-blue-600" : "text-gray-500"}`}
//         >
//           EN
//         </div>
//       </div>
//     </label>
//   );
// };

// export default LanguageToggle;

// import React, { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { useDispatch, useSelector } from "react-redux";
// import { setLanguage } from "../redux/LanguageSlice";

// const LanguageToggle = () => {
//   const [t, i18n] = useTranslation("global");
//   const dispatch = useDispatch();
//   const language = useSelector((state) => state.language.lang);

//   const changeLanguage = (lang) => {
//     dispatch(setLanguage(lang));
//     i18n.changeLanguage(lang);
//     localStorage.setItem("language", lang);
//   };

//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("language");
//     if (storedLanguage) {
//       changeLanguage(storedLanguage);
//     }
//   }, []);

//   return (
//     <label className="flex items-center justify-center cursor-pointer w-full h-full">
//       <input
//         type="checkbox"
//         className="sr-only peer"
//         checked={language === "en"}
//         onChange={(e) => changeLanguage(e.target.checked ? "en" : "es")}
//       />
//       {/* Toggle switch container */}
//       <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//       {/* Language labels */}
//       <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
//         {language === "en" ? "EN" : "ES"}
//       </span>
//     </label>
//   );
// };

// export default LanguageToggle;

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
    <label className="flex items-center w-full justify-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={language === "en"}
        onChange={(e) => changeLanguage(e.target.checked ? "en" : "es")} // Cambia el idioma basado en el estado del checkbox
      />
      <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-extra-rounded peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-extra-rounded after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <div className="ml-3 font-black text-gray-700 dark:text-gray-300 text-sm">
        {language === "en" ? "EN" : "ES"}
      </div>
    </label>
  );
};

export default LanguageToggle;
