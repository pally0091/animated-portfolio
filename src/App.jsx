import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import { SparklesPreview } from "./Components/SparklePreview/SparklesPreview";
import "./app.css";
import "./app.scss";

const App = () => {
  return (
    <div>
      <Navbar />

      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section>
        <SparklesPreview />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Projects">
        <Projects />
      </section>

      <section id="Contacts">
        <Contact />
      </section>
    </div>
  );
};

export default App;
