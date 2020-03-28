import React from "react";
import Section from "../Section"; 
import "./style.css";

function Skills() {

  return (
      <Section>
        <div class="text-center" id="skills">
            <h1 class="intro-ss">Skill Set</h1>
            <div class="d-flex justify-content-around flex-wrap" id="tech">
                <img class="logo" src="./images/html.jpg" alt="HTML" data-toggle="tooltip" title="HTML"/>
                <img class="logo" src="./images/css.jpg" alt="CSS" data-toggle="tooltip" title="CSS"/>
                <img class="logo" src="./images/js.jpg" alt="JavaScript" data-toggle="tooltip" title="JavaScript"/>
                <img class="logo" src="./images/jquery.jpg" alt="jQuery" data-toggle="tooltip" title="jQuery"/> 
                <img class="logo" src="./images/python.png" alt="Python" data-toggle="tooltip" title="Python"/> 
                <img class="logo" src="./images/sql.png" alt="MySQL" data-toggle="tooltip" title="MySQL"/> 
                <img class="logo" src="./images/mongodb.png" alt="MongoDB" data-toggle="tooltip" title="MongoDB"/> 
                <img class="logo" src="./images/reactjs.png" alt="React.js" data-toggle="tooltip" title="React.js"/>
                <img class="logo" src="./images/nodejs.png" alt="Node.js" data-toggle="tooltip" title="Node.js"/>
                <img class="logo" src="./images/s3.jpg" alt="AWS s3" data-toggle="tooltip" title="AWS s3"/>
                <img class="logo" src="./images/heroku.png" alt="Heroku" data-toggle="tooltip" title="Heroku"/>
                <img class="logo" src="./images/git.png" alt="Git/Github" data-toggle="tooltip" title="Git/Github"/>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-sm-4 ss communication">
                    <h3 tabindex="0" class="btn btn-lg text-black" role="button" data-placement="top" data-toggle="popover" data-trigger="focus" title="Experience" data-content="I have a long history of working with others. As a teacher, I work with students, parents, and coworkers to help each child succeed. I worked with mulitple interest groups during my time as an educational consultant, determining the needs of each party and working to ensure that everyone's ideas were represented. I have served both as a team member and a team lead.">Communication and Collaboration</h3>
                    
                </div>
                <div class="col-sm-4 ss present">
                    <h3 tabindex="0" class="btn btn-lg text-black" role="button" data-placement="top" data-toggle="popover" data-trigger="focus" title="Experience" data-content="Whether it's on a stage, in a classroom, or through a website, I have a passion for presenting others with new ideas and experiences. I am skilled at finding clear and effective ways to make complex ideas easily accessible, no matter what audience I am working with.">Presentation</h3>
                </div>
                <div class="col-sm-4 ss science">
                    <h3 tabindex="0" class="btn btn-lg text-black" role="button" data-placement="top" data-toggle="popover" data-trigger="focus" title="Experience" data-content="With my background in math and science, I have learned effective strategies to tackle tough problems. Facing up to a new challenge excites and motivates me. I love a good puzzle, but I especially love the feeling of figuring it out.">Critical Thinking</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 ss research">  
                    <h3 tabindex="0" class="btn btn-lg text-black" role="button" data-placement="top" data-toggle="popover" data-trigger="focus" title="Experience" data-content="I am research-minded. Having worked in both biological and educational research, I know that finding the best solution invloves testing, aquiring data, and careful analysis to find ways to improve. In my work developing educational games, I gleaned information from mulitple sources to continue the process of making software easier to use, clearer to understand, and more effective in its purpose.">Research</h3>
                </div>
                <div class="col-sm-4 ss software">
                    <h3 tabindex="0" class="btn btn-lg text-black" role="button" data-placement="top" data-toggle="popover" data-trigger="focus" title="Experience" data-content="Developing good software involves many components. I am experienced at looking at the product through the lens of the consumer, working to create user-friendly interfaces for students. I have worked in the back-end, looking for new ways to make the data retrieved from the program easier to use. And with my work in scritping JSON files and my studies at Vanderbilt's coding bootcamp, I come with a host of techincal skills to apply that knowledge and create functional web-applications.">Software Development</h3>
                </div>
                <div class="col-sm-4 ss organize">
                    <h3 tabindex="0" class="btn btn-lg text-black" role="button" data-placement="top" data-toggle="popover" data-trigger="focus" title="Experience" data-content="Ogranization has always been a love of mine. Multi-tasking and planning have been a key part to my success at work, allowing me to manage entire research studies, classrooms, and educational programs, and also my life at home as a mother to two children.">Organization</h3>
                </div>
            </div>
        </div>   
      </Section>
   
);
}

export default Skills;