import React from "react";
import "./Projects.css";
import RubberBand from "react-reveal/RubberBand";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="projects" id="project">
        <div className="row">
          <RubberBand>
            <div className="heading text-uppercase">
              <h1>My Projects</h1>
              <hr />
            </div>
          </RubberBand>
          <Spin>
            <div className="main-container extra">
              <div className="rounded">
                <div className="image-container">
                  <span>Full Stack</span>
                  <img src="project.png" alt="project" />
                </div>
                <div className="project-tech">
                  <span>Node.js</span>
                  <span>React</span>
                  <span>MongoDB</span>
                  <span>JavaScript</span>
                </div>
                <div className="link-btn">
                  <h5 className="text-uppercase">
                    E-commerce Shopping Website
                  </h5>
                  <a href="https://e-commerce-app-gilt-three.vercel.app/">
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="main-container">
              <div className="rounded">
                <div className="image-container">
                  <span>Full Stack</span>
                  <img src="project2.png" alt="project" />
                </div>
                <div className="project-tech">
                  <span className="details">React.js</span>
                  <span className="details">JavaScript</span>
                  <span className="details">sass</span>
                  <span className="details">redux</span>
                </div>
                <div className="link-btn moviex-btn">
                  <h4 className="text-uppercase">Moviex Website</h4>
                  <a href="https://moviex-website-knf4cz3gc-kamal-sharmas-projects.vercel.app/">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
