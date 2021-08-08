import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const Comics = ({ setDisplayLogin, userToken }) => {
  const [comicsData, setComicsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://marvel-back-onur.herokuapp.com/comics?",
          {
            limit: 100,
          }
        );
        console.log(response.data);
        setComicsData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = async (pageNumber) => {
    let skip = pageNumber * 100;
    const response = await axios.post(
      `https://marvel-back-onur.herokuapp.com/comics?`,
      {
        limit: 100,
        skip: skip,
      }
    );
    console.log(response.data);
    setComicsData(response.data);
    setPageNo(pageNumber);
    console.log(pageNumber);
  };

  const handlerSearch = async (event) => {
    const title = event.target.value;

    const response = await axios.post(
      `https://marvel-back-onur.herokuapp.com/comics?limit=100`,
      {
        title: title,
      }
    );
    setComicsData(response.data);
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
          "https://marvel-back-onur.herokuapp.com/comic/favoris",
          {
            elem: elem,
            token: token,
          }
        );
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return isLoading ? (
    <div> Page is loading</div>
  ) : (
    <div className="comics">
      <div className="search-search">
        <FontAwesomeIcon
          className="search-icon"
          icon="search"
          border="1px solid "
        />
        <input
          // value={searchedText}
          type="search"
          placeholder="Search"
          onChange={handlerSearch}
        />
      </div>
      <div className="main-comics container">
        {comicsData.comics.results.map((elem) => {
          return (
            elem.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
              <div key={elem.id} className="comic-card">
                <div className="comic-card-img">
                  <div
                    className="heart"
                    onClick={() => {
                      handleClick(elem);
                    }}
                  >
                    <FontAwesomeIcon icon="heart" />
                  </div>
                  <img
                    src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                    alt=""
                  />{" "}
                </div>
                <div>
                  <h1 className="comic-card-title">{elem.title}</h1>
                  <p className="comic-card-description">{elem.description}</p>
                </div>
              </div>
            )
          );
        })}
      </div>
      <Pagination
        activePage={pageNo}
        itemsCountPerPage={100}
        totalItemsCount={comicsData.comics.count}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </div>
  );
};
export default Comics;
