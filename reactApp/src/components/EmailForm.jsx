import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dgjbtyk",
        "template_ehj9htl",
        form.current,
        "U9UAIoXdwQOs7-Ktb"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col justify-between items-center w-full p-4 bg-slate-200">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-82 space-y-4"
      >
        {/* Nombre del usuario */}
        <div className="flex w-full">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            name="user_name"
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingresa tu nombre"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        {/* Email y botón Send */}
        <div className="flex items-center space-x-4 w-full">
          <input
            type="email"
            name="user_email"
            className="block w-full px-5 py-3 text-lg font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed dark:bg-gray-700 dark:text-white"
            placeholder="name@pagedone.com"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;

// import { useState } from 'react';

// export default function EmailForm() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     username: '',
//     password: '',
//   });

//   const handleNext = () => setStep(step + 1);
//   const handlePrev = () => setStep(step - 1);
//   const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

//   return (
//     <section className="bg-white-200 relative overflow-hidden">
//       <div className="w-full mx-auto 2xl:max-w-7xl flex flex-col justify-center py-2 relative pb-4">
//         <div className="max-w-xl mx-auto">

//           <div className="mt-6 border-t pt-12">
//             <div className="rounded-3xl bg-white shadow-2xl border p-8 lg:p-10 mb-10">
//               {/* Step 1 */}
//               {step === 1 && (
//                 <div>
//                   <h2 className="text-lg font-medium text-gray-500">Step 1: Personal Information</h2>
//                   <div className="space-y-2 mt-12">
//                     <label htmlFor="name" className="block text-sm text-gray-700">Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
//                       placeholder="Enter your name"
//                     />
//                   </div>
//                   <div className="space-y-2 mt-4">
//                     <label htmlFor="email" className="block mb-2">Email</label>
//                     <input
//                       type="email"
//                       id="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
//                       placeholder="Enter your email"
//                     />
//                   </div>
//                   <div className="mt-4">
//                     <button
//                       className="rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
//                       onClick={handleNext}
//                     >
//                       Next
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Step 2 */}
//               {step === 2 && (
//                 <div>
//                   <h2 className="text-lg font-medium text-gray-500 mb-4">Step 2: Account Information</h2>
//                   <div className="space-y-2 mt-12">
//                     <label htmlFor="username" className="block mb-2">Username</label>
//                     <input
//                       type="text"
//                       id="username"
//                       value={formData.username}
//                       onChange={handleChange}
//                       className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
//                       placeholder="Choose a username"
//                     />
//                   </div>
//                   <div className="space-y-2 mt-4">
//                     <label htmlFor="password" className="block mb-2">Password</label>
//                     <input
//                       type="password"
//                       id="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
//                       placeholder="Enter your password"
//                     />
//                   </div>
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     <button
//                       className="rounded-full bg-blue-50 px-8 py-2 h-12 text-sm font-semibold text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
//                       onClick={handlePrev}
//                     >
//                       Previous
//                     </button>
//                     <button
//                       className="rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
//                       onClick={handleNext}
//                     >
//                       Next
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Step 3 */}
//               {step === 3 && (
//                 <div>
//                   <h2 className="text-lg font-medium text-gray-500">Step 3: Confirmation</h2>
//                   <div className="mt-12 space-y-4 font-medium text-sm text-gray-500">
//                     <p>Name: {formData.name}</p>
//                     <p>Email: {formData.email}</p>
//                     <p>Username: {formData.username}</p>
//                   </div>
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     <button
//                       className="rounded-full bg-blue-50 px-8 py-2 h-12 text-sm font-semibold text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
//                       onClick={handlePrev}
//                     >
//                       Previous
//                     </button>
//                     <button className="rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full">
//                       Submit
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
