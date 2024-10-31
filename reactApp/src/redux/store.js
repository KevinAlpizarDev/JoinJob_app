import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import languageReducer from "./languageSlice"; // Importa el reducer que crearás a continuación

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer, // Agrega el reducer
  },
});
