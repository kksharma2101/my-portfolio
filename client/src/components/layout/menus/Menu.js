import React from "react";
import "./Menu.css";
import { Link } from "react-scroll";
import { FcAbout, FcHome } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { GrProjects, GrTechnology } from "react-icons/gr";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="my-pic2.jpg" alt="profile pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome className="svg" />
                  Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                  About
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <MdCastForEducation />
                  Education
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="technology"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GrTechnology />
                  Technology
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <GrProjects />
                  Project
                </Link>
              </div>
              {/* <div className="nav-link">
              <Link to="" spy={true} 
      smooth={true} 
      offset={-100} 
      duration={100}>
                <MdOutlineWorkOutline />
                Experince
              </Link>
            </div> */}
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <IoIosContact />
                  Contact
                </Link>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <MdCastForEducation />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="technology"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <GrTechnology />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <GrProjects />
              </Link>
            </div>
            {/* <div className="nav-link">
              <Link to="" spy={true} 
      smooth={true} 
      offset={-100} 
      duration={100}>
                <MdOutlineWorkOutline />
              </Link>
            </div> */}
            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <IoIosContact />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
