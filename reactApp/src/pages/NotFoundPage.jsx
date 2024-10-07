// import React from "react";
// import { Link } from "react-router-dom";

// const NotFoundPage = () => {
//   return (

//     <>
    
//     <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 dark:bg-black">
//             <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
//                 <div class="relative">
//                     <div class="absolute">
//                         <div class="">
//                             <h1 class="my-2 text-gray-800 font-bold text-2xl">
//                                 Looks like you've found the
//                                 doorway to the great nothing
//                             </h1>
//                             <p class="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                          
//                             <button class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
//                   {" "}
//                   <Link to="/">Take me there!</Link>
//                 </button>
//                         </div>
//                     </div>
//                     <div>
//                         <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
//             </div>
//         </div>
//     </>
//   );
// };

// export default NotFoundPage;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FFFAF0] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-[#FF5733] mb-4">404</h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-[#33658A] mb-8"
        >
          Oops! Page Not Found
        </motion.p>
        <p className="text-lg md:text-xl text-[#2F4858] mb-8 max-w-md mx-auto">
          It seems you've wandered off into cyberspace. Don't worry, it happens to the best of us.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="inline-block bg-[#F6AE2D] text-[#2F4858] font-bold py-3 px-6 rounded-lg text-lg transition-transform duration-200 ease-in-out hover:bg-[#F26419] hover:text-white">
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

// npm install framer-motion react-router-dom, npm install lucide-react

