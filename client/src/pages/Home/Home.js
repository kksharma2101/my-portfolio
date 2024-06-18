import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../components/layout/assets/docs/Resume.pdf";
import Certificate from "../../components/layout/assets/docs/fswd-certificate.pdf";
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
              <a className="btn btn-hire" href={Certificate}>
                Certificate
              </a>
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
