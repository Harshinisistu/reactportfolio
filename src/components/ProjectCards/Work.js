import "./ProjectCard.css";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";
import { useState } from "react";
const Work = () => {
  // return (
  //   <div className="work-container">
  //     <h1 className="project-heading"> </h1>

  //     <div className="project-container">
  //       {ProjectCardData.map((val, index) => {
  //         return (
  //           <ProjectCard
  //             key={index}
  //             image={val.image}
  //             title={val.title}
  //             description={val.description}
  //             technologies={val.technologies}
  //             view={val.view}
  //           />
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  // };

  // import "./ProjectCard.css";
  // import React, { useState } from "react";
  // import ProjectCard from "./ProjectCard";
  // import ProjectCardData from "./ProjectCardData";
  // import { Tabs, Tab } from "react-bootstrap";

  // const Work = () => {
  //   const [key, setKey] = useState("tab1");

  //   return (
  //     <div className="work-container">
  //       <h1 className="project-heading">Projects</h1>

  //       <Tabs
  //         activeKey={key}
  //         onSelect={(index) => setKey(index)}
  //         className="mb-3"
  //       >
  //         <Tab eventKey="tab1" title="All Projects">
  //           <div className="project-container">
  //             {ProjectCardData.map((val, index) => {
  //               return (
  //                 <ProjectCard
  //                   key={index}
  //                   image={val.image}
  //                   title={val.title}
  //                   description={val.description}
  //                   technologies={val.technologies}
  //                   view={val.view}
  //                 />
  //               );
  //             })}
  //           </div>
  //         </Tab>
  //         <Tab eventKey="tab2" title="Lorem Text">
  //           <div className="lorem-text">
  //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //             <p>
  //               Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas
  //               odio, vitae scelerisque enim ligula venenatis dolor.
  //             </p>
  //             <p>
  //               Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
  //             </p>
  //           </div>
  //         </Tab>
  //         <Tab eventKey="tab3" title="Another Tab">
  //           <div className="lorem-text">
  //             <p>This is another tab with different content.</p>
  //           </div>
  //         </Tab>
  //       </Tabs>
  //     </div>
  //   );
  // };

  // export default Work;

  const [active, setActive] = useState("tab-1");

  const handleClick = (event) => {
    setActive(event.target.id);
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
              {ProjectCardData.map((val, index) => {
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
