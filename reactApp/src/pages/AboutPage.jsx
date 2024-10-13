import NavBar from "../components/main/NavBar";
import Position from "../components/Position";
import FooterPage from "../components/FooterPage";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <Position />

      <section className="w-full py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 md:px-28">
          {/* Title */}
          <h2 className="text-3xl font-poppins text-slate-800 dark:text-white tracking-tight sm:text-4xl md:text-5xl text-center mb-12 font-black">
            Lorem ipsum dolor sit amet consectetur adipisicing
          </h2>

          {/* Card Grid */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Card Item */}
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="mt-1 h-6 w-6 flex-none bg-green-500 rounded-full"></div>
              <div>
                <h3 className="text-xl leading-8 font-semibold text-slate-900 dark:text-white">
                  Capacitación para PYMEs
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400 font-poppins">
                  Programas de formación para fortalecer pequeñas y medianas
                  empresas, cubriendo temas como ventas, marketing y gestión
                  empresarial.
                </p>
              </div>
            </div>

            {/* Card Item */}
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="mt-1 h-6 w-6 flex-none bg-blue-500 rounded-full"></div>
              <div>
                <h3 className="text-xl leading-8 font-semibold text-slate-900 dark:text-white">
                  Puente al Desarrollo
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400 font-poppins">
                  Proyecto que busca sacar a las familias de la pobreza extrema
                  mediante el acceso a capacitación y oportunidades laborales.
                </p>
              </div>
            </div>

            {/* Card Item */}
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="mt-1 h-6 w-6 flex-none bg-purple-500 rounded-full"></div>
              <div>
                <h3 className="text-xl leading-8 font-semibold text-slate-900 dark:text-white">
                  Empleabilidad de Jóvenes con Discapacidad
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400 font-poppins">
                  Proyectos orientados a la inclusión laboral de jóvenes con
                  discapacidad mediante formación y oportunidades de empleo.
                </p>
              </div>
            </div>

            {/* Card Item */}
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="mt-1 h-6 w-6 flex-none bg-yellow-500 rounded-full"></div>
              <div>
                <h3 className="text-xl leading-8 font-semibold text-slate-900 dark:text-white">
                  Educación Dual
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400 font-poppins">
                  Proyecto que combina educación y trabajo en empresas para que
                  los estudiantes adquieran experiencia laboral mientras
                  estudian.
                </p>
              </div>
            </div>

            {/* Card Item */}
            <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="mt-1 h-6 w-6 flex-none bg-red-500 rounded-full"></div>
              <div>
                <h3 className="text-xl leading-8 font-semibold text-slate-900 dark:text-white">
                  Proyectos de Emprendimiento
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400 font-poppins">
                  Asesoría y capital semilla para ayudar a personas en situación
                  vulnerable a iniciar y desarrollar sus propios negocios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="flex flex-col min-h-screen bg-slate-200">
      <main className="flex-1">
    

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-slate-800 tracking-tighter sm:text-4xl md:text-5xl">
                  Our Story
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Founded in 2010, Acme Inc started with a simple idea: to make
                  project management accessible and efficient for teams of all
                  sizes. Our founders, Jane Doe and John Smith, experienced
                  firsthand the challenges of managing complex projects in
                  fast-paced environments.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Driven by their vision to simplify workflow and enhance
                  collaboration, they developed our flagship product. Today,
                  we're proud to serve thousands of teams worldwide, helping
                  them to streamline their processes and achieve their goals.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Acme Inc founders"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-black text-slate-800 tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Values
            </h2>
            <div className="grid gap-6 lg:grid-cols-4 lg:gap-12">
              <div>
                <div className="h-10 w-10 mb-2 text-primary" />
                <h3>Collaboration</h3>
                <p>
                  We believe in the power of teamwork and foster an environment
                  where ideas flourish.
                </p>
              </div>
              <div>
                <div className="h-10 w-10 mb-2 text-primary" />
                <h3>Innovation</h3>
                <p>
                  We constantly push boundaries to deliver cutting-edge
                  solutions for our clients.
                </p>
              </div>
              <div>
                <div className="h-10 w-10 mb-2 text-primary" />
                <h3>Customer Focus</h3>
                <p>
                  Our customers' success is our success. We're dedicated to
                  providing exceptional support.
                </p>
              </div>
              <div>
                <div className="h-10 w-10 mb-2 text-primary" />
                <h3>Efficiency</h3>
                <p>
                  We strive to create tools that make work easier, faster, and
                  more productive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-black text-slate-800 tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Meet Our Team
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  name: "Jane Doe",
                  role: "CEO & Co-founder",
                  image: "/placeholder.svg",
                },
                {
                  name: "John Smith",
                  role: "CTO & Co-founder",
                  image: "/placeholder.svg",
                },
                {
                  name: "Alice Johnson",
                  role: "Head of Product",
                  image: "/placeholder.svg",
                },
              ].map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col items-center text-center"
                >
                  <div className="h-32 w-32 mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      
      </main>
    </div> */}
      <FooterPage />
    </>
  );
}
