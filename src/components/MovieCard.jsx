import MovieControle from "./MovieControle";
function MovieCard({ movie, type }) {
  return (
    <div className="movieCard">
      <div className="overlay"></div>
      {movie.Poster ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="filter-poster"></div>
      )}
      <MovieControle movie={movie} type={type} />
    </div>
  );
}

export default MovieCard;
