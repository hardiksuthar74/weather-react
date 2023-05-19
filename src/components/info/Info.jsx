import React from "react";
import "./style.css";

const Info = ({ weatherData }) => {
  return (
    <div className="temp-info">
      <p>Feels like {weatherData.feelsLike} &deg; c</p>
      <p>Humidity {weatherData.humidity} %</p>
      <p>Wind Speed {weatherData.windSpeed} km/h</p>
    </div>
  );
};

export default Info;
