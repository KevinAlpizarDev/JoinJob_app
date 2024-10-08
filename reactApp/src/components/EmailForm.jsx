// //////////////////////////////////

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const EmailForm = () => {
//   const form = useRef();
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_dgjbtyk",
//         "template_ehj9htl",
//         form.current,
//         "U9UAIoXdwQOs7-Ktb"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="flex justify-between items-center w-full p-4">
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="flex flex-col w-full space-y-4"
//       >
//         <div className="flex">
//           <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
//             <svg
//               className="w-4 h-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
//             </svg>
//           </span>
//           <input
//             type="text"
//             name="user_name"
//             className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Ingresa tu nombre"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="flex items-center w-full max-w-2xl mx-auto space-x-4 px-20">
//           <div className="w-full">
//             <input
//               type="email"
//               name="user_email"
//               className="block w-full px-5 py-3 text-lg font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed"
//               placeholder="name@pagedone.com"
//               value={userEmail}
//               onChange={(e) => setUserEmail(e.target.value)}
//               required
//             />
//           </div>
//         </div>

//         {/* <div className="w-full max-w-2xl mx-auto space-y-4 px-20">
//           <textarea
//             name="message"
//             className="block w-full px-5 py-3 text-lg font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed"
//             placeholder="Escribe tu mensaje"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           />
//         </div> */}

//         <div className="flex items-center justify-center mt-4">
//           <button
//             type="submit"
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Send
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EmailForm;

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
    <div className="flex flex-col justify-between items-center w-full p-4">
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
