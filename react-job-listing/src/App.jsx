import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter (
  createRoutesFromElements(<Route index element={<Home />} />)
)

const App = () => {
  return <RouterProvider />
};

export default App;
