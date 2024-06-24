import React from 'react';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Resume from "./containers/resume/resume";
import Skill from "./containers/skills/skill";
import Portfolio from "./containers/portfolio/portfolio";
import Contact from "./containers/contact/contact";
import Navbar from "./components/navBar";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App-main-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;