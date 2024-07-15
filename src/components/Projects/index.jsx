import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { sumArray } from "../helper"; // Assuming sumArray is a helper function you've defined
import { projects } from "../../data"; // Importing the projects array from your data file
import Card from "./Card";

const tabs = [{ name: "All" }, { name: "Apps" }, { name: "Web" }];

const Projects = () => {
  const [displayableProjects, setDisplayableProjects] = useState(projects); // Initialize displayableProjects with the entire projects array
  const [activeIndex, setActiveIndex] = useState(0);
  const [offSet, setOffSet] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef([]);

  useEffect(() => {
    // Calculate offset and width for active indicator
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffSet(sumArray(prevEl.map((item) => item.offsetWidth)));
    setIndicatorWidth(itemsEls.current[activeIndex].offsetWidth);
  }, [activeIndex]);

  const setProjects = (category) => {
    if (category === "All") {
      setDisplayableProjects(projects); // Show all projects
    } else {
      const filteredProjects = projects.filter(
        (project) => project.category.toLowerCase() === category.toLowerCase()
      );
      setDisplayableProjects(filteredProjects); // Show projects of specific category
    }
  };

  return (
    <section id="projects">
      <div className="section__wrapper projects__container">
        <div className="section__header center">
          <h2 className="primary__title">Projects</h2>
        </div>
        <nav>
          {tabs.map((tab, index) => (
            <button
              ref={(el) => (itemsEls.current[index] = el)}
              onClick={() => {
                setActiveIndex(index);
                setProjects(tab.name);
              }}
              key={index}
            >
              {tab.name}
            </button>
          ))}
          <span
            className="active__indicator"
            style={{ left: `${offSet}px`, width: `${indicatorWidth}px` }}
          ></span>
        </nav>
        <div className="card__container">
          {/* Conditional rendering based on displayableProjects */}
          {displayableProjects &&
            displayableProjects.map((project) => (
              <Card
                key={project.id} // Ensure each Card has a unique key
                title={project.title}
                image={project.image}
                data={project.data}
                stack={project.stack}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
