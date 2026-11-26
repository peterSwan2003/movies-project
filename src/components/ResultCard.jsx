import { useMovieContext } from "./context/GlobalContext";
import * as actions from "./context/ActionType";
import { useState } from "react";
const ResultCard = ({ movie }) => {
  const MovieContext = useMovieContext();
  const storedMovie = MovieContext.watchlist.find(
    (o) => o.imdbID === movie.imdbID,
  );
  const storedMovieWatched = MovieContext.watched.find(
    (o) => o.imdbID === movie.imdbID,
  );
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
      ? true
      : false;
  const watchedDisabled = storedMovieWatched ? true : false;
  const [clicked, setClicked] = useState("");

  return (
    <div className="parent">
      <div className="result-card">
        <div className="poster">
          {movie.Poster ? (
            <img src={movie.Poster} alt={movie.Title} />
          ) : (
            <div className="filter-poster"></div>
          )}
        </div>
        <div className="info">
          <div className="heading">
            <h3 className="title"> {movie.Title}</h3>
            {movie.Year ? <h4 className="releat">{movie.Year}</h4> : "-"}
          </div>
          <div className="controle">
            <button
              onClick={() => {
                MovieContext.MoviesDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHLIST,
                  payload: movie,
                });
                setClicked("watchlist");
              }}
              className={clicked ? "clicked1" : "btn"}
              disabled={watchlistDisabled}
            >
              {" "}
              Add to watchlist
            </button>
            <button
              onClick={() => {
                MovieContext.MoviesDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHED,
                  payload: movie,
                });
                setClicked("watched");
              }}
              className={clicked === "watched" ? "clicked2" : " btn"}
              disabled={watchedDisabled}
            >
              {" "}
              Add to watched
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
