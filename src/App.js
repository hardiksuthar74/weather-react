import { useState, useEffect } from "react";
import "./App.css";
import City from "./components/city/City";
import Info from "./components/info/Info";

function App() {
  const [data, setData] = useState("");
  const [cityName, setCityName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          cityName ? cityName : "mumbai"
        }&appid=2e988d3a4724ac6dfba3e673df64d018`
      );
      const data = await response.json();

      const weatherData = {
        name: data.name,
        temp: Math.floor(data.main.temp - 273.14),
        feelsLike: Math.floor(data.main.feels_like - 273.14),
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        windSpeed: (data.wind.speed * 3600) / 1000,
      };
      setData(weatherData);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage(
        "City not found. Please check the spelling and try again."
      );
    }
    setCityName("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCityName(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    console.log(cityName);
    setCityName("");
  };

  return (
    <div className="App">
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={cityName}
        />
      </form>
      <div className="error-block">
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>

      <div className="app-content">
        <City weatherData={data} />
        <Info weatherData={data} />
      </div>
    </div>
  );
}

export default App;
