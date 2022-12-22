import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Blogs from "../pages/Blogs/Blogs";
import Services from "../pages/Services/Services";
import UdpateReview from "../pages/MyReview/UdpateReview";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddService from "../pages/Dashboard/AddService";
import MyService from "../pages/Dashboard/MyService";
import MyReview from "../pages/Dashboard/MyReview";
import BookedService from "../pages/Dashboard/BookedService";

export const RootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signin", element: <SignIn /> },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
        loader: async ({ params }) =>
          fetch(
            `${process.env.REACT_APP_DOMAIN_NAME}/api/v1/tours/${params.id}`
          ),
      },
      { path: "/blogs", element: <Blogs /> },
      { path: "/services", element: <Services /> },
      {
        path: "/updatereview/:id",

        element: (
          <PrivateRoute>
            <UdpateReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",

        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <AddService /> },
          { path: "myservice", element: <MyService /> },
          { path: "myreview", element: <MyReview /> },
          { path: "bookedservice", element: <BookedService /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
