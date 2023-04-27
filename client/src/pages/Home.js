import React from 'react';
import Hero from '../Components/Homepage/Hero';
import RecentJobs from '../Components/Homepage/RecentJobs';
import JobCategories from '../Components/Homepage/JobCategories';
import TopCompanies from '../Components/Homepage/TopCompanies';
import Footer from '../Components/Homepage/Footer';
;

function HomePage() {
  return (
    <>
      <Hero />
      <RecentJobs />
      <JobCategories />
      <TopCompanies />
      <Footer />
    </>
  );
}

export default HomePage;
