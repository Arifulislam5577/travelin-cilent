import { useEffect } from "react";
import { Context } from "../context/ContextApi";

const useFetch = (limit) => {
  const { serviceDisPatch } = Context();
  let path = "/api/v1/tours";

  if (limit) {
    path = `/api/v1/tours?limit=${limit}`;
  }
  useEffect(() => {
    const fetchService = async () => {
      serviceDisPatch({ type: "SERVICE_FETCH_REQUEST" });
      try {
        const response = await fetch(path);
        const data = await response.json();
        serviceDisPatch({ type: "SERVICE_FETCH_SUCCESS", payload: data });
      } catch (error) {
        serviceDisPatch({
          type: "SERVICE_FETCH_FAILED",
          payload: error.message,
        });
      }
    };

    fetchService();
  }, [serviceDisPatch, limit, path]);
};

export default useFetch;
