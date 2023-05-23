import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Header.css";
import DarkMode from "../DarkMode/DarkMode";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <Logo />
      <nav ref={navRef}>
        <Link to="/my-work">Works</Link>
		<Link to="https://github.com/nicolaeee/lazy-homepage" className="github-link">
        <FaGithub />
		Source
      </Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="button__swich">
        <DarkMode />
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
