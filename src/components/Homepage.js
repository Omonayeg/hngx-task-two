import Footer from "./Footer";
import HeroSection from "./HeroSection";
import MovieList from "./MovieList";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    setTimeout(() => {
      // fetch('https://api.themoviedb.org/3/discover/movie?api_key=645913d6fd2e28915ca004c97498dfb2&sort_by=popularity.desc')
      //   https://api.themoviedb.org/3/movies/[movie_id]

      //  const ApiKey = '645913d6fd2e28915ca004c97498dfb2'

      // url = 'https://api.themoviedb.org/3/discover/movie?api_key=645913d6fd2e28915ca004c97498dfb2&sort_by=popularity.desc'

      fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=645913d6fd2e28915ca004c97498dfb2"
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Couldn't fetch movies....");
          }
          return res.json();
        })
        .then((data) => {
          if (!isMounted) return;

          console.log(data);
          setData(data.results);
          setIsLoading(false);
          setError("");
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 1000);

    return () => (isMounted = false);
  }, []);

  return (
    <div className="homepage">
      <HeroSection />
      {isLoading && (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      )}
      {error && <div>{error}</div>}
      <MovieList movies={data} />
      <Footer />
    </div>
  );
};

export default Homepage;
