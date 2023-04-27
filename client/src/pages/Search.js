import React, { useState } from 'react';
import useFetch from './useFetch';
import JobCard from './JobCard';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const { data, isLoading, error, refetch } = useFetch('search', {
    query: searchQuery,
    num_pages: 1
  });

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          Search:
          <input type="text" value={searchQuery} onChange={handleSearch} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!isLoading && data.length === 0 && <p>No results found.</p>}
      {!isLoading && data.length > 0 && (
        <div>
          <p>Showing {data.length} results for "{searchQuery}"</p>
          {data.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;


