import { useHistory } from "react-router-dom";
import marvelLogo from "../assets/img/Marvel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";

const Signup = ({
  setDisplayLogin,
  displaySignup,
  setDisplaySignup,
  setUser,
  lastPage,
  setLastPage,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`password : ${password} email : ${email}`);
    try {
      const response = await axios.post(
        "https://marvel-back-onur.herokuapp.com/user/signup",
        {
          email: email,
          password: password,
          username: username,
        }
      );
      console.log(response.data.newUser.token);
      setUser(response.data.newUser.token);
      if (lastPage === "fav") {
        history.push("/favoris");
      }
      setLastPage("");
      setErrorMessage("");
      if (response.status === 200) {
        setDisplaySignup(false);
      }
    } catch (error) {
      setErrorMessage("User already exists");

      console.log(error.message);
    }
  };

  return (
    <div className="signup" style={{ display: displaySignup && "flex" }}>
      <div className="signup-main">
        <form onSubmit={handleSubmit}>
          <div className="close-icon">
            <FontAwesomeIcon
              onClick={() => setDisplaySignup(false)}
              fontSize="1.5rem"
              cursor="pointer"
              icon="times"
              className="close-modal"
            />
          </div>
          <div className="img-signup">
            <img src={marvelLogo} alt="marvel" />
          </div>
          <input
            type="text"
            required
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="text"
            required
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="text"
            required
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <p className="error-message-signup">{errorMessage}</p>
          <button type="submit">CREATE AN ACCOUNT</button>
          <div className="signup-bottom">
            <p>Already have an account?</p>

            <button
              onClick={() => {
                setDisplayLogin(true);
                setDisplaySignup(false);
              }}
              className="create"
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
