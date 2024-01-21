import React from "react";
import blogImg from '../assets/blogImg.png';
import blogBlob from '../assets/blogBlob.svg';
import {AiOutlineRight} from 'react-icons/ai';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Publications = () => {
    const blogURL = "https://aayushi-2003.hashnode.dev/css-frameworks-a-beginners-guide";
    return (
      <div className="section relative" id="publications">
        {/* Blob */}
        <div className='absolute max-md:bottom-2 left-0'>
          <img src={blogBlob} alt="Blog Blob" className="w-[12rem] md:w-[15rem] lg:w-[20rem] xl:w-auto" />
        </div>
        <div className="container flex  flex-col md:flex-row justify-center items-center mx-auto md:space-x-10 lg:space-x-16 xl:space-x-20 relative">
          {/* Image div */}
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.3}} className='blogImage z-10 order-2 md:order-1'>
            <img src={blogImg} alt="" className='h-auto w-[25rem] lg:w-[30rem] xl:w-[35rem] rounded-xl'/>
          </motion.div>
          {/* Heading div */}
          <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.3}} className='flex flex-col items-start justify-center gap-3 md:gap-6 pt-10 z-10 order-1 md:order-2'>

            <a href={blogURL} target="_blank" className="flex items-center hover:border-b-[1px] hover:text-cyan-200 text-[14px] md:text-base lg:text-xl uppercase font-medium mb-2 tracking-wide cursor-pointer ml-6 md:ml-0">Check out my latest blog <span className="ml-2 mb-1"><AiOutlineRight/></span></a>

            <h1 className='text-[30px] md:text-[35px] lg:text-[45px] xl:text-[60px] leading-none text-center md:text-left'>
              <span>CSS Frameworks: <br/>A Beginner’s Guide </span>
            </h1>

            <div className="bg-purple_light w-full h-1 rounded-full mb-6 md:mb-0"></div>
          </motion.div>
        </div>
      </div>
    );
  }
  
  export default Publications;