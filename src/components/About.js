import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, MeshDistortMaterial, Sphere} from "@react-three/drei";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import {ReactComponent as Python} from '../assets/logos/python.svg';
import {ReactComponent as JavaScript} from '../assets/logos/javascript.svg';
import {ReactComponent as Cpp} from '../assets/logos/cpp.svg';
import {ReactComponent as TW} from '../assets/logos/tailwindcss.svg';
import {ReactComponent as Reactlogo} from '../assets/logos/react.svg';
import {ReactComponent as Pandas} from '../assets/logos/pandas.svg';
import {ReactComponent as OpenCV} from '../assets/logos/opencv.svg';
import {ReactComponent as Numpy} from '../assets/logos/numpy.svg';
import {ReactComponent as Tableau} from '../assets/logos/tableau.svg';
import {ReactComponent as PowerBI} from '../assets/logos/powerbi.svg';
import {ReactComponent as Excel} from '../assets/logos/excel.svg';
import {ReactComponent as Figma} from '../assets/logos/figma.svg';
import {ReactComponent as Git} from '../assets/logos/git.svg';
import {ReactComponent as Sql} from '../assets/logos/mysql.svg';
import {ReactComponent as Art} from '../assets/logos/art.svg';
import clang from '../assets/logos/c.png'


const About = () => {
    return (
      <div id="about" className="section">
        <div className="container flex justify-between items-center mx-auto lg:space-x-8 md:flex-row flex-col">
          <motion.div variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} className="card-container flex flex-col items-center justify-center pt-8 md:p-8 lg:p-10 order-2 lg:order-1 pl-[70px] md:pl-0 gap-y-4">
            <div className=" bg-blue-400 backdrop-blur-md bg-opacity-20  rounded-xl  text-black flex flex-col items-start justify-center  relative p-[2px] bg-gradient-to-r from-blue-400/40 via-blue-200/40 to-blue-500/40 ">
              <div className="h-fit  w-[380px] bg-[#192957] rounded-xl p-6 ">
                <h1 className="mb-1 lg:mb-4 text-[20px]  font-semibold tracking-wider text-white font-heading">My Key Skills</h1>
                <div className="flex flex-col gap-4 font-medium md:leading-8 lg:leading-10 ">
                  <div className=" flex space-x-3 lg:space-x-8">
                    <Python className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <img src={clang} className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <Cpp className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <JavaScript className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <Sql className="h-[36px] w-[36px] lg:h-[44px] lg:w-[44px]"/>
                  </div>
                  <div className="flex space-x-3 lg:space-x-8">
                    <TW className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <Reactlogo className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <Pandas className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <OpenCV className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <Numpy className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                  </div>
                  <div className="flex space-x-3 lg:space-x-8">
                    <Tableau className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <PowerBI className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <Excel className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <Figma className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                    <Git className="h-[36px] w-[36px] lg:h-[40px] lg:w-[40px]"/>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-blue-400 backdrop-blur-md bg-opacity-20  rounded-xl  text-black flex flex-col items-start justify-center  relative p-[2px] bg-gradient-to-r from-blue-400/40 via-blue-200/40 to-blue-500/40 ">
              <div className="h-fit w-[380px] bg-[#192957] rounded-xl p-6 ">
                <h1 className="mb-1 lg:mb-4 text-[20px]  font-semibold tracking-wider text-white font-heading">Beyond Code I Love</h1>
                <div className="flex gap-4 font-medium md:leading-8 lg:leading-10 flex-wrap">
                    <div className="bg-white rounded-md px-3 py-2 leading-none text-[16px] flex items-center justify-center space-x-2">
                      <span>Art</span>
                      <Art className="h-[24px] w-[24px]"/>
                    </div>
                    <div className="bg-white rounded-md px-3 py-2 leading-none text-[16px] flex items-center justify-center space-x-2">
                      <span>Reading</span>
                      <Art className="h-[24px] w-[24px]"/>
                    </div>
                    <div className="bg-white rounded-md px-3 py-2 leading-none text-[16px] flex items-center justify-center space-x-2">
                      <span>Guitar</span>
                      <Art className="h-[24px] w-[24px]"/>
                    </div>
                    <div className="bg-white rounded-md px-3 py-2 leading-none text-[16px] flex items-center justify-center space-x-2">
                      <span>Writing</span>
                      <Art className="h-[24px] w-[24px]"/>
                    </div>
                    <div className="bg-white rounded-md px-3 py-2 leading-none text-[16px] flex items-center justify-center space-x-2">
                      <span>Watching movies</span>
                      <Art className="h-[24px] w-[24px]"/>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'}className="about-details flex flex-col items-center md:items-end justify-center  text-right gap-6 lg:gap-16 relative order-1 md:order-2">
            <div className="absolute z-0 -top-10 lg:-top-16 right-[-48px] lg:right-[-30px] xl:right-[-120px] h-24 lg:h-auto w-44 xl:w-auto invisible md:visible ov">
          </div>
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] z-10 bg-gradient-to-r from-[#C0C0C0] via-[#FFFFFF] to-[#C0C0C0] bg-clip-text text-transparent leading-none font-heading">About Me</h1>
            <p className="text-base xl:text-[18px] text-center md:text-justify z-10 leading-normal text-white/80">
              Hey there! I'm Aayushi, a passionate learner exploring the realms of <span className="text-[#D6AFFE]">ML, Data Science</span>,
              <span className="text-[#D6AFFE]"> Web Development</span> and <span className="text-[#D6AFFE]">UI/UX Design.</span> <br /><br />
              Growing up, I developed a deep love for stories, whether found in books, movies, or shared through people's experiences. <br /><br />
              As an artist at heart and a tech enthusiast, I find inspiration in these stories, infusing them into my creative process to craft fascinating designs and innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
  
  export default About;