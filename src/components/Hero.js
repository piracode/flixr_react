import { useState, useEffect } from "react";
import useFetch from "./../utilities/toolbelt";
import { API_KEY } from "./../utilities/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const { get } = useFetch("https://api.themoviedb.org/3/movie/");
  const [movies, setMovies] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    get(`popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((data) => {
        setMovies(data.results.slice(0, 3));
      })
      .catch((error) => console.log(error));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setActiveSlide(next),
    initialSlide: activeSlide,
  };

  return (
    <section className="hero">
      <Slider {...sliderSettings}>
        {movies.map((movie) => (
          <div key={movie.id} className="hero-image-container">
            <div className="hero-info">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-description">{movie.overview}</p>
              <p className="movie-rating">
                <span className="label">Rating:</span>{" "}
                {movie.vote_average.toFixed(1)}
              </p>
              <p className="movie-release-date">
                <span className="label">Release Date:</span>{" "}
                {movie.release_date}
              </p>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
              alt={`Movie Poster ${movie.id}`}
              className="hero-image"
            />
          </div>
        ))}
      </Slider>
      <div className="slider-buttons">
        {movies.map((movie, index) => (
          <button
            key={movie.id}
            className={`slider-button ${activeSlide === index ? "active" : ""}`}
            onClick={() => setActiveSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
