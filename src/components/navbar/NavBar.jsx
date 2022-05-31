import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import logoSvg from "../../images/logoSvg.svg";

const NavBar = () => {
  return (
    <div className="n">
      <div className="n-logo">
        <a href="/">
          <img className="n-logo-image" src={logoSvg} alt="logo" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
