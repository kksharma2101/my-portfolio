import React, { useRef, useState } from "react";
import "./Contact.css";
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      if ((name, email, message)) {
        const res = await emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        );
        if (res) {
          toast.success("Mail send Successfully");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          toast.error("Mail is not send, Please try again");
        }
      } else {
        toast.error("Please fill all requirement");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="row">
          <div className="heading">
            <h1 className="text-uppercase">Contact</h1>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="from_email"
                  value={email}
                  placeholder="Write your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Write your message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
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
