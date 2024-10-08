// import React from "react";
// import { Link } from "react-router-dom";
// const Position = () => {
//   return (
//     <div className=" mt-96 w-full pt-7 display: none  bg-black flex justify-end 	pr-10 position: fixed">
//       <Link to="/">
//         <button
//           type="button"
//           className="mt-10 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
//         >
//           Home
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
    <div className=" w-full h-0 mb-40 z-10 bg-black flex justify-end pr-10 fixed bottom-0 right-0">
      <Link to="/">
        <button
          type="button"
          className=" text-white mt-12 bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Home
        </button>
      </Link>
    </div>
  );
};

export default Position;
