import { Link } from "react-router-dom"
import fb from "../Designs/assets/fa-brands_facebook-square.png"
import ig from "../Designs/assets/fa-brands_instagram.png"
import twt from "../Designs/assets/fa-brands_twitter.png"
import ytb from "../Designs/assets/fa-brands_youtube.png"

const Footer = () => {
    return (  
        <div className="footer">
          <div className="socials">
            <Link path=""><img src={fb} alt="fb" /></Link>
            <Link path=""><img src={ig} alt="ig" /></Link>
            <Link path=""><img src={twt} alt="twt" /></Link>
            <Link path=""><img src={ytb} alt="ytb" /></Link>

          </div>
      <nav className="footer-nav">
        <Link path="">Conditions of Use</Link>
        <Link path="">Privacy and Policy</Link>
        <Link path="">Privacy Room</Link>
      </nav>
      <small>&copy;2023 <strong>Moviebox by Will Omonaye</strong>, All Rights Reserved</small>
        </div>
    );
}
 
export default Footer;