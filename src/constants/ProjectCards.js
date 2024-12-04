import React from 'react';
import { motion } from 'framer-motion';
import { projectDetails } from '../assets/projectsDetails';
import { BiLogoGithub } from 'react-icons/bi';
import { FaFigma } from 'react-icons/fa';
import { IoMdOpen } from 'react-icons/io';

export default function ProjectCards({ projectSub }) {
    const sub = projectSub;

    return (
        <div className="flex items-start justify-center flex-wrap gap-6">
            {projectDetails[sub].map((project, i) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, translateY: 40 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-[#192957] rounded-xl p-5 flex flex-col items-center max-w-[350px] transition-all duration-200"
                >
                    <div className="relative w-full h-[200px] mb-6">
                        <img
                            src={project.img}
                            alt=""
                            className="w-full h-full object-cover rounded-xl inset-0 transition-all duration-200 group-hover:scale-105"
                        />
                    </div>
                    <div className="text-white flex flex-col items-center text-center">
                        <h2 className="text-[22px] mb-2">{project.title}</h2>
                        <p className="text-[14px] mb-4 leading-6 text-blue-100/60">{project.description}</p>
                        <ul className="flex flex-wrap justify-center text-sm text-purple_light mb-4">
                            {project.tools.map((tool, index) => (
                                <li key={index} className="mr-4">{tool}</li>
                            ))}
                        </ul>
                        <div className="flex space-x-3">
                            <a
                                href={project.code_design_link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {sub === 'UIUX' ? (
                                    <FaFigma className="h-7 w-7 hover:text-sky-400" />
                                ) : (
                                    <BiLogoGithub className="h-8 w-8 hover:text-sky-400" />
                                )}
                            </a>
                            {project.live_link && <a
                                href={project.live_link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoMdOpen className="h-8 w-8 hover:text-sky-400" />
                            </a>
}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
