import React from "react";
import "./Weather.css";

export default function Weather() {
  let form = (
    <form className="searchForm">
      <input type="search" placeholder="Search a City" />
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
      <div className="row">
        <div className="col-6">
          <img></img> <p>6^c</p>
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
