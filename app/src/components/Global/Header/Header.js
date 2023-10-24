import "./Header.css";
import PropTypes from "prop-types";
import Container from "../Container/Container";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContainer";

const Header = ({ onLogout }) => {

  const {user} = useAuthContext();

  return (
    <header className="header">
      <Container>
        <div className="headNav">
          <Link to="/">
            <h1 className="header__title">Immo Sebastien</h1>
          </Link>
          <Link to="/huizen">huizen</Link>
        </div>
        {/* dropdown menu */}
        <div className="dropdown">
          <Button className="dropdown__button btn--third">
            <span className="dropdown__button__text">Hi, {user.username}</span>
            <span className="dropdown__button__icon"> ▼</span>
          </Button>
          <div className="dropdown__content">
            <Link to="/profile">Profile</Link>

            {user.role === "makelaar" ? <Link to="/makelaar">Makelaar Dashboard</Link> : null}
            {user.role === "admin" ? <Link to="/admin">Admin dashboard</Link> : null}
            
            <Link onClick={onLogout} to="/login">Lougout</Link>
            {/* <Button onClick={onLogout} className="btn--alert">
              Logout
            </Button> */}
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Header;
