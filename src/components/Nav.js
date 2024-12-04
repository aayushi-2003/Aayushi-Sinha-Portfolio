import React from "react";
import { BiSolidHome } from "react-icons/bi";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-scroll";
import { MdWork } from "react-icons/md";

const Nav = () => {
    return (
        <nav>
            <div className="fixed bottom-2 lg:bottom-8 w-full invisible md:visible z-50 pointer-events-none">
                <div className="container mx-auto">
                    {/* nav inner */}
                    <div className="w-full bg-black/20 h-[56px] lg:h-[76px] backdrop-blur-2xl rounded-full max-w-[400px] lg:max-w-[360px] mx-auto px-5 py-3 flex justify-between text-2xl text-white/50 pointer-events-auto">
                        <Link
                            to="home"
                            offset={-200}
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            className="cursor-pointer w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex items-center justify-center relative group"
                        >
                            <BiSolidHome className="text-[24px] transition-transform duration-300 group-hover:translate-y-[-5px]" />
                            <span className="text-[12px] absolute bottom-[-20px] transition-transform duration-300 group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-100">
                                Home
                            </span>
                        </Link>
                        <Link
                            to="about"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            className="cursor-pointer w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex flex-col items-center justify-center relative group"
                        >
                            <FaUser className="text-[20px] transition-transform duration-300 group-hover:translate-y-[-5px]" />
                            <span className="text-[12px] absolute bottom-[-20px] transition-transform duration-300 group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-100">
                                About
                            </span>
                        </Link>
                        <Link
                            to="projects"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            className="cursor-pointer w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex items-center justify-center relative group"
                        >
                            <FaLaptopCode className="text-[24px] transition-transform duration-300 group-hover:translate-y-[-5px]" />
                            <span className="text-[12px] absolute bottom-[-20px] transition-transform duration-300 group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-100">
                                Projects
                            </span>
                        </Link>
                        <Link
                            to="experience"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            className="cursor-pointer w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex items-center justify-center relative group"
                        >
                            <MdWork className="text-[24px] transition-transform duration-300 group-hover:translate-y-[-5px]" />
                            <span className="text-[12px] absolute bottom-[-20px] transition-transform duration-300 group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-100">
                                Internships
                            </span>
                        </Link>
                        <Link
                            to="contact"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            className="cursor-pointer w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex items-center justify-center relative group"
                        >
                            <BsEnvelopeFill className="text-[24px] transition-transform duration-300 group-hover:translate-y-[-5px]" />
                            <span className="text-[12px] absolute bottom-[-20px] transition-transform duration-300 group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-100">
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
