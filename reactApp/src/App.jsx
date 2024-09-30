import React, { useEffect, useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginForm from "./components/LoginForm";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <NotFoundPage />,
//   },
// ]);

const App = () => {
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
      <div className="h-screen flex flex-col justify-center items-center dark:bg-neutral-900">
        {/* <RouterProvider router={router} /> */}
        <button
          className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
          onClick={handleChangeTheme}
        >
          Change Theme
        </button>
      </div>
      <LoginForm/>
    </>
  );
};

export default App;
