import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import ServiceCard from "../../components/ServiceCard";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import CardLoader from "../../components/CardLoader";
const ServicesArea = () => {
  const [page, setPage] = useState(1);
  const { load, error, data } = useFetch(
    `https://travelin-server.vercel.app/api/v1/tours?limit=3&page=${page}`
  );

  const pageNum = Math.ceil(data?.totalService / 3);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pt-10">
      <div className="lg:col-span-4 w-full pb-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Our Services</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            The skills & Honesty of Apon Tours in the travels services is
            unrivaled.
          </p>
        </div>
      </div>
      <div className="lg:col-span-1  ads hidden lg:flex items-center justify-center">
        <button className="text-xl font-bold py-2.5 px-6 bg-gray-900 text-white rounded-full">
          Join Tour
        </button>
      </div>
      <div className="lg:col-span-3 w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {load ? (
            <>
              <CardLoader />
              <CardLoader />
              <CardLoader />
            </>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            data?.tours?.map((service) => (
              <ServiceCard key={service._id} {...service} />
            ))
          )}
          <div className="lg:col-span-3 w-full text-center my-5 flex items-center justify-between">
            <Pagination pageNum={pageNum} setPage={setPage} />
            <Link
              to="/services"
              className="text-sm text-white
          py-2 px-6 capitalize bg-emerald-800 rounded"
            >
              see all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
