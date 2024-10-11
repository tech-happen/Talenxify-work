import React from "react";

const RecruiterCard = ({ title, data }) => {
  return (
    <div className="md:bg-white p-[24px] md:p-[40px] lg:p-[79px] w-full max-w-[400px] lg:max-w-[534px] rounded-[25px] mx-auto">
      <p className="text-primaryColor text-[24px] lg:text-[40px] uppercase md:text-center mb-2">
        {title}
      </p>
      <ul className="list-disc text-[#1c1c1caf] font-thin flex flex-col gap-y-1">
        {data.map((datum, index) => {
          return (
            <>
              <li>{datum}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default RecruiterCard;
