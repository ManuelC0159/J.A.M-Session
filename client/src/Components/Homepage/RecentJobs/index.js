import React from 'react';
import JobCard from './JobCard';

const RecentJobs = () => {
  const jobListings = [
    {
      id: 1,
      position: 'Front-End Developer',
      company: 'Google',
      location: 'Mountain View, CA'
    },
    {
      id: 2,
      position: 'Back-End Developer',
      company: 'Facebook',
      location: 'Menlo Park, CA'
    },
    {
      id: 3,
      position: 'Full-Stack Developer',
      company: 'Amazon',
      location: 'Seattle, WA'
    }
  ];

  return (
    <section className="recent-jobs">
      <h2>Recent Job Listings</h2>
      {jobListings.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
}

export default RecentJobs;
