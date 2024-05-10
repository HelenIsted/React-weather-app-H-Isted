import React from "react";
import "./Weather.css";

export default function Weather() {
  let form = (
    <form>
      <input type="search" placeholder="Enter a City" autoFocus="on" />
      <input type="submit" value="Search" />
    </form>
  );
  return (
    <div className="Weather">
      {form}
      <h1>New York</h1>
      <ul>
        <li>Date and Time</li>
        <li>Current weather</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather-icon"
              className="float-left mr-10px"
            ></img>

            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation</li>
            <li>Humidity</li>
            <li>wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
