import React from 'react';

import './Forecast.css';

export default function (props) {
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;

  console.log(lat);

  return (
    <div className="ForecastTable p-2">
      <div class="container text-center">
        <div class="row row-cols-auto">
          <div class="col">
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
          <div class="col">
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
          <div class="col">
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
          <div class="col">
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
          <div class="col">
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
    </div>
  );
}
