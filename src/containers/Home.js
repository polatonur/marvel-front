import thonosHero from "../assets/img/thanos_hero.jpeg";

import Top from "../components/Top";

const Home = ({}) => {
  return (
    <div>
      <section className="hero">
        <div className="hero-img">
          <img src={thonosHero} alt="thanos" />
          <div className="img-desc">
            <h1>THANOS</h1>
            <p>
              The Mad Titan Thanos quests across the universe in search of the
              Infinity Stones, intending to use their limitless power for
              shocking purposes.
            </p>
          </div>
        </div>
      </section>
      <Top />
    </div>
  );
};

export default Home;
