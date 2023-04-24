import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Header from "../components/header/Header";

function Main() {
  let API_KEY = "&api_key=05ecd5cf46998eec850dd57f8eae342c";
  let base_url = "https://api.themoviedb.org/3";
  let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_KEY;

  const [film, setFilm] = useState([]);

  useEffect(() => {
    axios.get(url).then((data) => {
      setFilm(data.data.results);
      console.log(data.data.results);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        {film.map((item) => {
          return <Card info={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Main;
