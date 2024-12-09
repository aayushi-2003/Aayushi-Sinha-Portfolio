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
      <header className="py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Name */}
          <a href="#">
            <h1 className="font-primary text-[18px] md:text-[20px] lg:text-[26px]">Aayushi Sinha</h1>
          </a>
          <Link to='contact' smooth={true} className="cursor-pointer hidden md:block">
          <button className="text-[20px] btn btn-sm mr-6 pt-1">Contact Me</button>
          </Link>
      
      {/* Mobile View */}

      <div className="block md:hidden">
        <button onClick ={()=>setShowMenu((prev)=>!prev)} >
        {showMenu?(
          <div>
            <HiOutlineXMark className="h-10 w-10 cursor-pointer fixed top-7 right-14 text-purple_light z-20" />
            </div>
        ):
        (
          <HiMiniBars3BottomRight className="h-8 w-8 cursor-pointer"  />
        )}
        </button>
        
        <div className={showMenu?'fixed transform left-0 ease-in-out duration-500 top-0 z-50 h-[100vh] w-[65%]': 'absolute transform left-[-300px] ease-in-out duration-500 top-0 z-50 h-[100vh]'}>
        <div className="h-[100vh]  text-sky-900 flex flex-col items-center justify-center gap-10 text-[20px] font-medium  navbg ">
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