// // src/context/LanguageContext.js
// import React, { createContext, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { useDispatch, useSelector } from "react-redux";
// import { setLanguage } from "../redux/LanguageSlice";

// export const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const { i18n } = useTranslation();
//   const dispatch = useDispatch();
//   const language = useSelector((state) => state.language.lang);

//   // Inicializar el idioma desde el localStorage en la carga de la app
//   useEffect(() => {
//     const storedLanguage = localStorage.getItem("language") || "es"; // Idioma predeterminado
//     dispatch(setLanguage(storedLanguage)); // Actualiza el estado en Redux
//     i18n.changeLanguage(storedLanguage); // Cambia el idioma en i18next
//   }, [dispatch, i18n]);

//   // Función para cambiar y guardar el idioma
//   const changeLanguage = (lang) => {
//     dispatch(setLanguage(lang));
//     i18n.changeLanguage(lang);
//     localStorage.setItem("language", lang); // Guardar en localStorage
//   };

//   return (
//     <LanguageContext.Provider value={{ language, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };


import React, { createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/LanguageSlice";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.lang);

  // Cambiar el idioma cuando se monta el componente
  useEffect(() => {
    i18n.changeLanguage(language); // Cambia el idioma en i18next
  }, [language, i18n]); // Ejecuta cuando el idioma cambie

  // Función para cambiar y guardar el idioma
  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang)); // Cambia el idioma en Redux
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
