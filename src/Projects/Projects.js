import React from "react";
import styles from "./Projects.css";
import { Link } from "react-router-dom";
import Project from "./Project/Project";

import { TransitionGroup, Transition } from "react-transition-group";

const ProjectsData = [
  {
    name: "canvas ballet",
    description: "orbs in motion w/ sound",
    imageURL: "/apps/canvas-ballet",
    url: "/canvas-ballet-app"
  }
];

const Projects = () => {
  return (
    <TransitionGroup className={styles.Main}>
      {ProjectsData.map((project, index) => {
        return (
          <Transition
            appear={true}
            key={index}
            timeout={{ enter: 100 + index * 100, exit: 1000 }}
          >
            {state => {
              return (
                <Project
                  styleName={state}
                  key={index}
                  name={project.name}
                  description={project.description}
                  imageURL={project.imageURL}
                  url={project.url}
                />
              );
            }}
          </Transition>
        );
      })}
    </TransitionGroup>
  );
};

export default Projects;
