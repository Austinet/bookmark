import illustration from "../assets/images/illustration-hero.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <div className="hero-container__image">
          <img src={illustration} alt="bookmark illustration" />
        </div>
        <div className="hero-container__details">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="hero-container__details--buttons">
            <Link to={"/"} className="blue">
              Get it on Chrome
            </Link>
            <Link to={"/"} className="grey">
              Get it on Firefox
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
