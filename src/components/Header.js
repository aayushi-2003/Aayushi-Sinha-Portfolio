import React, { useState } from "react";
import {Link} from 'react-scroll';
import {HiMiniBars3BottomRight, HiOutlineXMark} from 'react-icons/hi2';

const NavLinks = () =>{
  return(
    <>
    <Link to="home" className="hover:border-b-[2px] hover:border-blue_med">Home</Link>
    <Link to="about" className="hover:border-b-[2px] hover:border-blue_med">About Me</Link>
    <Link to="projects" className="hover:border-b-[2px] hover:border-blue_med">Projects</Link>
    <Link to="publications" className="hover:border-b-[1px]">My Blog</Link>
    <Link to="contact" className="hover:border-b-[2px] hover:border-blue_med">Contact Me</Link>
    </>
  )
}

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    

    return (
      <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Name */}
          <a href="#">
            <h1 className="font-primary text-[20px] md:text-[30px] lg:text-[36px]">Aayushi Sinha</h1>
          </a>
          <Link to='contact' smooth={true} className="cursor-pointer hidden md:block">
          <button className="text-[20px] btn btn-sm mr-6 ">Contact Me</button>
          </Link>
                {/* Mobile View */}

      <div className="block md:hidden">
        <button onClick ={()=>setShowMenu((prev)=>!prev)} >
        {showMenu?(
          <div>
            <HiOutlineXMark className="h-8 w-8 cursor-pointer" />
            </div>
        ):
        (
          <HiMiniBars3BottomRight className="h-8 w-8 cursor-pointer"  />
        )}
        </button>
        
        <div className={showMenu?'absolute transform left-0 ease-in-out duration-500 top-0 z-50 h-full': 'absolute transform left-[-300px] ease-in-out duration-500 top-0 z-50 h-full'}>
        <div className="bg-white h-full w-64   text-sky-900 flex flex-col items-center justify-center gap-10 text-[20px] font-medium  navbg ">
          <NavLinks/>
        </div>
        </div>
      </div>
        </div>
      </div>
      </header>
    );
  }
  
  export default Header;