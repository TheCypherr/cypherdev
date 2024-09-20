import React from "react";
import Hero from "./Components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
