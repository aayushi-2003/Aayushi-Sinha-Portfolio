import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { fadeIn } from '../variants';
import { AiOutlineRight } from 'react-icons/ai';
import Aayushi from '../assets/images/profile/Aayushi-full.jpg';

const Home = () => {
  const resumeURL = 'https://drive.google.com/file/d/15-9aEtt0JkMqWo-9TNPqBgV5UzJbvWXf/view?usp=sharing';

  return (
    <section id="home" className="relative flex min-h-[calc(100vh-84px)] items-center overflow-hidden py-8 md:py-14 lg:h-[85vh] lg:min-h-0 lg:py-0">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(195,139,251,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.13) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'linear-gradient(to bottom, transparent, black 18%, black 72%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 18%, black 72%, transparent)',
          }}
        ></div>
        <div className="absolute left-[7%] top-[22%] hidden h-28 w-px bg-gradient-to-b from-transparent via-sky-300/35 to-transparent lg:block"></div>
        <div className="absolute left-[7%] top-[22%] hidden h-px w-28 bg-gradient-to-r from-sky-300/35 to-transparent lg:block"></div>
        <div className="absolute right-[6%] bottom-[14%] hidden h-px w-64 bg-gradient-to-r from-transparent via-purple_light/30 to-transparent lg:block"></div>
        <div className="absolute right-[18%] bottom-[18%] hidden h-16 w-px bg-gradient-to-b from-transparent via-purple_light/25 to-transparent lg:block"></div>
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
      <div className="container mx-auto z-20 max-md:px-6">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10">
          {/* Name and headings */}
          <div className="order-1 flex-1 space-y-5 text-center md:space-y-6 lg:text-left">
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="min-h-[36px] text-[13px] md:min-h-0 md:text-[18px] lg:text-[20px] uppercase leading-5 md:leading-none font-semibold"
            >
              <TypeAnimation
                sequence={[
                  'I am an Associate Consultant @Oracle',
                  2000,
                  'I am a Design-Minded Developer',
                  2000,
                  'I am an AI/ML Enthusiast',
                  2000,
                  'I am an Artist',
                  2000,
                ]}
                speed={50}
                className="bg-gradient-to-r from-purple_light via-sky-300 to-blue-400 bg-clip-text text-transparent leading-none"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="text-[52px] sm:text-[64px] md:text-[82px] font-semibold leading-[0.86] lg:text-[76px] xl:text-[104px] font-heading text-opacity-95"
            >
              Aayushi <span>Sinha</span>
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-6 max-w-[620px] text-[14px] leading-6 text-blue-100 text-opacity-70 tracking-wide md:mb-8 md:leading-7 xl:text-[15px] lg:mx-0"
            >
              I'm an Associate Technical Consultant at Oracle (OFSS). I enjoy building thoughtful, user-focused solutions at the intersection of software engineering, design, and AI/ML.
            </motion.p>

            {/* Buttons/links */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-8 flex max-w-max flex-col items-center gap-y-4 sm:flex-row sm:gap-x-6 md:mb-8 lg:mx-0"
            >
              <a href={resumeURL} target="_blank" rel="noreferrer">
                <button className="btn h-11 w-40 p-0 cursor-pointer text-sm">View Resume</button>
              </a>
              <Link
                to="projects"
                smooth={true}
                offset={-40}
                className="group relative flex items-center cursor-pointer text-blue-100/80 hover:text-purple_light transition-colors text-sm"
              >
                Explore Projects <span className="md:ml-2 mb-1 transition-transform duration-300 group-hover:translate-x-1"><AiOutlineRight /></span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-purple_light transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          </div>

          {/* image/svg */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView="show"
            className="order-2 flex flex-1 relative h-[360px] w-full max-w-[310px] items-center justify-center group sm:h-[380px] md:max-w-[360px] lg:h-[480px] lg:max-w-[402px] lg:justify-end"
          >
            <div className="bg-blue-400 backdrop-blur-md bg-opacity-20 rounded-lg p-[3px] bg-gradient-to-r from-purple_light/90 via-sky-300/85 to-blue_med/90 h-fit relative z-10">
              <img src={Aayushi} className="h-[240px] w-fit rounded-lg sm:h-[270px] lg:h-[300px]" alt="Aayushi" />
            </div>
            <div className="absolute bottom-[65px] left-[80px] z-0 hidden h-[300px] w-[300px] rounded-lg border-[4px] border-sky-300/80 p-[3px] transition-all duration-150 ease-in-out group-hover:bottom-[88px] group-hover:left-[102px] lg:block">
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
