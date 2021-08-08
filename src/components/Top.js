import BestSellerCarousel from "./BestSellerCarousel";
import PupularCarousel from "./PupularCarousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Top = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-back-onur.herokuapp.com"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>loading..</div>
  ) : (
    <div className="top container">
      <section className="popular-character">
        <div>
          <h1>Superheroes</h1>
        </div>
        <div className="carousel-sec">
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
        <div className="carousel-sec">
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
