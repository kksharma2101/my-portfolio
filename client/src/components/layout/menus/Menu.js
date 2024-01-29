import React from "react";
import "./Menu.css";
import { FcAbout, FcHome } from "react-icons/fc";
import { MdCastForEducation, MdOutlineWorkOutline } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="my-pic2.jpg" alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-link">
              <p>
                <FcHome />
                Home
              </p>
            </div>
            <div className="nav-link">
              <p>
                <FcAbout />
                About
              </p>
            </div>
            <div className="nav-link">
              <p>
                <MdOutlineWorkOutline />
                Experince
              </p>
            </div>
            <div className="nav-link">
              <p>
                <IoIosContact />
                Contact
              </p>
            </div>
            <div className="nav-link">
              <p>
                <MdCastForEducation />
                Education
              </p>
            </div>
            <div className="nav-link">
              <p>
                <GrProjects />
                Project
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-link">
              <p className="only-svg">
                <FcHome title="Home" />
              </p>
            </div>
            <div className="nav-link">
              <p className="only-svg">
                <FcAbout title="About" />
              </p>
            </div>
            <div className="nav-link">
              <p className="only-svg">
                <MdOutlineWorkOutline title="Experience" />
              </p>
            </div>
            <div className="nav-link">
              <p className="only-svg">
                <IoIosContact title="Contact" />
              </p>
            </div>
            <div className="nav-link">
              <p className="only-svg">
                <MdCastForEducation title="Education" />
              </p>
            </div>
            <div className="nav-link">
              <p className="only-svg">
                <GrProjects title="Projects" />
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
