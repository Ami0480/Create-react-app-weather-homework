import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.temperature.current);
    setReady(true);
  }

  if (ready) {
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
            <h1>Perth</h1>
            <ul>
              <li>Friday 13:00</li>
              <li>Humidity 13%</li>
            </ul>
          </div>

          <div className="col-6">
            <img
              className="w-25"
              src="https://cdn-icons-png.flaticon.com/128/4814/4814268.png"
              alt="sunny"
            ></img>
            {temperature}°C
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
            href="https://github.com/Ami0480/React-Weather-Search-Homework/tree/main/my-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and <a href="/">hosted on Netlify</a>.
        </footer>
      </div>
    );
  } else {
    let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
    let city = "Perth";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
