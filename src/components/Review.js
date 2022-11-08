import React from "react";
import { BsStarFill, BsReply } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
const Review = () => {
  return (
    <figure className="flex flex-col md:flex-row md:items-center items-start gap-3 my-5">
      <div className="">
        <img
          src="https://images.unsplash.com/profile-1619599632767-5db3071dc7cbimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
          alt=""
          className="h-20 w-20 shadow rounded-full p-2 bg-white"
        />
      </div>
      <div className="">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-orange-500">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
          <p className="text-gray-600 text-sm">Md Ariful Islam</p>
          <p className="text-gray-600 text-sm">2h ago</p>
        </div>

        <p className="max-w-md my-2 text-gray-600 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
          nulla.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
          nulla.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <p className="text-gray-600 flex items-center gap-1 cursor-pointer">
            <BiLike />
            Like
          </p>
          <p className="text-gray-600 flex items-center gap-1 cursor-pointer">
            <BiDislike />
            Dislike
          </p>
          <p className="text-gray-600 flex items-center gap-1 cursor-pointer">
            <BsReply />
            Reply
          </p>
        </div>
      </div>
    </figure>
  );
};

export default Review;
