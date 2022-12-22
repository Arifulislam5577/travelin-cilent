import React, { useEffect, useState } from "react";
import CardLoader from "../../components/CardLoader";
import ServiceCard from "../../components/ServiceCard";
import { Context } from "../../context/ContextApi";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
const MyService = () => {
  useTitle("My Review");
  const { user } = Context();
  const [tourData, setTourData] = useState([]);
  const { load, error, data } = useFetch(
    `${process.env.REACT_APP_DOMAIN_NAME}/api/v1/tours?userId=${user._id}`
  );
  useEffect(() => {
    if (Object.keys(data).length) setTourData(data.tours);
  }, [data]);

  if (load) {
    return (
      <section className=" z-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </div>
      </section>
    );
  } else if (error) {
    return (
      <section className=" z-0">
        <h1 className="text-3xl font-bold text-center text-emerald-800">
          {error}
        </h1>
      </section>
    );
  } else if (tourData?.length > 0) {
    return (
      <section className=" z-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {tourData?.map((tour) => (
            <ServiceCard key={tour._id} {...tour} />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className=" z-0">
        <h1 className="text-3xl font-bold text-center text-emerald-800">
          No Tour were added
        </h1>
      </section>
    );
  }
};

export default MyService;
