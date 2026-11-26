import { useMovieContext } from "./context/GlobalContext";
import * as actions from "./context/ActionType";
function MovieControle({ movie, type }) {
  const MovieContext = useMovieContext();
  return (
    <div className="inner-card">
      {type === "watchlist" && (
        <>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            className="ctrl-btn to-watched"
          >
            Movie To Watched
          </button>

          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROME_WATCHLIST,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn delete"
          >
            Delete For List
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.MOVIE_TO_WATCHLIST,
                payload: movie,
              })
            }
            className="ctrl-btn to-watchlist"
          >
            Move To Watchlist
          </button>

          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn delete"
          >
            Delete For List
          </button>
        </>
      )}{" "}
    </div>
  );
}

export default MovieControle;
