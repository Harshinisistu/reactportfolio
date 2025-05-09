import "./HeroImg.css";
// import "../index.css";
import React from "react";
import IntroImg from "../../assets/profile-dp.jpg";
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImage" />
      </div>
      <div className="content">
        <h1>Hi, I am Harshini Sistu</h1>
        <p>I'm a Front-End Developer</p>
        <div>
          <Link to="projects" className="btn">
            Projects
          </Link>
          <Link to="contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
