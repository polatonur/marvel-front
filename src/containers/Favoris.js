/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const handleClickDeleteFav = async (id, genre) => {
    const token = Cookies.get("token");
    console.log(id, genre, token);
    try {
      const response = await axios.post(
        "https://marvel-back-onur.herokuapp.com/delete",
        {
          id: id,
          genre: genre,
          token: token,
        }
      );
      setData(response.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="favoris container">
      <h3>Favorite Comics</h3>
      <div className="galerie-fav-com">
        {data.favComics.length === 0 ? (
          <div className="no-favorites">No favorites yet 🔎</div>
        ) : (
          data.favComics.map((elem) => {
            return (
              <div key={elem._id} className="galerie-card-fav">
                <FontAwesomeIcon
                  onClick={() => handleClickDeleteFav(elem._id, "comic")}
                  className="delete-fav"
                  icon="times"
                />
                <img
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                  alt=""
                />
                <div className="h2">
                  <h2>{elem.title}</h2>
                </div>
              </div>
            );
          })
        )}
      </div>
      <h3>Favorite Chracters</h3>
      <div className="galerie-fav-char">
        {data.favCharacters.length === 0 ? (
          <div className="no-favorites">No favorites yet 🔎 </div>
        ) : (
          data.favCharacters.map((elem) => {
            return (
              <div key={elem._id} className="galerie-card-fav">
                <FontAwesomeIcon
                  onClick={() => handleClickDeleteFav(elem._id, "char")}
                  className="delete-fav"
                  icon="times"
                />

                <img
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                  alt=""
                />
                <div className="h2">
                  <h2>{elem.name}</h2>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Favoris;
