import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const ServiceCard = ({ name, image, description, price, rating, _id }) => {
  return (
    <div className="col-span-1">
      <div className="bg-white rounded overflow-hidden">
        <img src={image} alt={name} className="block" />

        <div className="p-5">
          <h1 className="font-bold text-xl text-gray-600 capitalize">{name}</h1>
          <p className=" text-sm mt-2 text-gray-500">
            {description.length > 100 ? description.slice(0, 100) : description}
          </p>
          <div className="flex items-center justify-between my-3">
            <h3 className=" text-sm text-gray-600">💰${price}</h3>
            <h3 className=" text-sm text-gray-600">⭐{rating}(4)</h3>
            <Link
              to={`/service/${_id}`}
              className="text-gray-600  hover:text-emerald-800 transition-all duration-300 hover:gap-2 gap-1 flex items-center text-sm"
            >
              details
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
