import React, { useState } from 'react';

// PUBLIC_INTERFACE
const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="Search for a city"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default WeatherSearch;
