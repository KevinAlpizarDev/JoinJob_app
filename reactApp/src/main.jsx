import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
// import ProfilesPage from "./pages/ProfilesPage";
// import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // Definir la ruta inicial
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// {
//   path: "/",
//   element: <HomePage />, // Definir la ruta inicial
//   errorElement: <NotFoundPage />,
// },
// {
//   path: "/profiles",
//   element: <ProfilesPage />, // Definir la ruta inicial
// },
// {
//   path: "/profiles/:profileId",
//   element: <ProfilePage />, // Definir la ruta inicial
// },
