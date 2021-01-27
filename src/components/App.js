import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import Footer from "./Footer";

const api_key = 'f8dbbb3d';
const api_url = "https://www.omdbapi.com/?s=2020&apikey=" + api_key; 

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
      });
  }, []);

  const search = (searchMovie) => {
    fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=${api_key}`)
      .then(response => response.json())
      .then(result => setMovies(result.Search))
  };
    
  return (
     <div className="App">
      <Header text="SAMANEH MOVIE DIRECTORY (OMDBAPI)" />
      <Search search={search} />
      <div className="movies">
        {
          movies.map((movie, index) => (
            <Movie key={index} movie={movie} />
            
          ))
          
        }
      </div>
      <Footer text="© 2021. All rights reserved Samaneh Vajdi " />

    </div>
  );
};

export default App;
