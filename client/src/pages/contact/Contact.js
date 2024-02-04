import React, { useRef } from "react";
import "./Contact.css";
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact" id="contact">
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
              <h4>Please submit your details</h4>
              <hr />
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Write your name"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Write your email"
                />
                <textarea placeholder="Write your message" name="message" />
                <input type="submit" value="Send" className="button" />
              </form>
              <div className="icons">
                <TiSocialLinkedin />
                <TiSocialGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
