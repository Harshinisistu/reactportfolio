import React from "react";
import NavBar from "../components/Navbar/NavBar";
import HeroImg from "../components/HeroSection/HeroImg";
import Footer from "../components/Footer/FooterSection";
import Work from "../components/ProjectCards/Work";
const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
