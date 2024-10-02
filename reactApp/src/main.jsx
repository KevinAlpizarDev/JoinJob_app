// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import HomePage from "./pages/HomePage";
// import NotFoundPage from "./pages/NotFoundPage";

// // import React, { useEffect, useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <NotFoundPage />,
//   },

// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//     {/* <App /> */}
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import NotFoundPage from "./pages/NotFoundPage";
// // import Logins from "./pages/Logins"; // Ensure this is correctly imported

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <NotFoundPage />,
//   },

// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
// import ThemeButton from "./components/ThemeButton";
// import RegisterForm from "./pages/RegisterForm"; // Ensure this is correctly imported

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <ThemeButton/>
     */}
  </React.StrictMode>
);
