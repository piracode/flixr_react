import { useLocation } from 'react-router-dom';
import { searchMovies } from '../utilities/api';
import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

import errorImg from './../assets/pirate-error.svg';

const SearchResults = () => {
	const location = useLocation();
	const searchQuery = new URLSearchParams(location.search).get('query');
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		if (searchQuery) {
			searchMovies(searchQuery).then(data => {
				setMovies(data);
			});
		}
	}, [searchQuery]);

	if (movies.length > 0) {
		return (
			<>
				<h2 className="search__query-title">
					Search results for "{searchQuery}" :
				</h2>
				<section className="movies-container">
					{movies.map(movie => {
						return (
							<Movie
								key={movie.id}
								poster_path={movie.poster_path}
								title={movie.title}
							/>
						);
					})}
				</section>
			</>
		);
	} else {
		return (
			<div className="error-message">
				<h2>Argh! We couldn't find any treasure.</h2>
				<img src={errorImg} alt="error" />
				<p>We couldn't find any movies called "{searchQuery}"</p>
			</div>
		);
	}
};

export default SearchResults;
