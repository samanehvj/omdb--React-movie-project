import React from "react";

const default_img =
  "https://via.placeholder.com/200x300.png?text=samanehvj.com";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? default_img : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          src={poster}
        />
      </div>
      
    </div>
  );
};


export default Movie;