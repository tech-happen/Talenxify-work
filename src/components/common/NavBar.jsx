import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import Button from "../Button";

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
    <nav
      className={`bg-white border-b-[1px] shadow-sm font-normal ${
        isOpen && "min-h-[100vh] fixed w-full z-[99]"
      }`}
    >
      <div className="flex justify-between items-center px-4 lg:px-8 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-x-4 ">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`py-2 px-1 text-[#2C2C2C]  hover:text-primaryColor transition duration-300  ${
                location.pathname === item.path
                  ? "text-primaryColor border-b-2 border-primaryColor"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-x-[10px]">
          <Button
            href={"/signup"}
            className="bg-primaryColor text-white uppercase w-[156px]"
            text="signup"
          />
          <Button
            href={"/login"}
            className="bg-white text-primaryColor uppercase w-[156px]"
            text="login"
          />
        </div>
        <div className="lg:hidden flex items-center">
          <button
            className="outline-none mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-500 hover:text-primaryColor"
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
      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "flex flex-col" : "hidden"
        } lg:hidden w-full px-4 lg:px-8 bg-white py-4`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block py-3 px-4 text-sm hover:bg-primaryColor hover:text-white transition duration-300 ${
              location.pathname === item.path
                ? "bg-primaryColor text-white"
                : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}

        <div className="flex flex-col gap-4 items-center mt-2 lg:hidden">
          <Button
            href={"/signup"}
            className="bg-white text-primaryColor uppercase w-full lg:w-[156px]"
            text="signup"
          />
          <Button
            href={"/login"}
            className="bg-white text-primaryColor uppercase w-full lg:w-[156px]"
            text="login"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
