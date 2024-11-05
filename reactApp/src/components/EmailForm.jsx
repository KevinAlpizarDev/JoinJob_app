// }
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "./main/Alert";

export default function EmailForm() {
  const form = useRef(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: "info",
    message: "",
  });

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
            setAlert({
              show: true,
              type: "success",
              message:
                "Mensaje enviado: ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.",
            });
            setUserName("");
            setUserEmail("");
            setUserMessage("");
          },
          (error) => {
            console.log(error.text);
            setAlert({
              show: true,
              type: "error",
              message:
                "Error: Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.",
            });
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ show: false, type: "info", message: "" });
  };

  return (
    <section className="w-full py-16 md:py-24 bg-secundary-light dark:bg-secundary-dark">
      <div className="container mx-auto px-6 md:px-28">
        {alert.show && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={handleCloseAlert}
          />
        )}

        <h2 className="text-3xl font-poppins text-tertiary-dark dark:text-primary-light tracking-tight sm:text-4xl md:text-5xl text-center mb-12 font-black">
          Contáctanos
        </h2>

        <div className="grid gap-24 lg:grid-cols-2 lg:gap-12">
          {/* Formulario de contacto */}
          <div className="flex flex-col h-96 rounded-extra-rounded p-6 pb-6 bg-primary-light  dark:bg-primary-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <h3 className="text-2xl font-semibold text-tertiary-dark dark:text-primary-light mb-4">
              Envíanos un Mensaje
            </h3>
            <p className="text-gray-600 dark:text-tertiary-light mb-6">
              Nos encantaría saber de ti
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="user_name"
                  className="text-tertiary-dark dark:text-primary-light font-medium"
                >
                  Nombre
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="Ingresa tu nombre"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  className="border rounded-extra-rounded p-3 w-full focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 outline-none transition duration-200"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="user_email"
                  className="text-tertiary-dark dark:text-primary-light font-medium"
                >
                  Correo Electrónico
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="nombre@ejemplo.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                  className="border rounded-extra-rounded p-3 w-full focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 outline-none transition duration-200"
                />
              </div>

              <button
                type="submit"
                className={`w-full rounded-extra-rounded py-3 px-4 bg-blue-500 text-white rounded-lg font-bold shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200 ${
                  isSubmitting && "opacity-70"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col space-y-8">
            <div className="p-6 bg-primary-light dark:bg-primary-dark rounded-extra-rounded shadow-lg">
              <h3 className="text-xl font-semibold text-tertiary-dark dark:text-primary-light">
                Información de Contacto
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-tertiary-light">
                <li>
                  Dirección: El Huerto, Provincia de Puntarenas, Puntarenas
                </li>
                <li>Número de teléfono: 8627-3705</li>
                <li>Correo: kevinalp@joinjob.com</li>
                <li>Horario de atención: Lun-Vie: 9am-5pm</li>
              </ul>
            </div>
            <div className="p-6 bg-primary-light dark:bg-primary-dark rounded-extra-rounded shadow-lg">
              <h3 className="text-xl font-semibold text-tertiary-dark dark:text-primary-light">
                Preguntas Frecuentes
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-tertiary-light">
                <li>
                  <strong>¿Qué servicios ofrece JoinJob?</strong>
                  <p>
                    {" "}
                    JoinJob ofrece un espacio de visibilidad de los cursos
                    disponibles en la zona de Puntarenas, además de un acceso de
                    matrícula fácil y sencillo.
                  </p>
                </li>
                <li>
                  <strong>¿Cómo puedo inscribirme a los cursos?</strong>
                  <p>
                    Puedes inscribirte llenando el formulario de inscripción que
                    se encuentra en la sección Cursos.
                  </p>
                </li>
                <li>
                  <strong>¿Ofrecen soporte al cliente?</strong>
                  <p>
                    Sí, nuestro horario de atención y soporte es de lunes a
                    viernes de 9am a 5pm.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
