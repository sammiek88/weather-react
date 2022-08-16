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
    let apiKey = 'e4078cf116e415a86a523b0d99dfe1fa';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="form" onSubmit={handleSubmit}>
      <div className=" row mt-5">
        <div className="col-9">
          <input
            className="search p-1 mt-4"
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
            autoFocus="on"
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Search"
            className="search-button btn btn-primary p-1 mt-4"
          />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="results">
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
