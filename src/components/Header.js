import { Link } from "react-router-dom";
import marvelLogo from "../assets/img/Marvel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div className="header-main container">
        <div className="logo">
          <div className="logo-div">
            <Link to="/">
              <img src={marvelLogo} alt="marvel" />
            </Link>
          </div>
          <div className="header-login">
            <Link>
              <li>Sign up</li>
            </Link>
            <Link>
              <li>Login</li>
            </Link>
          </div>
        </div>
        <nav>
          <ul>
            <Link to="/characters">
              <li>Characters</li>
            </Link>{" "}
            <Link to="/comics">
              {" "}
              <li to="/comics">Comics</li>
            </Link>
            <Link to="/comics">
              {" "}
              <li to="/">Favoris</li>
            </Link>
            <Link>
              <li>More</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
