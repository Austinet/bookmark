import { Link } from "react-router-dom";
import logoWhite from "../assets/images/logo-bookmark-footer.svg";
import facebook from "../assets/icons/icon-facebook.svg";
import twitter from "../assets/icons/icon-twitter.svg";

const footerLinks = [
  {
    id: "1",
    name: "Features",
    link: "/",
  },
  {
    id: "2",
    name: "Pricing",
    link: "/",
  },
  {
    id: 3,
    name: "Contact",
    link: "/",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container__quick-links">
          <ul>
            <li>
              <img src={logoWhite} alt="Bookmark logo" />
            </li>
            {footerLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.link}>{link.name.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-container__socials">
          <Link>
            <img src={facebook} alt="Facebook logo" />
          </Link>
          <Link>
            <img src={twitter} alt="Twitter logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
