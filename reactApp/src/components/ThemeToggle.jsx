// import React, { useEffect, useState } from "react";

// function ThemeToggle() {
//   // Initialize theme state based on the user's preference or default to light
//   const [theme, setTheme] = useState(() => {
//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   });

//   // Effect to apply the theme to the document
//   useEffect(() => {
//     const htmlElement = document.documentElement;
//     htmlElement.classList.toggle("dark", theme === "dark");

//     const handleMediaChange = (event) => {
//       setTheme(event.matches ? "dark" : "light");
//     };

//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     mediaQuery.addEventListener("change", handleMediaChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaChange);
//     };
//   }, [theme]);

//   // Handle the change of the checkbox
//   const handleThemeChange = () => {
//     setTimeout(() => {
//       setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//     }, 500);
//   };

//   return (
//     <label className="inline-flex items-center cursor-pointer">
//       <input
//         type="checkbox"
//         className="sr-only"
//         checked={theme === "dark"}
//         onChange={handleThemeChange}
//       />
//       <div className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors duration-300 ease-in-out dark:bg-gray-700">
//         <div
//           className={`absolute top-0.5 left-0 transition-transform duration-300 ease-in-out h-6 w-6 bg-white rounded-full shadow-md ${
//             theme === "dark" ? "translate-x-7" : ""
//           }`}
//         ></div>
//       </div>
//     </label>
//   );
// }

// export default ThemeToggle;

// import React, { useEffect, useState } from "react";

// function ThemeToggle() {
//   const [theme, setTheme] = useState(() =>
//     window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
//   );

//   useEffect(() => {
//     const htmlElement = document.documentElement;
//     htmlElement.classList.toggle("dark", theme === "dark");

//     const handleMediaChange = (event) => {
//       setTheme(event.matches ? "dark" : "light");
//     };

//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     mediaQuery.addEventListener("change", handleMediaChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaChange);
//     };
//   }, [theme]);

//   const handleThemeChange = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <label className="inline-flex items-center  cursor-pointer">
//       <input
//         type="checkbox"
//         className="sr-only peer"
//         checked={theme === "dark"}
//         onChange={handleThemeChange}
//       />
//       <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//       <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
//         {theme === "dark" ? "Dark Mode" : "Light Mode"}
//       </span>
//     </label>
//   );
// }

// export default ThemeToggle;
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
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
}

export default ThemeToggle;
