import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Characters = () => {
  const [charactersData, setCharactersData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5000/characters?limit=100&skip=`
      );
      console.log(response.data);
      setCharactersData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handlePageChange = async (pageNumber) => {
    const response = await axios.get(
      `http://localhost:5000/characters?limit=100&skip=${pageNumber * 100}`
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
      `http://localhost:5000/characters?limit=100`,
      {
        params,
      }
    );
    setCharactersData(response.data);
    console.log(response.data);
  };
  return isLoading ? (
    <div>Page is loading</div>
  ) : (
    <div className="characters">
      <div className="main">
        <div className="search-search">
          <FontAwesomeIcon className="search-icon" icon="search" />
          <input
            // value={searchedText}
            type="search"
            placeholder="Rechercher des caracters"
            onChange={handlerSearch}
          />
        </div>
        {charactersData.characters.results.map((elem) => {
          return (
            <Link
              key={elem.id}
              to={{ pathname: `/comics/${elem._id}`, state: { id: elem._id } }}
            >
              <div className="comic-card">
                <div className="comic-card-img">
                  <div className="heart">
                    <FontAwesomeIcon icon="heart" />
                  </div>
                  <img
                    src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                    alt=""
                  />{" "}
                </div>
                <div>
                  <h1 className="comic-card-title">{elem.name}</h1>
                </div>
              </div>
            </Link>
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
