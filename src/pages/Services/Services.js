import React from "react";
import { BsFilter } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import CardLoader from "../../components/CardLoader";
import ServiceCard from "../../components/ServiceCard";
import { Context } from "../../context/ContextApi";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";

const Services = () => {
  useTitle("Services");
  useFetch();
  const { serviceState } = Context();
  const { loading, error, services } = serviceState;
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-1 w-full">
            <div className="p-5 bg-white">
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-1">
                  <BsFilter />
                  Filter Service
                </h1>
                <GrPowerReset />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 w-full grid grid-cols-1 lg:grid-cols-3 gap-5">
            {loading ? (
              <>
                <CardLoader />
                <CardLoader />
                <CardLoader />
                <CardLoader />
                <CardLoader />
                <CardLoader />
              </>
            ) : error ? (
              <h1>{error}</h1>
            ) : (
              services?.map((service) => (
                <ServiceCard key={service._id} {...service} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
