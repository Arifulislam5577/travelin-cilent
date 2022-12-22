import React from "react";
import { BsStarFill, BsReply } from "react-icons/bs";
import { BiLike, BiDislike } from "react-icons/bi";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
const Review = (props) => {
  const { UserImg, reviewText, userName, createdAt } = props;
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  return (
    <figure className="flex flex-col md:flex-row md:items-center items-start gap-3 my-5">
      <div className="">
        <img
          src={UserImg}
          alt={userName}
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
          <p className="text-gray-600 text-sm">{userName}</p>
          <p className="text-gray-600 text-sm">
            {timeAgo.format(new Date(createdAt))}
          </p>
        </div>

        <p className="max-w-md my-2 text-gray-600 text-sm">{reviewText}</p>
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
