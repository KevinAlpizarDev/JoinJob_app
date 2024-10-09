import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage";
import Position from "../components/Position";
export default function AboutPage() {
  return (
    <>
    
    
< NavBar />
<Position/>

    <div className="flex flex-col min-h-screen bg-slate-200">
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
    </div>
    <FooterPage/>
    </>
  );
}
