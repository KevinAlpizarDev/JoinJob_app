// import React from "react";
// import { Link } from "react-router-dom";

// const Position = () => {
//   return (
//     <div className=" w-full  h-0 mb-40 mr-6 z-10 bg-black flex justify-end pr-10 fixed bottom-0 right-0">
//       <Link to="/">
//         <button
//           type="button"
//           className="font-poppins text-white shadow-lg mt-20 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
//         >
//        Back
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Position;
import React from "react";
import { Link } from "react-router-dom";

const Position = () => {
  return (
    <div className="w-full h-0 mb-40 mr-6 z-10 bg-transparent flex justify-end pr-10 fixed bottom-0 right-0">
      <Link to="/">
        <button
          type="button"
          className="font-poppins text-white shadow-lg mt-20 bg-[#457B9D] hover:bg-[#1D3557] focus:outline-none focus:ring-4 focus:ring-[#A8DADC] font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 transition-all duration-200 hover:scale-105 dark:bg-[#1D3557] dark:hover:bg-[#457B9D] dark:focus:ring-[#F1FAEE]"
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default Position;
