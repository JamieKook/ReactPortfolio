import React, {useState, useEffect} from "react";
import "./style.css";
import Section from "../Section"; 
import Project from "../Project"; 
import projectList1 from "./projects.json"; 
import projectList2 from "./projects2.json"; 

function Portfolio() {
    const [displayProjects, setDisplayProjects]= useState(projectList1);
    const [page1Projects, setPage1Projects]= useState(projectList1); 
    const [page2Projects, setPage2Projects]= useState(projectList2); 
    const [currentPage, setCurrentPage]= useState(1); 
    const [cssChange, setCssChange] = useState("row p-2 absolutePos"); 
    const [projectsHidden, setProjectsHidden]= useState({}); 
  
    const handleClick= ()=>{
        //had weird offsetting bug where position would not be centered. Had to make the computer rerender the position as absolute in order to go back to center. 
        setCssChange("row p-2 staticPos")
        setProjectsHidden({display: "none"}); 
        if (currentPage ===1 ){
            setDisplayProjects(page2Projects);
            setCurrentPage(2);  
        } else if (currentPage === 2) {
            setDisplayProjects(page1Projects); 
            setCurrentPage(1); 
        }
        const timer = setTimeout(() => {
            setCssChange("row p-2 absolutePos");
            setProjectsHidden({}); 
            console.log("changed position back"); 
          }, 1);
          return () => clearTimeout(timer);
    }

  return (
      <Section>
           <div id="portfolio">
            <h1>Portfolio</h1>
            <div id="port-desk">
                <div className={cssChange} id="port-paper" style={projectsHidden}>
                    <div className="col-2 d-flex align-items-center">
                        <button id="newProjects" onClick= {handleClick} className="btn switch"><i className="fas fa-chevron-left"></i></button>
                    </div>
                    <div className="col-8 projectContainer">
                        {displayProjects.map(project => (
                            <Project
                                key={project.id}
                                id={project.id}
                                linkapp={project.linkapp}
                                title ={project.title}
                                icon= {project.icon}
                                shortd= {project.shortd}
                            />
                        ))}
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <button id="oldProjects" onClick= {handleClick} className="btn switch"><i className="fas fa-chevron-right"></i></button>
                    </div>
                    
                </div>
                <div id="port-more" hidden>
                    <div id="port-cont" className="container p-5 text-left animated slideInUp">
                        <h2 id="port-title"></h2>
                        <p id="port-descript"></p>
                        <p id="port-role"></p>
                        <p id="port-tech"></p>
                        <img className="img-fluid" id="port-img" src=""/>
                        <div className="text-center buttongroup m-5">
                            <button className="btn btn-dark m-1"><a target="_blank" href="" id="port-linkapp">View the application</a></button>
                            <button className="btn btn-dark m-1"><a target="_blank" href="" id="port-linkhub">View the repository</a></button>
                            <button className="btn btn-dark m-1" id="back"><a href="#portfolio">Back to Portfolio</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </Section>

       
        );
}

export default Portfolio;