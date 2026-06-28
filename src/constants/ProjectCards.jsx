import { motion } from 'framer-motion';
import { projectDetails } from '../data/projectsDetails';
import { BiLogoGithub } from 'react-icons/bi';
import { FaFigma } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ProjectCards({ projectSub }) {
  const sub = projectSub;

  return (
    <div className="mx-auto grid w-full max-w-[390px] grid-cols-1 justify-items-center gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
      {projectDetails[sub].map((project, i) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, translateY: 32 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: false, amount: 0.28 }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -6 }}
          className="group w-full max-w-[360px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-3 shadow-[0_18px_55px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors hover:border-purple_light/30"
        >
          <div className="relative h-[160px] overflow-hidden rounded-lg bg-site/70">
            <img
              src={project.img}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050820]/35 via-transparent to-transparent"></div>
          </div>

          <div className="px-2 pb-1 pt-4 flex flex-col items-center md:items-start">
            <h3 className="font-heading text-[22px] font-semibold leading-tight text-white">
              {project.title}
            </h3>

            <p className="mt-3 text-[13px] leading-5 text-blue-100/68 text-center md:text-left">{project.description}</p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li key={tool} className="border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-purple-100/86">
                  {tool}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-purple_light"
                  aria-label={`${project.title} live link`}
                >
                  View Project
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple_light text-site transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <FiArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              )}
              {project.code_design_link && (
                <a
                  href={project.code_design_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.045] text-white transition-colors hover:border-purple_light/60 hover:text-purple_light"
                  aria-label={`${project.title} source or design link`}
                >
                  {sub === 'UIUX' ? <FaFigma className="h-4 w-4" /> : <BiLogoGithub className="h-5 w-5" />}
                </a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
