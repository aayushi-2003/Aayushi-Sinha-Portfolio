import React, {Suspense} from "react";
// import {Link} from 'react-scroll';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import {AiOutlineRight} from 'react-icons/ai';
import {ReactComponent as HomeImg} from '../assets/HomeImg.svg';
import Aayushi from '../assets/Aayushi-full.jpg';

const Home = () => {
  const resumeURL = 'https://drive.google.com/file/d/15-9aEtt0JkMqWo-9TNPqBgV5UzJbvWXf/view?usp=sharing';
  const behanceURL = 'https://www.behance.net/aayushisinha7';
    return (
      <section id="home" className="py-12 flex md:py-16 lg:py-0 items-center relative h-[85vh] ">
        <div className="container mx-auto z-20">
          <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Name and headings */}
          <div className="space-y-8 flex-1 text-center lg:text-left">
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="text-[20px] md:text-[24px] lg:text-[26px] xl:text-[26px] uppercase leading-[1] font-semibold ">
              <span className="">I am a </span>
              <TypeAnimation sequence={[
                'CSE Student', 2000,
                'UI/UX Designer', 2000,
                'ML Enthusiast', 2000,
                'Frontend Developer', 2000,
              ]} speed={50} className="bg-gradient-to-r from-purple_light via-purple-400 to-pink-600 bg-clip-text text-transparent leading-none" wrapper="span" repeat={Infinity}/>
            </motion.div>
            {/* Name */}
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="text-[30px] md:text-[50px] font-semibold leading-[0.8] lg:text-[44px] xl:text-[80px] font-heading">
              Aayushi <span>Sinha</span>
            </motion.h1>


              <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="mb-8  mx-auto lg:mx-0 text-[14px] xl:text-[17px] leading-7 text-blue-100/60 tracking-wide">
              I’m a 4th-year Computer Science student at IIIT Dharwad, passionate about transforming ideas into impactful designs and projects. A quick learner, always ready to explore and grow.
              </motion.p>

              {/* Buttons/links */}
              <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 md:flex-row flex-col gap-y-5 ">
              <a href={behanceURL}><button className="btn btn-lg h-10 w-44  p-0 cursor-pointer">Behance Profile</button></a>
                <a href={resumeURL} target="_blank" className="flex items-center hover:border-b-[1px] hover:text-purple_light">View My Resume <span className="md:ml-2 mb-1"><AiOutlineRight/></span></a>
              </motion.div>

          </div>

          {/* image/svg */}
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className="flex flex-1 max-w-[220px]  lg:max-w-[402px] relative h-[480px] justify-end items-center "> 
            <div className="bg-blue-400 backdrop-blur-md bg-opacity-20  rounded-2xl p-[3px] bg-gradient-to-r from-purple-500/90 via-blue-400/90 to-blue-500/80  h-fit relative z-10">
              <img src={Aayushi} className="h-[300px] w-fit rounded-2xl"/>
            </div>
            <div className="rounded-2xl p-[3px] border-blue-400 border-[4px] absolute h-[300px] w-[300px] bottom-[65px] left-[80px] z-0">
            </div>
          </motion.div>
          </div>
        </div>

      </section>
    );
  }
  
  export default Home;