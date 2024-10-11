import React from "react";

const WorkCard = ({ title, caption }) => {
  return (
    <div className="lg:bg-primaryColor sm:w-[150px] md:w-full md:max-w-[230px] lg:max-w-[345px] rounded-[15px] flex flex-col items-center justify-center p-4">
      <p className="text-secondaryColor text-[36px] md:text-[48px] lg:text-[64px] text-center">
        {title}
      </p>
      <p className="text-[12px] sm:text-[14px] text-secondaryColor lg:text-white text-center">
        {caption}
      </p>
    </div>
  );
};

export default WorkCard;
