import React, { useState } from "react";

const Movie = ({ id, poster_path, title }) => {
  const [isStarred, setIsStarred] = useState(false);

  const toggleStar = () => {
    setIsStarred(!isStarred);
    if (!isStarred) {
      // add movie to favorites if it's not already in favorites
      const favoriteMovie = { id, poster_path, title };
      const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
      const updatedFavorites = storedFavorites
        ? [...storedFavorites, favoriteMovie]
        : [favoriteMovie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const starClass = isStarred ? "star-toggle" : "star-image";

  return (
    <article className="individual-movie-container">
      <img
        key={id}
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
        className="image-wrapper"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        className={starClass}
        onClick={toggleStar}
      >
        <style>
          {`.star-image,
            .star-toggle {
              fill: transparent;
              stroke: #8E8EED;
              stroke-width: 50;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 133.3333;
            }
            .star-toggle .st0 {
              fill: #8E8EED;
            }`}
        </style>
        <path
          className="st0"
          d="M457.7,117l58.7,117.3c8,16.3,29.3,32,47.3,35L670,287c68,11.3,84,60.7,35,109.3L622.3,479
          c-14,14-21.7,41-17.3,60.3l23.7,102.3c18.7,81-24.3,112.3-96,70l-99.7-59c-18-10.7-47.7-10.7-66,0l-99.7,59
          c-71.3,42.3-114.7,10.7-96-70L195,539.3c4.3-19.3-3.3-46.3-17.3-60.3L95,396.3c-48.7-48.7-33-98,35-109.3l106.3-17.7
          c17.7-3,39-18.7,47-35L342,117C374,53.3,426,53.3,457.7,117z"
        />
      </svg>
    </article>
  );
};

export default Movie;
