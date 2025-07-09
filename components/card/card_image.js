import React from "react";
import Image from "next/image";

const CardImage = ({ image, title, desc }) => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col">
        <Image
          src={image}
          alt={title}
          width={100}
          height={200}
          className="w-full object-cover rounded-t-lg shadow-lg"
        />
        <div className="flex flex-col lg:max-w-2xs min-h-72 md:min-h-[330px] bg-[#440044] p-6 rounded-b-lg shadow-lg">
          <div className="flex flex-col items-center mb-4 min-h-15 justify-center">
            <span className="text-lg lg:text-xl font-extrabold text-white">{title}</span>
          </div>
          <div className="bg-white p-[1px] rounded-lg w-full"></div>
          <span className="text-md lg:text-lg text-white mt-2 ">{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
