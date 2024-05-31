import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function searchCity() {
    let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a City"
        autoFocus="on"
        onChange={handleCityChange}
      />
      <input type="submit" value="Search" />
    </form>
  );
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.tempx,
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0],
    });
  }
  if (WeatherData.ready) {
    return (
      <div className="Weather">
        {form} <WeatherInfo data={WeatherData} />
      </div>
    );
  } else {
    searchCity();
    return `App is Loading...`;
  }
}
