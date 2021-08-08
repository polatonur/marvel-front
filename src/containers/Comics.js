import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comics = () => {
  const [comicsData, setComicsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/comics?", {
          limit: 100,
        });
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
    const response = await axios.post(`http://localhost:5000/comics?`, {
      limit: 100,
      skip: skip,
    });
    console.log(response.data);
    setComicsData(response.data);
    setPageNo(pageNumber);
    console.log(pageNumber);
  };

  const handlerSearch = async (event) => {
    const title = event.target.value;

    const response = await axios.post(
      `http://localhost:5000/comics?limit=100`,
      {
        title: title,
      }
    );
    setComicsData(response.data);
    console.log(response.data);
  };
  return isLoading ? (
    <div> Page is loading</div>
  ) : (
    <div className="comics">
      <div className="main-comics">
        <div className="search-search">
          <FontAwesomeIcon className="search-icon" icon="search" />
          <input
            // value={searchedText}
            type="search"
            placeholder="Rechercher des caracters"
            onChange={handlerSearch}
          />
        </div>
        {comicsData.comics.results.map((elem) => {
          return (
            <div key={elem.id} className="comic-card">
              <div className="comic-card-img">
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
