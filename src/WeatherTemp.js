import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("metric");
  function convertImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function convertMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    let metricTemp = Math.round(props.celsius);
    return (
      <div className="weatherTempature">
        <span className="temperature">{metricTemp}</span>
        <span className="unit">
          <strong>°C</strong>|
          <a href="/" onClick={convertImperial}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let imperialTemp = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <div className="weatherTempature">
        <span className="temperature">{imperialTemp}</span>
        <span className="unit">
          <strong>°F</strong>|
          <a href="/" onClick={convertMetric}>
            °C
          </a>
        </span>
      </div>
    );
  }
}
