import React from "react";
import blogImg from '../assets/blogImg.png';
import blogBlob from '../assets/blogBlob.svg';
import {AiOutlineRight} from 'react-icons/ai';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Publications = () => {
    const blogURL = "https://aayushi-2003.hashnode.dev/css-frameworks-a-beginners-guide";
    return (
      <div className="section relative">
        {/* Blob */}
        <div className='absolute left-0'>
          <img src={blogBlob} alt="Blog Blob" />
        </div>
        <div className="container flex justify-center items-center mx-auto gap-20 relative">
          {/* Image div */}
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.3}} className='blogImage z-10 '>
            <img src={blogImg} alt="" className='h-auto w-[35rem] rounded-xl'/>
          </motion.div>
          {/* Heading div */}
          <motion.div variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.3}} className='flex flex-col items-start justify-center gap-6 pt-10 z-10 '>
            <a href={blogURL} target="_blank" className="flex items-center hover:border-b-[1px] hover:text-blue_med text-xl uppercase font-medium mb-2 tracking-wide cursor-pointer">Check out my latest blog <span className="ml-2 mb-1"><AiOutlineRight/></span></a>

            <h1 className='text-[45px] lg:text-[60px] leading-none mb-12'>CSS Frameworks: <br/>A Beginner’s Guide 
            </h1>
          </motion.div>

        </div>
      </div>
    );
  }
  
  export default Publications;