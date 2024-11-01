// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const EmailForm = () => {
//   const form = useRef();
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");

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
//     <form ref={form} onSubmit={sendEmail}>
//       {/* Nombre del usuario */}
//       <div>
//         <input
//           type="text"
//           name="user_name"
//           placeholder="Ingresa tu nombre"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           required
//         />
//       </div>

//       {/* Email */}
//       <div>
//         <input
//           type="email"
//           name="user_email"
//           placeholder="name@pagedone.com"
//           value={userEmail}
//           onChange={(e) => setUserEmail(e.target.value)}
//           required
//         />
//       </div>

//       {/* Botón Send */}
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default EmailForm;


// 'use client'

// import React, { useRef, useState } from "react"
// import emailjs from "@emailjs/browser"

// export default function EmailForm() {
//   const form = useRef(null)
//   const [userName, setUserName] = useState("")
//   const [userEmail, setUserEmail] = useState("")
//   const [userMessage, setUserMessage] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const sendEmail = (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     if (form.current) {
//       emailjs
//         .sendForm(
//           "service_dgjbtyk",
//           "template_ehj9htl",
//           form.current,
//           "U9UAIoXdwQOs7-Ktb"
//         )
//         .then(
//           (result) => {
//             console.log(result.text)
//             alert("Message Sent: Thank you for contacting us. We'll get back to you soon!")
//             setUserName("")
//             setUserEmail("")
//             setUserMessage("")
//           },
//           (error) => {
//             console.log(error.text)
//             alert("Error: There was an error sending your message. Please try again.")
//           }
//         )
//         .finally(() => {
//           setIsSubmitting(false)
//         })
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Contact Gomos</h1>
//       <div className="grid md:grid-cols-2 gap-8">
//         <div>
//           <div className="border rounded-lg p-4">
//             <h2 className="text-xl font-semibold">Send Us a Message</h2>
//             <p>We'd love to hear from you</p>
//             <form ref={form} onSubmit={sendEmail} className="space-y-4">
//               <div className="space-y-2">
//                 <label htmlFor="user_name">Name</label>
//                 <input
//                   id="user_name"
//                   type="text"
//                   name="user_name"
//                   placeholder="Enter your name"
//                   value={userName}
//                   onChange={(e) => setUserName(e.target.value)}
//                   required
//                   className="border rounded p-2 w-full"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="user_email">Email</label>
//                 <input
//                   id="user_email"
//                   type="email"
//                   name="user_email"
//                   placeholder="name@example.com"
//                   value={userEmail}
//                   onChange={(e) => setUserEmail(e.target.value)}
//                   required
//                   className="border rounded p-2 w-full"
//                 />
//               </div>

//               {/* <div className="space-y-2">
//                 <label htmlFor="user_message">Message</label>
//                 <textarea
//                   id="user_message"
//                   name="user_message"
//                   placeholder="How can we help you?"
//                   value={userMessage}
//                   onChange={(e) => setUserMessage(e.target.value)}
//                   required
//                   className="border rounded p-2 w-full"
//                 />
//               </div> */}

//               <button type="submit" className="w-full bg-blue-500 text-white rounded p-2" disabled={isSubmitting}>
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           </div>
//         </div>
//         <div className="space-y-8">
//           <div className="border rounded-lg p-4">
//             <h2 className="text-xl font-semibold">Contact Information</h2>
//             <ul className="space-y-4">
//               <li>123 Gomos Street, Tech City, 12345</li>
//               <li>+1 (555) 123-4567</li>
//               <li>info@gomos.com</li>
//               <li>Mon-Fri: 9am-5pm</li>
//             </ul>
//           </div>
//           <div className="border rounded-lg p-4">
//             <h2 className="text-xl font-semibold">FAQ</h2>
//             <ul className="space-y-4">
//               <li>
//                 <strong>What services does Gomos offer?</strong>
//                 <p>Gomos provides innovative software solutions for businesses of all sizes.</p>
//               </li>
//               <li>
//                 <strong>How can I request a demo?</strong>
//                 <p>You can request a demo by filling out the contact form or emailing us directly.</p>
//               </li>
//               <li>
//                 <strong>Do you offer customer support?</strong>
//                 <p>Yes, we offer 24/7 customer support for all our products and services.</p>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
'use client'

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "./main/Alert"
export default function EmailForm() {
  const form = useRef(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: 'info', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
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
            setAlert({ show: true, type: 'success', message: "Mensaje enviado: ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto." });
            setUserName("");
            setUserEmail("");
            setUserMessage("");
          },
          (error) => {
            console.log(error.text);
            setAlert({ show: true, type: 'error', message: "Error: Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo." });
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  }

  const handleCloseAlert = () => {
    setAlert({ show: false, type: 'info', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {alert.show && (
        <Alert 
          type={alert.type} 
          message={alert.message} 
          onClose={handleCloseAlert} 
        />
      )}
      <h1 className="text-3xl font-bold text-center mb-8">Contact Gomos</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">Send Us a Message</h2>
            <p>We'd love to hear from you</p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="user_name">Name</label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="border rounded p-2 w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="user_email">Email</label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="name@example.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                  className="border rounded p-2 w-full"
                />
              </div>

              {/* Uncomment this section if you want to include a message field */}
              {/* <div className="space-y-2">
                <label htmlFor="user_message">Message</label>
                <textarea
                  id="user_message"
                  name="user_message"
                  placeholder="How can we help you?"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  required
                  className="border rounded p-2 w-full"
                />
              </div> */}

              <button type="submit" className="w-full bg-blue-500 text-white rounded p-2" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        <div className="space-y-8">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <ul className="space-y-4">
              <li>123 Gomos Street, Tech City, 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>info@gomos.com</li>
              <li>Mon-Fri: 9am-5pm</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">FAQ</h2>
            <ul className="space-y-4">
              <li>
                <strong>What services does Gomos offer?</strong>
                <p>Gomos provides innovative software solutions for businesses of all sizes.</p>
              </li>
              <li>
                <strong>How can I request a demo?</strong>
                <p>You can request a demo by filling out the contact form or emailing us directly.</p>
              </li>
              <li>
                <strong>Do you offer customer support?</strong>
                <p>Yes, we offer 24/7 customer support for all our products and services.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
