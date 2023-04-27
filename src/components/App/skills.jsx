 import React from "react";
 const Skills =React.forwardRef((props,ref) => {
  return (
    <>
    <div ref={ref} className="skills" >
    <h1>Technologies</h1>
    <div className="test">
    <img src="https://img.icons8.com/color/70/null/html-5--v1.png"/>
    <p>Html 5</p>
    </div>
    <img src="https://img.icons8.com/color/70/null/css3.png"/>
    <p>Css 3</p>
    <img src="https://img.icons8.com/fluency/70/null/javascript.png"/>
<p>JavScript</p>
    
    <div className="redux">
    <img src="https://img.icons8.com/ios-filled/70/null/redux.png"/>
<p>Redux</p>
</div>

    <img src="https://img.icons8.com/officel/70/null/react.png"/>
    <p>React</p>
    <img src="https://img.icons8.com/fluency/70/null/node-js.png"/>
<p>Node Js</p>
    <img src="https://img.icons8.com/officel/70/null/express-js.png"/>
<p>Express Js</p>
    <img src="https://img.icons8.com/ios-filled/70/null/jquery.png"/>
<p>Jquery</p>
    <img src="https://img.icons8.com/color/48/null/postgreesql.png"/>
<p>PostgreSQL</p>
    <img src="https://img.icons8.com/color/70/null/bootstrap.png"/>
<p>Bootstrap</p>
    <img src="https://img.icons8.com/color/48/null/tailwindcss.png"/>
<p>Tailwind</p>
    <img src="https://img.icons8.com/ios/70/null/git.png"/>
<p>Git</p>
    <img src="https://img.icons8.com/ios-filled/70/null/c-sharp-logo.png"/>
<p>C#</p>
    <img width="70" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/512px-.NET_Core_Logo.svg.png"/>
<p>.Net core</p>


     
      </div>
    </>
  );
})
export default Skills
