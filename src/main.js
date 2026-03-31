// ========================================== IMPORTS ============================================

import "./style.css";
import { callOpenMeteoAPI } from "./calling/open-meteo";

// ========================================= VARIABLES ===========================================

const cities = {
  Nantes: {
    lat: 47.2184,
    lon: -1.5536,
  },
  Paris: {
    lat: 48.8566,
    lon: 2.3522,
  },
  Rennes: {
    lat: 48.1173,
    lon: -1.6778,
  },
  Caen: {
    lat: 49.1829,
    lon: -0.3707,
  },
  Marseille: {
    lat: 43.2965,
    lon: 5.3698,
  },
};

const weatherIcons = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  53: "🌦️",
  55: "🌧️",
  56: "🌧️",
  57: "🌧️",
  61: "🌧️",
  63: "🌧️",
  65: "🌧️",
  66: "🌨️",
  67: "🌨️",
  71: "❄️",
  73: "❄️",
  75: "❄️",
  77: "🌨️",
  80: "🌦️",
  81: "🌧️",
  82: "⛈️",
  85: "🌨️",
  86: "🌨️",
  95: "⛈️",
  96: "⛈️",
  99: "⛈️",
};

// =========================================== API ===============================================

/**
 * Lance la requête vers l'API et remplace les données une fois obtenue.
 */
const renderOpenMeteo = async (city) => {
  // TODO
  const data = await callOpenMeteoAPI(cities[city].lat, cities[city].lon);
  const currentWeather = document.querySelector(".current-weather");
  currentWeather.textContent = `${weatherIcons[data.current.weather_code]} ${data.current.temperature_2m}°C`;
  const listItems = document.querySelectorAll("li");
  data.daily.time.forEach((day, index) => {
    listItems[index].textContent =
      `${new Date(day).toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short", year: "numeric" })} : ${weatherIcons[data.daily.weather_code[index]]} ${data.daily.temperature_2m_min[index]} / ${data.daily.temperature_2m_max[index]}°C`;
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
