import React from "react";
import "./style.css";
import Container from "../Container";
import Section from "../Section"; 
import UofU from "./UofU.jpg"; 
import Peadbody from "./Peabody.jpg"; 
import Vandy from "./vandy.jpg"; 



function Education() {
  return (
      <Section>
        <div id="education">
            <h1>Education</h1>
            <div className="row">
                <div className=" col-md-4 under ed">
                    <img className="img-fluid" src={UofU}/>
                    <h2>Bachelor of Science, Biology</h2>
                    <h3>University of Utah</h3>
                    <div className="my-3 py-2">
                        <p>ACCESS Program for Women in Math and Science</p>
                        <p>Biology Undergraduate Research Program</p>
                        <p>Honors College Community Leadership Scholar</p>
                    </div>
                    <div className="year-contain p-3">
                        <h4 className="year">2010</h4>
                    </div>     
                </div>
                <div className="col-md-4 grad ed">
                    <img className="img-fluid" src={Peadbody}/>
                    <h2>Master of Education, Secondary Science</h2> 
                    <h3>Vanderbilt University</h3>
                    <div className="my-3 py-2">
                        <p>Peabody Honors Scholarship Cohort</p>
                        <p>Peabody Graduate Student Association- Teaching and Learning Co-Chair</p>
                    </div>
                    <div className="year-contain p-3">
                        <h4 className="year">2013</h4>
                    </div>      
                </div>
                <div className="col-md-4 bootcamp ed">
                    <img className="img-fluid" src={Vandy}/>
                    <h2>Web Development Coding Bootcamp</h2>
                    <h3>Vanderbilt University</h3>
                    <div className="my-3 py-2">
                        <p>HTML5, CSS3, JavaScript, jQuery, Bootstrap, MySQL, MongoDB, React.js, Node.js, Express.js, MERN Stack, Heroku, Git, and QA</p>
                    </div>
                    <div className="year-contain p-3">
                        <h4 className="year">2020</h4>
                    </div>
                </div>
            </div>
        </div>
      </Section>
    
  );
}

export default Education;