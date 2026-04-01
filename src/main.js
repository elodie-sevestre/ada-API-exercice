// ========================================== IMPORTS ============================================

import "./style.css";
import { callOpenMeteoAPI } from "./calling/open-meteo";
import { cities, weatherData } from "./ressources/data";

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
