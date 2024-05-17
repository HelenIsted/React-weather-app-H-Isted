import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  let form = (
    <form>
      <input type="search" placeholder="Enter a City" autoFocus="on" />
      <input type="submit" value="Search" />
    </form>
  );
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: `London`,
      date: `Friday 17th May 12:01`,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  if (WeatherData.ready) {
    return (
      <div className="Weather">
        {form}
        <h1 className="caps">{WeatherData.city}</h1>
        <ul>
          <li className="caps">{WeatherData.date}</li>
          <li className="caps">{WeatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={WeatherData.icon}
                alt={WeatherData.description}
                className="float-left"
              ></img>

              <span className="temperature">{WeatherData.temperature}</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:{WeatherData.temperature}</li>
              <li>Humidity:{WeatherData.humidity}%</li>
              <li>wind:{WeatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = `london`;
    let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return `App is Loading...`;
  }
}
