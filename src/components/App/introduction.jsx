import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Intro() {
  const [loop, setLoop] = useState(true);

  const handleTypewriterFinish = () => {
    // Toggle the loop state to continue or stop the typing animation
    setLoop(!loop);
  };

  return (
    <>
      <div className="shaper">
        <h1>Mustafa K Mustafa</h1>
        <Typewriter
          options={{
            strings: [
              "I am a Software Developer",
              "I am a Problem-Solver",
              "I am an Athlete",
            ],
            autoStart: true,
            loop: loop,
          }}
          onInit={(typewriter) => {
            typewriter
              .callFunction(() => {
                console.log("Typewriter started");
              })
              .typeString("I am a ")
              .pauseFor(500)
              .deleteChars(18)
              .typeString("Problem-Solver")
              .pauseFor(500)
              .deleteChars(15)
              .typeString("Athlete")
              .pauseFor(500)
              .deleteChars(7)
              .typeString("Software Developer")
              .pauseFor(500)
              .callFunction(() => {
                console.log("Typewriter finished");
              })
              .callFunction(handleTypewriterFinish)
              .start();
          }}
        />

        <div className="icon-container">
          <a
            href="https://www.linkedin.com/in/mustafakmustafa/"
            target="_blank"
            rel="noopener noreferrer"
          >
           <img src="https://img.icons8.com/ios-filled/150/000000/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/MusCodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/fluency/48/null/github.png"
              alt="GitHub"
            />
          </a>
          <a
            href="https://docs.google.com/document/d/1HXi5oy0LvRJ25UOD1YHdu20g2ykPj438r239083C6mk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/null/resume.png"
              alt="Resume"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Intro;
