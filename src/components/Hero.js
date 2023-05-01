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
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const posterPaths = movies.map((movie) => movie.backdrop_path);

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
        <div className="hero-image-container">
          <img
            src={`https://image.tmdb.org/t/p/w1280/${posterPaths[0]}`}
            alt="Movie Poster 1"
            className="hero-image"
          />
        </div>
        <div className="hero-image-container">
          <img
            src={`https://image.tmdb.org/t/p/w1280/${posterPaths[1]}`}
            alt="Movie Poster 2"
            className="hero-image"
          />
        </div>
        <div className="hero-image-container">
          <img
            src={`https://image.tmdb.org/t/p/w1280/${posterPaths[2]}`}
            alt="Movie Poster 3"
            className="hero-image"
          />
        </div>
      </Slider>
      <div className="slider-buttons">
        <button
          className={`slider-button ${activeSlide === 0 ? "active" : ""}`}
          onClick={() => setActiveSlide(0)}
        ></button>
        <button
          className={`slider-button ${activeSlide === 1 ? "active" : ""}`}
          onClick={() => setActiveSlide(1)}
        ></button>
        <button
          className={`slider-button ${activeSlide === 2 ? "active" : ""}`}
          onClick={() => setActiveSlide(2)}
        ></button>
      </div>
    </section>
  );
};

export default Hero;
