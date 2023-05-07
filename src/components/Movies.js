import { useState, useEffect } from 'react';
import useFetch from './../utilities/toolbelt';
import { API_KEY } from './../utilities/api';
import Movie from '../components/Movie';

const Movies = ({ chosenCategory }) => {
	const { get } = useFetch('https://api.themoviedb.org/3/movie/');
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		get(`${chosenCategory}?api_key=${API_KEY}&language=en-US&page=1`)
			.then(data => {
				setMovies(data.results);
				console.log(data.results);
			})
			.catch(error => console.log(error)); /////// what do i do with this error? should i display it? ////////
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
