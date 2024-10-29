// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleTheme, setTheme } from "../redux/themeSlice";

// function ThemeToggle() {
//   const theme = useSelector((state) => state.theme);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const htmlElement = document.documentElement;
//     htmlElement.classList.toggle("dark", theme === "dark");

//     const handleMediaChange = (event) => {
//       const newTheme = event.matches ? "dark" : "light";
//       dispatch(setTheme(newTheme));
//     };

//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     mediaQuery.addEventListener("change", handleMediaChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaChange);
//     };
//   }, [theme, dispatch]);

//   const handleThemeChange = () => {
//     dispatch(toggleTheme());
//   };

//   return (
//     <label className="inline-flex items-center mb-5 cursor-pointer">
//       <input
//         type="checkbox"
//         className="sr-only peer"
//         checked={theme === "dark"}
//         onChange={handleThemeChange}
//       />
//       <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

//     </label>
//   );
// }

// export default ThemeToggle;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleTheme, setTheme } from "../redux/themeSlice";

// function ThemeToggle() {
//   const theme = useSelector((state) => state.theme);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const htmlElement = document.documentElement;
//     htmlElement.classList.toggle("dark", theme === "dark");

//     const handleMediaChange = (event) => {
//       const newTheme = event.matches ? "dark" : "light";
//       dispatch(setTheme(newTheme));
//     };

//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     mediaQuery.addEventListener("change", handleMediaChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaChange);
//     };
//   }, [theme, dispatch]);

//   const handleThemeChange = () => {
//     dispatch(toggleTheme());
//   };

//   return (
//     <label className="flex items-center justify-center cursor-pointer w-full h-full">
//       <input
//         type="checkbox"
//         className="sr-only peer"
//         checked={theme === "dark"}
//         onChange={handleThemeChange}
//       />
//       {/* Toggle switch container */}
//       <div className="relative w-9 h-5 bg-gray-200 rounded-full dark:bg-gray-700 transition-colors">
//         <div
//           className={`absolute top-1 left-1 w-4 h-4 bg-white border border-gray-300 rounded-full transition-transform ${
//             theme === "dark" ? "translate-x-4" : ""
//           }`}
//         ></div>
//       </div>
//       {/* Theme labels */}
//       <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
//         {theme === "dark" ? "OFF" : ""}
//       </span>
//     </label>
//   );
// }

// export default ThemeToggle;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setTheme } from "../redux/themeSlice";

function ThemeToggle() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark", theme === "dark");

    const handleMediaChange = (event) => {
      const newTheme = event.matches ? "dark" : "light";
      dispatch(setTheme(newTheme));
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
    <label className="flex items-center w-full justify-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={handleThemeChange}
      />
      <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <div className="ml-2 font-black text-gray-700 dark:text-gray-300 text-sm">
        {theme === "dark" ? "ON" : "OFF"}
      </div>
    </label>
  );
}

export default ThemeToggle;
