// ========================================== IMPORTS ============================================

import "./style.css";
import { callOpenMeteoAPI } from "./calling/open-meteo";

// ========================================= VARIABLES ===========================================

const cities = {
  Nantes: {
    lat: 47.2184,
    lon: -1.5536,
  },
  "Mont-de-Marsan": {
    lat: 43.8902,
    lon: -0.4971,
  },
  Dumes: {
    lat: 43.7056,
    lon: -0.584,
  },
  "Saint-sever": {
    lat: 43.7573,
    lon: -0.5718,
  },
  Lorient: {
    lat: 47.7482,
    lon: -3.3718,
  },
  Ancenis: {
    lat: 47.3667,
    lon: -1.1667,
  },
  Monnières: {
    lat: 47.1319,
    lon: -1.3565,
  },
  "Saint-Jean-de-Boiseau": {
    lat: 47.1942,
    lon: -1.7248,
  },
};

//! faire un switch case pour weather data ???

const weatherData = {
  0: { icon: "☀️", description: "Ciel dégagé" },
  1: { icon: "🌤️", description: "Principalement dégagé" },
  2: { icon: "⛅", description: "Partiellement nuageux" },
  3: { icon: "☁️", description: "Couvert" },
  45: { icon: "🌫️", description: "Brouillard" },
  48: { icon: "🌫️", description: "Brouillard givrant" },
  51: { icon: "🌦️", description: "Bruine légère" },
  53: { icon: "🌦️", description: "Bruine modérée" },
  55: { icon: "🌧️", description: "Bruine dense" },
  56: { icon: "🌧️", description: "Bruine verglaçante légère" },
  57: { icon: "🌧️", description: "Bruine verglaçante dense" },
  61: { icon: "🌧️", description: "Pluie légère" },
  63: { icon: "🌧️", description: "Pluie modérée" },
  65: { icon: "🌧️", description: "Pluie forte" },
  66: { icon: "🌨️", description: "Pluie verglaçante légère" },
  67: { icon: "🌨️", description: "Pluie verglaçante forte" },
  71: { icon: "❄️", description: "Neige légère" },
  73: { icon: "❄️", description: "Neige modérée" },
  75: { icon: "❄️", description: "Neige forte" },
  77: { icon: "🌨️", description: "Grains de neige" },
  80: { icon: "🌦️", description: "Averses légères" },
  81: { icon: "🌧️", description: "Averses modérées" },
  82: { icon: "⛈️", description: "Averses violentes" },
  85: { icon: "🌨️", description: "Averses de neige légères" },
  86: { icon: "🌨️", description: "Averses de neige fortes" },
  95: { icon: "⛈️", description: "Orage" },
  96: { icon: "⛈️", description: "Orage avec grêle légère" },
  99: { icon: "⛈️", description: "Orage avec grêle forte" },
};
// =========================================== API ===============================================

/**
 * Lance la requête vers l'API et remplace les données une fois obtenue.
 */
const renderOpenMeteo = async (city) => {
  // TODO
  const data = await callOpenMeteoAPI(cities[city].lat, cities[city].lon);

  const currentWeather = document.querySelector(".current-weather");
  currentWeather.textContent = `${weatherData[data.current.weather_code].icon} 
  ${weatherData[data.current.weather_code].description}  
  ${data.current.temperature_2m}°C`;

  const listItems = document.querySelectorAll("li");
  data.daily.time.slice(1, 6).forEach((day, index) => {
    listItems[index].textContent =
      `${new Date(day).toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short", year: "numeric" })} :
       ${weatherData[data.daily.weather_code[index]].icon}  
       ${weatherData[data.daily.weather_code[index]].description} : min ${data.daily.temperature_2m_min[index]}°C 
        / max ${data.daily.temperature_2m_max[index]}°C`;
  });
};

// =========================================== DOM ===============================================

Object.keys(cities).forEach((city) => {
  document
    .querySelector(`#${city.toLowerCase()}`)
    .addEventListener("click", () => {
      renderOpenMeteo(city);
    });
});

// =====================================================================
// - - - - - - - - - - - E X E C U T I O N - - - - - - - - - - - - - - -
// =====================================================================

renderOpenMeteo("Nantes");
