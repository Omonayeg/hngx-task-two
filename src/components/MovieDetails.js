import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../Designs/assets/tv.png";
import homeIcon from "../Designs/assets/Home.png";
import movieIcon from "../Designs/assets/Movie Projector.png";
import tvIcon from "../Designs/assets/TV Show.png";
import upcomingIcon from "../Designs/assets/Calendar.png";
import group from "../Designs/assets/Group.png";
import star from "../Designs/assets/Star.png";
import tickets from "../Designs/assets/Two Tickets.png";
import list from "../Designs/assets/List.png";
import pink from "../Designs/assets/pink.png";
import logout from "../Designs/assets/logout.png";

const MovieDetails = () => {
  const { id } = useParams();
  const apiKey = "645913d6fd2e28915ca004c97498dfb2";

  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const formatDateToUTC = (dateString) => {
    const options = {
      timeZone: "UTC",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    let isMounted = true;

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't fetch movie details...");
        }
        return res.json();
      })
      .then((movieData) => {
        if (!isMounted) return;

        console.log(movieData);
        setMovieData(movieData);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {
        console.error("There was a problem fetching movie details. Try again");
        setIsLoading(false);
        setError(error.message);
      });

    return () => (isMounted = false);
  }, [id, apiKey]);

  return (
    <div className="container">
      <aside className="sidebar">
        {/* Sidebar Content */}
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h5>MovieBox</h5>
        </div>

        <ul>
          <li>
            <img src={homeIcon} alt="homeIcon" />
            <Link to="/">Home</Link>
          </li>
          <li>
            <img src={movieIcon} alt="movieIcon" />
            <a href="#">Movies</a>
          </li>
          <li>
            <img src={tvIcon} alt="tvIcon" />
            <a href="#">TV Series</a>
          </li>
          <li>
            <img src={upcomingIcon} alt="upcomingIcon" />
            <a href="#">Upcoming</a>
          </li>
        </ul>
        <div>
          <img src={pink} alt="pink-box" />
          <br />
          <img src={logout} alt="logout" style={{ marginTop: "15px" }} />
        </div>
      </aside>

      <main className="main-content">
        {isLoading && <div>Loading....</div>}
        {error && <div>{error}</div>}

        {/* Main Content */}
        {movieData.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
            alt="thumbnail"
          />
        )}

        <div className="details-container">
          <div className="column-left">
            <div className="row">
              <div
                className="titlebox"
                style={{ fontWeight: "700", fontSize: "18px" }}
              >
                <span data-testid="movie-title">{movieData.title}</span>
                <span data-testid="movie-release-date">
                  {" "}
                  • {formatDateToUTC(movieData.release_date)}
                </span>
                <span> • PG-15</span>
                <span data-testid="movie-runtime"> • 130m</span>
              </div>
              <br />
              <p data-testid="movie-overview">{movieData.overview}</p>
            </div>
            <div className="row directors">
              <p>
                Director: <span>John Doe</span>
              </p>
              <br />
              <p>
                Writers: <span>John Doe, Anita Lou, Bob Frank</span>
              </p>
              <br />
              <p>
                Stars: <span>John Doe, Anita Lou, Bob Frank</span>
              </p>
            </div>
            <div className="row">
              <div className="topratedbtn">
                <button>Top rated movie #65</button>
                <div>Award 9 nominations</div>
              </div>
            </div>
          </div>
          <div className="column-right">
            <div className="row">
              <p className="star" style={{ fontSize: "13px" }}>
                {" "}
                <img src={star} alt="star" />
                <span style={{ color: "#E8E8E8" }}> 8.5</span> |350K
              </p>
              <br />
              <div className="showtimesbtn">
                <button className="showtimes">
                  <img src={tickets} alt="ticket" />
                  See Showtimes
                </button>
                <button className="more-watch">
                  {" "}
                  <img src={list} alt="list" />
                  More watch options
                </button>
              </div>
            </div>
            <div className="row">
              <img className="group" src={group} alt="group" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;
