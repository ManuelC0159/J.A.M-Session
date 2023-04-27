import React from 'react';
import { FaBuilding } from 'react-icons/fa';

const JobCategories = () => {
  const categories = [
    'Front-End Developer',
    'Back-End Developer',
    'Full-Stack Developer',
    'UI/UX Designer'
  ];

  return (
    <section className="job-categories">
      <h2>Job Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category}><FaBuilding /> {category}</li>
        ))}
      </ul>
    </section>
  );
}

export default JobCategories;
