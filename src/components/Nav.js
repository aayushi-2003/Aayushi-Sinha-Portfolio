import React from "react";
// icons
import {BiHomeAlt,BiUser} from 'react-icons/bi'
import {BsClipboardData, BsEnvelopeFill} from 'react-icons/bs';
//link
import {Link} from 'react-scroll';

const Nav = () => {
    return (
      <nav >
      <div className="fixed bottom-2 lg:bottom-8 w-full z-50 invisible md:visible">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20 h-[56px] lg:h-[76px] backdrop-blur-2xl rounded-full max-w-[400px] lg:max-w-[360px] mx-auto px-5 py-3 flex justify-between text-2xl text-white/50">
          <Link to='home' offset={-200} activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex items-center justify-center relative group">
            <BiHomeAlt className="text-[24px] transition-transform duration-300 group-hover:translate-y-[-5px]" />
            <span className="text-[12px] absolute bottom-[-20px] transition-transform duration-300 group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-100">
              Home
            </span>
          </Link>
          <Link to="about" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex flex-col items-center justify-center relative group">
            <BiUser className="text-[24px] transition-transform duration-300 group-hover:translate-y-[-5px]" />
            <span className="text-[12px] absolute bottom-[-20px] transition-transform duration-300 group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-100">
              About
            </span>
          </Link>
          <Link to='projects' activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex items-center justify-center relative group">
            <BsClipboardData className="text-[24px] transition-transform duration-300 group-hover:translate-y-[-5px]" />
            <span className="text-[12px] absolute bottom-[-20px] transition-transform duration-300 group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-100">
              Projects
            </span>
          </Link>
          <Link to='contact' activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex items-center justify-center relative group">
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
  }
  
  export default Nav;