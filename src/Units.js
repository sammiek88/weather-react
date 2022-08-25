import React, { useState } from 'react';

export default function Units(props) {
  const [tempUnit, setTempUnit] = useState('celsius');

  function convertToFahrenheit(event) {
    event.preventDefault();
    setTempUnit('fahrenheit');
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setTempUnit('celsius');
  }

  if (tempUnit === 'celsius') {
    return (
      <span>
        <span className="tempValue">{Math.round(props.celsius)}</span>
        <span>
          {' '}
          <span>
            {' '}
            <span>°C </span>
          </span>
          |{' '}
          <span>
            {' '}
            <a href="/" onClick={convertToFahrenheit}>
              °F{' '}
            </a>{' '}
          </span>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);

    return (
      <span>
        <span className="tempValue">{fahrenheit}</span>
        <span>
          {' '}
          <span>
            {' '}
            <a href="/" onClick={convertToCelsius}>
              °C{' '}
            </a>
          </span>
          |{' '}
          <span>
            {' '}
            <span>°F </span>{' '}
          </span>
        </span>
      </span>
    );
  }
}
