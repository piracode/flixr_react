import React from 'react';
import flixrCamera from '../assets/camera.svg';
import tmdb from '../assets/tmdb.svg';

const About = () => {
	return (
		<section className="about-page">
			<h2>flixr</h2>
			<img src={flixrCamera} alt="camera" />
			<h3>Your Ultimate Movie Companion</h3>
			<p>
				At Flixr, we are passionate about movies and strive to bring you the
				best movie experience possible. Our team of movie enthusiasts has
				developed a movie database app that is both comprehensive and
				user-friendly.
			</p>
			<p>
				With Flixr, you can discover new movies, stay up to date on the latest
				releases, and find the perfect flick to watch on any given day.
			</p>
			<p>
				This product uses the TMDb API but is not endorsed or certified by TMDb.
			</p>
			<img src={tmdb} alt="tmdb-logo" className="tmdb-logo" />
		</section>
	);
};

export default About;
