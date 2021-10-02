import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Favoris from "./containers/Favoris";
import Comics from "./containers/Comics";
import Characters from "./containers/Characters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ComicsOfCharacter from "./containers/ComicOfCharacter";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faHeart,
  faTimes,
  faBars,
  faArrowRight,
  faArrowLeft,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { useState } from "react";

library.add(
  faSignOutAlt,
  faSearch,
  faHeart,
  faTimes,
  faBars,
  faArrowRight,
  faArrowLeft
);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("token") || null);
  const [displayLogin, setDisplayLogin] = useState(false);
  const [displaySignup, setDisplaySignup] = useState(false);
  const [lastPage, setLastPage] = useState("");
  const setUser = (token) => {
    Cookies.set("token", token, { expires: 30 });
    setUserToken(token);
  };
  console.log(displaySignup);
  return (
    <Router>
      <Header
        setUser={setUser}
        displayLogin={displayLogin}
        setDisplayLogin={setDisplayLogin}
        setDisplaySignup={setDisplaySignup}
        displaySignup={displaySignup}
        userToken={userToken}
        setUserToken={setUserToken}
        setLastPage={setLastPage}
        lastPage={lastPage}
      />
      <Switch>
        <Route exact path="/">
          <Home
            setUser={setUser}
            displayLogin={displayLogin}
            setDisplayLogin={setDisplayLogin}
            setDisplaySignup={setDisplaySignup}
            displaySignup={displaySignup}
            setUserToken={setUserToken}
            userToken={userToken}
            setLastPage={setLastPage}
            lastPage={lastPage}
          />
        </Route>
        <Route exact path="/comics">
          <Comics
            userToken={userToken}
            displayLogin={displayLogin}
            setDisplayLogin={setDisplayLogin}
            setDisplaySignup={setDisplaySignup}
            displaySignup={displaySignup}
          />
        </Route>
        <Route path="/comics/:id">
          <ComicsOfCharacter />
        </Route>
        <Route path="/characters">
          <Characters
            userToken={userToken}
            displayLogin={displayLogin}
            setDisplayLogin={setDisplayLogin}
            setDisplaySignup={setDisplaySignup}
            displaySignup={displaySignup}
          />
        </Route>
        <Route path="/favoris">
          <Favoris
            setLastPage={setLastPage}
            userToken={userToken}
            displayLogin={displayLogin}
            setDisplayLogin={setDisplayLogin}
            setDisplaySignup={setDisplaySignup}
            displaySignup={displaySignup}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
