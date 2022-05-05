import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-upper">
        <div className="a-upper-left">
          <h3 className="a-upper-left-about">About</h3>
          <p className="a-upper-left-desc">
            A wide range of available products, From order to checkout just
            within few clicks. Order at anytime and get your products delivered
            by next Morning 7 AM .......It doesn't get much easier than this.{" "}
          </p>
        </div>
        <div className="a-upper-right">
          <div className="a-upper-right-card">
            <h3 className="a-upper-right-card-header">100%</h3>
            <p className="a-upper-right-card-desc">Scan base Facility</p>
          </div>
          <div className="a-upper-right-card">
            <h3 className="a-upper-right-card-header">100%</h3>
            <p className="a-upper-right-card-desc">Scan base Facility</p>
          </div>
        </div>
      </div>
      <div className="a-lower">
        <div className="a-lower-left">
          <h2 className="a-lower-left-text">
            No excuses, no substitutes, no vitiations, no more tough grids. just
            on time delivery.
          </h2>
        </div>
        <div className="a-lower-right">
          <div className="a-lower-right-item-one">
            <h4 className="a-lower-right-item-header">Steadfast seven</h4>
            <p className="a-lower-right-item-desc">
              Get your products delivered by 7am in the morning.
            </p>
          </div>
          <div className="a-lower-right-item-two">
            <h4 className="a-lower-right-item-header">Packed with care</h4>
            <p className="a-lower-right-item-desc">
              Quality packed food to suit your fast paced life.
            </p>
          </div>
          <div className="a-lower-right-item-three">
            <h4 className="a-lower-right-item-header">Effortless payments</h4>
            <p className="a-lower-right-item-desc">
              Make trouble free payments with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
