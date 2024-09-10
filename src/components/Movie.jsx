// import React from "react";
// import "../App.css";

// const Movie = (props) => {
//   const { movies } = props;

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
//               <p className="movie-overview">{movie.overview}</p>
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

// export default Movie;

import React, { useState } from "react";
import MoviePopup from "./MoviePopup";
import "../App.css";

const Movie = (props) => {
  const { movies } = props;
  const [selectedMovie, setSelectedMovie] = useState(null); // State untuk film yang dipilih

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); // Ketika deskripsi diklik, buka popup
  };

  const closePopup = () => {
    setSelectedMovie(null); // Tutup popup
  };

  return (
    <div className="MovieList">
      {movies.map((movie) => {
        return (
          <div className="movie" key={movie.id}>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>

            <div className="movie-details">
              <h1 className="movie-title">{movie.title}</h1>

              {/* Deskripsi terbatas */}
              <p className="movie-overview line-clamp-3">
                Plot: {movie.overview}
              </p>

              {/* Tombol untuk membuka popup */}
              <button
                className="text-blue-500 underline mt-2"
                onClick={() => handleMovieClick(movie)}
              >
                Read More
              </button>

              <p className="movie-release-date">
                Release Date: {movie.release_date}
              </p>
              <p className="movie-rating">Rating: {movie.vote_average}</p>
            </div>
          </div>
        );
      })}

      {/* Tampilkan popup jika ada film yang dipilih */}
      {selectedMovie && (
        <MoviePopup movie={selectedMovie} onClose={closePopup} />
      )}
    </div>
  );
};

export default Movie;
