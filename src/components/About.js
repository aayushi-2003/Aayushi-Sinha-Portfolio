import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, MeshDistortMaterial, Sphere} from "@react-three/drei";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
    return (
      <div id="about" className="section">
        <div className="container flex justify-between items-center mx-auto gap-8 lg:flex-row flex-col">
          <motion.div variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} className="card-container flex items-center justify-center p-10 order-2 lg:order-1">
            <div className="h-[400px] w-[400px] bg-blue-400 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 -rotate-6 relative -left-10">
            <div className="h-[380px] w-[380px] bg-white rounded-3xl absolute rotate-6 left-10 top-2 text-black p-16 ">
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
          </motion.div>

          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'}className="about-details flex flex-col items-end justify-center  text-right gap-16 relative order-1 lg:order-2">
            <div className="absolute z-0 -top-7 md:-top-16 -right-[120px] h-20 md:h-auto">
          <Canvas >
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false}  />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={3}>
                <MeshDistortMaterial
                  color="#4EA3F1"
                  attach="material"
                  distort={0.2}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          </div>
            <h1 className="text-[30px] md:text-[50px] lg:text-[60px] z-10">About Me</h1>
            <p className="text-base md:text-lg text-justify z-10 leading-normal">
              Hey there! I'm Aayushi, a passionate learner exploring the realms of 
              <span className="text-sky-300"> Web Development</span> and <span className="text-sky-300">UI/UX Design.</span> <br /><br />
              Growing up, I developed a deep love for stories, whether found in books, movies, or shared through people's experiences. <br /><br />
              As an artist at heart and a tech enthusiast, I find inspiration in these stories, infusing them into my creative process to craft fascinating designs and innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
  
  export default About;