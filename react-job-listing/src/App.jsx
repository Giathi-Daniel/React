import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layout/MainLayout";
import JobsPage from "./Pages/JobsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/jobs' element={<JobsPage/>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider />;
};

export default App;
