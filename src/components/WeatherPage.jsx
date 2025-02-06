import { useState } from "react";

const WeatherPage = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY_WEATHER;

  const fetchWeatherData = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setError(null); // Clear any previous errors

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!weatherResponse.ok) {
        throw new Error("City not found");
      }

      const weather = await weatherResponse.json();

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!forecastResponse.ok) {
        throw new Error("Unable to fetch forecast data");
      }

      const forecast = await forecastResponse.json();

      setWeatherData(weather);
      setForecastData(forecast);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
      setForecastData(null);
    }
  };

  return (
    <div>
      <h1>Weather Page</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeatherData}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div>
          <h2>Current Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}

      {forecastData && (
        <div>
          <h2>4-Day Forecast</h2>
          <ul>
            {forecastData.list.slice(0, 4).map((entry, index) => (
              <li key={index}>
                {entry.dt_txt} - {entry.main.temp} °C - {entry.weather[0].description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherPage;
