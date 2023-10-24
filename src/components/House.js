import React from "react";
// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";
const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathRooms, surface, price } =
    house;
  return (
    <div className="bg-white shadow-1 p-5 rounded w-full max-w-[352px] rounded-tl-[90px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={image} alt="" />
      <div className="flex mb-4 gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3">{type}</div>
        <div className="bg-violet-500 rounded-full text-white px-3">
          {country}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{address}</div>
      <div className="flex items-center text-gray-600 gap-2 my-3">
        <div className="text-[20px]">
          <BiBed />
        </div>
        <div>{bedrooms}</div>
        <div className="text-[20px]">
          <BiBath />
        </div>
        <div>{bathRooms}</div>
        <div className="text-[20px]">
          <BiArea />
        </div>
        <div>{surface}</div>
      </div>
      <div className="text-lg font-semibold mb-4 text-violet-600">${price}</div>
    </div>
  );
};

export default House;
