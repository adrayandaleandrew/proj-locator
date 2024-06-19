import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ onSearch }) => {
  const [ipAddress, setIpAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8000/api/ipinfo/${ipAddress}/geo`);
      onSearch(response.data);
      setIpAddress('');
    } catch (error) {
      setError('Invalid IP Address. Please enter a valid IP.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter IP Address"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default SearchForm;