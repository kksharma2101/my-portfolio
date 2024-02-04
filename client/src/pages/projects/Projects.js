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
            <div className="heading">
              <h1>My Projects</h1>
              <hr />
              <p>
                👉 Including Programing Languases, Framworkes, Databases,
                Front-end and Back-end Tools and APIs
              </p>
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
                  <span>React.js</span>
                  <span>JavaScript</span>
                  <span>MongoDB</span>
                </div>
                <div className="link-btn">
                  <h5 className="text-uppercase">
                    E-commerce Shopping Website
                  </h5>
                  <a href="https://e-commerce-5n6kzehm5-kamal-sharmas-projects.vercel.app/">
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="main-container">
              <div className="rounded">
                <div className="image-container">
                  <span>Full Stack</span>
                  <img src="project1.png" alt="project" />
                </div>
                <div className="project-tech">
                  <span className="details">Node.js</span>
                  <span className="details">React.js</span>
                  <span className="details">JavaScript</span>
                  <span className="details">MongoDB</span>
                </div>
                <div className="link-btn">
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
