import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <div className="about" id="about">
      <Jump>
        <div className="row">
          <div className="col-md-5 about-img">
            <img src="my-pic2.jpg" alt="profile pic" />
          </div>
          <div className="col-md-5 about-text">
            <h1>About Me</h1>
            <p>
              Hello, My self Komal kumar sharma and I am a Full Stack Web
              Developer, I am looking for the opportunities to work in the
              industry with the best of my efficiencies, and professional
              skills, and to serve in the best possible way with sheer
              determination and commitment. I am always keen to learn new things
              with a fresh, enthusiastic approach that helps me be updated with
              all the latest trends in the industry. Putting forward my passion
              as a web developer.
            </p>
          </div>
        </div>
      </Jump>
    </div>
  );
};

export default About;
