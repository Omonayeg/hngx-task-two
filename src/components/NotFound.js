import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>

    <Link to="/" style={{fontSize: '17px', textDecoration: 'none', padding: '20px'}}>Go back to safety</Link>
    </div>
  );
};

export default NotFound;
