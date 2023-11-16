import feature1 from "../assets/images/illustration-features-tab-1.svg";
import feature2 from "../assets/images/illustration-features-tab-2.svg";
import feature3 from "../assets/images/illustration-features-tab-3.svg";
import { Link } from "react-router-dom";

const featuresList = [
  {
    id: "1",
    title: "Bookmark in one click",
    details: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favourite sites.`,
    link: "More Info",
    image: feature1,
    active: true,
  },
  {
    id: "2",
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
    title: "Share your bookmarks",
    details: `  Easily share your bookmarks and collections with others. Create a shareable 
        link that you can send at the click of a button.`,
    link: "More Info",
    image: feature3,
    active: false,
  },
];

const Features = () => {
  return (
    <section>
      <div>
        <div>
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <h3>Simple Bookmarking</h3>
            </li>
            <li>
              <h3>Speedy Searching</h3>
            </li>
            <li>
              <h3>Easy Sharing</h3>
            </li>
          </ul>
          <div>
            {featuresList.map((feature) => {
              const { id, title, details, link, image, active } = feature;

              return (
                <div key={id}>
                  <img src={image} alt="feature" />
                  <h3>{title}</h3>
                  <p>{details}</p>
                  <Link to={"/"}>{link}</Link>
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
