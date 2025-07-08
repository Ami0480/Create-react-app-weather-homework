import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
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
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      weather: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition,
      icon,
      city: response.data.city,
    });
  }

  function search() {
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
