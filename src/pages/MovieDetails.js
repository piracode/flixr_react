import { useLocation } from 'react-router-dom';
import Movie from './../components/Movie';

const MovieDetails = () => {
	const location = useLocation();
	const movieId = new URLSearchParams(location.search).get('movieId');

	return (
		<section className="movie-details-page">
			<Movie id={movieId} className="movie-details-box" />
		</section>
	);
};

export default MovieDetails;
