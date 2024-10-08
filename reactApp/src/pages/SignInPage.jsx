// import React, { useState, useEffect } from "react";
// // import { useAuth } from "./AuthProvider"; // Importar el hook de autenticación
// import {
//   getCurrentUser,
//   registerUser,
//   loginUser,
//   logoutUser,
// } from "../services/service";
// // import HomePage from "./HomePage";
// const SignInPage = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setCurrentUser(true))
//       .catch(() => setCurrentUser(false));
//   }, []);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     registerUser(email, username, password)
//       .then(() => loginUser(email, password))
//       .then(() => setCurrentUser(true));
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     loginUser(email, password).then(() => setCurrentUser(true));
//   }

//   function submitLogout(e) {
//     e.preventDefault();
//     logoutUser().then(() => setCurrentUser(false));
//   }

//   if (currentUser) {
//     return (
//       // <div>
//       //   <h2>You're logged in!</h2>
//       //   <form onSubmit={submitLogout}>
//       //     <button type="submit">Log out</button>
//       //   </form>
//       // </div>
//       <HomePage/>
//     );
//   }

//   return (
//     <div>
//       <h1>Authentication App</h1>
//       <button onClick={update_form_btn}>
//         {registrationToggle ? "Log in" : "Register"}
//       </button>

//       {registrationToggle ? (
//         <form onSubmit={submitRegistration}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Username:
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       ) : (
//         <form onSubmit={submitLogin}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// // const SignInPage = () => {
// //   return (
// //     <div>
// //       <h1>Sign In</h1>
// //       <RegisterForm />
// //     </div>
// //   );
// // };

// export default SignInPage;
///////////////////////////////////////////////////////1
// import React, { useState, useEffect } from "react";
// import {
//   getCurrentUser,
//   registerUser,
//   loginUser,
//   logoutUser,
// } from "../services/service";
// import HomePage from "./HomePage";

// const SignInPage = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setCurrentUser(true))
//       .catch(() => setCurrentUser(false));
//   }, []);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     registerUser(email, username, password)
//       .then(() => loginUser(email, password))
//       .then(() => setCurrentUser(true));
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     loginUser(email, password).then(() => setCurrentUser(true));
//   }

//   function submitLogout(e) {
//     e.preventDefault();
//     logoutUser().then(() => setCurrentUser(false));
//   }

//   if (currentUser) {
//     // Pasa la función `submitLogout` como prop a `HomePage`
//     return <HomePage submitLogout={submitLogout} />;
//   }

//   return (
//     <div>
//       <h1>Authentication App</h1>
//       <button onClick={update_form_btn}>
//         {registrationToggle ? "Log in" : "Register"}
//       </button>

//       {registrationToggle ? (
//         <form onSubmit={submitRegistration}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Username:
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       ) : (
//         <form onSubmit={submitLogin}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SignInPage;
///////////////////////////////////////////////////////////2
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getCurrentUser, registerUser, loginUser, logoutUser } from "../services/service";
// import { useAuth } from "../components/AuthProvider"; // Usar el hook de autenticación
// import HomePage from "./HomePage";

// const SignInPage = () => {
//   const { user, setUser } = useAuth(); // Obtener el usuario y setUser del contexto
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setUser(true))
//       .catch(() => setUser(false));
//   }, [setUser]);

//   useEffect(() => {
//     if (user) {
//       navigate("/"); // Redirigir a la ruta protegida si el usuario está autenticado
//     }
//   }, [user, navigate]);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     registerUser(email, username, password)
//       .then(() => loginUser(email, password))
//       .then(() => setUser(true));
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     loginUser(email, password).then(() => setUser(true));
//   }

//   function submitLogout(e) {
//     e.preventDefault();
//     logoutUser().then(() => setUser(false));
//   }

//   return (
//     <div>
//       <h1>Authentication App</h1>
//       <button onClick={update_form_btn}>
//         {registrationToggle ? "Log in" : "Register"}
//       </button>

//       {registrationToggle ? (
//         <form onSubmit={submitRegistration}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Username:
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       ) : (
//         <form onSubmit={submitLogin}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SignInPage;
////////////////////////////////////////////////////////////3
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   getCurrentUser,
//   registerUser,
//   loginUser,
//   logoutUser,
// } from "../services/service";
// // import { useAuth } from "./AuthProvider";

// import { useAuth } from "../components/AuthProvider";
// const SignInPage = () => {
//   const { user, setUser } = useAuth(); // Obtenemos el estado de user y setUser del contexto
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setUser(true)) // Establecemos el user como true si la autenticación es exitosa
//       .catch(() => setUser(null)); // Lo establecemos como null si falla
//   }, [setUser]);

