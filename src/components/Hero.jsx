import React from "react";
import hero from "../assets/img/cuate.png";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 py-8 lg:py-12">
      {/* Text Section */}
      <div className=" lg:ml-[150px]  ml-0 text-center lg:text-left lg:w-1/2 space-y-4 animate-slide-in-left mb-8 lg:mb-0 font-coolvetica">
        <h2 className="text-blue-600 font-bold text-3xl lg:text-5xl leading-tight">
          Your go-to platform
          <br />
          for hiring exceptional
        </h2>
        <h1 className="text-green-500 font-extrabold text-4xl lg:text-6xl">
          TALENT
        </h1>
        <div className="mt-8 space-x-4">
          <Buttons variant="secondary" size="large">
            Learn More
          </Buttons>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:ml-[-300px]">
        <img
          src={hero}
          alt="Hero"
          className="w-full max-w-[800px] lg:w-[1000px]"
        />
      </div>{" "}
    </div>
  );
};

export default Hero;
