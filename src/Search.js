import React, { useState } from 'react';
import CurrentDate from './CurrentDate';
import Units from './Units';
import Forecast from './Forecast';

import axios from 'axios';

import './Search.css';

export default function Search() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
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
            className="search p-1 mt-3 "
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
            className="search-button btn btn-primary p-1 mt-3"
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
          <li>
            <h2 className="cityTitle mt-3">{city}</h2>
          </li>
          <div className="row">
            <div className="col-2">
              <li>
                <img alt="weathericon" src={weather.icon} />
              </li>
            </div>
            <div className=" temperature col-4 mt-4">
              <div>
                <Units celsius={weather.temp} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h4>{weather.description.toUpperCase()}</h4>
            </div>
            <div className="col-6">
              <li>
                <CurrentDate date={weather.date} />
              </li>
            </div>
          </div>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Feels Like: {Math.round(weather.feelsLike)}°C</li>
        </ul>
        <Forecast />
      </div>
    );
  } else {
    return form;
  }
}
