import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - ✈️Travelin`;
  }, [title]);
};

export default useTitle;
