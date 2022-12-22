import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
const UserReview = (props) => {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const { reviewText, userName, UserImg, _id, tour, createdAt } = props?.review;

  const navigate = useNavigate();
  const handleUpdateReview = (id) => {
    navigate(`/updatereview/${id}`, { state: props.review });
  };
  return (
    <div className="col-span-1">
      <div className="overflow-hidden rounded bg-white">
        <img src={tour?.image} alt="tour" className="block cursor-pointer" />

        <div className="p-5">
          <h1 className="font-bold mb-2 text-base  text-gray-600 capitalize">
            {tour?.name}
          </h1>
          <p className="text-gray-400 text-xs pl-5 border-l-2 border-gray-200  mb-3">
            {reviewText}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <div>
                <img
                  src={UserImg}
                  alt="user"
                  className="h-14 w-14 shadow rounded-full p-1 bg-white"
                />
              </div>
              <div>
                <p className="text-xs text-gray-400">{userName}</p>
                <p className="text-xs text-gray-400">
                  {timeAgo.format(new Date(createdAt))}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 ">
              <button
                onClick={() => handleUpdateReview(_id)}
                className="hover:text-emerald-800"
              >
                <FiEdit size="20" />
              </button>
              <button
                className="hover:text-red-600"
                onClick={() => props.handleDeleteReview(_id)}
              >
                <FiTrash2 size="20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
