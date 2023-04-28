export const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;
const API_URL = 'https://api.themoviedb.org/3/movie/';

export const getMovies = async chosenCategory => {
	const response = await fetch(`${API_URL}${chosenCategory}?api_key=${API_KEY}&language=en-US&page=1`);
	const data = await response.json();
	return data.results;
};
