import React, { useState } from "react";
import {Link} from 'react-scroll';
import {HiMiniBars3BottomRight, HiOutlineXMark} from 'react-icons/hi2';

const NavLinks = ({ onClick }) =>{
  const linkClass = "cursor-pointer hover:border-b-[2px] hover:border-blue_med";

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
      <header className="relative z-50 py-4">
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
          <HiMiniBars3BottomRight className="h-8 w-8 cursor-pointer"  />
        )}
        </button>
        
        <div className={showMenu?'fixed transform left-0 ease-in-out duration-500 top-0 z-50 h-[100vh] w-[78%] max-w-[320px]': 'fixed transform left-[-340px] ease-in-out duration-500 top-0 z-50 h-[100vh] w-[78%] max-w-[320px]'}>
        <div className="h-[100vh] text-sky-900 flex flex-col items-center justify-center gap-10 text-[20px] font-medium navbg px-8">
          <NavLinks onClick={() => setShowMenu(false)}/>
        </div>
        </div>
      </div>     
        </div>
      </div>
      </header>
    );
  }
  
  export default Header;
