import React, { useState } from "react";
import "./testimonial.css";
import left from "../../images/left.png";
import right from "../../images/right.png";

const Testimonial = () => {
  const [slide, setSlide] = useState(0);
  const [displayWidth, setDisplayWidth] = React.useState(window.screen.width);

  const handleResize = () => {
    setDisplayWidth(window.screen.width);
  };

  window.addEventListener("resize", handleResize);

  const tatalSlideDistance = displayWidth <= 600 ? 660 : 1200;
  const slideMinus = displayWidth <= 600 ? 330 : 600;

  const leftSlide = (e) => {
    e.stopPropagation();
    if (slide === 0) {
      setSlide(tatalSlideDistance);
    } else {
      setSlide(slide - slideMinus);
    }
  };

  const rightSlide = (e) => {
    e.stopPropagation();
    if (slide === tatalSlideDistance) {
      setSlide(0);
    } else {
      setSlide(slide + slideMinus);
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

        <div
          style={
            displayWidth <= 600
              ? {
                  width: "330px",
                  height: "200px",
                  margin: "0 auto",
                  position: "relative",
                  borderRadius: "10px",
                }
              : {}
          }
          className="t-container-carousel-container"
        >
          <div
            onClick={leftSlide}
            style={
              displayWidth <= 600
                ? {
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: "50%",
                    left: "0",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#8ebc3e",
                    zIndex: "1",
                    cursor: "pointer",
                    opacity: 0.5,
                  }
                : {}
            }
            className="t-left-slider"
          >
            <img
              className="t-slider-image"
              style={
                displayWidth <= 600 ? { height: "14px", width: "14px" } : {}
              }
              src={left}
              alt="left arrow"
            />
          </div>
          <div
            style={
              displayWidth <= 600
                ? {
                    borderRadius: "10px",
                  }
                : {}
            }
            className="t-slider-container"
          >
            <div
              style={{
                transform: `translateX(${-slide}px)`,
                transition: "all 1s ease-in-out",
              }}
              className="t--container-carousel-container-items"
            >
              <div
                style={
                  displayWidth <= 600
                    ? {
                        flexBasis: "1",
                        flexShrink: "0",
                        width: "330px",
                        height: "200px",
                        backgroundColor: "#fbfcea",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }
                    : {}
                }
                className="t-container-carousel-container-items-one"
              >
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

              <div
                style={
                  displayWidth <= 600
                    ? {
                        flexBasis: "1",
                        flexShrink: "0",
                        width: "330px",
                        height: "200px",
                        backgroundColor: "#fbfcea",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }
                    : {}
                }
                className="t-container-carousel-container-items-two"
              >
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

              <div
                style={
                  displayWidth <= 600
                    ? {
                        flexBasis: "1",
                        flexShrink: "0",
                        width: "330px",
                        height: "200px",
                        backgroundColor: "#fbfcea",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }
                    : {}
                }
                className="t-container-carousel-container-items-three"
              >
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
          <div
            onClick={rightSlide}
            style={
              displayWidth <= 600
                ? {
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    position: "absolute",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: "50%",
                    right: "0",
                    transform: "translate(50%, -50%)",
                    backgroundColor: "#8ebc3e",
                    zIndex: "1",
                    cursor: "pointer",
                    opacity: 0.5,
                  }
                : {}
            }
            className="t-right-slider"
          >
            <img
              className="t-slider-image"
              style={
                displayWidth <= 600
                  ? { height: "14px", width: "14px", zIndex: "1" }
                  : {}
              }
              src={right}
              alt="right arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
