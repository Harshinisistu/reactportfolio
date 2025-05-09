import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/FooterSection";
import HeroImage2 from "../components/Projects/HeroImage2";
// import ProjectCard from "../components/ProjectCards/ProjectCard";
import Work from "../components/ProjectCards/Work";
const Projects = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="PROJECTS." text="Some of my most recent work" />
      <Work />
      {/* <ProjectCard /> */}
      <Footer />
    </div>
  );
};

export default Projects;
