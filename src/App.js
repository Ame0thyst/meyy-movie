// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState('');

//   // Fungsi untuk mencari film berdasarkan query
//   const searchMovies = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
//       if (response.data.Response === "True") {
//         setMovies(response.data.Search || []);
//         setError('');
//       } else {
//         setError(response.data.Error);
//         setMovies([]);
//       }
//     } catch (err) {
//       setError('An error occurred while fetching data.');
//       setMovies([]);
//     }
//   };

//   // Fungsi untuk mendapatkan film acak saat komponen pertama kali dimuat
//   const fetchRandomMovies = async () => {
//     try {
//       const response = await axios.get(`https://www.omdbapi.com/?s=batman&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
//       if (response.data.Response === "True") {
//         setMovies(response.data.Search || []);
//         setError('');
//       } else {
//         setError(response.data.Error);
//         setMovies([]);
//       }
//     } catch (err) {
//       setError('An error occurred while fetching data.');
//       setMovies([]);
//     }
//   };

//   useEffect(() => {
//     fetchRandomMovies();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <h1 className="text-center text-4xl py-5">Movie Search</h1>
//       <form onSubmit={searchMovies} className="flex justify-center mb-8">
//         <input 
//           type="text" 
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for a movie..." 
//           className="p-2 rounded-l-md text-black"
//         />
//         <button type="submit" className="bg-blue-500 p-2 rounded-r-md">Search</button>
//       </form>
//       {error && <p className="text-center text-red-500">{error}</p>}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
//         {movies.map((movie) => (
//           <div key={movie.imdbID} className="bg-gray-800 p-4 rounded-lg">
//             <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded-md mb-2"/>
//             <h2 className="text-xl font-bold">{movie.Title}</h2>
//             <p className="text-gray-400">{movie.Year}</p>
//             {/* Menambahkan deskripsi film */}
//             {movie.Plot && <p className="text-gray-300 mt-2">{movie.description}</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App bg-slate-300 ">
      <SearchBar></SearchBar>
    </div>
  );
}

// function App() {
//   return ( 
//     <div className="relative w-full h-screen">
//       {/* Background Image */}
//       <div className="absolute inset-0 bg-hero-pattern bg-full  bg-center Class
// Properties
// bg-repeat"></div>
      
//       {/* Overlay untuk mengatur brightness */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>
      
//       {/* Konten */}
//       <div className="relative z-10">
//         <SearchBar></SearchBar>
//       </div>
//     </div>
//   );
// }

export default App;