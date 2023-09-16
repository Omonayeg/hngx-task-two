import image from "../Designs/assets/Poster.png";
import logo from "../Designs/assets/tv.png";
import hamburger from "../Designs/assets/Menu.png";
import searchBtn from "../Designs/assets/Search.png";
import play from "../Designs/assets/Play.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(false); // Add a state
  const [error, setError] = useState(false); // Add a state
  const [isLoading, setIsLoading] = useState(true);

  const apiKey = "645913d6fd2e28915ca004c97498dfb2";

  const searchMovie = async (event) => {
    if (event.key === "Enter") {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Couldn't fetch search results.");
        }
        const data = await response.json();

        if (data.results.length === 0) {
          setSearchError(true); // Set search error state if no results found
        } else {
          setSearchError(false); // Reset search error state
        }

        setSearchResults(data.results);
        setSearch("");
        setShowModal(true);
        setIsLoading(false);
        setError("");
      } catch (error) {
        setError(error);
        console.error(error);
      }
    }
  };

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${image})`, loading: "lazy" }}
    >
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h5>MovieBox</h5>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="What do you want to watch?"
            style={{
              backgroundImage: `url(${searchBtn})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              fontSize: "1.1rem",
            }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            onKeyPress={searchMovie}
          />
        </div>
        <div className="sign-in">
          <img src={hamburger} alt="menu" />
        </div>
      </nav>

      <div className="bottom-section-hero">
        <h2 className="movie-title">John Wick 3: Parabullum</h2>
        {/* <div className="rating">97%</div> */}
        <br />
        <div className="description">
          John Wick is on the run after killing a member of the international
          assassins' guild,and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </div>
        <button className="watch-trailer">
          <img src={play} alt="play" />
          Watch Trailer{" "}
        </button>
      </div>
      {/* Modal to display search results or error message */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setShowModal(false)}>Close</button>
            {isLoading && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {searchError ? ( // Render "Movie not found" if searchError is true
              <div style={{ fontSize: "40px", color: "black" }}>
                Movie not found!
              </div>
            ) : (
              <>
                <h3>Search Results:</h3>
                <ul>
                  {searchResults.map((result) => (
                    <Link to={`/movies/${result.id}`} className="link">
                      <li key={result.id}>
                        <img
                          src={`https://image.tmdb.org/t/p/w200/${result.poster_path}`}
                          alt="poster"
                        />
                        <p>{result.release_date}</p>
                        <h4>{result.title}</h4>
                        <p>{result.overview}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
