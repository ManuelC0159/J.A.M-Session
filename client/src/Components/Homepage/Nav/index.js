import React from 'react';
import { FaSearch, FaBuilding, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const Nav = () => {
  return (
    <header>
      <nav>
        <div className="logo">JAM!</div>
        <ul>
          <li><a href="#">Browse Jobs</a></li>
          <li><a href="#">Post a Job</a></li>
          <li><a href="#">Sign In/Up</a></li>
          <li><a href="#">Employer Dashboard</a></li>
          <li><a href="#">Job Seeker Dashboard</a></li>
        </ul>
        <form>
          <div className="search-wrapper">
            <input type="text" placeholder="Search Jobs" />
            <button><FaSearch /></button>
          </div>
          <div className="filter-options">
            <div className="filter-option">
              <select name="company">
                <option value="">Company</option>
                <option value="company-1">Company 1</option>
                <option value="company-2">Company 2</option>
              </select>
              <FaBuilding />
            </div>
            <div className="filter-option">
              <select name="location">
                <option value="">Location</option>
                <option value="location-1">Location 1</option>
                <option value="location-2">Location 2</option>
              </select>
              <FaMapMarkerAlt />
            </div>
            <div className="filter-option">
              <select name="job-type">
                <option value="">Job Type</option>
                <option value="job-type-1">Job Type 1</option>
                <option value="job-type-2">Job Type 2</option>
              </select>
              <FaUser />
            </div>
          </div>
        </form>
      </nav>
    </header>
  );
}

export default Nav;

