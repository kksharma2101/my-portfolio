import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="row">
          <div className="heading">
            <h1>Contact</h1>
            <hr />
          </div>
          <div className="main-container">
            <div className="col-md-5 img">
              <img src="my-pic2.jpg" alt="contact" />
            </div>
            <div className="col-md-7 details">
              <input type="text" name="name" placeholder="Write your name" />
              <input type="email" name="email" placeholder="Write your email" />
              <textarea placeholder="Write your email" />
              <button>Send</button>
              <div className="icons">
                <FaLinkedin />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
