'use client';

import React, { useState, useEffect } from 'react';
import './CardWheather.css';

const translateDescription = (description) => {
  const translations = {
    "clear sky": "Ciel dégagé",
    "few clouds": "Quelques nuages",
    "scattered clouds": "Nuages dispersés",
    "broken clouds": "Nuages fragmentés",
    "shower rain": "Pluie torrentielle",
    "rain": "Pluie",
    "thunderstorm": "Orage",
    "snow": "Neige",
    "mist": "Brume",
    "light rain": "Pluie légère",
    "overcast clouds": "Nuageux",
    "moderate rain": "Pluie modérée",
  };

  return translations[description] || description;
};

const WeatherCard = ({ updateBackgroundImage }) => {
  const [weather, setWeather] = useState({
    city: 'Paris',
    temp: '',
    humidity: '',
    wind: '',
    description: '',
    icon: ''
  });
  const [city, setCity] = useState('Paris');
  const apiKey = "19ab687bfae649e0cd261fbad3b1594f";

  const fetchWeather = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => displayWeather(data));
  };

  const displayWeather = (data) => {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    const translatedDescription = translateDescription(description);
    
    setWeather({
      city: name,
      temp: `${temp}°C`,
      humidity: `Humidité: ${humidity}%`,
      wind: `Vitesse du vent: ${speed} km/h`,
      description: translatedDescription,
      icon: `https://openweathermap.org/img/wn/${icon}.png`,
    });

    // Appelle la fonction de mise à jour du background depuis le parent
    updateBackgroundImage(translatedDescription);
  };

  const handleSearch = () => {
    fetchWeather(city);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchWeather(city);
    }
  };

  useEffect(() => {
    fetchWeather('Paris');
  }, []);

  return (
    
<div class="outer">
  
  <div class="card">
    <div class="ray"></div>
        
            <div className="search">
              <input
                type="text"
                className="search-bar"
                placeholder="Entrez le nom de la ville"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSearch}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
              </button>
            </div>
            <div className="weather-info">
              <h2 className="city">Météo à {weather.city}</h2>
              <div className= "info">
              
                  <div className="temp">{weather.temp}</div>
                  <div className="flex">
                    <img src={weather.icon} alt="weather icon" className="icon" />
                    <div className="description">{weather.description}</div>
                  </div>
                  <div className="humidity">{weather.humidity}</div>
                  <div className="wind">{weather.wind}</div>
              </div>
            </div>
  
  </div>
</div>



  );
};

export default WeatherCard;
