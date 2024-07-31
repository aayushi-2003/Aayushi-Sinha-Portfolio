import React from 'react';
import {motion} from 'framer-motion';
import { projectDetails } from '../assets/projectsDetails';
import {BiLogoGithub} from 'react-icons/bi';
import {FaFigma} from 'react-icons/fa';
import {IoMdOpen} from 'react-icons/io'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


export default function ProjectCards({projectSub}){
    const sub = projectSub;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(projectDetails[sub].length, 3),
        slidesToScroll: 1,
        centerMode: projectDetails[sub].length < 3 ? true : false,
        centerPadding: '420px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return(
        // <div className='flex flex-row gap-6 mx-auto flex-wrap justify-center items-start relative top-[-70px]'>
        <div className='max-w-[300px] md:max-w-[650px] lg:max-w-[950px] xl:max-w-[1200px]'>
        <Slider {...settings}>
            {projectDetails[sub].map((project, i)=>(
                <motion.div
                key={project.title}
                initial={{opacity: 0, translateY: 40}}
                whileInView={{opacity: 1, translateY: 0}}
                viewport={{once:false, amount: 0.7}}
                transition={{delay: i*0.2}} id="card" className=' mt-10 group h-auto  max-w-[290px] xl:max-w-[350px] rounded-xl relative flex flex-col mx-[10px] my-[20px] px-[5px] xl:px-[20px] py-[20px]  bg-[rgb(29,51,85)]'>
                    <div id="imgBx" className='relative w-[250px] xl:w-[310px] h-[100px] xl:h-[160px] top-[-60px] left-3 xl:left-0'>
                        <img src={project.img} alt=""  className='max-w-full rounded-xl'/>
                    </div>
                    <div id="content" className='relative py-[10px] px-[15px] text-white  pt-14 '>
                        <h2 className='text-[20px] xl:text-[22px] mb-2'>{project.title}</h2>
                        <p className='text-[14px] xl:text-base'>{project.description}</p>
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
            </Slider>
        </div>
    )
}