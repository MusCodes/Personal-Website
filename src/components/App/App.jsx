import React from "react";
import "./App.css";
import Intro from "./introduction";
// import Nav from "../navbar";
import About from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";
import Skills from "./skills";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useRef } from "react";



function App() {
  const aboutRef = useRef(null);
  return (
    <div>
      <header>
        <Router>
          {/* <Nav /> */}
          <Intro aboutRef={aboutRef} />

          <Routes>
            <Route path="/about" element={<About ref={aboutRef} />} />
          </Routes>
          <div>
            <Skills />
          </div>
          <div>
            <Projects />
          </div>
          <div>
            <Contact />
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