//   useEffect(() => {
//     if (user) {
//       navigate("/"); // Redirigimos a la ruta protegida si el usuario está autenticado
//     }
//   }, [user, navigate]);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     registerUser(email, username, password)
//       .then(() => loginUser(email, password))
//       .then(() => setUser(true)); // Actualizamos el user como true tras autenticarse
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     loginUser(email, password).then(() => setUser(true));
//   }

//   function submitLogout(e) {
//     e.preventDefault();
//     logoutUser().then(() => setUser(null)); // Al desloguearse, user es null
//   }

//   return (
//     <div className="h-screen bg-lime-400 dark:bg-lime-600">
//       <h1>Authentication App</h1>
//       <button onClick={update_form_btn}>
//         {registrationToggle ? "Log in" : "Register"}
//       </button>

//       {registrationToggle ? (
//         <form onSubmit={submitRegistration}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Username:
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       ) : (
//         <form onSubmit={submitLogin}>
//           <label>
//             Email:
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SignInPage;
///////////V37/////////////////////////////////////////////////////7
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   getCurrentUser,
//   registerUser,
//   loginUser,
//   logoutUser,
// } from "../services/service";
// import { useAuth } from "../components/AuthProvider";

// export default function SignInPage() {
//   const { user, setUser } = useAuth();
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setUser(true))
//       .catch(() => setUser(null));
//   }, [setUser]);

//   useEffect(() => {
//     if (user) {
//       navigate("/");
//     }
//   }, [user, navigate]);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     registerUser(email, username, password)
//       .then(() => loginUser(email, password))
//       .then(() => setUser(true));
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     loginUser(email, password).then(() => setUser(true));
//   }

//   return (
//     <div className="min-w-fit bg-[#FFDE82] flex items-center justify-center p-4 dark:bg-[#3b3627] ">
//       <div className="bg-white rounded-3xl   max-w-md w-full  ">
//         <div className="p-8">
//           <h1 className="text-4xl font-bold mb-6 text-center text-[#1D3557]">
//       JoinJob
//           </h1>
//           <button
//             onClick={update_form_btn}
//             className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transform transition-transform hover:scale-105"
//           >
//             {registrationToggle ? "Switch to Log In" : "Switch to Register"}
//           </button>

//           {registrationToggle ? (
//             <form onSubmit={submitRegistration} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Username
//                 </label>
//                 <input
//                   id="username"
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transform transition-transform hover:scale-105"
//               >
//                 Register
//               </button>
//             </form>
//           ) : (
//             <form onSubmit={submitLogin} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="login-email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="login-email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="login-password"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="login-password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transform transition-transform hover:scale-105"
//               >
//                 Log In
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getCurrentUser, registerUser, loginUser } from "../services/service";
// import { useAuth } from "../components/AuthProvider";
// import { Input } from "../components/ui/input";
// import { Button } from "../components/ui/button";
// import { Label } from "../components/ui/label";
// import { Alert, AlertDescription } from "../components/ui/alert";

// export default function SignInPage() {
//   const { user, setUser } = useAuth();
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [formError, setFormError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setUser(true))
//       .catch(() => setUser(null));
//   }, [setUser]);

//   useEffect(() => {
//     if (user) {
//       navigate("/");
//     }
//   }, [user, navigate]);

//   function update_form_btn() {
//     setRegistrationToggle(!registrationToggle);
//     resetForm();
//   }

//   function resetForm() {
//     setEmail("");
//     setUsername("");
//     setPassword("");
//     setEmailError("");
//     setPasswordError("");
//     setFormError("");
//   }

//   function validateEmail(email) {
//     const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return re.test(String(email).toLowerCase());
//   }

//   function validateForm() {
//     let isValid = true;

//     if (!email) {
//       setEmailError("Email is required");
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       setEmailError("Please enter a valid email address");
//       isValid = false;
//     } else {
//       setEmailError("");
//     }

//     if (!password) {
//       setPasswordError("Password is required");
//       isValid = false;
//     } else if (password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long");
//       isValid = false;
//     } else {
//       setPasswordError("");
//     }

//     if (registrationToggle && !username) {
//       setFormError("Username is required");
//       isValid = false;
//     } else {
//       setFormError("");
//     }

