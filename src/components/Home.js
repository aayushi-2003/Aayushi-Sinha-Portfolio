import React from "react";
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';

const Home = () => {
    return (
      <section id="home" className="section">
        <div className="container mx-auto">
          <div className="space-y-6">
            <h1 className="text-[50px]">
              AAYUSHI <span>SINHA</span>
            </h1>
            <div className="text-[36px] lg:text-[35px] font-semibold uppercase leading-[1]">
              <span className="mr-4">I am a </span>
              <TypeAnimation sequence={[
                'Computer Science Student', 2000,
                'UI/UX Designer', 2000,
                'Frontend Developer', 2000,
              ]} speed={50} className="text-[#4EA3F1]" wrapper="span" repeat={Infinity}/>
            </div>
              <p>
              Some randoms texts.Some randoms texts.Some randoms texts. Some randoms texts.
              </p>
              <div>
                <button className="btn btn-lg h-10 w-36 cursor-pointer"><a href="">Projects</a></button>
              </div>
          </div>
          <div>
          {/* <svg width="440" height="446" viewBox="0 0 440 446" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M440 242.5C440 357.928 360.54 446 236 446C111.46 446 0 388.928 0 273.5C8.50006 86 121.46 0 246 0C370.54 0 440 127.072 440 242.5Z" fill="#D9D9D9"/>
          </svg> */}
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;