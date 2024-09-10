import React from "react";

const MoviePopup = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
        {/* Tombol close */}
        <button
          className="absolute top-2 right-2 text-red-500"
          onClick={onClose}
        >
          X
        </button>

        {/* Gambar dan Deskripsi lengkap */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MoviePopup;
