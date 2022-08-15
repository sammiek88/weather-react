import React, { useState } from 'react';
import axios from 'axios';

import './Search.css';

export default function Search() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = '094780c710fa4efd669f0df8c3991927';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="search mt-5 "
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
        autoFocus="on"
      ></input>
      <input
        type="submit"
        value="Search"
        className="search-button m-1 btn btn-primary"
      ></input>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul className="forcast">
          <li>Temperature: {Math.round(weather.temp)}°C</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>{weather.description.toUpperCase()}</li>
          <li>
            <img alt="weathericon" src={weather.icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
