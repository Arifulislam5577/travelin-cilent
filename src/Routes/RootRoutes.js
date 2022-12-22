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
import Payment from "../pages/Payment/Payment";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile";
import AddService from "../pages/Dashboard/AddService";
import MyService from "../pages/Dashboard/MyService";
import MyReview from "../pages/Dashboard/MyReview";

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
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
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
      {
        path: "/dashboard",

        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          { index: true, element: <Profile /> },
          { path: "addservice", element: <AddService /> },
          { path: "myservice", element: <MyService /> },
          { path: "myreview", element: <MyReview /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
