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
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}`,
    ); // données RAW
    const data = await response.json(); // transforme RAW en JSON
    console.log(data);
    return;
  } catch (err) {
    console.error(err);
  }
}
