import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, href, className }) => {
  return (
    <Link
      to={href}
      className={`${className} py-[10px] font-Coolvetica border-2 border-primaryColor rounded-full hover:bg-blue-700 hover:text-white transition duration-300 text-center`}
    >
      {text}
    </Link>
  );
};

export default Button;
