import chrome from "../assets/images/logo-chrome.svg";
import firefox from "../assets/images/logo-firefox.svg";
import opera from "../assets/images/logo-opera.svg";
import bdDots from "../assets/images/bg-dots.svg";
import { Link } from "react-router-dom";

const callToActionList = [
  {
    id: "1",
    title: "Add to Chrome",
    image: chrome,
    details: "Minimum version 62",
    link: "Add & Install Extension",
  },
  {
    id: "2",
    title: "Add to Firefox",
    image: firefox,
    details: "Minimum version 55",
    link: "Add & Install Extension",
  },
  {
    id: "3",
    title: "Add to Opera",
    image: opera,
    details: "Minimum version 46",
    link: "Add & Install Extension",
  },
];

const CallToAction = () => {
  return (
    <section>
      <div className="cta-container">
        <div className="cta-container__header">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="cta-container__cards">
          {callToActionList.map((cta) => {
            const { id, title, details, link, image } = cta;

            return (
              <div key={id} className="cta-container__cards--card">
                <div className="card-header">
                  <img src={image} alt="download" />
                  <h3>{title}</h3>
                  <p>{details}</p>
                </div>

                <div className="card-footer">
                  <img src={bdDots} alt="dots" />
                  <Link to={"/"}>{link}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
