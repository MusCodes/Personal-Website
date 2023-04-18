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
      </div>
    </>
  );
}

export default Intro;
