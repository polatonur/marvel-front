import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const Characters = ({
  displayLogin,
  setDisplayLogin,
  displaySignup,
  setDisplaySignup,
  userToken,
}) => {
  const [charactersData, setCharactersData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-onur.herokuapp.com/characters?limit=100&skip=`
      );
      console.log(response.data);
      setCharactersData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handlePageChange = async (pageNumber) => {
    const response = await axios.get(
      `https://marvel-back-onur.herokuapp.com/characters?limit=100&skip=${
        pageNumber * 100
      }`
    );
    console.log(response.data);
    setCharactersData(response.data);
    setPageNo(pageNumber);
    console.log(pageNumber);
  };
  const handlerSearch = async (event) => {
    const title = event.target.value;
    const params = { name: title };

    const response = await axios.get(
      `https://marvel-back-onur.herokuapp.com/characters?limit=100`,
      {
        params,
      }
    );
    setCharactersData(response.data);
    console.log(response.data);
  };
  const handleClick = async (elem) => {
    if (!userToken) {
      setDisplayLogin(true);
      console.log("no token");
    } else {
      const token = Cookies.get("token");
      try {
        const response = await axios.post(
          "https://marvel-back-onur.herokuapp.com/character/favoris",
          {
            elem: elem,
            token: token,
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return isLoading ? (
    <div>Page is loading</div>
  ) : (
    <div className="characters">
      <div className="search-search">
        <FontAwesomeIcon className="search-icon" icon="search" />
        <input
          // value={searchedText}
          type="search"
          placeholder="Search"
          onChange={handlerSearch}
        />
      </div>
      <div className="main-characters container">
        {charactersData.characters.results.map((elem) => {
          return (
            elem.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
              <div key={elem._id}>
                <div className="character-card">
                  <Link
                    key={elem.id}
                    to={{
                      pathname: `/comics/${elem._id}`,
                      state: { id: elem._id },
                    }}
                  >
                    <div className="character-card-img">
                      <img
                        src={
                          elem.thumbnail.path + "." + elem.thumbnail.extension
                        }
                        alt=""
                      />{" "}
                    </div>
                  </Link>
                  <div
                    className="heart"
                    onClick={() => {
                      handleClick(elem);
                    }}
                  >
                    <FontAwesomeIcon icon="heart" />
                  </div>
                  <div className="character-card-title-div">
                    <h1 className="character-card-title">{elem.name}</h1>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <Pagination
        activePage={pageNo}
        itemsCountPerPage={100}
        totalItemsCount={charactersData.characters.count}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
      {/* <PaginationApp
        pageNo={pageNo}
        totalItems={charactersData.characters.count}
        handlePageChange={handlePageChange}
      /> */}
    </div>
  );
};
export default Characters;
