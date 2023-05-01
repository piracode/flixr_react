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

  // useEffect(() => {
  //   debugger;
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // }, [favorites]);

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
        />
      ))}
    </div>
  );
};

export default Favourites;
