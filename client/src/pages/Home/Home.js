import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../components/layout/assets/docs/Resume1.pdf";

const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Full Stack Web Developer !", "MERN Developer !"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-button">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume}>
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
