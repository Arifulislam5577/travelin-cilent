import React from "react";
import { BsArrowRight } from "react-icons/bs";
const ServiceCard = () => {
  return (
    <div className="col-span-1">
      <div className="bg-white rounded overflow-hidden">
        <img src="https://picsum.photos/450/300" alt="" className="block" />

        <div className="p-5">
          <h1 className="font-bold text-xl text-gray-600">The Forest Hiker</h1>
          <p className=" text-sm mt-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit est
            veritatis amet, error asperiores in!
          </p>
          <div className="flex items-center justify-between my-3">
            <h3 className=" text-sm text-gray-600">💰$997</h3>
            <h3 className=" text-sm text-gray-600">⭐4.5(4)</h3>
            <button className="text-gray-600  hover:text-emerald-800 transition-all duration-300 hover:gap-2 gap-1 flex items-center text-sm">
              details
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
