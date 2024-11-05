// import { createSlice } from '@reduxjs/toolkit';

// const languageSlice = createSlice({
//   name: 'language',
//   initialState: {
//     lang: 'es', // Idioma por defecto
//   },
//   reducers: {
//     setLanguage: (state, action) => {
//       state.lang = action.payload; // Cambia el idioma
//     },
//   },
// });

// // Exporta las acciones
// export const { setLanguage } = languageSlice.actions;

// // Exporta el reducer

import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: localStorage.getItem("language") || "es", // Cargar el idioma desde localStorage o usar 'es' por defecto
  },
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload; // Cambia el idioma
      localStorage.setItem("language", action.payload); // Guardar en localStorage
    },
  },
});

// Exporta las acciones
export const { setLanguage } = languageSlice.actions;

// Exporta el reducer
export default languageSlice.reducer;
