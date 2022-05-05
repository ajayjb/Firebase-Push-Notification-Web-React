import React from "react";
import NavBar from "../navbar/NavBar";
import "./intro.css";
import mansion from "../../images/mansion.png";
import mobile from "../../images/mobile.png";

const Intro = () => {
  return (
    <div className="i">
      <NavBar />
      <div className="i-heading">
        <h2 className="i-heading-one">FRESH AND HEALTHY FOOD FOR</h2>
        <h2 className="i-heading-two">A REFRESHING AND A DELIGHTFUL LIFE</h2>
        <p className="i-heading-text">
          Think, choose, order, delivered, eat, enjoy and repeat. As simple as
          that. Order anytime and get your food delivered by 7am in the next
          morning and start your day with full of nutrition and freshness.
          Choose fresh, eat fresh and stay fresh with FRESHLIII.
        </p>
        <button className="i-heading-button">Download</button>
      </div>
      <img className="i-mansion" src={mansion} alt="" />
      <img className="i-mobile" src={mobile} alt="" />
    </div>
  );
};

export default Intro;
