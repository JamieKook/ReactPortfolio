import React from "react";
import "./style.css";
import headshot from "./headshot.jpg";
import resume from "./ResumeKook.pdf"; 

function Intro(props) {
  return (
    <div>
        <header id="home" className="row header align-items-center">
            <div className="col-sm-8 intro">
                <h1>Jamie Kook</h1>
                <div className="line"></div>
                <h2>Web Developer</h2>
                <h5>801-718-6794</h5>
                <h5>kookjc6@gmail.com</h5>
                <h5><a target="_blank" href="https://www.linkedin.com/in/jamie-kook-b7816770/">LinkedIn</a> | <a target="_blank" href="https://github.com/JamieKook">Github</a> </h5>
                <div className="buttons m-2">
                    <button><a href={resume} download="JamieKookResume">Download Resume</a></button>
                </div>      
            </div>
            <div className="col-sm-4 d-flex align-items-center justify-content-center"><img className="img-fluid headshot" src={headshot}/></div>
        </header>
        <div className="section about row">
            <div className="overlay d-flex align-items-center">
                <div className="container">
                    <p>Web Developer coming from a background in science education and research. Experienced in creating a <a href="http://www.surgeuniverse.com/" target="_blank">web-hosted educational game</a>  that used theory and data-driven feedback in its effectiveness and clear presentation of information. Recently earned a certificate in Full-Stack Web Development from Vanderbilt University, acquiring a functional knowledge of HTML, CSS, Javascript, React.js, Node.js, and more. A great collaborator and communicator, having used my organizational and critical thinking skills to move projects forward both as a leader and as a team member. A quick learner who is always eager to tackle difficult problems and enjoys puzzling through a new challenge. Looking forward to developing new web technologies, utilizing my background and technical skills, and adapting along the way.</p>
                    <button className="btn btn-light"><a href="#portfolio">View my work</a></button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Intro;