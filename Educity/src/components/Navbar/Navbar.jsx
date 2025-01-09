import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [darkNav, setDarkNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 700 ? setDarkNav(true) : setDarkNav(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(true);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={darkNav ? "container dark-nav" : "container"}>
      <img src={logo} alt="educity-logo" className="logo"></img>
      <ul className={mobileMenu ? "hide-mobile-menu" : ""}>
        <li>
          <Link to="hero" smooth="true" duration={500} offset={0}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth="true" duration={500} offset={-260}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth="true" duration={500} offset={-100}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth="true" duration={500} offset={-260}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth="true" duration={500} offset={-260}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth="true"
            duration={500}
            offset={420}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="menu-icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
