const HeroSection = () => {
    return ( 
        <div className="hero-section">
        <div className="top-section-hero">
          <div className="logo-area">
            <img src="" alt="logo" />
            <h4>MovieBox</h4>
          </div>

          <div className="searchbar">
            <form action="">
              <input type="text" placeholder="Whatdo you want to watch?" />
            </form>
          </div>

          <div className="signin-area">
            <h4>sign in</h4>
            <img src="" alt="hamburger-menu" />
          </div>
        </div>

        <div className="bottom-section-hero">
          <h3 className="movie-title">JOHN WICK 3</h3>
          <div className="rating">97%</div>
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor, sit amet
            consectetur Lorem ipsum dolor, sit amet consectetur Lorem ipsum
            dolor, sit amet consectetur Lorem ipsum dolor, sit amet consectetur
          </div>
          <button className="watch-trailer">Watch Trailer</button>
        </div>
      </div>
     );
}
 
export default HeroSection;