/**
 * appel l'API Open-Meteo
 * Doc : https://open-meteo.com/en/docs
 * @param {number} lat latitude
 * @param {number} lon longitude
 * @returns retourne les données fournies par l'API. (pour données actuelles, appeler current_weather)
 */
export async function callOpenMeteoAPI(lat, lon) {
  try {
    // TODO `https://api.open-meteo.com/`
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`,
    ); // données RAW / consulter la doc pour avoir l'URL
    const data = await response.json(); // transforme RAW en JSON
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}

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

// ============================================= API =============================================

/**
 * Lance la requête vers l'API et remplace les données une fois obtenue.
 */
export let renderOpenMeteo = async (city) => {
  // TODO
  const data = await callOpenMeteoAPI(cities[city].lat, cities[city].lon);
  const currentWeather = document.querySelector(".current-weather");
  currentWeather.textContent = data.current.temperature_2m;
};
