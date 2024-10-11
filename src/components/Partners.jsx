import React from "react";

const Partners = ({ img, alt }) => {
  return (
    <div className="">
      {/* Images width can be changed later */}
      <img src={img} alt={alt} className="w-[150px] md:w-[200px]" />
    </div>
  );
};

export default Partners;
