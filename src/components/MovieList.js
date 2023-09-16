// import React from 'react';
import { Link } from "react-router-dom";
// import './YourStyles.css'; // Import your CSS styles here

const MovieList = ({ movies }) => {
  // Sort the movies by popularity in descending order
  const sortedMovies = movies.sort((a, b) => b.popularity - a.popularity);

  // Slice the first 10 movies to get the top 10 by popularity
  const top10Movies = sortedMovies.slice(0, 10);
  // const top10Movies = sortedMovies.slice(0, 12); Use later

  // Function to format the date to UTC format
  const formatDateToUTC = (dateString) => {
    const options = {
      timeZone: "UTC",
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    
    return new Date(dateString).toUTCString("en-US", options)
      .replace(",", ""); // Remove the comma after the weekday
  };


  return (
    <div className="wrapper">
      <div className="movielist-head">
        <h3>Top 10 Movies Today!</h3>
        {/* <button>see more</button> */}
      </div>
      <div className="cards">
        {top10Movies.map((movie) => (
          <div key={movie.id} className="card" data-testid="movie-card">
            <Link to={`/movies/${movie.id}`} className="link">
              <div className="movie-poster" data-testid="movie-poster">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt="poster-img"
                />
              </div>
              <div className="movie-info">
                <h4 data-testid="movie-title">{movie.original_title}</h4>
                <p data-testid="movie-release-date">{formatDateToUTC(movie.release_date)}</p>
                  {/* {formatDateToUTC(movie.release_date)} */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
