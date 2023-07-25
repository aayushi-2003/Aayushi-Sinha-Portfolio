import React from "react";

const About = () => {
    return (
      <div id="about" className="section">
        <div className="container">
          <div className="card-container w-1/2 flex items-center justify-center">
            <div className="h-[400px] w-[400px] bg-blue-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 -rotate-6 relative ">
            <div className="h-[380px] w-[380px] bg-white rounded-3xl absolute rotate-6 left-8 top-2 text-black p-16 ">
              <h1 className="mb-4 text-[22px] font-semibold">Key Skills</h1>
              <div className="flex gap-10 font-medium leading-10 ">
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>C</li>
              </ul>
              <ul className="tech-list ">
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
                <li>Figma</li>
                <li>Git/GitHub</li>
              </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;