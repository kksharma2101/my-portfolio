import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import "./Layout.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Menu from "./menus/Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(false);

  //   handle toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {!toggle ? (
                <MdOutlineArrowBackIos />
              ) : (
                <MdOutlineArrowForwardIos />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
