import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemp from "./WeatherTemp.js";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 className="caps">{props.data.city}</h1>
      <ul>
        <li className="caps">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="caps">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon
            code={props.data.icon.icon}
            alt={props.data.icon.description}
          />
          <WeatherTemp celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:{props.data.temperature}</li>
            <li>Humidity:{props.data.humidity}%</li>
            <li>wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
