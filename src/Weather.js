import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordicates: response.data.coord,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      weather: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      city: response.data.city,
    });
  }

  function search() {
    let apiKey = "a710bd8bd76400c9658ef649d9e81728";
    let city = "Perth";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?city=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="col-12 pb-3">
          <form
            className="d-flex justify-content-between align-items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder="Enter a city.."
              className="search-form col-9"
              onChange={handleCityChange}
            />
            <input
              type="button"
              value="Search"
              className="btn primary-btn button col-3"
            />
          </form>

          <h1>Perth</h1>
          <ul>
            <li>Thursday 13:00</li>
            <li>Humidity:80%</li>
          </ul>
          <div classNmae="row">
            <div className="col-6">
              <img src="/" alt="Mostly Cloudy" />
              6C
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
