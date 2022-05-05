import Intro from "./components/intro/Intro";
import About from "./components/about/About.jsx";
import Order from "./components/order/Order.jsx";
import Products from "./components/products/Products.jsx";
import Testimonial from "./components/testimonial/Testimonial";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Order />
      <Products />
      <Testimonial />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
