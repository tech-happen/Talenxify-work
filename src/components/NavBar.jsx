import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import Buttons from "./Buttons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "FEATURES", path: "/features" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center py-4 px-2 ml-0 lg:ml-[-290px]"
            >
              <img src={logo} alt="Logo" className="h-auto w-auto max-h-12" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-center flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`py-4 px-2 text-dark text-lg xl:text-2xl font-semibold hover:text-purple-500 transition duration-300 ${
                  location.pathname === item.path
                    ? "text-blue-800 border-b-2 border-blue-800"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex items-center">
            <Buttons />
          </div>
          <div className="lg:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-purple-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block py-2 px-4 text-sm hover:bg-purple-500 hover:text-white transition duration-300 ${
              location.pathname === item.path ? "bg-purple-500 text-white" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}{" "}
        <div className="py-2 px-4 hidden lg:block">
          <Buttons />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
