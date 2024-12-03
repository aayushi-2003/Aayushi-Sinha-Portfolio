import React from "react";
import { projectDetails } from "../assets/projectsDetails";
import AnimatedTabs from "../constants/AnimatedTabs";

const Projects = () => {
    return (
      <div id="projects" className="section flex items-center justify-center h-auto">
        <div className="mx-auto">
            <div className="col flex flex-col items-center justify-center gap-10 lg:gap-12 ">
              <h2 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-heading ">My Projects</h2>
              <AnimatedTabs/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Projects;