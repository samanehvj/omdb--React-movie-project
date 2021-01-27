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
    .then(result => setMovie(result.Search)) 
    
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


export default MovieDetail;