// ///////////////////////////////////////////////is stuff
// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import NotFoundPage from "./pages/NotFoundPage";
// import NavBar from "./components/main/NavBar";
// import AuthProvider from "./components/AuthProvider";
// import HomePage from "./pages/HomePage";
// import SignInPage from "./pages/SignInPage";
// import FooterPage from "./components/FooterPage";
// import ContactUsPage from "./pages/ContactUsPage";
// import AboutPage from "./pages/AboutPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// import LandingPage from "./components/LandingPage";
// import AdminPage from "./pages/AdminPage";
// // import AdminPage from "./pages/AdminPage";

// const router = createBrowserRouter([
//   // {
//   //   path: "/",
//   //   element: (
//   //     <ProtectedRoute>
//   //       <HomePage />
//   //     </ProtectedRoute>
//   //   ),
//   //   errorElement: <NotFoundPage />,
//   // },
//   {
//     path: "/home",
//     element: (
//       <ProtectedRoute>
//         <HomePage />
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
//     path: "/",
//     element: <LandingPage />,
//   },

//   {
//     path: "/signin",
//     element: <SignInPage />,
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//   },
//   {
//     path: "/contact",
//     element: <ContactUsPage />,
//   },
// ]);

// const App = () => {
//   return (
//     <React.StrictMode>
//       <AuthProvider isSignedIn={false}>
//         <RouterProvider router={router} />
//         {/* <FooterPage /> */}
//       </AuthProvider>
//     </React.StrictMode>
//   );
// };

// export default App;

////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////is stuff

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import NotFoundPage from "./pages/NotFoundPage";
// import NavBar from "./components/main/NavBar";
// import AuthProvider from "./components/AuthProvider";
// // import HomePage from "./pages/HomePage";
// import SignInPage from "./pages/SignInPage";
// import FooterPage from "./components/FooterPage";
// import ContactUsPage from "./pages/ContactUsPage";
// import AboutPage from "./pages/AboutPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// import LandingPage from "./components/LandingPage";
// import AdminPage from "./pages/AdminPage";
// // import AdminPage from "./pages/AdminPage";
// import Account from "./pages/Account";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// // import Layout from "./pages/Layout";
// import Register from "./pages/Register";

// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: (
//       <ProtectedRoute>
//         <Home />
//       </ProtectedRoute>
//       // <Home />
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

//   {
//     path: "/contact",
//     element: <ContactUsPage />,
//   },
// ]);

// const App = () => {
//   return (
//     <React.StrictMode>
//       <AuthProvider isSignedIn={false}>
//         <RouterProvider router={router} />
//         {/* <FooterPage /> */}
//       </AuthProvider>
//     </React.StrictMode>
//   );
// };

// export default App;
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/main/NavBar";
import AuthProvider from "./components/AuthProvider";
import SignInPage from "./pages/SignInPage";
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
//     path: "/",
//     element: <LandingPage />,

//   },
//   {
//     path: "/admin/Institutions",
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
//   {
//     path: "/admin/:pageId",
//     element: <AdminPagesList />,
//   },
// ]);

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

//   {
//     path: "/admin/:pageId", // Ruta para las páginas administrativas
//     element: (
//       <ProtectedRoute>
//         <Control />
//       </ProtectedRoute>
//     ),
//   },
// ]);
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
    path: "/admin/:pageId", // Ruta para las páginas administrativas
    element: (
      <ProtectedRoute>
        <Control />
      </ProtectedRoute>
    ),
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

  // {
  //   path: "/admin/Institutions",
  //   element: <CampusForm />,
  // },
]);

const App = () => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Esto es necesario para algunos navegadores (como Chrome)
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <React.StrictMode>
      <AuthProvider isSignedIn={false}>
        <RouterProvider router={router} />
        {/* <FooterPage /> */}
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;
