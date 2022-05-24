import React, { useState } from "react";
import "./footer.css";
import FooterLogo from "../../images/FooterLogo.png";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const year = new Date().getFullYear();
  const width = window.screen.width;
  return (
    <div className="f">
      <div className="f-top">
        <div className="f-top-left">
          <img src={FooterLogo} alt="logo" />
          <p>
            Fast delivery, which is active all over the world, serves with many
            transportation vehicles.
          </p>
        </div>
        <div className="f-top-right">
          <div className="f-top-right-text">Get in Touch</div>
          <div className="f-top-right-social">
            <a href="">
              <FacebookIcon
                style={
                  width <= 600
                    ? { fontSize: "40px", margin: "20px", color: "#fff" }
                    : { fontSize: "45px", margin: "20px", color: "#fff" }
                }
              />
            </a>
            <a href="">
              <InstagramIcon
                style={
                  width <= 600
                    ? { fontSize: "40px", margin: "20px", color: "#fff" }
                    : { fontSize: "45px", margin: "20px", color: "#fff" }
                }
              />
            </a>
            <a href="">
              <TwitterIcon
                style={
                  width <= 600
                    ? { fontSize: "40px", margin: "20px", color: "#fff" }
                    : { fontSize: "45px", margin: "20px", color: "#fff" }
                }
              />
            </a>
            <a href="">
              <EmailIcon
                style={
                  width <= 600
                    ? { fontSize: "40px", margin: "20px", color: "#fff" }
                    : { fontSize: "45px", margin: "20px", color: "#fff" }
                }
              />
            </a>
          </div>
        </div>
      </div>
      <div className="t-bottom">
        <hr className="t-bottom-ruler" />
        <div className="t-bottom-text">
          <p>All Rights Reserved @ {year}</p>
          <div className="t-bottom-text-right">
            <p>Terms & Conditions</p>
            <p>Privacy & Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
