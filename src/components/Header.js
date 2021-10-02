import { Link } from "react-router-dom";
import marvelLogo from "../assets/img/Marvel.png";
import Login from "./Login";
import MenuMobile from "./MenuMobile";
import Signup from "./Signup";

const Header = ({
  displayLogin,
  setDisplayLogin,
  displaySignup,
  setDisplaySignup,
  userToken,
  setUserToken,
  setUser,
  lastPage,
  setLastPage,
}) => {
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
            <div className="nav-buttons">
              <li
                style={{ display: userToken && "none" }}
                onClick={() => setDisplaySignup(true)}
              >
                Sign up
              </li>
              <li
                style={{ display: userToken && "none" }}
                onClick={() => setDisplayLogin(true)}
              >
                Login
              </li>
              <li
                className="logout"
                style={{ display: userToken && "block" }}
                onClick={() => setUserToken(null)}
              >
                Log out
              </li>
            </div>
            <MenuMobile
              displayLogin={displayLogin}
              setDisplayLogin={setDisplayLogin}
              displaySignup={displaySignup}
              setDisplaySignup={setDisplaySignup}
              userToken={userToken}
              setUserToken={setUserToken}
            />
          </div>
        </div>
        <nav>
          <ul>
            <Link to="/characters">
              <li>Characters</li>
            </Link>{" "}
            <Link to="/comics">
              {" "}
              <li>Comics</li>
            </Link>
            <Link to="/favoris">
              {" "}
              <li>Favorites</li>
            </Link>
            <Link>
              <li>More</li>
            </Link>
          </ul>
        </nav>
      </div>
      <Login
        setUser={setUser}
        userToken={userToken}
        setUserToken={setUserToken}
        displayLogin={displayLogin}
        setDisplayLogin={setDisplayLogin}
        setDisplaySignup={setDisplaySignup}
        displaySignup={displaySignup}
        setLastPage={setLastPage}
        lastPage={lastPage}
      />
      <Signup
        setUser={setUser}
        userToken={userToken}
        setUserToken={setUserToken}
        displayLogin={displayLogin}
        setDisplayLogin={setDisplayLogin}
        setDisplaySignup={setDisplaySignup}
        displaySignup={displaySignup}
        setLastPage={setLastPage}
        lastPage={lastPage}
      />
    </header>
  );
};
export default Header;
