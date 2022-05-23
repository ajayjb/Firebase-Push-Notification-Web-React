import React, { useState } from "react";
import "./testimonial.css";
import left from "../../images/left.png";
import right from "../../images/right.png";

const Testimonial = () => {
  const [slide, setSlide] = useState(0);

  const leftSlide = (e) => {
    e.stopPropagation();
    if (slide === 0) {
      setSlide(1360);
    } else {
      setSlide(slide - 680);
    }
  };

  const rightSlide = (e) => {
    e.stopPropagation();
    if (slide === 1360) {
      setSlide(0);
    } else {
      setSlide(slide + 680);
    }
  };

  return (
    <div className="t">
      <div className="t-container">
        <h2 className="t-container-heading">Testimonial</h2>

        <div className="t-container-description-container">
          <p className="t-container-description">
            A wide range of available products, From order to checkout just
            within few clicks.
          </p>
          <p className="t-container-description">
            Order at anytime and get your products delivered by next Morning 7
            AM .......It doesn't get much easier than this.{" "}
          </p>
        </div>

        <div onClick={leftSlide} className="t-container-carousel-container">
          <div className="t-left-slider">
            <img className="t-slider-image" src={left} alt="left arrow" />
          </div>
          <div className="t-slider-container">
            <div
              style={{
                transform: `translateX(${-slide}px)`,
                transition: "all 1s ease-in-out",
              }}
              className="t--container-carousel-container-items"
            >
              <div className="t-container-carousel-container-items-one">
                <div className="t-container-carousel-container-items-one-comment">
                  <p>A wide range of available products, From order to</p>
                  <p>checkout just within few clicks.</p>
                  <p> Order at anytime and get your products delivered by </p>
                  <p>
                    next Morning 7 AM .......It doesn't get much easier than
                    this.
                  </p>
                </div>
                <div className="t-container-carousel-container-items-one-footer">
                  <img
                    className="t-profile-image"
                    src="https://img.freepik.com/free-photo/beautiful-teen-girl-student-with-confident-expression-keeps-arms-folded-portrait-smiling-teenager-isolated-white-wall_231208-97.jpg?t=st=1653122511~exp=1653123111~hmac=76502a71e0061bd0fe97909afb141f0f19aa47dd29420d68c9da9ffe13fe3ede&w=996"
                    alt="customer"
                  />
                  <div className="t-profile-info">
                    <h3>Gina</h3>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
              <div className="t-container-carousel-container-items-two">
                <div className="t-container-carousel-container-items-one-comment">
                  <p>A wide range of available products, From order to</p>
                  <p>checkout just within few clicks.</p>
                  <p> Order at anytime and get your products delivered by </p>
                  <p>
                    next Morning 7 AM .......It doesn't get much easier than
                    this.
                  </p>
                </div>
                <div className="t-container-carousel-container-items-one-footer">
                  <img
                    className="t-profile-image"
                    src="https://img.freepik.com/free-photo/happy-winsome-girl-jeans-with-brown-belt-having-fun-street-outdoor-portrait-spectacular-caucasian-lady-black-sunglasses-dancing-urban-wall_197531-5085.jpg?t=st=1653122511~exp=1653123111~hmac=d917caab14a9befc5dc7d5f7e9035ddedef6c7e27e43236cc58ac39ecbb64c47&w=996"
                    alt="customer"
                  />
                  <div className="t-profile-info">
                    <h3>Gina</h3>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
              <div className="t-container-carousel-container-items-three">
                <div className="t-container-carousel-container-items-one-comment">
                  <p>A wide range of available products, From order to</p>
                  <p>checkout just within few clicks.</p>
                  <p> Order at anytime and get your products delivered by </p>
                  <p>
                    next Morning 7 AM .......It doesn't get much easier than
                    this.
                  </p>
                </div>
                <div className="t-container-carousel-container-items-one-footer">
                  <img
                    className="t-profile-image"
                    src="https://img.freepik.com/free-photo/charming-girl-denim-sundress-sweater-touches-her-red-hair-poses-wearing-glasses_197531-23296.jpg?t=st=1653117628~exp=1653118228~hmac=0b762d676de37ad2de22f9abc2b8d5abb5e1740f9c1a18e14a028a4f041f94fd&w=996"
                  />
                  <div className="t-profile-info">
                    <h3>Gina</h3>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onClick={rightSlide} className="t-right-slider">
            <img className="t-slider-image" src={right} alt="right arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
