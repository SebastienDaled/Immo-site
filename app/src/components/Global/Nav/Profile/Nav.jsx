import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <h1>Profile</h1>

      <nav className="profile__nav">
        {window.location.pathname === "/profile" ? (
          <ul className="profile__ul">
            <li className="profile__li active"><Link to="/profile"> Jouw Gegevens</Link></li>
            <li className="profile__li"><Link to="/profile/favorieten"> Jouw Favoieten</Link></li>
          </ul>
        ) : (
          <ul className="profile__ul">
            <li className="profile__li"><Link to="/profile"> Jouw Gegevens</Link></li>
            <li className="profile__li active"><Link to="/profile/favorieten"> Jouw Favoieten</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;