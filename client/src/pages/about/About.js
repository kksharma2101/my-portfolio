import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
          <img src="my-pic2.jpg" alt="profile pic" />
        </div>
        <div className="col-md-6 about-container">
          <h1>About Me</h1>
          <p>
            Callback function to replace the internal method which creates a
            text node for the character before adding it to the DOM. If you
            return null, then it will not add anything to the DOM and so it is
            up to you to handle it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
