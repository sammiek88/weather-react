import React, { useState } from 'react';
import axios from 'axios';

export default function Search() {
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');

  function handleSubmit(event) {
    let apiKey = '094780c710fa4efd669f0df8c3991927';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    event.preventDefault();

    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setTemp(response.data.main.temp);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        ></input>
        <input type="submit" value="Search"></input>
      </form>

      <h2>{temp}</h2>
    </div>
  );
}
