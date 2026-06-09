import { motion } from 'framer-motion';
import AnimatedTabs from '../constants/AnimatedTabs';
import { fadeIn } from '../variants';

const Projects = () => {
  return (
    <section id="projects" className="section h-auto relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute left-[8%] top-[12%] h-[220px] w-[220px] rounded-full bg-blue_med/10 blur-[120px]"></div>
      <div className="absolute right-[8%] bottom-[8%] h-[220px] w-[220px] rounded-full bg-purple_med/10 blur-[120px]"></div>

      <div className="container mx-auto">
        <div className="mb-7">
          <motion.div
            variants={fadeIn('right', 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-2xl"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple_light/80">
              Selected Work
            </p>
            <h2 className="font-heading text-[36px] font-semibold leading-none text-white md:text-[48px] xl:text-[58px]">
              Projects
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100/60 xl:text-[15px]">
              A curated mix of development, design, and AI/ML work built through product thinking, experimentation, and hands-on implementation.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('up', 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <AnimatedTabs />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
