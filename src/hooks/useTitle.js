import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Exciting tours for adventurous people`;
  }, [title]);
};

export default useTitle;
