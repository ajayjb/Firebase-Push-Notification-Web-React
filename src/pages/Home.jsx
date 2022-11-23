import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Intro from "../components/intro/Intro";
import Order from "../components/order/Order";
import Testimonial from "../components/testimonial/Testimonial";
import { Fragment } from "react";
import "../app.css";

const Home = () => {
  return (
    <Fragment>
      <Intro />
      <About />
      <Order />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};

export default Home;
