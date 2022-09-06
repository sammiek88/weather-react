import React from 'react';

import './Forecast.css';

export default function () {
  return (
    <div className="ForecastTable p-2">
      <div className="row">
        <div className="col-2">
          Mon
          <div>
            <img
              classname="icon"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            ></img>
            <div className="dailyWeather">
              <span>17 |</span>

              <span> 20</span>
            </div>
          </div>
        </div>
        <div className="col-2">
          Tues
          <div>
            <img
              classname="icon"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            ></img>
            <div className="dailyWeather">
              <span>17 |</span>

              <span> 20</span>
            </div>
          </div>
        </div>
        <div className="col-2">
          Wed
          <div>
            <img
              classname="icon"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            ></img>
            <div className="dailyWeather">
              <span>17 |</span>

              <span> 20</span>
            </div>
          </div>
        </div>
        <div className="col-2">
          Thurs
          <div>
            <img
              classname="icon"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            ></img>
            <div className="dailyWeather">
              <span>17 |</span>

              <span> 20</span>
            </div>
          </div>
        </div>
        <div className="col-2">
          Fri
          <div>
            <img
              classname="icon"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            ></img>
            <div className="dailyWeather">
              <span>17 |</span>

              <span> 20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
