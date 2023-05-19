import React from "react";
import "./style.css";

const City = ({ weatherData }) => {
  const currentDate = new Date();

  return weatherData ? (
    <div className="weather-info">
      <p className="weather-description">
        {weatherData.description.toUpperCase()}
      </p>
      <p className="weather-cityname">{weatherData.name}</p>
      <p className="weather-date">{currentDate.toUTCString().slice(5, 16)}</p>
      <p className="weather-temp">{weatherData.temp} &deg; c</p>
      <p className="weather-icon">
        <img
          alt="icon"
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        />
      </p>
    </div>
  ) : (
    <div>City Not Found</div>
  );
};

export default City;
