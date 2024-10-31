// import React, { useEffect } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import NotFoundPage from "./pages/NotFoundPage";
// import NavBar from "./components/main/NavBar";
// import AuthProvider from "./components/AuthProvider";

// import FooterPage from "./components/FooterPage";
// import ContactUsPage from "./pages/ContactUsPage";
// import AboutPage from "./pages/AboutPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// import LandingPage from "./components/LandingPage";
// import AdminPage from "./pages/AdminPage";
// import Account from "./pages/Account";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminPagesList from "./pages/AdminPagesList";
// import PagesPage from "./pages/PagesPage";
// import Control from "./components/Control";
// import CampusForm from "./components/CampusForm";

// import { I18nextProvider } from "react-i18next";
// import i18next from "i18next";

// import global_es from "./translations/es/global.json"

// import global_en from "./translations/en/global.json"

// i18next.init({

//   lng: "es",
//   interpolation: { escapeValue: false },
//   debug: true,
//   resources: {
//     es: { global: global_es },
//     en: { global: global_en },
//   },
// });

// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: (
//       <ProtectedRoute>
//         <Home />
//       </ProtectedRoute>
//     ),
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/admin",
//     element: (
//       <ProtectedRoute>
//         <AdminPage />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/admin/:pageId",
//     element: <Control />,
//   },
//   {
//     path: "/",
//     element: <LandingPage />,
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//   },
//   {
//     path: "/contact",
//     element: <ContactUsPage />,
//   },
//   {
//     path: "/account",
//     element: <Account />,
//   },
// ]);

// const App = () => {
//   useEffect(() => {
//     const handleBeforeUnload = (event) => {
//       event.preventDefault();
//       event.returnValue = "";
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, []);

//   return (
//      <React.StrictMode>
//      <I18nextProvider i18n={i18next}>

//        <AuthProvider isSignedIn={false}>
//          <RouterProvider router={router}>
//            <FooterPage />
//          </RouterProvider>
//        </AuthProvider>
//      </I18nextProvider>
//    </React.StrictMode>
//   );
// };

// export default App;









import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/main/NavBar";
import AuthProvider from "./components/AuthProvider";
import FooterPage from "./components/FooterPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutPage from "./pages/AboutPage";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./components/LandingPage";
import AdminPage from "./pages/AdminPage";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPagesList from "./pages/AdminPagesList";
import PagesPage from "./pages/PagesPage";
import Control from "./components/Control";
import CampusForm from "./components/CampusForm";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
import { LanguageProvider } from "./contexts/LanguageContext"; // Importa el LanguageProvider

i18next.init({
  lng: "es",
  interpolation: { escapeValue: false },
  debug: true,
  resources: {
    es: { global: global_es },
    en: { global: global_en },
  },
});

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/:pageId",
    element: <Control />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactUsPage />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

const App = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <LanguageProvider>
          {" "}
          {/* Envuelve tu aplicación con el LanguageProvider */}
          <AuthProvider isSignedIn={false}>
            <RouterProvider router={router}>
              <FooterPage />
            </RouterProvider>
          </AuthProvider>
        </LanguageProvider>
      </I18nextProvider>
    </React.StrictMode>
  );
};

export default App;
