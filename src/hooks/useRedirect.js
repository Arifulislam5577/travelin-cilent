import { useLocation } from "react-router-dom";
const useRedirect = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  return redirect;
};

export default useRedirect;
