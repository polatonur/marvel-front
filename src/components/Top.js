import BestSellerCarousel from "./BestSellerCarousel";
import PupularCarousel from "./PupularCarousel";
import axios from "axios";
import { useEffect, useState } from "react";

const Top = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000");
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
          <p className="see-more">see more</p>
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
          <p className="see-more">see more</p>
        </div>
      </section>
    </div>
  );
};
export default Top;
