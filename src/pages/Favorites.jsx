import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites-page">
        <h2>Favorites Page</h2>
        <div className="movie-grid">
          {favorites.map((movie, index) => (
            <MovieCard movie={movie} key={movie.id || `favorite-${index}`} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>Favorites Page</h2>
      <p>This is where your favorite items will be displayed.</p>
    </div>
  );
}
export default Favorites;
