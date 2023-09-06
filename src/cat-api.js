const API_KEY =
  'live_N6klegjF848KpfanxeyaoKq3JEJ7KECHlsbyZcnFwpB6nH4wpMxdtUeaFll42J3A';
const BREED_URL = 'https://api.thecatapi.com/v1/breeds';
const CAT_URL = 'https://api.thecatapi.com/v1/images/search';

function fetchBreeds() {
  return fetch(`${BREED_URL}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(`${CAT_URL}?${breedId}&api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
