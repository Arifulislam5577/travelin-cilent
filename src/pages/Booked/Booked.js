import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context/ContextApi";

const Booked = () => {
  const { user } = Context();
  const navigate = useNavigate();
  const { state: tour } = useLocation();
  const [loading, setLoading] = useState(false);

  const handleBooked = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_DOMAIN_NAME}/api/v1/order`,
        {
          method: "POST",
          body: JSON.stringify({
            tour: tour._id,
            user: user._id,
          }),
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      const result = await response.json();

      if (result?.success) {
        setLoading(false);
        navigate("/dashboard/bookedservice");
      }
      toast.error(result?.message);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <section className="py-5 lg:py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2  rounded">
          <div className="lg:col-span-1 w-full lg:order-2 order-1 ">
            <div className="lg:px-10 px-5">
              <h1 className="text-2xl font-bold uppercase text-gray-700">
                {tour.name}
              </h1>

              <p className="text-sm text-gray-700 my-3">{tour.description}</p>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={user.userImg}
                    alt={user.userName}
                    className="h-14 w-14  rounded-full bg-white"
                  />

                  <div>
                    <h2 className="text-sm text-gray-700">{user.userName}</h2>
                    <p className="text-sm text-gray-600">{user.userEmail}</p>
                  </div>
                </div>
                <h1 className="text-2xl font-bold uppercase text-gray-700">
                  ${tour.price}
                </h1>
              </div>

              <button
                onClick={handleBooked}
                className="w-full py-3 rounded bg-emerald-800 text-white text-sm"
              >
                {loading ? "Loading..." : "Book Now"}
              </button>
            </div>
          </div>
          <div className="lg:col-span-1 w-full order-2 lg:order-1">
            <img src={tour.image} alt={tour.name} className="rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booked;
