import React, { useEffect, useState } from "react";

function ThemeToggle() {
  // Initialize theme state based on the user's preference or default to light
  const [theme, setTheme] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Effect to apply the theme to the document
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

  // Handle the change of the checkbox
  const handleThemeChange = () => {
    setTimeout(() => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }, 500);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={theme === "dark"}
        onChange={handleThemeChange}
      />
      <div className="relative w-14 h-7 bg-gray-200 rounded-full transition-colors duration-300 ease-in-out dark:bg-gray-700">
        <div
          className={`absolute top-0.5 left-0 transition-transform duration-300 ease-in-out h-6 w-6 bg-white rounded-full shadow-md ${
            theme === "dark" ? "translate-x-7" : ""
          }`}
        ></div>
      </div>
    </label>
  );
}

export default ThemeToggle;
