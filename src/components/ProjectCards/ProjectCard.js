import "./ProjectCard.css";

import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.image} alt="image1" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.description}</p>
      </div>
      <div className="project-techno">
        <p>{props.technologies}</p>
      </div>
      <div className="project-btns">
        <NavLink to={props.view} className="btn">
          View
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectCard;
