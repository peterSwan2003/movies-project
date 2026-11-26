import axios from "axios";
import { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import Pagination from "./Pagination";
const Add = () => {
  const [Searchvalue, setSearchvalue] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?s=${Searchvalue}&apikey=a7ba24b9&page=${currentPage}`,
      )
      .then((Response) => {
        if (Response.data.Search) {
          console.log(Response.data.Search);
          setMovies(Response.data.Search);
          setTotalPage(Math.ceil(Number(Response.data.totalResults) / 10));
        } else {
          setMovies([]);
          setTotalPage(0);
        }
      })
      .catch((error) => console.log(error));
  }, [Searchvalue, currentPage]);
  return (
    <div className="Add-page">
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            placeholder="search of a  movies"
            value={Searchvalue}
            onChange={(e) => setSearchvalue(e.target.value)}
          />
          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.imdbID}>{<ResultCard movie={movie} />}</li>
              ))}
              <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                setCurrentPage={setCurrentPage}
              />
            </ul>
          )}{" "}
        </div>
        {movies.length == 0 && (
          <p>search on the movies and add to your listes</p>
        )}
      </div>
    </div>
  );
};

export default Add;
