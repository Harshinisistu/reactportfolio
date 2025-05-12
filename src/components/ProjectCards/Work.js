import "./ProjectCard.css";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";

const Work = () => {
  const [active, setActive] = useState("tab-1");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleClick = (event) => {
    setActive(event.target.id);
    setCurrentPage(1); // Reset to first page when switching tabs
  };

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ProjectCardData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(ProjectCardData.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="tabs">
          <button
            className={`tab-button ${active === "tab-1" ? "active" : ""}`}
            id="tab-1"
            onClick={handleClick}
          >
            Tab 1
          </button>
          <button
            className={`tab-button ${active === "tab-2" ? "active" : ""}`}
            id="tab-2"
            onClick={handleClick}
          >
            Tab 2
          </button>
          <button
            className={`tab-button ${active === "tab-3" ? "active" : ""}`}
            id="tab-3"
            onClick={handleClick}
          >
            Tab 3
          </button>
        </div>
        <div className="tabs-content">
          <div className={`tab-page ${active === "tab-1" ? "active" : ""}`}>
            <p>This is page 1</p>
            <div className="project-container">
              {currentItems.map((val, index) => {
                return (
                  <ProjectCard
                    key={index}
                    image={val.image}
                    title={val.title}
                    description={val.description}
                    technologies={val.technologies}
                    view={val.view}
                  />
                );
              })}
            </div>
            <div className="pagination">
              <button
                onClick={() => handlePageChange("prev")}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange("next")}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
          <div className={`tab-page ${active === "tab-2" ? "active" : ""}`}>
            <p>This is page 2</p>
          </div>
          <div className={`tab-page ${active === "tab-3" ? "active" : ""}`}>
            <p>This is page 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
