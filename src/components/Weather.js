import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [flag, setFlag] = useState(false);
  const [fahrenheit, setFahrenheit] = useState(false);
  const [pos, setPos] = useState([35, 100]);
  const [meta, setMeta] = useState({});

  const setLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPos([position.coords.latitude, position.coords.longitude]);
        setFlag(!flag);
      });
    } else {
      setFlag(!flag);
    }
  };

  useEffect(() => {
    setLocation();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      const api = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${pos[0]}&lon=${pos[1]}`;
      const res = await fetch(api);
      const data = await res.json();
      setMeta(data);
    };
    flag ? fetchWeather() : '';
  }, [flag]);

  const handleMeter = () => {
    setFahrenheit(!fahrenheit);
    !fahrenheit
      ? (document.getElementById('meter').innerText = 'Celsius')
      : (document.getElementById('meter').innerText = 'Fahrenheit');
  };

  return (
    <div id="weather" className="d-flex flex-column">
      <div className="d-flex gap-sm pe-none user-select-none">
        <span>{meta.name}</span>
        <span>
          {meta.main &&
            (fahrenheit
              ? `${(meta.main.temp * 1.8 + 32).toFixed(1)}F`
              : `${meta.main.temp.toFixed(1)}°`)}
        </span>
      </div>
      <div className="d-flex gap-sm align-center pe-none user-select-none">
        {meta.weather && (
          <>
            {meta.weather[0].main}
            <img
              className="pe-none user-select-none"
              src={meta.weather[0].icon}
              alt="Weather"
              width="34"
            />
          </>
        )}
      </div>
      <div className="d-flex gap-sm relative">
        <span className="pe-none user-select-none">
          {meta.main &&
            (fahrenheit
              ? `High ${Math.round(meta.main.temp_max * 1.8 + 32)}F`
              : `High ${Math.round(meta.main.temp_max)}°`)}
        </span>
        <span className="pe-none user-select-none">
          {meta.main &&
            (fahrenheit
              ? `Low ${Math.round(meta.main.temp_min * 1.8 + 32)}F`
              : `Low ${Math.round(meta.main.temp_min)}°`)}
        </span>
        <button id="meter" onClick={handleMeter}>
          Fahrenheit
        </button>
      </div>
    </div>
  );
};
export default Weather;
