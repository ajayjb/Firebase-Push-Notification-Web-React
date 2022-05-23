import Intro from "./components/intro/Intro";
import About from "./components/about/About.jsx";
import Order from "./components/order/Order.jsx";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Order />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
