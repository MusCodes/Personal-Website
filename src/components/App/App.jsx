import React from "react";
import "./App.css";
import Intro from "./introduction";
import About from "./aboutme";
import Projects from "./projects";

import Skills from "./skills";
import { useRef } from "react";
import ScrollToTopButton from "./scroll";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div>
      <header>
        <Intro aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
      </header>
      <ScrollToTopButton/>
    </div>
  );
}


export default App;
