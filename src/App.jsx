import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section><Parallax type="about"/></section>
    <section id="About"><About/></section>
    <section><Parallax type="portfolio"/></section>
    <section id="Skills"><Skills/></section>
    <section><Parallax type="about"/></section>
    <section id="Portfolio"><Work/></section>
    <section><Parallax type="portfolio"/></section>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
