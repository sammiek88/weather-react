import React from 'react';
import axios from 'axios';

import './App.css';

function App(props) {
  function updateCity(response) {
    alert(`
    The weather in ${response.data.name} is ${Math.round(
      response.data.main.temp
    )}`);
  }

  let apiKey = 'e4078cf116e415a86a523b0d99dfe1fa';
  let units = '&units=metric';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}${units}`;

  axios.get(apiUrl).then(updateCity);

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Patterson's!</h1>
        <img
          src="https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/296431907_10158699114851722_6656014881858699908_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=mKl9RUAkQTsAX8Wt7JF&_nc_oc=AQnREHCyv4379Cicmr47ZoQOw_Dm39gRJr7LdOTf_HIejPLVhgbxVHcilXalwJp9qoQ&_nc_ht=scontent-man2-1.xx&oh=00_AT9KPHEJep5qWcu_Fd5Oj6YmzqS928Q3rtmdk5mrvgAwQg&oe=62F7FB2E"
          className="App-logo"
          alt="profilephoto"
        />
      </header>
    </div>
  );
}

export default App;
