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
        <a className="n-links-a" href="/">
          ABOUT
        </a>
        <a className="n-links-a" href="/">
          WHY
        </a>
        <a className="n-links-a" href="/">
          HOW IT WORKS
        </a>
        <a className="n-links-a" href="/">
          TESTIMONIAL
        </a>
      </div>
    </div>
  );
};

export default NavBar;
