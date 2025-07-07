import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 text-start">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
          <p>Humidity: {props.data.humidity}%</p>
        </div>

        <div className="col-6">
          <p>{props.data.weather}</p>
          <WeatherIcon code={props.data.icon} />
          {Math.round(props.data.temperature)}°C
        </div>
      </div>
    </div>
  );
}
