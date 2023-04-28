import { useState, useEffect } from 'react';
import { getMovies } from './../utilities/api';
import Movie from './Movie';

const Movies = ({ chosenCategory }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getMovies(chosenCategory).then(data => {
			setMovies(data);
		});
	}, [chosenCategory]);

	if (movies) {
		return (
			<section className="movies-container">
				{movies.map(movie => {
					return <Movie key={movie.id} poster_path={movie.poster_path} title={movie.title} />;
				})}
			</section>
		);
	} else {
		return <p className="error-message">Error: Unable to retrieve movies.</p>;
	}
};

export default Movies;
