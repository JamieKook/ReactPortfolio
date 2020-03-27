import React from "react";
import "./style.css";
import UofU from "./UofU.jpg"; 
import Peabody from "./Peabody.jpg"; 
import Vandy from "./vandy.jpg"; 

function EdCol(props) {
  const imageSrc= props.image;
  let src= null;  
  switch(imageSrc){
    case "UofU": 
      src= UofU; 
    case "Peabody":
      src= Peabody; 
    case "Vandy":
      src= Vandy; 
  }


  return (
        <div className=" col-md-4 under ed">
            <img className="img-fluid" src={props.image}/>
            <h2>{props.degree}</h2>
            <h3>{props.name}</h3>
            <div className="my-3 py-2">
                <p>{props.p1}</p>
                <p>{props.p2}</p>
                <p>{props.p3}</p>
            </div>
            <div className="year-contain p-3">
                <h4 className="year">{props.year}</h4>
            </div>     
        </div>
      
  );
}

export default EdCol;
                