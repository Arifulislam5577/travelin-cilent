import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Blogs from "../pages/Blogs/Blogs";
import Services from "../pages/Services/Services";

export const RootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/service/:id", element: <ServiceDetails /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/services", element: <Services /> },
    ],
  },
]);
