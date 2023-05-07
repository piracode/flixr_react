import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";

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
    <div className="favourites-container">
      <h1>Favourites</h1>
      {favorites.length === 0 && <p>You have no favorite movies yet.</p>}
      {favorites.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          isStarred={true} // Pass the isStarred prop as true
          onToggleStar={() => handleRemoveFavorite(movie.id)} // Pass a function to remove the movie from favourites
          isFavouritePage={true}
        />
      ))}
    </div>
  );
};

export default Favourites;
