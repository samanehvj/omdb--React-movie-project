import React, { useState } from "react";

const Search = (props) => {
  const [searchMovie, setSearchMovie] = useState("");
  
  const searchMovieName = (event) => {
    setSearchMovie(event.target.value);
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchMovie);
  }

  return (
      <form className="search">
        <input
          value={searchMovie}
          onChange={searchMovieName}
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;