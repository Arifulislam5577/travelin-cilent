import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      setLoad(true);
      try {
        const config = {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        };
        const response = await fetch(url, { ...config });
        const data = await response.json();
        setError("");
        setData(data);
        setLoad(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchService();
  }, [url]);

  return { load, error, data };
};

export default useFetch;
