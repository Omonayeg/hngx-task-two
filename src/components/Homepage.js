import HeroSection from "./HeroSection";
import MovieList from "./MovieList";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch()
        .then((res) => {
          if (!res.ok) {
            throw Error("Couldn't fetch movies....");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError("");
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 300);
  }, []);

  return (
    <div className="homepage">

      {isLoading && <div>Loading...</div>}
      
      {error && <div>{error}</div>}
     
      <HeroSection/> 
      <MovieList />
    </div>
  );
};

export default Homepage;
