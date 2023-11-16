import logo from "../assets/images/logo-bookmark.svg";
import logoWhite from "../assets/images/logo-bookmark-white.svg";
import hamburger from "../assets/icons/icon-hamburger.svg";
import close from "../assets/icons/icon-close.svg";
import facebook from "../assets/icons/icon-facebook.svg";
import twitter from "../assets/icons/icon-twitter.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  {
    id: "1",
    name: "Features",
    href: "/",
  },
  {
    id: "2",
    name: "Pricing",
    href: "/",
  },
  {
    id: "3",
    name: "Contact",
    href: "/",
  },
];

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="nav-container__logo">
            <img src={logo} alt="Bookmark logo" />
          </div>
          <div
            className={`nav-container__links ${
              toggleNav ? "left-0" : "left-50"
            }`}
          >
            <div className="nav-container__links--header">
              <img src={logoWhite} alt="Bookmark logo" />
              <img
                src={close}
                alt="close-menu"
                onClick={() => setToggleNav(!toggleNav)}
              />
            </div>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.href}>{link.name.toUpperCase()}</Link>
                </li>
              ))}
              <li className="btn">
                <Link to={"/"}>LOGIN</Link>
              </li>
            </ul>
            <div className="nav-container__links--footer">
                <Link>
                  <img src={facebook} alt="Facebook logo" />
                </Link>
                <Link>
                  <img src={twitter} alt="Twitter logo" />
                </Link>
            </div>
          </div>
          <div className="menu-icon" onClick={() => setToggleNav(!toggleNav)}>
            <img src={hamburger} alt="open-menu" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
