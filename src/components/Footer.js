import marvelLogo from "../assets/img/Marvel.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={marvelLogo} alt="marvel" />
      </div>
      <div>
        {" "}
        <p>
          Made with <span>React</span> at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a> By{" "}
          <a href="https://github.com/polatonur">Onur</a>
        </p>
      </div>
      <div>
        {/* <h1>FOLLOW MARWEL</h1>
        <div className="social-media">
          <FontAwesomeIcon icon="search" />
          <FontAwesomeIcon icon="youtube" />
          <FontAwesomeIcon icon="instagram" />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
