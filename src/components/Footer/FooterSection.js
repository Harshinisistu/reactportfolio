import "./FooterSection.css";
import React from "react";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "var(--text-color)", marginRight: "2rem" }}
            />
            <div>
              <p>123 Housing Society, </p>
              <p> Mumbai, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "var(--text-color)", marginRight: "2rem" }}
              />
              +91 1234567890
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "var(--text-color)", marginRight: "2rem" }}
              />
              harshinisistu@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am a passionate web developer with a knack for creating
            interactive and user-friendly websites. I love coding and always
            strive to learn new technologies.
          </p>
          <div className="social">
            <FaTwitter
              size={30}
              style={{ color: "var(--text-color)", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "var(--text-color)", marginRight: "1rem" }}
            />
            <FaFacebook
              size={30}
              style={{ color: "var(--text-color)", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
      {/* <div classname="footer-text">
        <p>Copyright &copy; 2025 by @harshinisistu| All Right Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <a href="#about">
          <i classname="fa-solid fa-angle-up"></i>
        </a>
      </div> */}
    </div>
  );
}
