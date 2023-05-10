import { useState } from 'react';

export default function useFetch(baseUrl) {
	const [loading, setLoading] = useState(true);

	function get(url) {
		return new Promise((resolve, reject) => {
			fetch(baseUrl + url)
				.then(response => response.json())
				.then(data => {
					if (!data) {
						setLoading(false);
						return reject(data);
					}
					setLoading(false);
					resolve(data);
				})
				.catch(error => {
					setLoading(false);
					reject(error);
				});
		});
	}

	return { get, loading };
}

export function shortenOverview(overview) {
	if (overview.length > 100) {
		return overview.slice(0, 100) + '...';
	} else {
		return overview;
	}
}

export function formatReleaseYear(date) {
	return date.slice(0, 4);
}

export function formatRating(rating) {
	return Math.ceil(rating * 10) + '%';
}

export function formatRuntime(runtime) {
	if (runtime < 60) {
		return runtime + 'm';
	} else {
		return Math.floor(runtime / 60) + 'h' + (runtime % 60) + 'm';
	}
}
