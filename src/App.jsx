import { Navbar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
