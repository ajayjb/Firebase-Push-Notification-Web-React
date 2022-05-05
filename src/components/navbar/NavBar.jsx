import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div className="n">
      <div className="n-logo">
        <img className="n-logo-image" src={logo} alt="logo" />
      </div>
      <div className="n-links">
        <div className="n-links-wrapper">
          <a className="n-links-a" href="/">
            ABOUT
          </a>
        </div>
        <div className="n-links-wrapper">
          <a className="n-links-a" href="/">
            WHY
          </a>
        </div>
        <div className="n-links-wrapper">
          <a className="n-links-a" href="/">
            HOW IT WORKS
          </a>
        </div>
        <div className="n-links-wrapper">
          <a className="n-links-a" href="/">
            TESTIMONIAL
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
