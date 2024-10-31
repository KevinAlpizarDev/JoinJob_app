import React from "react";
import { Link } from "react-router-dom";

const Position = () => {
  return (
    <div className="w-full h-0 mb-40 mr-6 z-10 bg-transparent flex justify-end pr-10 fixed bottom-0 right-0">
      <Link to="/home">
        <button
          type="button"
          className="px-5 py-2.5 bg-yellow-400 hover:text-black hover:bg-yellow-400 text-black font-poppins rounded-full"
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default Position;
