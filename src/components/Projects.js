import React from "react";
import { projectDetails } from "../assets/projectsDetails";
import AnimatedTabs from "../constants/AnimatedTabs";

const Projects = () => {
    return (
      <div id="projects" className="section flex items-center justify-center h-auto">
        <div className="mx-auto">
            <div className="col flex flex-col items-center justify-center gap-10 ">
              <div className="flex flex-col justify-center items-center gap-10">
                <h2 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-heading ">My Projects</h2>
                <span className="h-1 w-[10rem] bg-gradient-to-r from-purple_light via-purple-400 to-pink-600 rounded-md"></span>
              </div>
              <AnimatedTabs/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Projects;