//     return isValid;
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     if (validateForm()) {
//       registerUser(email, username, password)
//         .then(() => loginUser(email, password))
//         .then(() => setUser(true))
//         .catch((error) => setFormError(error.message));
//     }
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     if (validateForm()) {
//       loginUser(email, password)
//         .then(() => setUser(true))
//         .catch((error) => setFormError(error.message));
//     }
//   }

//   return (
//     <div className="min-w-fit bg-[#FFDE82] flex items-center justify-center p-4 dark:bg-[#3b3627] min-h-screen">
//       <div className="bg-white rounded-3xl max-w-md w-full">
//         <div className="p-8">
//           <h1 className="text-4xl font-bold mb-6 text-center text-[#1D3557]">
//             JoinJob
//           </h1>
//           <Button
//             onClick={update_form_btn}
//             className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transform transition-transform hover:scale-105"
//           >
//             {registrationToggle ? "Switch to Log In" : "Switch to Register"}
//           </Button>

//           {formError && (
//             <Alert variant="destructive" className="mb-4">
//               <AlertDescription>{formError}</AlertDescription>
//             </Alert>
//           )}

//           {registrationToggle ? (
//             <form onSubmit={submitRegistration} className="space-y-4">
//               <div>
//                 <Label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Email
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className={`w-full px-4 py-3 rounded-full border-2 ${
//                     emailError ? "border-red-500" : "border-gray-300"
//                   } focus:border-[#1D3557] focus:outline-none`}
//                   required
//                   aria-invalid={emailError ? "true" : "false"}
//                   aria-describedby={emailError ? "email-error" : undefined}
//                 />
//                 {emailError && (
//                   <p id="email-error" className="mt-1 text-sm text-red-500">
//                     {emailError}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <Label
//                   htmlFor="username"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Username
//                 </Label>
//                 <Input
//                   id="username"
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <Label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Password
//                 </Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className={`w-full px-4 py-3 rounded-full border-2 ${
//                     passwordError ? "border-red-500" : "border-gray-300"
//                   } focus:border-[#1D3557] focus:outline-none`}
//                   required
//                   aria-invalid={passwordError ? "true" : "false"}
//                   aria-describedby={
//                     passwordError ? "password-error" : undefined
//                   }
//                 />
//                 {passwordError && (
//                   <p id="password-error" className="mt-1 text-sm text-red-500">
//                     {passwordError}
//                   </p>
//                 )}
//               </div>
//               <Button
//                 type="submit"
//                 className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transform transition-transform hover:scale-105"
//               >
//                 Register
//               </Button>
//             </form>
//           ) : (
//             <form onSubmit={submitLogin} className="space-y-4">
//               <div>
//                 <Label
//                   htmlFor="login-email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Email
//                 </Label>
//                 <Input
//                   id="login-email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className={`w-full px-4 py-3 rounded-full border-2 ${
//                     emailError ? "border-red-500" : "border-gray-300"
//                   } focus:border-[#1D3557] focus:outline-none`}
//                   required
//                   aria-invalid={emailError ? "true" : "false"}
//                   aria-describedby={
//                     emailError ? "login-email-error" : undefined
//                   }
//                 />
//                 {emailError && (
//                   <p
//                     id="login-email-error"
//                     className="mt-1 text-sm text-red-500"
//                   >
//                     {emailError}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <Label
//                   htmlFor="login-password"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Password
//                 </Label>
//                 <Input
//                   id="login-password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className={`w-full px-4 py-3 rounded-full border-2 ${
//                     passwordError ? "border-red-500" : "border-gray-300"
//                   } focus:border-[#1D3557] focus:outline-none`}
//                   required
//                   aria-invalid={passwordError ? "true" : "false"}
//                   aria-describedby={
//                     passwordError ? "login-password-error" : undefined
//                   }
//                 />
//                 {passwordError && (
//                   <p
//                     id="login-password-error"
//                     className="mt-1 text-sm text-red-500"
//                   >
//                     {passwordError}
//                   </p>
//                 )}
//               </div>
//               <Button
//                 type="submit"
//                 className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transform transition-transform hover:scale-105"
//               >
//                 Log In
//               </Button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
////////////////////////////////////////////////////////
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   getCurrentUser,
//   registerUser,
//   loginUser,
//   logoutUser,
// } from "../services/service";
// import { useAuth } from "../components/AuthProvider";

// export default function SignInPage() {
//   const { user, setUser } = useAuth();
//   const [registrationToggle, setRegistrationToggle] = useState(false);
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [formError, setFormError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     getCurrentUser()
//       .then(() => setUser(true))
//       .catch(() => setUser(null));
//   }, [setUser]);

//   useEffect(() => {
//     if (user) {
//       navigate("/");
//     }
//   }, [user, navigate]);

//   function updateFormBtn() {
//     setRegistrationToggle(!registrationToggle);
//     resetForm();
//   }

//   function resetForm() {
//     setEmail("");
//     setUsername("");
//     setPassword("");
//     setEmailError("");
//     setPasswordError("");
//     setFormError("");
//   }

//   function validateEmail(email) {
//     const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return re.test(String(email).toLowerCase());
//   }

//   function validateForm() {
//     let isValid = true;

//     if (!email) {
//       setEmailError("Email is required");
//       isValid = false;
//     } else if (!validateEmail(email)) {
//       setEmailError("Please enter a valid email address");
//       isValid = false;
//     } else {
//       setEmailError("");
//     }

//     if (!password) {
//       setPasswordError("Password is required");
//       isValid = false;
//     } else if (password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long");
//       isValid = false;
//     } else {
//       setPasswordError("");
//     }

//     if (registrationToggle && !username) {
//       setFormError("Username is required");
//       isValid = false;
//     } else {
//       setFormError("");
//     }

//     return isValid;
//   }

//   function submitRegistration(e) {
//     e.preventDefault();
//     if (validateForm()) {
//       registerUser(email, username, password)
//         .then(() => loginUser(email, password))
//         .then(() => setUser(true))
//         .catch((error) => setFormError(error.message));
//     }
//   }

//   function submitLogin(e) {
//     e.preventDefault();
//     if (validateForm()) {
//       loginUser(email, password)
//         .then(() => setUser(true))
//         .catch((error) => setFormError(error.message));
//     }
//   }

//   const errorStyle = {
//     color: "red",
//     fontSize: "0.875rem",
//     marginTop: "0.25rem",
//   };

//   const inputErrorStyle = {
//     borderColor: "red",
//   };

//   return (
//     <div className="min-w-fit bg-[#FFDE82] flex items-center justify-center p-4 dark:bg-[#3b3627] min-h-screen">
//       <div className="bg-white rounded-3xl max-w-md w-full">
//         <div className="p-8">
//           <h1 className="text-4xl font-bold mb-6 text-center text-[#1D3557]">
//             JoinJob
//           </h1>
//           <button
//             onClick={updateFormBtn}
//             className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transform transition-transform hover:scale-105"
//           >
//             {registrationToggle ? "Switch to Log In" : "Switch to Register"}
//           </button>

//           {formError && (
//             <div style={{ ...errorStyle, marginBottom: "1rem" }}>
//               {formError}
//             </div>
//           )}

//           {registrationToggle ? (
//             <form onSubmit={submitRegistration} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                   required
//                   style={emailError ? inputErrorStyle : {}}
//                   aria-invalid={emailError ? "true" : "false"}
//                   aria-describedby={emailError ? "email-error" : undefined}
//                 />
//                 {emailError && (
//                   <p id="email-error" style={errorStyle}>
//                     {emailError}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Username
//                 </label>
//                 <input
//                   id="username"
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                   required
//                   style={passwordError ? inputErrorStyle : {}}
//                   aria-invalid={passwordError ? "true" : "false"}
//                   aria-describedby={
//                     passwordError ? "password-error" : undefined
//                   }
//                 />
//                 {passwordError && (
//                   <p id="password-error" style={errorStyle}>
//                     {passwordError}
//                   </p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transform transition-transform hover:scale-105"
//               >
//                 Register
//               </button>
//             </form>
//           ) : (
//             <form onSubmit={submitLogin} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="login-email"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Email
//                 </label>
//                 <input
//                   id="login-email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                   required
//                   style={emailError ? inputErrorStyle : {}}
//                   aria-invalid={emailError ? "true" : "false"}
//                   aria-describedby={
//                     emailError ? "login-email-error" : undefined
//                   }
//                 />
//                 {emailError && (
//                   <p id="login-email-error" style={errorStyle}>
//                     {emailError}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <label
//                   htmlFor="login-password"
//                   className="block text-sm font-medium text-gray-700 mb-1"
//                 >
//                   Password
//                 </label>
//                 <input
//                   id="login-password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
//                   required
//                   style={passwordError ? inputErrorStyle : {}}
//                   aria-invalid={passwordError ? "true" : "false"}
//                   aria-describedby={
//                     passwordError ? "login-password-error" : undefined
//                   }
//                 />
//                 {passwordError && (
//                   <p id="login-password-error" style={errorStyle}>
//                     {passwordError}
//                   </p>
//                 )}
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transform transition-transform hover:scale-105"
//               >
//                 Log In
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  registerUser,
  loginUser,
} from "../services/service";
import { useAuth } from "../components/AuthProvider";
import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage";
import Position from "../components/Position";

export default function SignInPage() {
  const { user, setUser } = useAuth();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [networkError, setNetworkError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then(() => setUser(true))
      .catch(() => setUser(null));
  }, [setUser]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  function updateFormBtn() {
    setRegistrationToggle(!registrationToggle);
    resetForm();
  }

  function resetForm() {
    setEmail("");
    setUsername("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setFormError("");
    setNetworkError("");
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  function validateForm() {
    let isValid = true;

    if (!email) {
      setEmailError("Email cannot be empty");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password cannot be empty");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (registrationToggle && !username) {
      setFormError("Username cannot be empty");
      isValid = false;
    } else {
      setFormError("");
    }

    return isValid;
  }

  function handleNetworkError(error) {
    if (error.response) {
      // setNetworkError(`Network error: ${error.response.status}`);
      setNetworkError("Su contraseña no es correcta o correo no existe");
    } else {
      setNetworkError("Network error: Please check your connection");
    }
  }

  function submitRegistration(e) {
    e.preventDefault();
    if (validateForm()) {
      registerUser(email, username, password)
        .then(() => loginUser(email, password))
        .then(() => setUser(true))
        .catch((error) => handleNetworkError(error));
    }
  }

  function submitLogin(e) {
    e.preventDefault();
    if (validateForm()) {
      loginUser(email, password)
        .then(() => setUser(true))
        .catch((error) => handleNetworkError(error));
    }
  }

  const errorStyle = {
    color: "red",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  };

  const inputErrorStyle = {
    borderColor: "red",
  };

  return (

<>


< NavBar/>
< Position/>
    <div className="min-w-fit bg-[#FFDE82] flex items-center justify-center p-4 dark:bg-[#3b3627] py-8 h-max ">
      <div className="bg-white rounded-3xl max-w-md w-full mb-12">
        <div className="p-4">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            JoinJob
          </h1>
          <button
            onClick={updateFormBtn}
            className="w-full bg-[#1D3557] text-white rounded-full py-3 px-6 font-bold text-lg mb-6 transform transition-transform hover:scale-105"
          >
            {registrationToggle ? "Switch to Log In" : "Switch to Register"}
          </button>

          {formError && (
            <div style={{ ...errorStyle, marginBottom: "1rem" }}>
              {formError}
            </div>
          )}

          {networkError && (
            <div style={{ ...errorStyle, marginBottom: "1rem" }}>
              {networkError}
            </div>
          )}

          {registrationToggle ? (
            <form onSubmit={submitRegistration} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
                  required
                  style={emailError ? inputErrorStyle : {}}
                  aria-invalid={emailError ? "true" : "false"}
                  aria-describedby={emailError ? "email-error" : undefined}
                />
                {emailError && (
                  <p id="email-error" style={errorStyle}>
                    {emailError}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
                  required
                />
                {formError && (
                  <p style={errorStyle}>
                    {formError}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
                  required
                  style={passwordError ? inputErrorStyle : {}}
                  aria-invalid={passwordError ? "true" : "false"}
                  aria-describedby={passwordError ? "password-error" : undefined}
                />
                {passwordError && (
                  <p id="password-error" style={errorStyle}>
                    {passwordError}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-[#E63946] text-white rounded-full py-3 px-6 font-bold text-lg transform transition-transform hover:scale-105"
              >
                Register
              </button>
            </form>
          ) : (
            <form onSubmit={submitLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
                  required
                  style={emailError ? inputErrorStyle : {}}
                  aria-invalid={emailError ? "true" : "false"}
                  aria-describedby={emailError ? "login-email-error" : undefined}
                />
                {emailError && (
                  <p id="login-email-error" style={errorStyle}>
                    {emailError}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#1D3557] focus:outline-none"
                  required
                  style={passwordError ? inputErrorStyle : {}}
                  aria-invalid={passwordError ? "true" : "false"}
                  aria-describedby={passwordError ? "login-password-error" : undefined}
                />
                {passwordError && (
                  <p id="login-password-error" style={errorStyle}>
                    {passwordError}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-[#E63946] text-white rounded-full py-3  font-bold text-lg transform transition-transform hover:scale-105"
              >
                Log In
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
 
    <FooterPage />
</>

  );
}
