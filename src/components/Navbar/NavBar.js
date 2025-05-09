import "./NavBar.css";
// import "@/index.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "var(--text-color)" }} />
        ) : (
          <FaBars size={20} style={{ color: "var(--text-color)" }} />
        )}
      </div>
    </div>
  );
}
