import React from 'react';

// PUBLIC_INTERFACE
const ForecastDisplay = ({ forecast, loading, error }) => {
  if (loading || error || !forecast) {
    return null;
  }

  return (
    <div className="forecast-container">
      {forecast.map((day, index) => (
        <div key={index} className="forecast-card">
          <h3>{day.date}</h3>
          {/* Placeholder for weather icon */}
          <div className="temperature">
            {day.temperature}°C
          </div>
          <div className="description">
            {day.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastDisplay;
