import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import star from "../assets/star.svg";

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <section className="favourites-container">
      <h2>Favourites</h2>
      <div className="movies-container">
        {favorites.length === 0 && (
          <div className="no-favourites">
            <p>
              You have no favourite movies yet. Add favourite movies by clicking
              the <img className="fav-star" src={star} alt="star" /> on the
              movie cards.
            </p>
          </div>
        )}
        {favorites.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            isStarred={true} // Pass the isStarred prop as true
            onToggleStar={() => handleRemoveFavorite(movie.id)} // Pass a function to remove the movie from favourites
            isFavouritePage={true}
            className="individual-movie-container"
          />
        ))}
      </div>
    </section>
  );
};

export default Favourites;
