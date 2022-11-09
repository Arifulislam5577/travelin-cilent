import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import Review from "../../components/Review";
import { Context } from "../../context/ContextApi";

const ServiceDetails = () => {
  const { user } = Context();
  const { tour, tourReview } = useLoaderData();
  const location = useLocation();
  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3 w-full ">
          <div>
            <img src={tour?.image} alt={tour?.name} className="rounded" />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="py-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-emerald-800">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p>({tourReview.length} Reviews)</p>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 my-3">
              {tour?.name}
            </h1>
            <h2 className="text-3xl font-bold text-emerald-800">
              ${tour?.price}
            </h2>

            <h2 className=" mt-5 font-bold text-gray-400">Feature</h2>
            <hr className="my-3" />
            <div className="px-4 flex flex-col gap-2">
              <p>✅Start Rating Hotel</p>
              <p>✅Includes medical team</p>
              <p>✅Strong Security Policy</p>
              <p>✅Healthy Food items</p>
              <p>✅Free wifi services in hotel rooms</p>
            </div>
            <hr className="my-3" />
            <button className="bg-emerald-800 hover:bg-emerald-900 text-white rounded py-3 px-6">
              Join the tour
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 w-full my-5">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-gray-600">Description</h2>
            <hr className="my-3" />
            <p className="text-justify text-gray-600">{tour?.description}</p>
          </div>

          <div className="my-5">
            <h2 className="text-xl font-bold text-gray-600">Add Review</h2>
            <hr className="my-3" />
            {user ? (
              <>
                <form className="w-full md:w-2/3">
                  <div className="mb-5">
                    <textarea
                      className="block w-full mt-2 rounded p-5 focus:outline-none"
                      name=""
                      id="review"
                      rows="3"
                      placeholder="Enter your review"
                    ></textarea>
                  </div>
                  <button className="py-3 px-6 rounded text-white bg-emerald-800">
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <p className="my-5">
                ⚠️Please{" "}
                <Link
                  className="text-white bg-emerald-800 py-2 px-4 rounded"
                  to={`/login?redirect=${location.pathname}`}
                >
                  Login
                </Link>{" "}
                first for add your valuable review
              </p>
            )}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-600">Review</h2>
            <hr className="my-3" />
            {tourReview.length > 0 ? (
              <div className="my-3">
                {tourReview?.map((review) => (
                  <Review key={review._id} {...review} />
                ))}
              </div>
            ) : (
              <div className="my-3">
                <h2 className="text-xl font-bold text-gray-600">
                  ⚠️No review were added
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
