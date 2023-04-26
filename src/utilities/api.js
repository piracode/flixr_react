import { useState, useEffect } from 'react';
import useFetch from './toolbelt';

const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

////////////// BIA TESTING FETCH ///////////////////
export default function APICall({ category }) {
	const { get } = useFetch('https://api.themoviedb.org/3/movie/');
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		get(`${category}?api_key=${API_KEY}&language=en-US&page=1`)
			.then(data => {
				setMovies(data.results);
				console.log(movies);
			})
			.catch(error => console.log(error))
			.finally(() => console.log('done'));
	}, []);

	if (movies) {
		return (
			<section className="movies-container">
				{/* //should put the below into Movie and then import Movie into here */}
				{movies.map(movie => {
					return (
						<article className="individual-movie-container">
							<div>
								<img
									key={movie.id}
									src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									alt={movie.title}
								></img>
							</div>
							{/* add star image here!!!! */}
						</article>
					);
				})}
			</section>
		);
	}
}
