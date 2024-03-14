
//const BASE_URL = 'http://10.0.2.2:8080/api/movies';
const BASE_URL = 'http://192.168.1.107:8080/api/movies';

export const fetchMoviesByFilters = async (genre, releaseYear, actor) => {

  const url = `${BASE_URL}/filtered?genre=${encodeURIComponent(genre)}&releaseYear=${encodeURIComponent(releaseYear)}&actor=${encodeURIComponent(actor)}`;
  console.log(`Requesting URL: ${url}`);

  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
