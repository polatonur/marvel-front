import { Link } from "react-router-dom";
import marvelLogo from "../assets/img/Marvel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  return (
    <div className="login">
      <div className="login-main">
        <form>
          <div className="close-icon">
            <FontAwesomeIcon fontSize="1.5rem" cursor="pointer" icon="times" />
          </div>
          <div className="img-signin">
            <img src={marvelLogo} alt="marvel" />
          </div>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <p className="error-message-signin">error</p>
          <button type="submit">SIGN IN</button>

          <Link>
            <button className="create">CREATE AN ACCOUNT</button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
