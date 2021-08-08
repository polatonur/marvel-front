import BestSellerCarousel from "./BestSellerCarousel";
import PupularCarousel from "./PupularCarousel";

const Top = () => {
  return (
    <div className="top container">
      <section className="popular-character">
        <div>
          <h1>Most Popular Superheroes</h1>
        </div>
        <div className="carousel-sec">
          <PupularCarousel />
        </div>
      </section>
      <section className="last-comics">
        <div>
          <h1>Best Sellers</h1>
        </div>
        <div className="carousel-sec">
          <BestSellerCarousel />
        </div>
      </section>
    </div>
  );
};
export default Top;
