import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      weather: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      iconUrl: "https://cdn-icons-png.flaticon.com/128/414/414825.png",
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="col-12 pb-3">
          <form className="d-flex justify-content-between align-items-center">
            <input
              type="search"
              placeholder="Enter a city.."
              className="search-form col-9"
            />
            <input
              type="button"
              value="Search"
              className="btn primary-btn button col-3"
            />
          </form>
        </div>

        <div className="row">
          <div className="col-6 text-start">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Friday 13:00</li>
              <li>Humidity: {weatherData.humidity}%</li>
            </ul>
          </div>

          <div className="col-6">
            <p>{weatherData.weather}</p>
            <img
              className="w-25"
              src={weatherData.iconUrl}
              alt={weatherData.condition}
            ></img>
            {Math.round(weatherData.temperature)}°C
          </div>
        </div>

        <footer className="mt-3">
          This was coded by{" "}
          <a
            href="https://github.com/Ami0480"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ami Fukuyama
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Ami0480/Create-react-app-weather-homework"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://musical-rabanadas-41fa54.netlify.app"
            target="_blank"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    );
  } else {
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
