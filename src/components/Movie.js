import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import star from "../assets/star.svg";
import starToggle from "../assets/star-toggle.svg";
import loadingSpinner from "./../assets/loading-spinner.gif";

import posterUnavailable from "./../assets/poster-unavailable.png";

import {
  shortenOverview,
  formatReleaseYear,
  formatRating,
  formatRuntime,
} from "./../utilities/toolbelt";

import { getSingleMovie } from "./../utilities/api";

const Movie = ({ id, className, isFavouritePage, isStarred, onToggleStar }) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStarredState, setIsStarredState] = useState(isStarred);

  useEffect(() => {
    setIsLoading(true);
    getSingleMovie(id)
      .then((data) => {
        setMovieDetails(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const storedIsStarred = localStorage.getItem(`isStarred-${id}`);
    if (storedIsStarred !== null) {
      setIsStarredState(JSON.parse(storedIsStarred));
    }
  }, [id]);

  const toggleStar = () => {
    const updatedIsStarred = !isStarredState;
    setIsStarredState(updatedIsStarred);

    if (isFavouritePage) {
      onToggleStar();
    } else {
      if (!updatedIsStarred) {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        const updatedFavorites = storedFavorites.filter(
          (movie) => movie.id !== id
        );
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      } else {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        if (
          storedFavorites &&
          storedFavorites.find((movie) => movie.id === id)
        ) {
          setIsStarredState(false);
          return;
        }
        const favoriteMovie = { id, poster_path, title };
        const updatedFavorites = storedFavorites
          ? [...storedFavorites, favoriteMovie]
          : [favoriteMovie];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
    }

    localStorage.setItem(`isStarred-${id}`, JSON.stringify(updatedIsStarred));
  };

  const starImage = isStarredState ? starToggle : star;
  const starClass = isStarredState ? "star-toggle" : "star-image";

  const { title, release_date, vote_average, runtime, overview, poster_path } =
    movieDetails;

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
        <img
          key={id}
          src={posterUnavailable}
          alt="placeholder poster"
          className="image-wrapper"
        ></img>
      )}
      <div className="movie-details">
        <h2>{title}</h2>
        <div className="movie-details-year-rating">
          <p>{release_date && formatReleaseYear(release_date)}</p>
          <p>{formatRating(vote_average)}</p>
          <p>{runtime > 0 ? formatRuntime(runtime) : null}</p>
        </div>
        <p>
          {overview && className === "individual-movie-container"
            ? shortenOverview(overview)
            : overview}
        </p>
        {className === "individual-movie-container" && (
          <button className="more-info-button">
            <Link to={{ pathname: "/movieDetails", search: `?movieId=${id}` }}>
              More Info
            </Link>
          </button>
        )}
        <button className="star-button">
          <img
            src={starImage}
            alt="star"
            className={starClass}
            onClick={toggleStar}
          />
        </button>
      </div>
    </article>
  );
};

export default Movie;
