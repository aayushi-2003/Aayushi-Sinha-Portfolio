import React from 'react';
import {motion} from 'framer-motion';
import { projectDetails } from '../assets/projectsDetails';
import {BiLogoGithub} from 'react-icons/bi';
import {FaFigma} from 'react-icons/fa';
import {IoMdOpen} from 'react-icons/io'

export default function ProjectCards({projectSub}){
    const sub = projectSub;
    return(
        <div className='flex flex-row gap-8 mx-auto flex-wrap'>
            {projectDetails[sub].map((project, i)=>(
                <motion.div
                key={project.title}
                initial={{opacity: 0, translateY: 50}}
                whileInView={{opacity: 1, translateY: 0}}
                viewport={{once:false, amount: 0.7}}
                transition={{delay: i*0.2}}>
                <div className='group h-[250px] w-[350px] rounded-[30px] relative flex flex-col cursor-pointer overflow-hidden'>
                    <div className='group-hover:bg-sky-700/70 w-full h-full absolute z-10 transition-all duration-300'></div>
                    <img src={project.img} alt=""  className='w-full h-full absolute z-0 rounded-3xl group-hover:scale-125 transition-all duration-500 object-cover'/>
                    <div className='h-full w-full rounded-3xl z-20 absolute top-[300px] group-hover:top-6 transition-all duration-500 ease-in flex flex-col items-center justify-center text-center p-6'>
                    <h1 className='text-white text-2xl font-semibold '>{project.title}</h1>
                    <h1 className='text-white text-xl font-medium mt-2'>{project.description}</h1>
                    <div className='flex my-6 space-x-3'>
                        <a href={project.code_design_link} target='_blank'>{sub ==='UIUX'?                  <FaFigma className='h-8 w-8 hover:text-site'/>: <BiLogoGithub className='h-8 w-8 hover:text-site'/>}</a>
                    <a href={project.live_link} target='_blank'><IoMdOpen className='h-8 w-8 hover:text-site'/>
                    </a>
                    </div>
                    </div>
                </div>
                </motion.div>
            ))}
        </div>
    )
}