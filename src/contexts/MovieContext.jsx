import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    console.log("Adding favorite:", movie);
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorite = (movieId) => {
    console.log("Removing favorite with ID:", movieId);
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };
  const isFavorite = (movieId) => {
    console;
    return favorites.some((movie) => movie.id === movieId);
  };

  return (
    <MovieContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </MovieContext.Provider>
  );
};
