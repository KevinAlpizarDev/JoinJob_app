// import React from "react";
// import NavBar from "../components/main/NavBar";

// export default function AboutPage() {
//   return (
// <>   
// <NavBar/>

//     <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 pb-11">
//       <header className="pt-16 pb-8 px-4 text-center">
//         <h1 className="text-6xl font-bold text-white mb-4">About Us</h1>
//         <p className="text-xl text-white mb-8">
//           We're not just another company. We're a revolution in digital
//           communication.
//         </p>
//         <div>
//           <button className="bg-white text-purple-500 py-2 px-4 rounded-lg animate-bounce">
//             Discover Our Story
//           </button>
//         </div>
//       </header>

//       <main className="container mx-auto px-4">
//         <section className="bg-white rounded-lg shadow-xl p-8 mb-12">
//           <h2 className="text-4xl font-bold text-purple-600 mb-4">Our Mission</h2>
//           <p className="text-lg text-gray-700 mb-4">
//             We believe in the power of meaningful communication. Our mission is
//             to revolutionize the way people connect, share ideas, and
//             collaborate in the digital age.
//           </p>
//           <p className="text-lg text-gray-700">
//             By creating intuitive and powerful tools, we're not just improving
//             email - we're reimagining what digital communication can be.
//           </p>
//         </section>

//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           <section className="bg-yellow-400 rounded-lg shadow-xl p-8">
//             <h2 className="text-3xl font-bold text-purple-800 mb-4">Our Values</h2>
//             <ul className="list-disc list-inside text-lg text-purple-900">
//               <li>Simplicity in design</li>
//               <li>Privacy as a fundamental right</li>
//               <li>User-centric innovation</li>
//               <li>Transparency in our operations</li>
//               <li>Continuous improvement</li>
//             </ul>
//           </section>

//           <section className="bg-green-400 rounded-lg shadow-xl p-8">
//             <h2 className="text-3xl font-bold text-purple-800 mb-4">Our Team</h2>
//             <p className="text-lg text-purple-900 mb-4">
//               We're a diverse group of thinkers, designers, and developers united
//               by a common goal: to make digital communication more human.
//             </p>
//             <p className="text-lg text-purple-900">
//               From Silicon Valley veterans to fresh graduates, our team brings a
//               wealth of experience and fresh perspectives to every challenge.
//             </p>
//           </section>
//         </div>

//         <section className="bg-blue-500 text-white rounded-lg shadow-xl p-8 mb-3">
//           <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold text-xl mr-4">
//                 2024
//               </div>
//               <p className="text-lg">Founded with a vision to reinvent email</p>
//             </div>
         
//           </div>
//         </section>

      
      
      
//       </main>

   
//     </div>

// </>

//   );
// }
import React from "react";
import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage";

export default function AboutPage() {
  return (
    <>   
      <NavBar/>

      <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 pb-11 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <header className="pt-16 pb-8 px-4 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white mb-8">
            We're not just another company. We're a revolution in digital communication.
          </p>
          <div>
            <button className="bg-white text-purple-500 py-2 px-4 rounded-lg animate-bounce dark:bg-gray-800 dark:text-gray-100">
              Discover Our Story
            </button>
          </div>
        </header>

        <main className="container mx-auto px-4">
          <section className="bg-white rounded-lg shadow-xl p-8 mb-12 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-4xl font-bold text-purple-600 mb-4 dark:text-lime-400">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4 dark:text-gray-300">
              We believe in the power of meaningful communication. Our mission is to revolutionize the way people connect, share ideas, and collaborate in the digital age.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              By creating intuitive and powerful tools, we're not just improving email - we're reimagining what digital communication can be.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <section className="bg-yellow-400 rounded-lg shadow-xl p-8 dark:bg-lime-800 dark:text-lime-100">
              <h2 className="text-3xl font-bold text-purple-800 mb-4 dark:text-lime-300">Our Values</h2>
              <ul className="list-disc list-inside text-lg text-purple-900 dark:text-lime-200">
                <li>Simplicity in design</li>
                <li>Privacy as a fundamental right</li>
                <li>User-centric innovation</li>
                <li>Transparency in our operations</li>
                <li>Continuous improvement</li>
              </ul>
            </section>

            <section className="bg-green-400 rounded-lg shadow-xl p-8 dark:bg-green-800 dark:text-green-100">
              <h2 className="text-3xl font-bold text-purple-800 mb-4 dark:text-green-300">Our Team</h2>
              <p className="text-lg text-purple-900 mb-4 dark:text-green-200">
                We're a diverse group of thinkers, designers, and developers united by a common goal: to make digital communication more human.
              </p>
              <p className="text-lg text-purple-900 dark:text-green-200">
                From Silicon Valley veterans to fresh graduates, our team brings a wealth of experience and fresh perspectives to every challenge.
              </p>
            </section>
          </div>

          <section className="bg-blue-500 text-white rounded-lg shadow-xl p-8 mb-3 dark:bg-blue-900 dark:text-blue-100">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold text-xl mr-4 dark:bg-gray-800 dark:text-blue-100">
                  2024
                </div>
                <p className="text-lg dark:text-gray-200">Founded with a vision to reinvent email</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      < FooterPage />
    </>
  );
}
