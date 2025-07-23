import React, { useState } from 'react';
import './App.css';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';
import ForecastDisplay from './components/ForecastDisplay';

// PUBLIC_INTERFACE
function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      // Placeholder for API call
      // Will use process.env.REACT_APP_WEATHER_API_KEY for API key
      console.log('Searching for:', city);
      // Mock data for now
      setWeather({
        city,
        temperature: 20,
        description: 'Clear sky'
      });
      setForecast([
        { date: '2024-01-01', temperature: 20, description: 'Clear' },
        { date: '2024-01-02', temperature: 22, description: 'Partly cloudy' },
        { date: '2024-01-03', temperature: 19, description: 'Rain' },
        { date: '2024-01-04', temperature: 21, description: 'Sunny' },
        { date: '2024-01-05', temperature: 18, description: 'Cloudy' }
      ]);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Weather Forecast</h1>
        <WeatherSearch onSearch={handleSearch} />
      </header>

      <main className="main-content">
        <WeatherDisplay
          weather={weather}
          loading={loading}
          error={error}
        />
        <ForecastDisplay
          forecast={forecast}
          loading={loading}
          error={error}
        />
      </main>

      <footer className="footer">
        <p>Weather Forecast App - Created with React</p>
      </footer>
    </div>
  );
}

export default App;
