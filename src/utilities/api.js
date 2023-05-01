export const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;
const API_URL = "https://api.themoviedb.org/3/movie/";
const SEARCH_API_URL = "https://api.themoviedb.org/3/search/movie";

export const getMovies = async (chosenCategory) => {
  const response = await fetch(
    `${API_URL}${chosenCategory}?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (searchQuery) => {
  const response = await fetch(
    `${SEARCH_API_URL}?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );
  const data = await response.json();
  return data.results;
};
