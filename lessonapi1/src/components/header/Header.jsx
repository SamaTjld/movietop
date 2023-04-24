import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "&api_key=05ecd5cf46998eec850dd57f8eae342c";
  const base_url = "https://api.themoviedb.org/3";
  const arr = ["Popular", "Comedies", "Drama", "Theatre", "Kids"];

  const getData = async (movieType) => {
    let url = "";
    if (movieType === "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_KEY;
    } else if (movieType === "Comedies") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_KEY;
    } else if (movieType === "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10" +
        API_KEY;
    } else if (movieType === "Theatre") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_KEY;
    } else if (movieType === "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_KEY;
    }

    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <>
      <div>
        <ul className="header_cont">
          {arr.map((value) => {
            return (
              <li key={value}>
                <button
                  onClick={() => {
                    getData(value);
                  }}
                  className="btn"
                >
                  {value}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/page/${movie.id}`} className="movie-link">
            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="poster"
              />
              <ul className="movie-details">
                <li className="link">
                  <h3>{movie.title}</h3>
                  <p>{movie.vote_average}</p>
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
