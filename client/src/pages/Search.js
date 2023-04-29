import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import JobSearch from '../search/[id]'


const UserInput = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate()
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick=()=>{
    navigate(`/search/${inputValue}`)

  }

  return (
    <div>
      <label>
        Enter your string:
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="What job are you looking for?"/>
      </label>
      <Link to={`/search/${inputValue}`}>
        <button>Search</button>
      </Link>
    </div>
  );
};

export default UserInput;



