import posterUnavailable from './../assets/poster-unavailable.png';

const Movie = ({ id, poster_path, title }) => {
	return (
		<article className="individual-movie-container">
			{poster_path !== null ? (
				<img
					key={id}
					src={`https://image.tmdb.org/t/p/w300${poster_path}`}
					alt={title}
					className="image-wrapper"
				></img>
			) : (
				<img key={id} src={posterUnavailable} alt="placeholder poster" className="image-wrapper"></img>
			)}
			{/* add star image here!!!! */}
		</article>
	);
};

export default Movie;
