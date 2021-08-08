import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";

const Favoris = ({ userToken, setDisplayLogin, setLastPage }) => {
  const [data, setData] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const history = useHistory();
  if (!userToken) {
    setLastPage("fav");
    history.push("/");
    setDisplayLogin(true);
  }
  const token = Cookies.get("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://marvel-back-onur.herokuapp.com/favoris",
          {
            token: token,
          }
        );
        console.log(response.data);
        setData(response.data.message);
        setIsloading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="favoris container">
      <h3>Favorite Comics</h3>
      <div className="galerie-fav-com">
        {data.favComics.map((elem) => {
          return (
            <div className="galerie-card-fav">
              <img
                src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                alt=""
              />
              <div className="h2">
                <h2>{elem.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Favorite Chracters</h3>
      <div className="galerie-fav-char">
        {data.favCharacters.map((elem) => {
          return (
            <div className="galerie-card-fav">
              <img
                src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                alt=""
              />
              <div className="h2">
                <h2>{elem.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favoris;
