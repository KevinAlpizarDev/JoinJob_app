/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    borderRadius: {
      "extra-rounded": "1.5rem", // Borde redondeado personalizado
      complete: "16px",
      standard: "8px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "amarillo-mostaza": {
          DEFAULT: "#FFD700",
          dark: "#D6E2F1",
          light: "#D6E2F1",
        },
        "blue-sky": {
          DEFAULT: "#2563EB", // Color personalizado para blue-sky
          light: "#4F94FF", // Tono más claro (ajusta este valor según sea necesario)
        },

        "primary-light": {
          DEFAULT: "#ffffff",
          dark: "#ffffff",
          light: "#ffffff",
        },
        "secundary-light": {
          DEFAULT: "#f2f2f2",
          dark: "#f2f2f2",
          light: "#f2f2f2",
        },

        "tertiary-light": {
  DEFAULT: "#e0e0e0",
  dark: "#bfbfbf",
  light: "#e0e0e0",
},
        "primary-dark": {
          DEFAULT: "#282c34",
          dark: "#282c34",
          light: "#282c34",
        },

        "second-light-main": {
          DEFAULT: "#ffff",
          dark: "#191919",
          light: "#f8f8f8",
        },

        "second-dark-main": {
          DEFAULT: "#191919",
          dark: "#191919",
          light: "#f8f8f8",
        },

        "gris-oscuro": {
          DEFAULT: "#333333",
          dark: "#FFD700",
          light: "#D6E2F1",
        },
        "dark-gray": {
          DEFAULT: "#1a1a1a",
          dark: "#1a1a1a",
          light: "#2a2a2a", // Considera un color diferente para la variante light
        },
        "light-blue": {
          DEFAULT: "#E0F7FA",
          dark: "#1a1a1a",
          light: "#E0F7FA", // Este color parece ser igual en todos los temas
        },
        footer: {
          DEFAULT: "#424242",
          dark: "#1a1a1a",
          light: "#d1d1d1", // Añadido un color más claro para el modo claro
        },
      },
      keyframes: {
        "move-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "move-down": "move-down 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
