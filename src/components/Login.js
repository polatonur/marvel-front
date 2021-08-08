import { Link, useHistory } from "react-router-dom";
import marvelLogo from "../assets/img/Marvel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";

const Login = ({
  displayLogin,
  setDisplayLogin,
  setDisplaySignup,
  setUser,
  lastPage,
  setLastPage,
}) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`password : ${password} email : ${email}`);
    try {
      const response = await axios.post(
        "https://marvel-back-onur.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data.message.token);
      setUser(response.data.message.token);
      if (lastPage === "fav") {
        history.push("/favoris");
      }
      setLastPage("");
      setDisplayLogin(false);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("user not found");
      console.log(error.message);
    }
  };

  return (
    <div className="login" style={{ display: displayLogin && "flex" }}>
      <div className="login-main">
        <form onSubmit={handleSubmit}>
          <div className="close-icon">
            <FontAwesomeIcon
              onClick={() => setDisplayLogin(false)}
              fontSize="1.5rem"
              cursor="pointer"
              icon="times"
            />
          </div>
          <div className="img-signin">
            <img src={marvelLogo} alt="marvel" />
          </div>
          <input
            value={email}
            type="text"
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            value={password}
            type="text"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <p className="error-message-signin">{errorMessage}</p>
          <button type="submit">SIGN IN</button>

          <Link>
            <button
              onClick={() => {
                setDisplayLogin(false);
                setDisplaySignup(true);
              }}
              className="create"
            >
              CREATE AN ACCOUNT
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
