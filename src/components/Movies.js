import { useState, useEffect } from "react";
import useFetch from "./../utilities/toolbelt";
import { API_KEY } from "./../utilities/api";
import Movie from "./Movie";

const Movies = ({ chosenCategory }) => {
  const { get } = useFetch("https://api.themoviedb.org/3/movie/");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  useEffect(() => {
    get(`${chosenCategory}?api_key=${API_KEY}&language=en-US&page=1`)
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch((error) => console.log(error));
  }, [chosenCategory]);

  if (movies) {
    return (
      <section className="movies-container">
        {movies.map((movie) => {
          return (
            <Movie
              id={movie.id}
              key={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              onAddToFavorites={() => handleAddToFavorites(movie)}
            />
          );
        })}
      </section>
    );
  } else {
    return <p className="error-message">Error: Unable to retrieve movies.</p>;
  }
};

export default Movies;
