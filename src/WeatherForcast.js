import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForcast.css";

export default function WeatherFocast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let latitude = "props.coordinates.lat";
  let longitude = "props.coordinates.lon";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherForcast">
      <div className="row">
        <div className="col">
          <div>Thur</div>
          <WeatherIcon code="01d" size={36} />
          <div>
            <span>9°</span>
            <span>10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
