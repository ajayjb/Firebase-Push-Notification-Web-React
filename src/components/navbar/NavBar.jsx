import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div className="n">
      <div className="n-logo">
        <img className="n-logo-image" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default NavBar;
