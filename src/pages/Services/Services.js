import React from "react";
import { BsFilter } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import ServiceCard from "../../components/ServiceCard";
import useTitle from "../../hooks/useTitle";

const Services = () => {
  useTitle("Services");
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
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
