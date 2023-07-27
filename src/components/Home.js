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
  const resumeURL = 'https://drive.google.com/file/d/1L45WfwHEODbuMh5jET4KFL-_q5jVahqS/view?usp=sharing';
    return (
      <section id="home" className="section min-h-[85vh] lg:min-h-[78vh] flex items-center">
        <div className="container mx-auto z-20 pb-44">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">

          {/* Name and headings */}
          <div className="space-y-6 flex-1 text-center lg:text-left">
            {/* Name */}
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="text-[50px] font-semibold leading-[0.8] lg:text-[60px] ">
              AAYUSHI <span>SINHA</span>
            </motion.h1>

            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="text-[46px] lg:text-[35px] uppercase leading-[1] font-semibold">
              <span className="">I am a </span>
              <TypeAnimation sequence={[
                'CSE Student', 2000,
                'UI/UX Designer', 2000,
                'Frontend Developer', 2000,
              ]} speed={50} className="text-[#4EA3F1]" wrapper="span" repeat={Infinity}/>
            </motion.div>

              <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="mb-8 max-w-lg mx-auto lg:mx-0">
              I am a 3rd Year Computer Science and Engineering Student from IIIT Dharwad. I love to design and build beautiful and responsive websites. I am a quick learner and always ready to learn new things. 
              </motion.p>

              {/* Buttons/links */}
              <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <Link to='projects' smooth={true} className="cursor-pointer">                <button className="btn btn-lg h-10 w-36">Projects</button>
              </Link>
                <a href={resumeURL} target="_blank" className="flex items-center hover:border-b-[1px]">View My Resume <span className="ml-2"><AiOutlineRight/></span></a>
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
                  color="#4EA3F1"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>

            <HomeImg className="h-fit w-fit absolute right-10"/>
          </motion.div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;