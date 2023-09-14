import fb from "../Designs/assets/fa-brands_facebook-square.png"
import ig from "../Designs/assets/fa-brands_instagram.png"
import twt from "../Designs/assets/fa-brands_twitter.png"
import ytb from "../Designs/assets/fa-brands_youtube.png"

const Footer = () => {
    return (  
        <div className="footer">
          <div className="socials">
            <a href=""><img src={fb} alt="fb" /></a>
            <a href=""><img src={ig} alt="ig" /></a>
            <a href=""><img src={twt} alt="twt" /></a>
            <a href=""><img src={ytb} alt="ytb" /></a>

          </div>
      <nav className="footer-nav">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy and Policy</a>
        <a href="#">Privacy Room</a>
      </nav>
      <small>&copy;2023 <strong>Moviebox by Will Omonaye</strong>, All Rights Reserved</small>
        </div>
    );
}
 
export default Footer;