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

// =========================================== DOM ===============================================

Object.keys(cities).forEach((city) => {
  document
    .querySelector(`#${city.toLowerCase()}`)
    .addEventListener("click", () => {
      renderOpenMeteo(city);
    });
});

// =========================================== API ===============================================

/**
 * Lance la requête vers l'API et remplace les données une fois obtenue.
 */
const renderOpenMeteo = async (city) => {
  // TODO
  const data = await callOpenMeteoAPI(cities[city].lat, cities[city].lon);
  const currentWeather = document.querySelector(".current-weather");
  currentWeather.textContent = data.current.temperature_2m;
};

// =====================================================================
// - - - - - - - - - - - E X E C U T I O N - - - - - - - - - - - - - - -
// =====================================================================

renderOpenMeteo(city);
