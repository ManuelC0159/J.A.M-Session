import React from 'react';

const JobCard = React.memo(({ jobTitle, company, location, jobType, logoSrc, applyLink }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <img src={logoSrc} alt={`${company} logo`} />
        <div>
          <h3>{jobTitle}</h3>
          <p>{company}</p>
        </div>
      </div>
      <div className="job-card-body">
        <p>{location}</p>
        <p>{jobType}</p>
      </div>
      <div className="job-card-footer">
        <a href={applyLink}>Apply Now</a>
      </div>
    </div>
  );
});

export default JobCard;
