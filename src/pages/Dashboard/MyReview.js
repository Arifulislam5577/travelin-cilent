import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CardLoader from "../../components/CardLoader";
import UserReview from "../../components/UserReview";
import { Context } from "../../context/ContextApi";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
const MyReview = () => {
  useTitle("My Review");
  const { user } = Context();
  const [reviewData, setReviewData] = useState([]);
  const { load, error, data } = useFetch(
    `${process.env.REACT_APP_DOMAIN_NAME}/api/v1/review?userId=${user._id}`
  );

  useEffect(() => {
    if (data.length) setReviewData(data);
  }, [data]);
  const handleDeleteReview = async (id) => {
    const createService = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_DOMAIN_NAME}/api/v1/review/${id}`,
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
  } else if (reviewData?.length > 0) {
    return (
      <section className=" z-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {reviewData?.map((review) => (
            <UserReview
              key={review._id}
              review={review}
              handleDeleteReview={handleDeleteReview}
            />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section className=" z-0">
        <h1 className="text-3xl font-bold text-center text-emerald-800">
          No reviews were added
        </h1>
      </section>
    );
  }
};

export default MyReview;
