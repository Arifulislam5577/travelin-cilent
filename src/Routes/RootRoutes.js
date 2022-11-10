import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Blogs from "../pages/Blogs/Blogs";
import Services from "../pages/Services/Services";
import MyReview from "../pages/MyReview/MyReview";
import AddService from "../pages/AddService/AddService";
import UdpateReview from "../pages/MyReview/UdpateReview";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoutes";

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
          fetch(`https://travelin-server.vercel.app/api/v1/tours/${params.id}`),
      },
      { path: "/blogs", element: <Blogs /> },
      { path: "/services", element: <Services /> },
      {
        path: "/myreview",

        element: (
          <PrivateRoute>
            <MyReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/updatereview/:id",

        element: (
          <PrivateRoute>
            <UdpateReview />
          </PrivateRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
