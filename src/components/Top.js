import BestSellerCarousel from "./BestSellerCarousel";
import PupularCarousel from "./PupularCarousel";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Top = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-back-onur.herokuapp.com"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const ref1 = useRef(0);
  const ref2 = useRef(0);

  const handleClickScroll1 = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset;
  };
  const handleClickScroll2 = (scrollOffset) => {
    ref2.current.scrollLeft += scrollOffset;
  };

  return true ? (
    <div>loading..</div>
  ) : (
    <div className="top container">
      <section className="popular-character">
        <div>
          <h1>Superheroes</h1>
        </div>
        <div ref={ref1} className="carousel-sec">
          <span onClick={() => handleClickScroll1(-330)}>
            <FontAwesomeIcon className="arrow-left" icon="arrow-left" />
          </span>
          <span onClick={() => handleClickScroll1(330)}>
            <FontAwesomeIcon className="arrow-right" icon="arrow-right" />
          </span>
          <PupularCarousel data={data.characters} />
        </div>
        <div>
          <Link to="/characters" className="see-more">
            see more
          </Link>
        </div>
      </section>
      <section className="last-comics">
        <div>
          <h1>Comics</h1>
        </div>
        <div ref={ref2} className="carousel-sec">
          <span onClick={() => handleClickScroll2(-330)}>
            <FontAwesomeIcon className="arrow-left" icon="arrow-left" />
          </span>
          <span onClick={() => handleClickScroll2(330)}>
            <FontAwesomeIcon className="arrow-right" icon="arrow-right" />
          </span>
          <BestSellerCarousel data={data.comics} />
        </div>
        <div>
          <Link to="/comics" className="see-more">
            see more
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Top;
