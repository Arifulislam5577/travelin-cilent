import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center py-20">
      <div>
        <p className="text-sm text-gray-600">Join the next tour</p>
        <h1 className="lg:text-4xl text-3xl max-w-md font-bold mb-4">
          Exciting tours for adventurous people
        </h1>
        <p className="text-base max-w-lg text-gray-600">
          Most popular Tour & Travel Agency in Bangladesh which has been
          providing tourism service with a good reputation at the same place
          since 2016. The skills & Honesty of Apon Tours in the travels services
          is unrivaled.
        </p>
        <button className="py-2 px-5 bg-emerald-800 hover:bg-emerald-900 text-white mt-5 rounded capitalize text-sm">
          join tour
        </button>
      </div>
      <div>
        <img
          src="/images/tour.jpg"
          alt="tour hero"
          className="rounded-tl-[10rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
