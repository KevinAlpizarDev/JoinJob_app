// src/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

// Exportar acciones y reductor
export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
