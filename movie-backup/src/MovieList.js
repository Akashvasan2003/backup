import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  // Get unique genres, ratings, and years from the movie list
  const genres = ["All", ...new Set(movies.map((movie) => movie.genre))];
  const ratings = ["All", ...new Set(movies.map((movie) => movie.rating))];
  const years = ["All", ...new Set(movies.map((movie) => movie.year))].sort(
    (a, b) => b - a
  );

  // Filter movies based on selected criteria
  const filteredMovies = movies.filter((movie) => 
    (selectedGenre === "All" || movie.genre === selectedGenre) &&
    (selectedRating === "All" || movie.rating === selectedRating) &&
    (selectedYear === "All" || movie.year === parseInt(selectedYear))
  );

  return (
    <div className="movie-container">
      <h1>Movie Recommendations</h1>

      {/* Filters */}
      <div className="filters">
        {/* Genre Filter */}
        <label>Genre: </label>
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>

        {/* Rating Filter */}
        <label>Rating: </label>
        <select value={selectedRating} onChange={(e) => setSelectedRating(e.target.value)}>
          {ratings.map((rating) => (
            <option key={rating} value={rating}>{rating}</option>
          ))}
        </select>

        {/* Year Filter */}
        <label>Year: </label>
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Display Filtered Movies */}
      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => <MovieCard key={index} {...movie} />)
        ) : (
          <p>No movies match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
