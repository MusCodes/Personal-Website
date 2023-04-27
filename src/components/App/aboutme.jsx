import React from "react";

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="about-container">
      <div className="about-card">
        <div className="about-content">
          <div className="macImage">
            <a href="https://imgbb.com/">
              <img
                src="https://i.ibb.co/56Fb793/transparent.png"
                alt="transparent"
                border="0"
              />
            </a>
          </div>
          <div className="about-text">
            <h1 className="aboutMustafa">About Mustafa</h1>
            <p className="aboutP">
              Hi there, my name is Mustafa and I'm 23 years old. I'm passionate
              about coding and building computers, and I love the challenge of
              solving complex problems in these areas. When I'm not immersed in
              technology, I like to hit the gym and stay active. Spending time
              with my family is also very important to me, especially since I
              have seven siblings! One of my favorite ways to unwind is by
              immersing myself in nature. Whether it's hiking through the woods
              or biking along scenic trails, I love the peace and tranquility of
              being surrounded by trees and wildlife. And when I'm in the mood
              for some indoor fun, I enjoy playing video games with friends and
              family. Overall, I believe in the power of hard work,
              determination, and a positive attitude. I'm always eager to learn
              new things and take on new challenges. In the future, I hope to
              continue growing my skills as a programmer, while also making time
              for the things that matter most in life.
            </p>
          </div>
        </div>
      </div>
    </div>
);
})

export default About;
