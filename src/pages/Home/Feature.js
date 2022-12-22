import React from "react";
import { FaHotel } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { AiFillSetting } from "react-icons/ai";

const Feature = () => {
  return (
    <div className="feature grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="col-span-1">
        <div className="p-5 bg-white border-l-4 border-emerald-800 flex items-center gap-5">
          <div className="text-center flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
              <FaHotel size="32" color="#065f46" />
            </div>
          </div>
          <div className="">
            <h1 className="text-base font-bold  text-gray-600">
              Start Rating Hotel
            </h1>
            <p className=" text-sm mt-2 text-gray-500 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="p-5 bg-white border-l-4 border-emerald-800 flex items-center gap-5">
          <div className="text-center flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
              <GiHealthNormal size="32" color="#065f46" />
            </div>
          </div>
          <div className="">
            <h1 className="text-base font-bold  text-gray-600">
              Includes Medical Team
            </h1>
            <p className=" text-sm mt-2 text-gray-500 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="p-5 bg-white border-l-4 border-emerald-800 flex items-center gap-5">
          <div className="text-center flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
              <AiFillSetting size="32" color="#065f46" />
            </div>
          </div>
          <div className="">
            <h1 className="text-base font-bold  text-gray-600">
              Strong Security Policy
            </h1>
            <p className=" text-sm mt-2 text-gray-500 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
