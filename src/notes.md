# Introduction aux APIs — Exercice météo en JavaScript

## 1. C'est quoi une API ?

Une **API** (Application Programming Interface) est un point d'accès qui permet à ton programme de **demander des données ou des services** à un autre système — ici, un serveur météo.

Tu envoies une **requête HTTP** (comme quand ton navigateur charge une page), et le serveur te répond avec des **données JSON**.

Ça ressemble à ça schématiquement :

```
Ton code  →  requête HTTP  →  Serveur météo
Ton code  ←  réponse JSON  ←  Serveur météo
```

La réponse JSON ressemble à quelque chose comme :

```json
{
  "city": "Lille",
  "temperature": 12,
  "description": "Nuageux"
}
```

---

## 2. Ton premier appel API en JavaScript

Pour un exercice de cours, l'API **Open-Meteo** est idéale : elle est **gratuite et sans clé API**.

Voici un exemple complet en Node.js :

```js
// On récupère la météo actuelle à Lille
const response = await fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=50.63&longitude=3.06&current=temperature_2m,weathercode",
);

const data = await response.json();

console.log("Température :", data.current.temperature_2m, "°C");
console.log("Code météo  :", data.current.weathercode);
```

**Ce qui se passe ligne par ligne :**

- `fetch(url)` — envoie la requête HTTP GET à l'API
- `await` — attend que la réponse arrive (opération asynchrone)
- `.json()` — transforme la réponse brute en objet JavaScript utilisable
- `data.current.temperature_2m` — accède à la valeur dans le JSON reçu

---

## Les concepts clés à retenir

- **URL de l'API** — l'adresse du serveur (`https://api.open-meteo.com/...`)
- **Query params** — les paramètres dans l'URL après le `?` (`latitude=50.63`, etc.)
- **Réponse JSON** — le format de données standard des APIs
- **async/await** — indispensable car les appels réseau prennent du temps
