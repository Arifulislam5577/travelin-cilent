import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const ServiceCard = (props) => {
  return (
    <div className="col-span-1">
      <div className="bg-white rounded overflow-hidden">
        <PhotoProvider>
          <PhotoProvider>
            <PhotoView src={props?.image}>
              <img
                src={props?.image}
                alt={props?.name}
                className="block cursor-pointer"
              />
            </PhotoView>
          </PhotoProvider>
        </PhotoProvider>

        <div className="p-5">
          <h1 className="font-bold text-base text-gray-600 uppercase">
            {props?.name}
          </h1>
          <p className=" text-sm mt-2 text-gray-500">
            {props?.description?.length > 100
              ? props?.description?.slice(0, 100)
              : props?.description}
          </p>
          <div className="flex items-center justify-between my-3">
            <h3 className=" text-sm text-gray-600">💰${props?.price}</h3>
            <h3 className=" text-sm text-gray-600">⭐{props?.rating}(4)</h3>
            <Link
              to={`/service/${props?._id}`}
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
