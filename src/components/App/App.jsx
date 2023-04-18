import React from "react";
import "./App.css";
import Intro from "./introduction";
import Nav from "../navbar";
import About from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";
import Skills from "./skills";

function App() {
  return (
    <div>
      <header>
        <Nav />
        <Intro />
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Contact />
        </div>
      </header>
    </div>
  );
}

export default App;
