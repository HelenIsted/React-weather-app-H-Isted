import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div>
      {" "}
      <h1 className="caps">{props.data.city}</h1>
      <ul>
        <li className="caps">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="caps">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="float-left"
            ></img>

            <span className="temperature">{props.data.temperature}</span>
            <span className="unit">°C</span>
          </div>
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
