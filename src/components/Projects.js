import React from "react";
import { projectDetails } from "../assets/projectsDetails";
import AnimatedTabs from "../constants/AnimatedTabs";

const Projects = () => {
    return (
      <div id="projects" className="section flex items-center">
        <div className="container mx-auto">
          <div className="row">
            <div className="col flex flex-col items-center justify-center gap-12 ">
              <h2 className="text-[60px] ">Projects</h2>
              <AnimatedTabs/>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;