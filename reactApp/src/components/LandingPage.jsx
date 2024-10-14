// import NavBar from "../components/main/NavBar";
// import FooterPage from "../components/FooterPage";
// import { Link } from "react-router-dom";

// export default function LandingPage() {
//   return (
//     <>
//       <NavBar />
//       <div className="flex pt-24 items-start justify-center min-h-screen bg-slate-100 dark:bg-slate-600">
//         <div className="text-center">
//         {/* <h1 className="mx-2 mb-6 max-w-4xl font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-7xl">
//   Impulsa tu <span className="text-[#007bff]">Desarrollo</span> con oportunidades<br />
//   de Crecimiento
// </h1> */}

// <h2 className="text-3xl font-poppins text-slate-800 dark:text-white tracking-tight sm:text-4xl md:text-5xl text-center mb-6 font-black">
//             Impulsa tu Desarrollo con <span  className="text-[#007bff]">Oportunidades</span> de Crecimiento
//           </h2>

//           <p className="mx-auto mb-12 max-w-[700px] text-gray-500 dark:text-gray-400">
//           Aprende herramientas y refuerza tus capacidades
//           </p>

//           <div className="flex justify-center">
//             <Link to="/signin">
//               <button className="animate-bounce w-16 h-16 flex items-center justify-center rounded-full font-bold text-[#007bff] border-2 border-[#007bff] bg-transparent transition-all ease-in-out duration-300 hover:bg-[#007bff] hover:text-white">
//                 <svg
//                   className="w-6 h-6"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <FooterPage />
//     </>
//   );
// }


import NavBar from "../components/main/NavBar";
import FooterPage from "../components/FooterPage";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <NavBar />

      <section class="py-24 h-screen bg-gray-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          {/* <div class="mb-14 mx-40 md:mx-34 text-center">
            <h1 class="text-5xl text-center font-bold text-gray-900 py-5">
              Impulsa tu Desarrollo con{" "}
              <span className="text-[#0079BF]">Oportunidades</span> de
              Crecimiento
            </h1>
            <p class="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
              Provides advanced features like time tracking, integrating with
              third party apps (calendar / Google drive), creating subtasks.
            </p>
          </div> */}
          <div class="mb-14 mx-4 sm:mx-10 md:mx-16 lg:mx-36 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 py-5">
              Impulsa tu Desarrollo con{" "}
              <span class="text-[#0079BF]">Oportunidades</span> de Crecimiento
            </h1>
            <p class="text-base md:text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
              Provides advanced features like time tracking, integrating with
              third-party apps (calendar / Google Drive), creating subtasks.
            </p>
          </div>

          <div className="flex justify-center">
            <Link to="/signin">
              {/* <button className="animate-bounce w-16 h-16 flex items-center justify-center rounded-full font-bold text-[#0079BF] border-2 border-[#0079BF] bg-white dark:bg-gray-700 dark:text-[#00A4E4] transition-all ease-in-out duration-300 hover:bg-[#0079BF] hover:text-white">
                <svg
                  className="w-6 h-6"
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
              </button> */}
              <button
                type="button"
                class="text-blue-700 border hover:text-white  border-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Siguiente
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* <div className="flex pt-24 items-start justify-center min-h-screen bg-slate-100 dark:bg-gray-800">
        <div className="text-center">
          <h2 className="text-3xl font-poppins text-slate-800 dark:text-white tracking-tight sm:text-4xl md:text-5xl text-center mb-6 font-black">
            Impulsa tu Desarrollo con{" "}
            <span className="text-[#0079BF]">Oportunidades</span> de Crecimiento
          </h2>

          <p className="mx-auto mb-12 max-w-[700px] text-gray-600 dark:text-gray-300 font-light">
            Aprende herramientas y refuerza tus capacidades con nuestros
            recursos personalizados.
          </p>

          <div className="flex justify-center">
            <Link to="/signin">
              <button className="animate-bounce w-16 h-16 flex items-center justify-center rounded-full font-bold text-[#0079BF] border-2 border-[#0079BF] bg-white dark:bg-gray-700 dark:text-[#00A4E4] transition-all ease-in-out duration-300 hover:bg-[#0079BF] hover:text-white">
                <svg
                  className="w-6 h-6"
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
              </button>
            </Link>
          </div>
        </div>
      </div> */}
      <FooterPage />
    </>
  );
}