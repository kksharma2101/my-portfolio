import React from "react";
import "./TechStack.css";
import { TechstackList } from "./TechstackList";

const TechStack = () => {
  return (
    <>
      <div className="main-container">
        <h1>Technology Stack</h1>
        <p>
          👉 Including Programing Languases, Framworkes, Databases, Front-end
          and Back-end Tools and APIs
        </p>
        <div className="row">
          {TechstackList.map((tech) => (
            <div className="col-md-3 techstack" key={tech._id}>
              <div className="tech-stack">
                <div className="media-body">
                  <tech.icon className="tech-icon" />
                </div>
                <div>
                  <h5>{tech.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
