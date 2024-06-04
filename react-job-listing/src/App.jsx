import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";
import PageNotFound from "./Pages/PageNotFound";
import JobPage, { jobLoader } from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider />;
};

export default App;
