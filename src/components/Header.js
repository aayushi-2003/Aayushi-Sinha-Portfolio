import React from "react";
import {Link} from 'react-scroll';

const Header = () => {
    return (
      <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Name */}
          <a href="#">
            <h1 className="font-primary text-[35px]">Aayushi Sinha</h1>
          </a>
          {/* <Link to='contact' activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[70px] h-[70px] flex items-center justify-center">
            <BsEnvelopeFill/>
          </Link> */}
          <Link to='contact' smooth={true} className="cursor-pointer">
          <button className="text-[20px] btn btn-sm">Contact Me</button>
          </Link>
        </div>
      </div>
      </header>
    );
  }
  
  export default Header;