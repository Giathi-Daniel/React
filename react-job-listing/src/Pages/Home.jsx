import React from 'react'
import Hero from '../Components/Hero/Hero'
import HomeCards from '../Components/HomeCards/HomeCards'
import JobListings from '../Components/Jobs/JobsListings'
import ViewAllJobs from '../Components/Jobs/viewAllJobs'

const Home = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListing isHome={true} />
        <ViewAllJobs />
    </>
  )
}

export default Home