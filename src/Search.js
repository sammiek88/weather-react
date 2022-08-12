import React, { useState } from 'react';
import axios from 'axios';

export default function Search() {
  const [city, setCity] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      ></input>
      <input type="submit" value="Search"></input>
    </form>
  );
}
