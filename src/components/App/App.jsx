import React from "react";
import "./App.css";
import Intro from "./introduction";
import About from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";
import Skills from "./skills";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  return (
    <div>
      <header>
        <Intro aboutRef={aboutRef} />
        <About ref={aboutRef} />
        <Skills />
        <Projects />
        <Contact />
      </header>
    </div>
  );
}

export default App;
