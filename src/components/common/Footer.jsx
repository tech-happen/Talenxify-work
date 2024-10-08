import React from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 lg:px-8 py-[33.5px] bg-secondaryColor text-white">
      <div className="lg:flex items-center justify-between w-full max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between lg:justify-start">
          <div className="py-8 lg:py-16 pr-2 border-r-2 max-w-[400px]">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="" />
            </Link>
            <p className="text-[10px] sm:text-[14px] lg:text-[1rem] mt-2">
              Talenxify is your go-to platform for finding top remote talent. We
              connect recruiters with skilled professionals.
            </p>
          </div>
          <div className="pl-4 font-Montserrat text-[12px] sm:text-[12px]">
            <div className="flex justify-between items-center gap-x-2 sm:gap-x-4 mb-[20px]">
              <Link to="/about" className="flex items-center">
                About
              </Link>
              <Link to="/benefits" className="flex items-center">
                Benefits
              </Link>
              <Link to="/career" className="flex items-center">
                Career
              </Link>
              <Link to="/support" className="flex items-center">
                Support
              </Link>
            </div>
            <div>
              <p>2024 Talenxify. All right reserved.</p>
            </div>
          </div>
        </div>
        <div className="my-8 lg:py-0 flex flex-col items-center justify-center lg:block">
          <div className="flex items-center justify-between gap-x-[33.33px] px-[25px] mb-[20px] mx-auto">
            <Link to="/support" className="flex items-center">
              <img src="/icons/whatsapp.svg" alt="whatsapp" />
            </Link>
            <Link to="/support" className="flex items-center">
              <img src="/icons/youtube.svg" alt="youtube" />
            </Link>
            <Link to="/support" className="flex items-center">
              <img src="/icons/twitter.svg" alt="twitter" />
            </Link>
            <Link to="/support" className="flex items-center">
              <img src="/icons/facebook.svg" alt="facebook" />
            </Link>
          </div>
          <p className="font-Montserrat text-[12px]">
            Support:{" "}
            <a href="mailto:talenxifywebsite@gmail.com">
              talenxifywebsite@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
