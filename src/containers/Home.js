import axios from "axios";
import { Link } from "react-router-dom";
import thonosHero from "../assets/img/thanos_hero.jpeg";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Top from "../components/Top";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = (props) => {
  const handleClick1 = async () => {
    const response = await axios.post("http://localhost:5000/comics");
    console.log(response.data.comics.results.splice(0, 10));
  };
  const handleClick2 = async () => {
    try {
      const response = await axios.get("http://localhost:5000/characters");
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleClick3 = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/comics/5fce13f978edeb0017c92dd4"
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <section className="hero">
        <div className="hero-img">
          <img src={thonosHero} alt="thanos" />
          <div className="img-desc">
            <h1>THANOS</h1>
            <p>
              The Mad Titan Thanos quests across the universe in search of the
              Infinity Stones, intending to use their limitless power for
              shocking purposes.
            </p>
          </div>
        </div>
      </section>
      {/* <Top /> */}

      <div className="temp">
        <h1>Marvel</h1>
        <button onClick={handleClick1}>GET Comics</button>
        <button onClick={handleClick2}>GET Characters</button>
        <button onClick={handleClick3}>GET Comicwithid</button>
        <Link to="/comics">Comics</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/">Home</Link>
      </div>
      <Login />
      <Signup />
    </div>
  );
};

export default Home;
