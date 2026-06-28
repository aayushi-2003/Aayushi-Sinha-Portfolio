import React, { useState } from "react";
import {Link} from 'react-scroll';
import {HiMiniBars3BottomRight, HiOutlineXMark} from 'react-icons/hi2';

const NavLinks = ({ onClick }) =>{
  const linkClass = "cursor-pointer border border-white/10 bg-white/[0.04] px-4 py-3 text-blue-100/80 transition-colors hover:border-purple_light/45 hover:text-purple_light";

  return(
    <>
    <Link to="home" smooth={true} offset={-80} duration={500} onClick={onClick} className={linkClass}>Home</Link>
    <Link to="about" smooth={true} offset={-80} duration={500} onClick={onClick} className={linkClass}>About Me</Link>
    <Link to="experience" smooth={true} offset={-80} duration={500} onClick={onClick} className={linkClass}>Work</Link>
    <Link to="projects" smooth={true} offset={-80} duration={500} onClick={onClick} className={linkClass}>Projects</Link>
    <Link to="contact" smooth={true} offset={-80} duration={500} onClick={onClick} className={linkClass}>Contact Me</Link>
    </>
  )
}

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-site/70 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl md:relative md:border-b-0 md:bg-transparent md:py-4 md:shadow-none md:backdrop-blur-0">
      <div className="container mx-auto max-md:px-6">
        <div className="flex justify-between items-center">
          {/* Name */}
          <a href="#">
            <h1 className="font-primary text-[17px] md:text-[20px] lg:text-[26px]">Aayushi Sinha</h1>
          </a>
          <Link to='contact' smooth={true} className="cursor-pointer hidden md:block">
          <button className="text-base lg:text-[20px] btn btn-sm mr-0 lg:mr-6 pt-1">Contact Me</button>
          </Link>
      
      {/* Mobile View */}

      <div className="block md:hidden">
        <button onClick ={()=>setShowMenu((prev)=>!prev)} aria-label="Toggle navigation menu">
        {showMenu?(
          <div>
            <HiOutlineXMark className="h-9 w-9 cursor-pointer fixed top-7 right-7 text-purple_light z-[60]" />
            </div>
        ):
        (
          <HiMiniBars3BottomRight className="h-8 w-8 cursor-pointer text-blue-100"  />
        )}
        </button>
        
        <div className={showMenu?'fixed transform left-0 ease-in-out duration-500 top-0 z-50 h-[100vh] w-[82%] max-w-[340px]': 'fixed transform left-[-360px] ease-in-out duration-500 top-0 z-50 h-[100vh] w-[82%] max-w-[340px]'}>
        <div className="h-[100vh] border-r border-white/10 bg-[#0B1236]/95 px-6 py-8 text-blue-100 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <div className="mb-12 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple_light/35 bg-white/[0.04] font-heading text-base font-semibold text-white">
              AS
            </span>
            <div>
              <p className="text-base font-semibold text-white">Aayushi Sinha</p>
              <p className="text-xs text-blue-100/45">Portfolio</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-[17px] font-medium">
            <NavLinks onClick={() => setShowMenu(false)}/>
          </div>
        </div>
        </div>
      </div>     
        </div>
      </div>
      </header>
    );
  }
  
  export default Header;
