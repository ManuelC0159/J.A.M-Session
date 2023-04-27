import React from 'react'

function JobCard({ job }) {
  return (
    <div className="job-card">
      <img src={job.logo || 'https://via.placeholder.com/150'} alt={`${job.companyName} logo`} />
      <div className="job-info">
        <h3>{job.title}</h3>
        <p>{job.companyName} - {job.location}</p>
        <p>{job.about}</p>
        <a href={job.applyLink}>Apply Now</a>
      </div>
    </div>
  )
}

export default JobCard
