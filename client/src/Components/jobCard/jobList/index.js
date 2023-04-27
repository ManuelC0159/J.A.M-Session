import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from './useFetch';
import JobCard from './JobCard';

function JobList({ query }) {
  const { data, isLoading, error } = useFetch('search', {
    query: query,
    num_pages: 1
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="job-list">
      {data.map((job) => (
        <JobCard key={job.jobId} job={job} />
      ))}
    </div>
  );
}
function App() {
    return (
      <div className="App">
        <JobList query="react developer" />
      </div>
    );
  }
  
  export default App;
