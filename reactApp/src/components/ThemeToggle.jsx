
// src/components/ThemeToggle.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setTheme } from "../store/themeSlice";

function ThemeToggle() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark", theme === "dark");

    const handleMediaChange = (event) => {
      dispatch(setTheme(event.matches ? "dark" : "light"));
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [theme, dispatch]);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={handleThemeChange}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </label>
  );
}

export default ThemeToggle;
