import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../components/layout/assets/docs/Resume1.pdf";
import { useTheme } from "../../context/ThemeContext";

const Home = () => {
  // const [theme, setTheme] = useTheme();

  return (
    <>
      <div className="home-container" id="home">
        <div className="row">
          <div className="home-content">
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["FullStack Web Developer", "MERN Developer !"],
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
      </div>
    </>
  );
};

export default Home;
