import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import PopularJobCard from './PopularJobCard';

function PopularJobs() {
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
    <div>
      <div>
        <p>Popular Jobs</p>
      </div>
      <div className="cards-container">
        {data.map((info) => (
          <PopularJobCard
            key={info.job_id}
            item={info}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularJobs;
