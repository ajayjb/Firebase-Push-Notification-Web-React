import React from "react";
import NavBar from "../navbar/NavBar";
import "./intro.css";
import mansion from "../../images/mansion.png";
import mobile from "../../images/mobile.png";
import Apple from "../../images/Apple.png";
import Playstore from "../../images/Playstore.png";

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
        <div className="i-heading-buttonsContainer">
          <div className="i-heading-buttonsContainer-apple">
            <img style={{ height: "40px", padding: "5px" }} src={Apple} />
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.25rem",
                fontWeight: "500",
                padding: "5px",
              }}
            >
              App Store
            </div>
          </div>
          <div className="i-heading-buttonsContainer-playstore">
            <img style={{ height: "40px", padding: "5px" }} src={Playstore} />
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.25rem",
                fontWeight: "500",
                padding: "5px",
              }}
            >
              Play Store
            </div>
          </div>
        </div>
      </div>
      <img className="i-mansion" src={mansion} alt="" />
      <img className="i-mobile" src={mobile} alt="" />
    </div>
  );
};

export default Intro;
