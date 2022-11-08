import React from "react";
import { RouterProvider } from "react-router-dom";
import { RootRoutes } from "./Routes/RootRoutes";

const App = () => {
  return <RouterProvider router={RootRoutes} />;
};

export default App;
