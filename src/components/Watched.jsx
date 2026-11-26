import { useMovieContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";
import "./Files-Css/Watch.css";
function Watched() {
  const MovieContext = useMovieContext();
  return (
    <div className="watched">
      <div className="container">
        <div className="main-heading">
          <h3>My Watched</h3>
          <span className="novie-count">
            {MovieContext.watched.length}
            {MovieContext.watched.length === 1 ? "movie" : "movies"}
          </span>
        </div>
        {MovieContext.watched.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">no movies in your list , add some!</h2>
        )}
      </div>
    </div>
  );
}

export default Watched;
