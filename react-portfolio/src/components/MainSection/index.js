import React from "react";
import "./style.css";
import Intro from "../Intro"; 
import Section from "../Section"; 
import Education from "../Education"; 

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function MainSection(props) {
  return (
      <div className="main">
        <Intro/>
        <Education/>
      </div>
      
  );
}

export default MainSection;
