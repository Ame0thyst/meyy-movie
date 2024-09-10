import React, { useState } from "react";
import Movie from "./Movie";
import DefaultList from "./DefaultList";
import "../App.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  async function searchMovie(query) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5efecce7477608af826824846a906ee4&query=${query}`
      );

      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
        setError("");
      } else {
        setError("An error occurred while fetching movies.");
        setMovies([]);
      }
    } catch (error) {
      setError("An error occurred while fetching movies.");
      setMovies([]);
    }
  }

  function handleSearch(e) {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      searchMovie(query);
    } else {
      setMovies([]);
      setError("");
    }
  }

  return (
    <div>
      <form action="" className="form">
        <h1>Movie App</h1>

        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={searchQuery}
          className="search-input"
        />
      </form>
      {/* <form action="" className="form flex items-center">
  <a href="https://github.com/Ame0thyst" target="_blank" rel="noopener noreferrer">
  <img
  src="#" 
  alt="Company Logo"
  className="company-logo transition-all duration-300 ease-in-out"
/>


  </a>

  <input
    type="text"
    placeholder="Search"
    onChange={handleSearch}
    value={searchQuery}
    className="search-input ml-4"
  />
</form> */}

      {error && <p>{error}</p>}

      {searchQuery ? <Movie movies={movies} /> : <DefaultList />}
    </div>
  );
};

export default SearchBar;