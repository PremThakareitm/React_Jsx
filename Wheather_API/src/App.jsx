import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherByCity = (city) => {
    setLoading(true);
    setError(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65a84ed61a806ba4e196b8be0ef37f89&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Weather data not found");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeatherByCity(city);
    }
  };

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain.toLowerCase()) {
      case "thunderstorm":
        return "bolt";
      case "drizzle":
        return "cloud-showers-heavy";
      case "rain":
        return "cloud-rain";
      case "snow":
        return "snowflake";
      case "clear":
        return "sun";
      case "clouds":
        return "cloud";
      default:
        return "question-circle";
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Get Weather"}
        </button>
      </form>
      {loading && (
        <div className="loading">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        </div>
      )}
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <div className="weather-icon">
            <FontAwesomeIcon
              icon={getWeatherIcon(weatherData.weather[0].main)}
              size="4x"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
