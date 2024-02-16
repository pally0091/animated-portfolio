import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import "./app.css";
import "./app.scss";

const App = () => {
  return (
    <div>
      <Navbar />

      <section id="Home">
        <Home />
      </section>
      <section>Parallax</section>
      <section id="Services">Services</section>
      <section id="Projects">Projects</section>
      <section id="About">About</section>
      <section id="Contacts">Contact</section>
    </div>
  );
};

export default App;
