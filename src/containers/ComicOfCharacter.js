import { useLocation, useHistory } from "react-router";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ref = useRef(0);

  const handleClickScroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return isLoading ? (
    <div>Page is loading</div>
  ) : (
    <div className="comics-of-character container">
      <h1 className="main-title">{charactersData.comic_data.name}</h1>
      <div className="comics-of-character-hero">
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
      <section className="carousel">
        <div ref={ref} className="galerie">
          <span onClick={() => handleClickScroll(-330)}>
            <FontAwesomeIcon
              className="arrow-left arrow-gal"
              icon="arrow-left"
            />
          </span>
          <span onClick={() => handleClickScroll(330)}>
            <FontAwesomeIcon
              className="arrow-right arrow-gal"
              icon="arrow-right"
            />
          </span>
          {charactersData.comic_data.comics.map((elem, index) => {
            return (
              <div key={index} className="galerie-card">
                <img
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ComicsOfCharacter;

//
