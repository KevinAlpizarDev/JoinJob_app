import React from "react";
import  { useEffect, useState } from "react";
function ThemeButton() {
  // #DarkMode
  const [theme, setTheme] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const htmlElement = document.documentElement;

    htmlElement.classList.toggle("dark", theme === "dark");

    const handleMediaChange = (event) => {
      setTheme(event.matches ? "dark" : "light");
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>

        {/* <RouterProvider router={router} /> */}
        <button
          className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
          onClick={handleChangeTheme}
        >
          Change Theme
        </button>

    </>
  );
}

export default ThemeButton;


// // src/components/ThemeButton.jsx
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme, setTheme } from "./themeSlice"; // Ajustar la ruta

// function ThemeButton() {
//   const dispatch = useDispatch();
//   const theme = useSelector((state) => state.theme.theme);

//   useEffect(() => {
//     const htmlElement = document.documentElement;

//     htmlElement.classList.toggle("dark", theme === "dark");

//     const handleMediaChange = (event) => {
//       dispatch(setTheme(event.matches ? "dark" : "light"));
//     };

//     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//     mediaQuery.addEventListener("change", handleMediaChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaChange);
//     };
//   }, [theme, dispatch]);

//   const handleChangeTheme = () => {
//     dispatch(toggleTheme());
//   };

//   return (
//     <button
//       className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
//       onClick={handleChangeTheme}
//     >
//       Change Theme
//     </button>
//   );
// }

// export default ThemeButton;
