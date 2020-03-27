import React from "react";
import "./style.css";


function Section(props) {
  return (
    <div classname= "section">
       {props.children}
    </div>
  );
}

export default Section;