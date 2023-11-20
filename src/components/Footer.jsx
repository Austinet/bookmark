import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import logoWhite from "../assets/images/logo-bookmark-footer.svg";

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
            <ImFacebook2 />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
