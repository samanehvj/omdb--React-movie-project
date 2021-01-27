import React, {useState} from "react";
import { useParams } from "react-router";

const default_img =
  "https://via.placeholder.com/200x300.png?text=samanehvj.com";


const MovieDetail = () => {

  const [movie, setMovie] = useState([]);

  let { id } = useParams();
  const api_key = 'f8dbbb3d';

  fetch(`https://www.omdbapi.com/?i=${id}&apikey=${api_key}`)
  .then(response => response.json())
  .then(result => setMovie(result)) 
  
  const poster = movie.Poster === "N/A" ? default_img : movie.Poster;
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
      <b>IMDb Rate: {movie.imdbRating}</b>
      <br />
      <b>Year: {movie.Year}</b>
      <br />
      <b>Genre: {movie.Genre}</b>
      <br />
      <b>Released: {movie.Released}</b>
      <br />
      <b>Runtime: {movie.Runtime}</b>
       <br />
      <b>Director: {movie.Director}</b>
      <br />
      <b>Actors: {movie.Actors}</b>


    </div>
  );
};


export default MovieDetail;