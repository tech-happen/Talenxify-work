import React from "react";

const Work = ({ title, caption, className, bgImage }) => {
  return (
    <div
      className={`w-full h-[300px] sm:h-[250px] lg:h-[343px] sm:w-[50%] ${className} ${bgImage} bg-cover flex flex-col justify-center items-center px-3 md:px-8 lg:px-16 text-center`}
    >
      <p className="uppercase text-[24px] lg:text-[36px] text-white font-bold tracking-wide">
        {title}
      </p>
      <p className="text-gray-200 opacity-[0.5]">{caption}</p>
    </div>
  );
};

export default Work;
