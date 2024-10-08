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
      <Position/>
      <div className="flex flex-col min-h-screen">
        {/* <Position /> */}
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Refreshingly simple project management
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
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

<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Not everything under the sun, just the stuff to get things done
              </h2>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 flex-none bg-green-500 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">Unlimited Projects</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Create and manage as many projects as you need.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 flex-none bg-blue-500 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">Private Conversations</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Use pings for quick, private chats with team members.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 flex-none bg-purple-500 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">Essential Reports</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Get summaries of the most important information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 flex-none bg-yellow-500 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">Notification Controls</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Stay focused with smart notification management.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 h-6 w-6 flex-none bg-red-500 rounded-full"></div>
                  <div>
                    <h3 className="font-bold">Project Timeline</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      See everything that's happening at a glance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
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
          </section>
        </main>
      </div>

      <FooterPage />
    </>
  );
}
