import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, setTheme } from "../redux/themeSlice";
import { useTranslation } from "react-i18next";

function ThemeToggle() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { t } = useTranslation("global");

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
    <div className="flex items-center justify-center w-full">
      <label className="flex  w-full items-center cursor-pointer py-2 dark: rounded">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-extra-rounded dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-extra-rounded after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <div className="ml-2 text-sm font-bold text-gray-700 dark:text-gray-300">
          {theme === "dark" ? t("adminAccess.theme.off") : t("adminAccess.theme.on")}
        </div>
      </label>
    </div>
  );
}

export default ThemeToggle;
