import React from "react";

const CardNumber = ({ number, title, desc }) => {
  return (
    <div className="flex text-justify">
      <div className="flex bg-[#440044] p-6 rounded-lg shadow-lg w-full">
        <div className="bg-[#FF69FF] lg:text-xl p-2 rounded-lg font-semibold h-fit">
          0{number}
        </div>

        <div className="flex flex-col ml-4">
          <span className="text-sm lg:text-xl font-extrabold text-white">{title}</span>
          <span className="text-xs lg:text-lg text-white mt-2">{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default CardNumber;
