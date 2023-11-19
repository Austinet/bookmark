import { useState } from "react";
import feature1 from "../assets/images/illustration-features-tab-1.svg";
import feature2 from "../assets/images/illustration-features-tab-2.svg";
import feature3 from "../assets/images/illustration-features-tab-3.svg";
import { Link } from "react-router-dom";

const featuresList = [
  {
    id: "1",
    heading: "Simple Bookmarking",
    title: "Bookmark in one click",
    details: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favourite sites.`,
    link: "More Info",
    image: feature1,
    active: true,
  },
  {
    id: "2",
    heading: "Speedy Searching",
    title: "Intelligent search",
    details: `  Our powerful search feature will help you find saved sites in no time at all. 
        No need to trawl through all of your bookmarks.
        `,
    link: "More Info",
    image: feature2,
    active: false,
  },
  {
    id: "3",
    heading: "Easy Sharing",
    title: "Share your bookmarks",
    details: `  Easily share your bookmarks and collections with others. Create a shareable 
        link that you can send at the click of a button.`,
    link: "More Info",
    image: feature3,
    active: false,
  },
];

const Features = () => {
  const [featureItems, setFeatureItems] = useState(featuresList);

  //Switch features tab
  const displayFeature = (id) => {
    const newFeatures = featureItems.map((feature) => {
      if (feature.id === id) {
        return { ...feature, active: true };
      } else {
        return { ...feature, active: false };
      }
    });
    setFeatureItems(newFeatures);
  };

  return (
    <section id="features">
      <div className="features-container">
        <div className="features-container__header">
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div>
          <ul className="features-container__tabs">
            {featureItems.map((feature) => {
              const { id, active, heading } = feature;
              return (
                <li key={id} onClick={() => displayFeature(id)}>
                  <h3 className={active ? "active" : ""}>{heading}</h3>
                </li>
              );
            })}
          </ul>
          <div>
            {featureItems.map((feature) => {
              const { id, title, details, link, image, active } = feature;

              return (
                <div
                  key={id}
                  className={`features-container__item ${
                    active ? "active" : "close"
                  }`}
                >
                  <div className="features-container__item--image">
                    <img src={image} alt="feature" />
                  </div>
                  <div className="features-container__item--details">
                    <h3>{title}</h3>
                    <p>{details}</p>
                    <Link to={"/"}>{link}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
