import React from "react";
import { Link } from "react-router-dom";

const Position = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-end align-bottom pt-60 pr-5 position: absolute	">
        <div className="position: fixed mt-60">
          <Link to="/">
            <button
              type="button"
              class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
                Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Position;
