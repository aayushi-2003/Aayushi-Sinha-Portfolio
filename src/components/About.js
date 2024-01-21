import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, MeshDistortMaterial, Sphere} from "@react-three/drei";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
    return (
      <div id="about" className="section">
        <div className="container flex justify-between items-center mx-auto lg:space-x-8 md:flex-row flex-col">
          <motion.div variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} className="card-container flex items-center justify-center pt-8 md:p-8 lg:p-10 order-2 lg:order-1 pl-[70px] md:pl-0">
            <div className="h-[270px] w-[270px] md:h-[300px] md:w-[300px] lg:h-[360px] lg:w-[360px] xl:h-[400px] xl:w-[400px] bg-blue-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 -rotate-6 relative -left-10">
            <div className="h-[250px] md:h-[280px] lg:h-[340px] w-[250px] md:w-[280px] lg:w-[340px] xl:h-[380px] xl:w-[380px] bg-white rounded-3xl absolute rotate-6 left-10 top-2 text-black flex flex-col items-center justify-center ">
              <div>
              <h1 className="mb-2 lg:mb-4 text-[16px] md:text-[20px] lg:text-[25px]  font-semibold tracking-wider">Key Skills</h1>
              <div className="flex gap-10 font-medium md:leading-8 lg:leading-10">
              <ul className="tech-list text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
                <li>ReactJS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>C</li>
              </ul>
              <ul className="tech-list text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]">
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
          </motion.div>

          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'}className="about-details flex flex-col items-center md:items-end justify-center  text-right gap-6 lg:gap-16 relative order-1 md:order-2">
            <div className="absolute z-0 -top-10 lg:-top-16 right-[-48px] lg:right-[-30px] xl:right-[-120px] h-24 lg:h-auto w-44 xl:w-auto invisible md:visible ov">
          <Canvas >
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false}  />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={3}>
                <MeshDistortMaterial
                  color="#2591F4"
                  attach="material"
                  distort={0.2}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          </div>
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] z-10">About Me</h1>
            <p className="text-base xl:text-lg text-center md:text-justify z-10 leading-normal">
              Hey there! I'm Aayushi, a passionate learner exploring the realms of 
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