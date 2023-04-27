import React, { useState } from 'react';
import JobList from './JobList';
import useFetch from './useFetch';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const { data: searchResults, isLoading, doFetch } = useFetch();

  async function handleSearch(event) {
    event.preventDefault();
    try {
      await doFetch(`https://example.com/api/jobs?search=${searchTerm}`);
    } catch (err) {
      // Set error state if there's an error
      setError(err.message);
    }
  }

  return (
    <div className="search-page">
      <h1>Search Jobs</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      {/* Conditionally render search results */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && searchResults.length === 0 && searchTerm !== '' ? (
        <p>No jobs found</p>
      ) : null}
      {!isLoading && searchResults.length > 0 && (
        <JobList jobs={searchResults} />
      )}
    </div>
  );
}

export default SearchPage;
