import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="flex items-center space-x-4 mr-[-390px] hidden md:block">
      <Link
        to="/signup"
        className="bg-blue-600 text-white px-20 py-4  text-1xl font-semibold font-Coolvetica rounded-full hover:bg-blue-700 transition duration-300"
      >
        SIGN UP
      </Link>
      <Link
        to="/login"
        className="bg-white text-blue-800 px-20 py-4  text-1xl font-semibold rounded-full border border-blue-800 hover:bg-blue-50 transition duration-300"
      >
        LOGIN
      </Link>
    </div>
  );
};

export default Buttons;
