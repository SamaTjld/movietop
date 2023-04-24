import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const SinglePage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  let API_KEY = "?api_key=05ecd5cf46998eec850dd57f8eae342c";
  let base_url = "https://api.themoviedb.org/3";
  let url = base_url + "/movie/" + id + API_KEY;

  useEffect(() => {
    axios.get(url).then((data) => {
      setFilm(data.data);
    });
  }, [url]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{film.title}</h1>
      <p>{film.overview}</p>
      <img
        src={"https://image.tmdb.org/t/p/w500" + film.poster_path}
        alt={film.title}
      />
    </div>
  );
};

export default SinglePage;
