import React from "react";
// import "./style.css";
import Section from "../Section"; 


function Portfolio() {

  return (
      <Section>
           <div id="portfolio">
            <h1>Portfolio</h1>
            <div id="port-desk">
                <div class="row p-2" id="port-paper">
                    <div class="col-2 d-flex align-items-center">
                        <button id="newProjects" class="btn switch"><i class="fas fa-chevron-left"></i></button>
                    </div>
                    <div class="col-8 projectContainer">
                        <div class="border-bottom border-dark m-2" id="project1">
                            <h2><a class= "link" target="_blank" href="https://jamiekook.github.io/WeatherDashboard/"><span class="title">Weather Dashboard</span></a></h2>
                            <i class="fas fa-cloud-sun"></i>
                            <p class="description m-0">Find a location's current weather and 5-day forecast.</p>
                            <button id="weather" class="btn btn-dark m-1 portbtn"><a href="#portfolio" class="text-white">Learn More</a></button>
                        </div>
                        <div class="border-bottom border-dark m-2" id="project2">
                            <h2><a class= "link" target="_blank" href="https://jamiekook.github.io/DayPlanner/"><span class="title">Day Planner</span></a></h2>
                            <i class="fas fa-calendar-alt"></i>
                            <p class="description m-0">Plan out your work day.</p>
                            <button id="planner" class="btn btn-dark m-1 portbtn"><a href="#portfolio" class="text-white">Learn More</a></button>
                        </div>
                        <div class="border-bottom border-dark m-2" id="project3">
                            <h2><a class= "link" target="_blank" href="https://jamiekook.github.io/TimedQuiz/"><span class="title">Timed Quiz</span></a></h2>
                            <i class="fas fa-brain"></i>
                            <p class="description m-0">Test your trivia knowledge</p>
                            <button id="quiz" class="btn btn-dark m-1 portbtn"><a href="#portfolio" class="text-white">Learn More</a></button>
                        </div>
                    </div>
                    <div class="col-2 d-flex align-items-center">
                        <button id="oldProjects" class="btn switch"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    
                </div>
                <div id="port-more" hidden>
                    <div id="port-cont" class="container p-5 text-left animated slideInUp">
                        <h2 id="port-title"></h2>
                        <p id="port-descript"></p>
                        <p id="port-role"></p>
                        <p id="port-tech"></p>
                        <img class="img-fluid" id="port-img" src=""/>
                        <div class="text-center buttongroup m-5">
                            <button class="btn btn-dark m-1"><a target="_blank" href="" id="port-linkapp">View the application</a></button>
                            <button class="btn btn-dark m-1"><a target="_blank" href="" id="port-linkhub">View the repository</a></button>
                            <button class="btn btn-dark m-1" id="back"><a href="#portfolio">Back to Portfolio</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </Section>

       
        );
}

export default Portfolio;