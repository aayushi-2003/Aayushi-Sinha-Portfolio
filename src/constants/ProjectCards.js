import React from 'react';
import {motion} from 'framer-motion';
import { projectDetails } from '../assets/projectsDetails';
import {BiLogoGithub} from 'react-icons/bi';
import {FaFigma} from 'react-icons/fa';
import {IoMdOpen} from 'react-icons/io'

export default function ProjectCards({projectSub}){
    const sub = projectSub;
    return(
        <div className='flex flex-row gap-8 mx-auto flex-wrap justify-center items-center relative top-[-70px]'>
            {projectDetails[sub].map((project, i)=>(
                //individual cards
                // <motion.div
                // key={project.title}
                // initial={{opacity: 0, translateY: 50}}
                // whileInView={{opacity: 1, translateY: 0}}
                // viewport={{once:false, amount: 0.7}}
                // transition={{delay: i*0.2}} className='group h-[250px] w-[350px] rounded-[30px] relative flex flex-col cursor-pointer overflow-hidden'>
                //     {/* overlay */}
                //     <div className='group-hover:bg-sky-700/80 w-full h-full absolute z-10 transition-all duration-300'></div>
                //     {/* image */}
                //     <img src={project.img} alt=""  className='w-full h-full absolute z-0 rounded-3xl group-hover:scale-125 transition-all duration-500 object-cover'/>

                //     {/* content div */}
                //     <div className='h-full w-full rounded-3xl z-20 absolute top-[300px] group-hover:top-6 transition-all duration-500 ease-in flex flex-col items-center justify-center text-center p-6'>
                //         <h1 className='text-white text-2xl font-semibold '>{project.title}</h1>
                //         <h1 className='text-white text-xl font-medium mt-2'>{project.description}</h1>
                //         <div className='flex my-6 space-x-3'>
                //             <a href={project.code_design_link} target='_blank'>
                //                 {sub ==='UIUX'?        <FaFigma className='h-8 w-8 hover:text-site'/>: <BiLogoGithub className='h-8 w-8 hover:text-site'/>}
                //             </a>
                //             <a href={project.live_link} target='_blank'><IoMdOpen className='h-8 w-8 hover:text-site'/>
                //             </a>
                //         </div>
                //     </div>
                // </motion.div>

                <motion.div
                key={project.title}
                initial={{opacity: 0, translateY: 40}}
                whileInView={{opacity: 1, translateY: 0}}
                viewport={{once:false, amount: 0.7}}
                transition={{delay: i*0.2}} id="card" className='group h-[200px] max-w-[300px] rounded-xl relative flex flex-col mx-[10px] my-[20px] px-[20px] py-[20px] transition-all duration-300 ease-in-out hover:h-auto hover:top-20 bg-[#1d3355]'>
                    <div id="imgBx" className='relative w-[260px] h-[260px] top-[-60px] '>
                        <img src={project.img} alt=""  className='max-w-full rounded-xl'/>
                    </div>
                    <div id="content" className='relative mt-[-140px] py-[10px] px-[15px] text-white invisible opacity-0 transition-all duration-300 ease-in-out delay-100 group-hover:visible group-hover:opacity-100 group-hover:mt-[-140px] pt-14 '>
                        <h2 className='text-[22px]'>{project.title}</h2>
                        <p className='text-base'>{project.description}</p>
                        <ul className='techUsed flex flex-wrap text-sm mt-4 text-slate-400'>
                            {project.tools.map((tool)=>(
                                <li className='mr-4'>{tool}</li>
                            ))
                            }
                        </ul>
                        <div className='flex mt-4 space-x-3 items-center justify-center'>
                            <a href={project.code_design_link} target='_blank'>
                                 {sub ==='UIUX'?        <FaFigma className='h-7 w-7 hover:text-sky-400'/>: <BiLogoGithub className='h-8 w-8 hover:text-sky-400'/>}
                            </a>
                            <a href={project.live_link} target='_blank'><IoMdOpen className='h-8 w-8 hover:text-sky-400'/>
                            </a>
                        </div>
                    </div>
                </motion.div>

            ))}
        </div>
    )
}