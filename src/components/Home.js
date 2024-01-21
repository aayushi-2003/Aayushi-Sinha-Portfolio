import React, {Suspense} from "react";
import {Link} from 'react-scroll';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import {AiOutlineRight} from 'react-icons/ai';
import {ReactComponent as HomeImg} from '../assets/HomeImg.svg';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, MeshDistortMaterial, Sphere} from "@react-three/drei";

const Home = () => {
  const resumeURL = 'https://drive.google.com/file/d/1H1AzA_5ynkEYYhPgswzT0CiaSbKd2X-q/view?usp=drive_link';
  const behanceURL = 'https://www.behance.net/aayushisinha7';
    return (
      <section id="home" className="section flex items-center pt-20 lg:pt-0">
        <div className="container mx-auto z-20 pb-10">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">

          {/* Name and headings */}
          <div className=" space-y-6 flex-1 text-center lg:text-left">
            {/* Name */}
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="text-[30px] md:text-[50px] font-semibold leading-[0.8] lg:text-[44px] xl:text-[60px] ">
              AAYUSHI <span>SINHA</span>
            </motion.h1>

            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[35px] uppercase leading-[1] font-semibold ">
              <span className="">I am a </span>
              <TypeAnimation sequence={[
                'CSE Student', 2000,
                'UI/UX Designer', 2000,
                'Frontend Developer', 2000,
              ]} speed={50} className="text-purple_light" wrapper="span" repeat={Infinity}/>
            </motion.div>

              <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="mb-8 max-w-lg mx-auto lg:mx-0 text-[16px] xl:text-[18px] leading-7">
              I am a 3rd Year Computer Science and Engineering Student from IIIT Dharwad. I love to design and build beautiful and responsive websites. I am a quick learner and always ready to learn new things. 
              </motion.p>

              {/* Buttons/links */}
              <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 md:flex-row flex-col gap-y-5 ">
              <a href={behanceURL}><button className="btn btn-lg h-10 w-44  p-0 cursor-pointer">Behance Profile</button></a>
                <a href={resumeURL} target="_blank" className="flex items-center hover:border-b-[1px] hover:text-cyan-200">View My Resume <span className="md:ml-2 mb-1"><AiOutlineRight/></span></a>
              </motion.div>

          </div>

          {/* image/svg */}
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className="hidden lg:flex flex-1 max-w-[320px]  lg:max-w-[482px] relative h-[500px]"> 
          <Canvas >
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false}  />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  color="#2591F4"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>

            <HomeImg className="h-fit w-fit absolute right-10"/>
            <p className="text-sm text-white text-opacity-50 absolute bottom-0 right-0">Try rotating the blob!</p>
          </motion.div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;