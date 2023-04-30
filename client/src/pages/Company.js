import React from 'react';

const Company = ({ companyLogo, jobTitle, companyName, location, applyLink, jobAbout, locationCity, employmentType, googleLink, locationState }) => {
  return (
    <div className="company-container">
      <div className="company-header">
        <img className="company-logo" src={companyLogo} alt="Company Logo" />
        <div className="company-title">
          <h1>{jobTitle}</h1>
          <h2>{companyName}</h2>
        </div>
      </div>
      <div className="company-body">
        <div className="company-about">
          <h3>About the Job</h3>
          <p>{jobAbout}</p>
        </div>
        <div className="company-location">
          <h3>Location</h3>
          <p>{locationCity}, {locationState}, {location}</p>
          <a href={googleLink}>View on Google Maps</a>
        </div>
        <div className="company-apply">
          <a className="apply-link" href={applyLink}>Apply Now</a>
        </div>
      </div>
      <div className="company-footer">
        <p>{employmentType}</p>
      </div>
    </div>
  );
}

export default Company;
