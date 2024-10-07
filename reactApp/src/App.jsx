// import React, { useEffect, useState } from "react";
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import NotFoundPage from "./pages/NotFoundPage";
// import LoginForm from "./components/RegisterForm";
// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <HomePage />,
// //     errorElement: <NotFoundPage />,
// //   },
// // ]);

// const App = () => {
//   //   const [theme, setTheme] = useState(() => {
//   //     return window.matchMedia("(prefers-color-scheme: dark)").matches
//   //       ? "dark"
//   //       : "light";
//   //   });
//   //   useEffect(() => {
//   //     const htmlElement = document.documentElement;
//   //     htmlElement.classList.toggle("dark", theme === "dark");
//   //     const handleMediaChange = (event) => {
//   //       setTheme(event.matches ? "dark" : "light");
//   //     };
//   //     const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
//   //     mediaQuery.addEventListener("change", handleMediaChange);
//   //     return () => {
//   //       mediaQuery.removeEventListener("change", handleMediaChange);
//   //     };
//   //   }, [theme]);
//   //   const handleChangeTheme = () => {
//   //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   //   };
//   //   return (
//   //     <>
//   //       <div className="h-screen flex flex-col justify-center items-center dark:bg-neutral-900">
//   //         {/* <RouterProvider router={router} /> */}
//   //         <button
//   //           className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
//   //           onClick={handleChangeTheme}
//   //         >
//   //           Change Theme
//   //         </button>
//   //       </div>
//   //       <LoginForm/>
//   //     </>
//   //   );
// };

// export default App;

// src/index.js
// import React from "react";
// import { createRoot } from "react-dom/client"; // Cambiado
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement); // Usar createRoot

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
// App.jsx
// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { BrowserRouter } from "react-router-dom";
// import NotFoundPage from "./pages/NotFoundPage";
// import NavBar from "./components/main/NavBar";
// import AuthProvider from "./components/AuthProvider";
// import HomePage from "./pages/HomePage";
// import SignInPage from "./pages/SignInPage";
// import FooterPage from "./components/FooterPage";
// import ContactUsPage from "./pages/ContactUsPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// import ProtectedRoute from "./components/ProtectedRoute";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <ProtectedRoute>
//         <HomePage />
//       </ProtectedRoute>
//     ),
//     errorElement: <NotFoundPage />,
//   },

//   {
//     path: "/signin",
//     element: <SignInPage />,
//     // element: < ContactUsPage />,
//     // ContactUsPage
//   },
//   {
//     path: "/admin",
//     element: (
//       <ProtectedRoute>
//         <AdminPage />
//       </ProtectedRoute>
//     ),
// ]);

// const App = () => {
//   return (
//     <React.StrictMode>
//       <AuthProvider isSignedIn={false}>
//         <NavBar />
//         <RouterProvider router={router} />
//         <FooterPage />
//       </AuthProvider>
//     </React.StrictMode>
//   );
// };

// export default App;

///////////////////////////////////////////////is stuff
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/main/NavBar";
import AuthProvider from "./components/AuthProvider";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import FooterPage from "./components/FooterPage";
import ContactUsPage from "./pages/ContactUsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPage from "./pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/admin",
    element: (
    
        <AdminPage />

    ),
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <AuthProvider isSignedIn={false}>
 
        <RouterProvider router={router} />
        <FooterPage />
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;
