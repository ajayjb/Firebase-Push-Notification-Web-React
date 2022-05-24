import React from "react";
import NavBar from "../navbar/NavBar";
import "./intro.css";
import mansion from "../../images/mansion.png";
import mansionfor600 from "../../images/mansionfor600.png";
import mobile from "../../images/mobile.png";
import apple from "../../images/apple.svg";
import playstore from "../../images/playstore.svg";

const Intro = () => {
  const [displayWidth, setDisplayWidth] = React.useState(window.screen.width);

  const handleResize = () => {
    setDisplayWidth(window.screen.width);
  };

  window.addEventListener("resize", handleResize);

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
            <img src={apple} alt="apple" />
            <div>App Store</div>
          </div>
          <div className="i-heading-buttonsContainer-playstore">
            <img src={playstore} alt="" />
            <div>Play Store</div>
          </div>
        </div>
      </div>
      {Number(displayWidth) <= 600 ? (
        <img className="i-mansion-600" src={mansionfor600} alt="" />
      ) : (
        <img className="i-mansion" src={mansion} alt="" />
      )}
      <img className="i-mobile" src={mobile} alt="" />
    </div>
  );
};

export default Intro;
