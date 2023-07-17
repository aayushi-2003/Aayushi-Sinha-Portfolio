import React from "react";
// icons
import {BiHomeAlt,BiUser} from 'react-icons/bi'
import {BsClipboardData, BsEnvelopeFill} from 'react-icons/bs';
//link
import {Link} from 'react-scroll';

const Nav = () => {
    return (
      <nav className="fixed bottom-2 lg:bottom-8 w-full z-50 ">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 py-3 flex justify-between text-2xl text-white/50">
          <Link to='home' activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[70px] h-[70px] flex items-center justify-center">
            <BiHomeAlt/>
          </Link>
          <Link to='about' activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[70px] h-[70px] flex items-center justify-center">
            <BiUser/>
          </Link>
          <Link to='projects' activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[70px] h-[70px] flex items-center justify-center">
            <BsClipboardData/>
          </Link>
          <Link to='contact' activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[70px] h-[70px] flex items-center justify-center">
            <BsEnvelopeFill/>
          </Link>
        </div>
      </div>
      </nav>
    );
  }
  
  export default Nav;