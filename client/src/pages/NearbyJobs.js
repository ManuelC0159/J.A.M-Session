import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import NearbyJobCard from './PopularJobCard';

function NearbyJobs() {
  const [selectedJob, setSelectedJob] = useState();
  const navigate = useNavigate();
  const handleCardClick = (item) => {
    setSelectedJob(item.job_id);
    navigate(`/job-details/${item.job_id}`);
  };
  const { data } = useFetch('search', {
    query: 'React',
    pages: 1,
  });
  return (
    <div className="nearby-jobs-container">
      <div className="header">
        <h2>Nearby Jobs</h2>
      </div>
      <div className="cards-container">
        {data.map((info) => (
          <NearbyJobCard
            key={info.job_id}
            item={info}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default NearbyJobs;
