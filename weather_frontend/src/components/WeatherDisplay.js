import React from 'react';

// PUBLIC_INTERFACE
const WeatherDisplay = ({ weather, loading, error }) => {
  if (loading) {
    return <div className="loading">Loading weather data...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="weather-display">
      <h2>{weather.city}</h2>
      <div className="weather-info">
        {/* Placeholder for weather icon */}
        <div className="temperature">
          {weather.temperature}°C
        </div>
        <div className="description">
          {weather.description}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
