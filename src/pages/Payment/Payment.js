import React from "react";
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => {
  const { state: tour } = useLocation();

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start justify-between container">
        <div className="lg:col-span-1 w-full ">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-3xl font-bold text-gray-600">{tour?.name}</h2>
            <h2 className="text-3xl font-bold text-gray-600">
              ⭐{tour?.rating}
            </h2>
          </div>

          <img
            src={tour?.image}
            alt={tour?.name}
            className="my-2 w-full rounded"
          />

          <div className="my-3">
            <p>{tour?.description.split(" ").slice(0, 40).join(" ")}</p>
          </div>
          <div className="my-3 bg-white flex items-center justify-between p-5">
            <h2 className="text-xl font-bold text-gray-600">💰Tour Price</h2>
            <h2 className="text-xl font-bold text-gray-600">${tour?.price}</h2>
          </div>
        </div>
        <div className="lg:col-span-1 w-full  bg-white p-5">
          <h2 className="text-xl font-bold text-gray-600 pl-5 ">Pay Now</h2>
          <Elements stripe={stripePromise}>
            <Checkout tour={tour} />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
