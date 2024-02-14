import About from "../../modules/About/About";
import Contact from "../../modules/contact/Contact";
import Hero from "../../modules/hero/Hero";
import Vision from "../../modules/vision/Vision";

const Home = () => {
  return (
    <div>
      <Hero />
      <About id="about"/>
      <Vision id="vision"/>
      <Contact id="contact" />
    </div>
  );
};

export default Home;
