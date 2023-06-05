import React from "react";

const Skills = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="skills">
        <h1>Skills</h1>
        <div className="skillsBorder">
          <div className="skillsRow">
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/color/70/null/html-5--v1.png" />
              </div>
              <p>Html 5</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/color/70/null/css3.png" />
              </div>
              <p>Css 3</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/fluency/70/null/javascript.png" />
              </div>
              <p>JavScript</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/ios-filled/70/null/redux.png" />
              </div>
              <p>Redux</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/officel/70/null/react.png" />
              </div>
              <p>React</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/fluency/70/null/node-js.png" />
              </div>
              <p>Node Js</p>
            </div>
          </div>
          <div className="skillsRow">
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/officel/70/null/express-js.png" />
              </div>
              <p>Express Js</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/ios-filled/70/null/jquery.png" />
              </div>
              <p>Jquery</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/color/48/null/postgreesql.png" />
              </div>
              <p>PostgreSQL</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/color/70/null/bootstrap.png" />
              </div>
              <p>Bootstrap</p>
            </div>
          </div>
          <div className="skillsRow">
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/color/48/null/tailwindcss.png" />
              </div>
              <p>Tailwind</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/ios/70/null/git.png" />
              </div>
              <p>Git</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img src="https://img.icons8.com/ios-filled/70/null/c-sharp-logo.png" />
              </div>
              <p>C#</p>
            </div>
            <div className="skill">
              <div className="skill-icon">
                <img
                  width="70"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/512px-.NET_Core_Logo.svg.png"
                />
              </div>
              <p>.Net Core</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Skills;
