import React from "react";

const default_img =
  "https://via.placeholder.com/200x300.png?text=samanehvj.com";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? default_img : movie.Poster;
  return (
    <div className="movie" key={movie.imdbID}>
      
      <div>
        <img
          width="200"
          src={poster}
          alt={movie.Title}
        />
      </div>
      <h2>{movie.Title}</h2>
    </div>
  );
};


export default Movie;