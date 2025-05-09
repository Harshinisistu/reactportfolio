import React from "react";
import "./AboutPage.css"; // Import the CSS file for styling
const AboutPage = () => {
  return (
    <section class="about">
      <div className="top-section about-text">
        <div className="about-content">
          <p>
            I specialize in creating responsive, user-friendly websites and
            applications using modern technologies. With + years of experience
            in web development, I enjoy turning complex problems into simple,
            beautiful solutions. When I'm not coding, you'll find me hiking or
            cooking up some delicious feast. Let's work together to bring your
            ideas to life!
          </p>
        </div>
      </div>
      <div className="top-section about-content2">
        <div className="skills">
          <h1>My Skill</h1>
          <li>
            <h4>html</h4>
            <span className="bar">
              <span className="html"></span>
            </span>
          </li>
          <li>
            <h4>css</h4>
            <span className="bar">
              <span className="css"></span>
            </span>
          </li>
          <li>
            <h4>php</h4>
            <span className="bar">
              <span className="php"></span>
            </span>
          </li>
          <li>
            <h4>javascript</h4>
            <span className="bar">
              <span className="javascript"></span>
            </span>
          </li>
        </div>
        <div className="experience">
          <h1>Experience</h1>
          <div className="box">
            <h3>Senior Front-End Developer</h3>
            <h4>Tech Solutions Inc.</h4>
            <h5>Jan 2023-Present</h5>
            <p>
              Leading front-end development for enterprise clients, implementing
              responsive designs and improving web performance.
            </p>
          </div>
          <div className="box">
            <h3>Web Developer</h3>
            <h4>Creative Agency</h4>
            <h5>Mar 2020-Dec 2022</h5>
            <p>
              Created respionsive websites for various clients using HTML, CSS,
              and Javascript. Collaborated with designers to implement UI/UX.
            </p>
          </div>
        </div>
        <div className="education">
          <h1>Education</h1>
          <div className="box">
            <h3>BSc Computer Science</h3>
            <h4>University of Technology</h4>
            <h5>2016-2020</h5>
          </div>
        </div>
        <a href="assets/resume-01.pdf" download="MY_RESUME.pdf" className="btn">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default AboutPage;
