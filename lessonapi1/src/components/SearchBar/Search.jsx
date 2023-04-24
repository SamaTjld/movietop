import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  let img_path = "https://image.tmdb.org/t/p/w500";

  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=05ecd5cf46998eec850dd57f8eae342c&query=" +
    search;

  const searchMovie = async (evt) => {
    if (evt.key === "Enter") {
      const response = await axios.get(url);
      setMovies(response.data.results);
      setSearch("");
    }
  };
  const handleSearch = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=05ecd5cf46998eec850dd57f8eae342c&query=${search}`
    );
    setMovies(response.data.results);
    setSearch("");
  };

  return (
    <div className="input_cont">
      <div className="input_cont">
        <input
          type="text"
          placeholder="Search movie"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          onKeyPress={searchMovie}
          className="inputText"
        />
        <button onClick={handleSearch} className="btn_search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img src={img_path + movie.poster_path} alt="" className="poster" />

            <ul className="movie-details">
              <li className="link">
                <h3>{movie.title}</h3>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
