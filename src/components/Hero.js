import { useState, useEffect } from 'react';
import useFetch from './../utilities/toolbelt';
import { API_KEY } from './../utilities/api';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import question from './../assets/question-mark.svg'

const Hero = () => {
	const { get } = useFetch('https://api.themoviedb.org/3/movie/');
	const [movies, setMovies] = useState([]);
	// const [activeSlide, setActiveSlide] = useState(0)

	useEffect(() => {
		get(`popular?api_key=${API_KEY}&language=en-US&page=1`)
			.then(data => {
				setMovies(data.results);
				console.log(data.results);
			})
			.catch(error => console.log(error));
	}, []);

	const posterPaths = movies.map(movie => movie.backdrop_path);

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		// beforeChange: (current, next) => setActiveSlide(next),
		// initialSlide: activeSlide,
	};

	return (
		<section className="hero">
			<section className="hero">
				<Slider {...sliderSettings}>
					{/* the c=slice only returns the first 3 items of the array so it is not random but I beliebe the image of the poster change over time as new movies come? 
          
          GPT also gives me a solution whcih coms from the lodash library and a way to return random index cfrom the movie array. I copied code on the bottom*/}
					{posterPaths.slice(0, 3).map((path, index) => {
						const movie = movies[index];
						const truncatedText = movie.overview.slice(0, 140) + '...';
						return (
							<div key={`poster-${index}`} className="hero-image-container">
								<div className="hero-info">
									<h2 className="hero-info-movie-title">{movie.title}</h2>
									<p className="hero-info-movie-description">{truncatedText}</p>
									<div className="hero-info-button-container">
										<button className="hero-info-button">
											<Link
												to={{
													pathname: '/movieDetails',
													search: `?movieId=${movie.id}`,
												}}
											>
												More Info
											</Link>
										</button>
									</div>
								</div>
								<img
									src={`https://image.tmdb.org/t/p/w1280/${path}`}
									alt={`Movie Poster ${index + 1}`}
									className="hero-image"
								/>
							</div>
						);
					})}
				</Slider>
			</section>

			{/* import _ from 'lodash';

const randomMovies = _.sampleSize(movies, 3);

<Slider {...sliderSettings}>
  {randomMovies.map((movie) => (
    <div key={movie.id} className='hero-image-container'>
      <div className='hero-info'>
        <h2 className='hero-movie-title'>{movie.title}</h2>
        <p className='hero-movie-description'>{movie.overview}</p>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
        alt={movie.title}
        className='hero-image'
      />
    </div>
  ))}
</Slider>
 */}
		</section>
	);
};

export default Hero;
