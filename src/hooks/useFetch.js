import { useEffect, useState } from "react";

const useFetch = (limit) => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  // let path = "https://travelin-server.vercel.app/api/v1/tours";
  let path = "/api/v1/tours";
  if (limit) {
    // path = `https://travelin-server.vercel.app/api/v1/tours?limit=${limit}`;
    path = `/api/v1/tours?limit=${limit}`;
  }
  useEffect(() => {
    const fetchService = async () => {
      setLoad(true);
      try {
        const response = await fetch(path);
        const data = await response.json();
        setError("");
        setData(data);
        setLoad(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchService();
  }, [limit, path]);

  return { load, serviceError: error, serviceData: data };
};

export default useFetch;
