import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../context/ContextApi";
import CardLoader from "../../components/CardLoader";
import UserReview from "../../components/UserReview";
import { toast } from "react-toastify";
const MyReview = () => {
  useTitle("My Review");
  const { user } = Context();
  const [reviewData, setReviewData] = useState([]);
  const { load, error, data } = useFetch(
    `https://travelin-server.vercel.app/api/v1/review?userId=${user.uid}`
  );

  useEffect(() => {
    if (data.length) setReviewData(data);
  }, [data]);
  const handleDeleteReview = async (id) => {
    const createService = async () => {
      const response = await fetch(
        `https://travelin-server.vercel.app/api/v1/review/${id}`,
        {
          method: "DELETE",
          body: JSON.stringify(),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      const { success } = await response.json();
      success && toast.success("Review Deleted successfully");
      success &&
        setReviewData(reviewData.filter((review) => review._id !== id));
    };
    createService();
  };
  if (load) {
    return (
      <section className="py-10 z-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <CardLoader />
            <CardLoader />
            <CardLoader />
          </div>
        </div>
      </section>
    );
  } else if (error) {
    return (
      <section className="py-10 z-0">
        <div className="container">
          <h1 className="text-3xl font-bold text-center text-emerald-800">
            {error}
          </h1>
        </div>
      </section>
    );
  } else if (reviewData?.length > 0) {
    return (
      <section className="py-10 z-0">
        <div className="container">
          <h1 className="text-3xl font-bold text-emerald-800">My Review</h1>
          <hr className="my-3" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reviewData?.map((review) => (
              <UserReview
                key={review._id}
                review={review}
                handleDeleteReview={handleDeleteReview}
              />
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="py-10 z-0">
        <div className="container">
          <h1 className="text-3xl font-bold text-center text-emerald-800">
            No reviews were added
          </h1>
        </div>
      </section>
    );
  }
};

export default MyReview;
