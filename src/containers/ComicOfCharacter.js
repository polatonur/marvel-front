import { useLocation, useHistory } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const ComicsOfCharacter = () => {
  const [charactersData, setCharactersData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  if (!location.state) {
    history.push("/characters");
  }
  console.log(location);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-onur.herokuapp.com/comics/${location.state.id}`
      );
      console.log(response.data);
      setCharactersData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Page is loading</div>
  ) : (
    <div className="comics-of-character container">
      <div className="comics-of-character-hero">
        <div className="comics-of-character-title">
          {charactersData.comic_data.name}
        </div>
        <div className="comics-of-character-img">
          <img
            src={
              charactersData.comic_data.thumbnail.path +
              "." +
              charactersData.comic_data.thumbnail.extension
            }
            alt=""
          />
        </div>
      </div>
      <h3>Comics</h3>
      <div className="galerie">
        {charactersData.comic_data.comics.map((elem) => {
          return (
            <div className="galerie-card">
              <img
                src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComicsOfCharacter;

//
