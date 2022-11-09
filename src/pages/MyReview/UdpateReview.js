import React from "react";

const UdpateReview = () => {
  return (
    <div className="lg:w-2/6 md:w-3/6 sm:w-4/6 w-5/6 mx-auto my-10 bg-white p-10 rounded-md">
      <h1 className="text-2xl uppercase font-semibold  text-emerald-800">
        Update Review
      </h1>

      <form>
        <textarea
          className="border bg-gray-100 border-gray-100  p-3 text-sm text-gray-600 w-full my-4 focus:outline-none"
          rows="5"
        ></textarea>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="py-3 text-white text-sm rounded px-5 bg-emerald-800 hover:bg-emerald-900 capitalize"
          >
            update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UdpateReview;
