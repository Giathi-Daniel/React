import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import HomeCards from "./Components/HomeCards/HomeCards";
import JobsListing from "./Components/Jobs/JobsListings";
import ViewAllJobs from "./Components/Jobs/viewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobsListing />
      <ViewAllJobs />
    </>
  );
};

export default App;
