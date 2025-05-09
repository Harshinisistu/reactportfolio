import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/FooterSection";
import HeroImage2 from "../components/Projects/HeroImage2";
import AboutPage from "../components/AboutContent/AboutPage";
const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="ABOUT ME" text="" />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default About;
