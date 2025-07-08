import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForcast.css";

export default function WeatherFocast() {
  return (
    <div className="weatherForcast">
      <div className="row"></div>
      <div className="col">
        <div>Thur</div>
        <WeatherIcon code="01d" />
        <div>
          <span>9</span>
          <span>10</span>
        </div>
      </div>
    </div>
  );
}
