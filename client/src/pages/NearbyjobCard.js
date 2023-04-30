import React from 'react';

const PopularJobCard = ({ item, selectedJob, handleCardClick }) => {
  return (
    <div className="card-container" onClick={() => handleCardClick(item)}>
      <div className="card">
        <img
          className="card-image"
          src={item.employer_logo}
          alt={item.employer_name}
        />
        <div className="card-content">
          <h2 className="card-title">{item.employer_name}</h2>
          <p className="card-subtitle">{item.job_title}</p>
          <p className="card-country">{item.job_country}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularJobCard;
