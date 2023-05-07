import React, { useState } from "react";
import star from "../assets/star.svg";
import starToggle from "../assets/star-toggle.svg";

const Movie = ({
  id,
  poster_path,
  title,
  isFavouritePage,
  isStarred,
  onToggleStar,
}) => {
  const [isStarredState, setIsStarredState] = useState(isStarred);

  const toggleStar = () => {
    const updatedIsStarred = !isStarredState;
    setIsStarredState(updatedIsStarred);

    if (isFavouritePage) {
      // Remove movie from favorites if the star is toggled off on the favorites page
      onToggleStar();
    } else {
      if (!updatedIsStarred) {
        // Remove movie from favorites if it's already in favorites
        const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        const updatedFavorites = storedFavorites.filter(
          (movie) => movie.id !== id
        );
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      } else {
        // Add movie to favorites if it's not already in favorites
        const favoriteMovie = { id, poster_path, title };
        const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
        const updatedFavorites = storedFavorites
          ? [...storedFavorites, favoriteMovie]
          : [favoriteMovie];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
    }
  };

  const starImage = isStarredState ? starToggle : star;
  const starClass = isStarredState ? "star-toggle" : "star-image";

  return (
    <article className="individual-movie-container">
      <img
        key={id}
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
        className="image-container"
      />
      <img
        src={starImage}
        alt="star"
        className={starClass}
        onClick={toggleStar}
      />
    </article>
  );
};

export default Movie;
