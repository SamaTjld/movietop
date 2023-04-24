import React from "react";

function Card({ info }) {
  let img_path = "https://image.tmdb.org/t/p/w500";

  return (
    <a href={`/page/${info.id}`}>
      <div className="movie">
        <img src={img_path + info.poster_path} alt="" className="poster" />
        <ul className="movie-details">
          <li className="link">
            <h3>{info.title}</h3>
            <p>{info.vote_average}</p>
          </li>
        </ul>
      </div>
    </a>
  );
}

export default Card;
