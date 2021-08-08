import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Comics from "./containers/Comics";
import Characters from "./containers/Characters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ComicsOfCharacter from "./containers/ComicOfCharacter";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { useState } from "react";
const uid2 = require("uid2");

library.add(faSearch, faHeart, faTimes);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("token") || null);
  const setUser = (token) => {
    Cookies.set("token", token, { expires: 30 });
    setUserToken(token);
  };
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/comics">
          <Comics />
        </Route>
        <Route path="/comics/:id">
          <ComicsOfCharacter />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
