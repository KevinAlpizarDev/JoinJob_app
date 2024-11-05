import React from "react";
import NavBar from "../components/main/NavBar";
import Position from "../components/Position";
import FooterPage from "../components/FooterPage";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      {/* <Position /> */}

      <section className="w-full py-16 md:py-24 bg-secundary-light dark:bg-secundary-dark">
        <div className="container mx-auto px-6 md:px-28">
          {/* Título */}
          <h2 className="text-3xl font-poppins text-tertiary-dark dark:text-primary-light tracking-tight sm:text-4xl md:text-5xl text-center mb-12 font-black">
            Acerca de nosotros
          </h2>

          {/* Grid de Tarjetas */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Tarjeta */}
            <div className="flex rounded-extra-rounded items-start space-x-4 p-6 bg-primary-light dark:bg-primary-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="mt-1 h-6 rounded-extra-rounded w-6 flex-none bg-green-500 rounded-full"></div>
              <div>
                <h3 className="text-xl leading-8 font-semibold text-tertiary-dark dark:text-primary-light">
                  Capacitación para PYMEs
                </h3>
                <p className="mt-2 text-gray-600 dark:text-tertiary-light font-poppins">
                  Programas de formación para fortalecer pequeñas y medianas
                  empresas, cubriendo temas como ventas, marketing y gestión
                  empresarial.
                </p>
              </div>
            </div>

            {/* Tarjeta */}
            <div className="flex rounded-extra-rounded items-start space-x-4 p-6 bg-primary-light dark:bg-primary-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="mt-1 rounded-extra-rounded h-6 w-6 flex-none bg-blue-500 rounded-full"></div>
              <div>
                <h3 className="text-xl leading-8 font-semibold text-tertiary-dark dark:text-primary-light">
                  Puente al Desarrollo
                </h3>
                <p className="mt-2 text-gray-600 dark:text-tertiary-light font-poppins">
                  Proyecto que busca sacar a las familias de la pobreza extrema
                  mediante el acceso a capacitación y oportunidades laborales.
                </p>
              </div>
            </div>

            {/* Tarjeta */}
            <div className="flex rounded-extra-rounded items-start space-x-4 p-6 bg-primary-light dark:bg-primary-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="mt-1 rounded-extra-rounded h-6 w-6 flex-none bg-purple-500 rounded-full"></div>
              <div>
                <h3 className="text-xl leading-8 font-semibold text-tertiary-dark dark:text-primary-light">
                  Empleabilidad de Jóvenes con Discapacidad
                </h3>
                <p className="mt-2 text-gray-600 dark:text-tertiary-light font-poppins">
                  Proyectos orientados a la inclusión laboral de jóvenes con
                  discapacidad mediante formación y oportunidades de empleo.
                </p>
              </div>
            </div>

            {/* Tarjeta */}
            <div className="flex rounded-extra-rounded items-start space-x-4 p-6 bg-primary-light dark:bg-primary-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="mt-1 rounded-extra-rounded h-6 w-6 flex-none bg-yellow-500 rounded-full"></div>
              <div>
                <h3 className="text-xl leading-8 font-semibold text-tertiary-dark dark:text-primary-light">
                  Educación Dual
                </h3>
                <p className="mt-2 text-gray-600 dark:text-tertiary-light font-poppins">
                  Proyecto que combina educación y trabajo en empresas para que
                  los estudiantes adquieran experiencia laboral mientras
                  estudian.
                </p>
              </div>
            </div>

            {/* Tarjeta */}
            <div className="flex rounded-extra-rounded items-start space-x-4 p-6 bg-primary-light dark:bg-primary-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="mt-1 rounded-extra-rounded h-6 w-6 flex-none bg-red-500 rounded-full"></div>
              <div>
                <h3 className="text-xl leading-8 font-semibold text-tertiary-dark dark:text-primary-light">
                  Proyectos de Emprendimiento
                </h3>
                <p className="mt-2 text-gray-600 dark:text-tertiary-light font-poppins">
                  Asesoría y capital semilla para ayudar a personas en situación
                  vulnerable a iniciar y desarrollar sus propios negocios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterPage />
    </>
  );
}
