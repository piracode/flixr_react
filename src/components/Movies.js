import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

import { getMovies } from './../utilities/api';

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
					return (
						<div className="individual-movie">
							<Movie
								key={movie.id}
								className="individual-movie-container"
								id={movie.id}
							/>
						</div>
					);
				})}
			</section>
		);
	} else {
		return <p className="error-message">Error: Unable to retrieve movies.</p>;
	}
};

export default Movies;
