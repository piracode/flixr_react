import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Movie from './../components/Movie';
import { getSingleMovie } from './../utilities/api';

const MovieDetails = () => {
	const location = useLocation();
	const movieId = new URLSearchParams(location.search).get('movieId');
	const [movieBgPath, setMovieBgPath] = useState('');
	const [movieTitle, setMovieTitle] = useState('');
	// const [genres, setGenres] = useState([]);

	useEffect(() => {
		getSingleMovie(movieId).then(data => {
			setMovieBgPath(data.backdrop_path);
			setMovieTitle(data.title);
		});
	}, []);

	return (
		<section className="movie-details-page">
			{movieBgPath && (
				<div className="movie-details-backdrop-container">
					<img
						src={`https://image.tmdb.org/t/p/w1280${movieBgPath}`}
						alt={movieTitle}
						className="movie-details-backdrop"
					/>
					<div className="movie-details-backdrop-overlay"></div>
				</div>
			)}
			<Movie id={movieId} className="movie-details-box" />
		</section>
	);
};

export default MovieDetails;
