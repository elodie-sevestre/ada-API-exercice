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

const weatherDescriptions = {
  0: "Ciel dégagé",
  1: "Principalement dégagé",
  2: "Partiellement nuageux",
  3: "Couvert",
  45: "Brouillard",
  48: "Brouillard givrant",
  51: "Bruine légère",
  53: "Bruine modérée",
  55: "Bruine dense",
  56: "Bruine verglaçante légère",
  57: "Bruine verglaçante dense",
  61: "Pluie légère",
  63: "Pluie modérée",
  65: "Pluie forte",
  66: "Pluie verglaçante légère",
  67: "Pluie verglaçante forte",
  71: "Neige légère",
  73: "Neige modérée",
  75: "Neige forte",
  77: "Grains de neige",
  80: "Averses légères",
  81: "Averses modérées",
  82: "Averses violentes",
  85: "Averses de neige légères",
  86: "Averses de neige fortes",
  95: "Orage",
  96: "Orage avec grêle légère",
  99: "Orage avec grêle forte",
};

// =========================================== API ===============================================

/**
 * Lance la requête vers l'API et remplace les données une fois obtenue.
 */
const renderOpenMeteo = async (city) => {
  // TODO
  const data = await callOpenMeteoAPI(cities[city].lat, cities[city].lon);
  const currentWeather = document.querySelector(".current-weather");
  currentWeather.textContent = `${weatherDescriptions[data.current.weather_code]} ${data.current.temperature_2m}°C`;
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
