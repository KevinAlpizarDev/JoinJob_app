import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage";
// import EmailForm from "../components/EmailForm";
import Position from "./Position";
import { Link } from "react-router-dom";
// import Position from "../components/Position";
export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Position />
      <div className="flex flex-col min-h-screen bg-slate-200 ">
        {/* <Position /> */}
        <main className="flex-1">
          <section className="w-full md:py-6 lg:py-4 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-1 text-center">
                <div className="space-y-2">
                  {/* <h1 className="text-3xl font- font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Refreshingly simple project management
                  </h1> */}

                  <h1 className="text-5xl text-slate-800 pt-6 font-black tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Oportunidades de Capacitación y Proyectos para el Desarrollo
                  </h1>

                  <p className="mx-auto font-poppins py-6 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    The project management platform that helps small teams move
                    faster and make more progress than they ever thought
                    possible.
                  </p>
                </div>
                <div className="space-x-4">
                  {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Get Started
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md">
                  Learn More
                </button> */}

                  {/* <Link to="/signin">


                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm p-6 mt-10 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  animate-bounce">

<svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
<span class="sr-only">Icon description</span>
</button>

</Link> */}

                  <Link to="signin">
                    <button
                      type="button"
                      class="text-white animate-bounce mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                      <span class="sr-only">Icon description</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl text-slate-800 font-black tracking-tighter sm:text-4xl md:text-5xl text-center mb-20">
                Oportunidades de Capacitación y Proyectos para el Desarrollo
              </h2>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 flex-none bg-green-500 rounded-full"></div>
                  <div>
                    <h3 className=" font-black">Capacitación para PYMEs</h3>
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
                    <h3 className="font-black">Puente al Desarrollo</h3>
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
                    <h3 className="font-black">
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
                    <h3 className="font-black">Educación Dual</h3>
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
                    <h3 className="font-black">Proyectos de Emprendimiento</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-poppins">
                      Asesoría y capital semilla para ayudar a personas en
                      situación vulnerable a iniciar y desarrollar sus propios
                      negocios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-black text-slate-800 tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Leave the grind behind. Glide through projects instead.
              </h2>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">Centralized Projects</h3>
                  <p>
                    Each project lives on a single page, with everything in
                    reach and every piece of information tracked and organized.
                  </p>
                </div>
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">Streamlined Communication</h3>
                  <p>
                    Everyone knows where to find what they need and say what
                    they need to say, reducing confusion and increasing
                    productivity.
                  </p>
                </div>
                <div className="border rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold">Simplified Management</h3>
                  <p>
                    Juggle people, projects, clients, deadlines, and
                    expectations with ease, even when competing against larger
                    companies.
                  </p>
                </div>
              </div>
            </div>
          </section> */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-black text-slate-800 tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Oportunidades de Capacitación y Proyectos en Costa Rica
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
