import NavBar from "./main/NavBar";
import FooterPage from "./FooterPage";
import Position from "./Position";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Position />
      <div className="flex flex-col min-h-screen">
        {/* <Position/> */}
        <main className="flex-2">
          <section className="w-full   md:py-10 lg:py-20  bg-slate-100 dark:bg-slate-600">
            <div className="container px-4 md:px-6 ">
              <div className="flex flex-col items-center space-y-4 text-center ">
                <div className=" space-y-1">
                  <h1 className="mt-8 text-3xl font-bold sm:text-4xl text-blue-950 dark:text-white lg:text-5xl xl:text-6xl">
                    Oportunidades de Capacitación

                  </h1>
                  <h1 className="mt-8 text-3xl font-bold sm:text-4xl text-blue-950 dark:text-white lg:text-5xl xl:text-6xl">
                     y Proyectos para el Desarrollo
                  </h1>
                  <p className="mx-auto font-poppins pt-6 max-w-[700px] text-gray-500 md:text- dark:text-gray-400">
                    The project management platform that helps small teams move
                    faster and make more progress than they ever thought
                    possible.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link to="/signin">
                    <button
                      type="button"
                      className="animate-bounce text-white bg-blue-700 mt-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-8 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transform transition-transform duration-300 ease-in-out hover:-translate-y-1 active:translate-y-0"
                    >
                      <svg
                        className="w-8 h-8"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                      <span className="sr-only">Icon description</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full  md:py-24 lg: ">
            <div className="container md:px-28">
              {/* <h2 className=" text-slate-800 font-black tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 font-poppins">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2> */}
              <h2 className="text-3xl font-poppins text-slate-800 tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
               Lorem ipsum dolor sit amet consectetur adipisicing 
              </h2>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 flex-none bg-green-500 rounded-full"></div>
                  <div>
                    <h3 className="mt-1 text-xl leading-8 tracking-tight font-semibold text-slate-900 dark:text-white">Capacitación para PYMEs</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-poppins">
                      Programas de formación para fortalecer pequeñas y medianas
                      empresas, cubriendo temas como ventas, marketing y gestión
                      empresarial.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 flex-none bg-blue-500 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">Puente al Desarrollo</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-poppins">
                      Proyecto que busca sacar a las familias de la pobreza
                      extrema mediante el acceso a capacitación y oportunidades
                      laborales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 flex-none bg-purple-500 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">
                      Empleabilidad de Jóvenes con Discapacidad
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-poppins">
                      Proyectos orientados a la inclusión laboral de jóvenes con
                      discapacidad mediante formación y oportunidades de empleo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 flex-none bg-yellow-500 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">Educación Dual</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-poppins">
                      Proyecto que combina educación y trabajo en empresas para
                      que los estudiantes adquieran experiencia laboral mientras
                      estudian.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 flex-none bg-red-500 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">Proyectos de Emprendimiento</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-poppins">
                      Asesoría y capital semilla para ayudar a personas en
                      situación vulnerable a iniciar y desarrollar sus propios
                      negocios.z
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-28">
              {/* <h2 className="text-3xl font-poppins text-slate-800 tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Oportunidades de Capacitación y Proyectos en Costa Rica
              </h2> */}
                  <h2 className="text-3xl font-poppins text-slate-800 tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h2>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                {/* INA */}
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">
                    Instituto Nacional de Aprendizaje (INA)
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>Cursos Técnicos:</strong> Desarrollo web,
                    programación, electricidad, gastronomía.
                    <br />
                    <strong>Proyectos:</strong> Educación Dual, Becas de
                    Capacitación, Apoyo a PYMEs.
                  </p>
                </div>

                {/* Empléate */}
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">Programa Empléate</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>Capacitación Técnica:</strong> Diseño gráfico,
                    mecánica automotriz, inglés.
                    <br />
                    <strong>Proyectos:</strong> Inserción laboral juvenil,
                    empleabilidad de personas con discapacidad.
                  </p>
                </div>

                {/* IMAS */}
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">
                    Instituto Mixto de Ayuda Social (IMAS)
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>Programas:</strong> Puente al Desarrollo, asesoría
                    para emprendimiento.
                    <br />
                    <strong>Proyectos:</strong> Apoyo a familias vulnerables con
                    capacitación en habilidades productivas.
                  </p>
                </div>

                {/* Municipalidades */}
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">Municipalidades</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>Proyectos Comunitarios:</strong> Talleres de
                    reciclaje, educación ambiental.
                    <br />
                    <strong>Proyectos Deportivos:</strong> Creación de ligas
                    deportivas, ferias de empleo.
                  </p>
                </div>

                {/* Ministerio de Trabajo y Seguridad Social (MTSS) */}
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">
                    Ministerio de Trabajo y Seguridad Social (MTSS)
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>Programas:</strong> Intermediación laboral,
                    protección al trabajador.
                    <br />
                    <strong>Proyectos:</strong> Capacitación en derechos
                    laborales, programas para mejorar la inserción laboral.
                  </p>
                </div>

                {/* Sistema Nacional de Empleo (SNE) */}
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">
                    Sistema Nacional de Empleo (SNE)
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    <strong>Capacitación:</strong> Cursos en habilidades blandas
                    y técnicas, asesoría para la búsqueda de empleo.
                    <br />
                    <strong>Proyectos:</strong> Programas de formación en
                    competencias laborales, ferias de empleo.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <FooterPage />
    </>
  );
}
