import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Python from '../assets/logos/python.svg?react';
import JavaScript from '../assets/logos/javascript.svg?react';
import Cpp from '../assets/logos/cpp.svg?react';
import TW from '../assets/logos/tailwindcss.svg?react';
import Reactlogo from '../assets/logos/react.svg?react';
import Pandas from '../assets/logos/pandas.svg?react';
import OpenCV from '../assets/logos/opencv.svg?react';
import Numpy from '../assets/logos/numpy.svg?react';
import Tableau from '../assets/logos/tableau.svg?react';
import PowerBI from '../assets/logos/powerbi.svg?react';
import Excel from '../assets/logos/excel.svg?react';
import Figma from '../assets/logos/figma.svg?react';
import Git from '../assets/logos/git.svg?react';
import FastAPI from '../assets/logos/FastAPI.svg?react';
import Node from '../assets/logos/Node.svg?react';
import Postman from '../assets/logos/Postman.svg?react';
import Sql from '../assets/logos/mysql.svg?react';
import plsql from '../assets/logos/plsql.png'
import Art from '../assets/logos/art.svg?react';
import clang from '../assets/logos/c.png';
import books from '../assets/logos/books.png';
import guitar from '../assets/logos/guitar.png';
import coffee from '../assets/logos/coffee.png';
import movies from '../assets/logos/movie.png';

const skillGroups = [
  {
    title: 'Languages & Databases',
    tools: [
      { name: 'C++', Icon: Cpp },
      { name: 'Python', Icon: Python },
      { name: 'JavaScript', Icon: JavaScript },
      { name: 'MySQL', Icon: Sql },
      { name: 'PL/SQL', image: plsql },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    tools: [
      { name: 'Tailwind CSS', Icon: TW },
      { name: 'React', Icon: Reactlogo },
      { name: 'FastAPI', Icon: FastAPI },
      { name: 'NodeJS', Icon: Node },
      { name: 'Pandas', Icon: Pandas },
      { name: 'NumPy', Icon: Numpy },
    ],
  },
  {
    title: 'Other Tools',
    tools: [
      { name: 'Tableau', Icon: Tableau },
      { name: 'Excel', Icon: Excel },
      { name: 'Figma', Icon: Figma },
      { name: 'Git', Icon: Git },
      { name: 'Postman', Icon: Postman },
    ],
  },
];

const interests = [
  { label: 'Art', Icon: Art },
  { label: 'Reading', image: books },
  { label: 'Ukulele', image: guitar },
  { label: 'Coffee', image: coffee },
  { label: 'Movies', image: movies },
];

const focusAreas = ['Software Engineering', 'AI/ML', 'UI/UX Design'];

const About = () => {
  return (
    <section id="about" className="section h-full relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute right-[8%] top-[16%] h-[240px] w-[240px] rounded-full bg-purple_med/10 blur-[120px]"></div>

      <div className="container mx-auto grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={fadeIn('right', 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="relative"
        >
          <motion.div
            variants={fadeIn('up', 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="mb-8"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple_light/80">
              About Me
            </p>
            <h2 className="font-heading text-[36px] font-semibold leading-none text-white md:text-[48px] xl:text-[58px]">
              Designing clarity into technical systems.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.35)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative border-l border-white/12 pl-6"
          >
            <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-purple_light shadow-[0_0_24px_rgba(195,139,251,0.7)]"></div>
            <p className="max-w-[650px] text-[15px] leading-7 tracking-wide text-blue-100/80 xl:text-base">
              Hey there! I'm Aayushi, a Computer Science graduate from IIIT Dharwad and a passionate learner exploring the realms of{' '}
              <span className="font-heading text-blue-300">AI/ML</span>,
              <span className="font-heading text-blue-300"> Web Development</span> and{' '}
              <span className="font-heading text-blue-300">UI/UX Design.</span>
              <br />
              <br />
              Growing up, I developed a deep love for stories, whether found in books, movies, or shared through people's experiences.
              <br />
              <br />
              As an artist at heart and a tech enthusiast, I find inspiration in these stories, infusing them into my creative process to craft fascinating designs and innovative solutions.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {focusAreas.map((area, index) => (
              <motion.span
                key={area}
                variants={fadeIn('up', 0.4 + index * 0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-blue-100/80 backdrop-blur"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="relative"
        >
          <div className="border border-white/10 bg-[#0B1236]/70 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-5">
            <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-blue-100/45">Toolkit</p>
                <h3 className="mt-2 font-heading text-[26px] font-semibold text-white">Key Skills</h3>
              </div>
              <div className="h-8 w-8 border-r border-t border-purple_light/50"></div>
            </div>

            <div className="space-y-4">
              {skillGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  variants={fadeIn('left', 0.28 + groupIndex * 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="grid gap-3 border border-white/[0.07] bg-white/[0.03] p-3 md:grid-cols-[120px_1fr] md:items-center"
                >
                  <h4 className="font-heading text-base font-semibold text-blue-100">{group.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {group.tools.map(({ name, Icon, image }, toolIndex) => (
                      <motion.div
                        key={name}
                        variants={fadeIn('up', 0.35 + toolIndex * 0.04)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        className="group relative flex h-11 w-11 items-center justify-center border border-white/10 bg-[#070A2E]/70 transition-colors hover:border-purple_light/50"
                      >
                        {Icon ? (
                          <Icon className="h-6 w-6" />
                        ) : (
                          <img src={image} className="h-6 w-6" alt={name} />
                        )}
                        <span className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap border border-white/10 bg-[#05071f] px-2 py-1 text-xs text-blue-100 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                          {name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeIn('up', 0.45)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="mt-5 border border-white/[0.07] bg-gradient-to-r from-white/[0.04] to-transparent p-3"
            >
              <h4 className="mb-3 font-heading text-base font-semibold text-white">Beyond Code I Love</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map(({ label, Icon, image }, index) => (
                  <motion.div
                    key={label}
                    variants={fadeIn('up', 0.5 + index * 0.06)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="flex items-center gap-2 border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-blue-100/85"
                  >
                    <span>{label}</span>
                    {Icon ? (
                      <Icon className="h-5 w-5" />
                    ) : (
                      <img src={image} className="h-5 w-5" alt={label} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
