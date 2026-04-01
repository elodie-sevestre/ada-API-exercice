// ========================================= VARIABLES ===========================================

export const cities = {
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

export const weatherData = {
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
