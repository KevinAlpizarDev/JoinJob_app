// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
      
//       fontFamily: {
//         poppins: ["Poppins", "sans-serif"],
//       },
//       colors: {
//         'custom-blue': {
//           DEFAULT: '#B0C4DE',   // Color principal
//           'dark': '#7A9AB8',    // Versión más oscura
//           'light': '#D6E2F1'    // Versión más clara
//         },

//       keyframes: {
//         "move-down": {
//           "0%": { transform: "translateY(-100%)" },
//           "100%": { transform: "translateY(0)" },
//         },
//       },
//       animation: {
//         "move-down": "move-down 1s ease-in-out",
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        'amarillo-mostaza': {
          DEFAULT: '#FFD700',   // Color principal
          dark: '#FFD700',      // Versión más oscura
          light: '#D6E2F1',     // Versión más clara
        },
        'gris-oscuro': {
          DEFAULT: '#333333',   // Color principal
          dark: '#FFD700',      // Versión más oscura
          light: '#D6E2F1',     // Versión más clara
        },
        'dark-gray': {
          DEFAULT: '#1a1a1a', // Cambia este valor al código hexadecimal de tu color personalizado
          dark: '#1a1a1a', // Cambia este valor al código hexadecimal de tu color personalizado
          light: '#1a1a1a', // Cambia este valor al código hexadecimal de tu color personalizado
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
