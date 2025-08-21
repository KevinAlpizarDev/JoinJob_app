// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import HomePage from "./pages/HomePage";
// import NotFoundPage from "./pages/NotFoundPage";
// // import ThemeButton from "./components/ThemeButton";
// // import RegisterForm from "./pages/RegisterForm"; // Ensure this is correctly imported
// import NavBar from "./components/main/NavBar";
// import LoggedInMessage from "./components/LoggedInMessage";

// ////////////
// import AuthProvider from "./components/AuthProvider";
// import HomePage from "./pages/HomePage";
// import SignInPage from "./pages/SignInPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// ////////////

// const router = createBrowserRouter([
//   {
//     // path: "/",
//     // element: <HomePage />,
//     path: '/',
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
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider isSignedIn={false}>
//       <NavBar />
//       <RouterProvider router={router} />

//     </AuthProvider>
//   </React.StrictMode>
// );
/////////////////////////////////////////////////////2

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import HomePage from "./pages/HomePage";
// import NotFoundPage from "./pages/NotFoundPage";
// // import ThemeButton from "./components/ThemeButton";
// // import RegisterForm from "./pages/RegisterForm"; // Ensure this is correctly imported
// import NavBar from "./components/main/NavBar";
// import LoggedInMessage from "./components/LoggedInMessage";

// ////////////
// import AuthProvider from "./components/AuthProvider";
// import HomePage from "./pages/HomePage";
// import SignInPage from "./pages/SignInPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// ////////////

// const router = createBrowserRouter([
//   {
//     // path: "/",
//     // element: <HomePage />,
//     path: '/',
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
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider isSignedIn={false}>
//       <NavBar />
//       <RouterProvider router={router} />

//     </AuthProvider>
//   </React.StrictMode>
// );
///////////////////////////////////////////////////////////////3
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import NotFoundPage from "./pages/NotFoundPage";
// import NavBar from "./components/main/NavBar";
// import AuthProvider from "./components/AuthProvider";
// import HomePage from "./pages/HomePage";
// import SignInPage from "./pages/SignInPage";
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
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider isSignedIn={false}>
//       <NavBar />
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );
// main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(

//     <Provider store={store}>
//     <App />
//   </Provider>,

// );

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
