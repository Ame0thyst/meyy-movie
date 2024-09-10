// import React, { useEffect, useState } from "react";
// import "../App.css";

// const DefaultList = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     getMovies();
//   }, []);

//   async function getMovies() {
//     try {
//       const response = await fetch(
//         "https://api.themoviedb.org/3/discover/movie?api_key=5efecce7477608af826824846a906ee4",
//         {
//           headers: {
//             "Content-type": "application/json",
//           },
//           method: "GET",
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setMovies(data.results);
//       } else {
//         console.error("Failed to fetch movies.");
//       }
//     } catch (error) {
//       console.error("An error occurred while fetching movies:", error);
//     }
//   }

//   return (
//     <div className="MovieList">
//       {movies.map((movie) => {
//         return (
//           <div className="movie" key={movie.id}>
//             <div className="image-container">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//               />
//             </div>

//             <div className="movie-details">
//               <h1 className="movie-title">{movie.title}</h1>
//               <p className="movie-overview line-clamp-3	">
//                 Plot : {movie.overview}
//               </p>
//               <p className="movie-release-date">
//                 Release Date: {movie.release_date}
//               </p>
//               <p className="movie-rating">Rating: {movie.vote_average}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default DefaultList;

import React, { useEffect, useState } from "react";
import Movie from "./Movie"; // Pastikan mengimpor komponen Movie
import "../App.css";

const DefaultList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=5efecce7477608af826824846a906ee4",
        {
          headers: {
            "Content-type": "application/json",
          },
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
      } else {
        console.error("Failed to fetch movies.");
      }
    } catch (error) {
      console.error("An error occurred while fetching movies:", error);
    }
  }

  return (
    <div>
      {/* Render komponen Movie dan operkan properti movies */}
      <Movie movies={movies} />
    </div>
  );
};

export default DefaultList;
