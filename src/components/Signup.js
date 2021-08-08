import { Link } from "react-router-dom";
import marvelLogo from "../assets/img/Marvel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-main">
        <form>
          <div className="close-icon">
            <FontAwesomeIcon fontSize="1.5rem" cursor="pointer" icon="times" />
          </div>
          <div className="img-signup">
            <img src={marvelLogo} alt="marvel" />
          </div>
          <input type="text" required placeholder="username" />
          <input type="text" required placeholder="email" />
          <input type="text" required placeholder="password" />
          <p className="error-message-signup">ee</p>
          <button type="submit">CREATE AN ACCOUNT</button>
          <div className="signup-bottom">
            <p>Already have an account?</p>

            <Link>
              <button className="create">SIGN IN</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
