import { useEffect } from 'react';
import useFetch from './toolbelt';

const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

////////////// BIA TESTING FETCH ///////////////////
export default function TestAPI() {
	const { get } = useFetch('https://api.themoviedb.org/3/movie/');

	useEffect(() => {
		get(`popular?api_key=${API_KEY}&language=en-US&page=1`)
			.then(data => console.log(data))
			.catch(error => console.log(error))
			.finally(console.log('done'));
	}, []);
}
