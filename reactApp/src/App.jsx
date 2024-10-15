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
// import HomePage from "./pages/HomePage";
// import SignInPage from "./pages/SignInPage";
// import FooterPage from "./components/FooterPage";
// import ContactUsPage from "./pages/ContactUsPage";
// import AboutPage from "./pages/AboutPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// import LandingPage from "./components/LandingPage";
// import AdminPage from "./pages/AdminPage";
// // import AdminPage from "./pages/AdminPage";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Layout from "./pages/Layout";
// import Register from "./pages/Register";

// const router = createBrowserRouter([
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
//     element: <Layout />,
//   },

//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
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
// import "./App.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
