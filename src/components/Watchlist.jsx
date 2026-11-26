import { useMovieContext } from "./context/GlobalContext";
import MovieCard from "./MovieCard";
import "./Files-Css/Watch.css";
const Watchlist = () => {
  const MovieContext = useMovieContext();
  return (
    <div className="watch-list">
      <div className="container">
        <div className="main-heading">
          <h3>My WatchList</h3>
          <span className="movie-count">
            {MovieContext.watchlist.length}_
            {MovieContext.watchlist.length === 1 ? "movie" : "movies"}
          </span>
        </div>
        {MovieContext.watchlist.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watchlist.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">no movies in your list , add some!</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
