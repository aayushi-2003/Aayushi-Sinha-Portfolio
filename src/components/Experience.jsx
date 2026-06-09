import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const experiences = [
  {
    company: 'Oracle',
    title: 'Associate Technical Consultant',
    duration: 'July 2025 - Present',
    type: 'Full-time',
    description:
      'Working on automation testing for Oracle Trade Finance applications, validating 100+ test cases across several banking workflows. Contributed to AI-powered knowledge and document intelligence tools using FastAPI, Oracle APEX, Oracle DB, Python, OCI Vision, and RAG-based LLM integrations.',
    keySkills: ['Automation Testing', 'Oracle DB', 'FastAPI', 'Python', 'RAG', 'PL/SQL'],
    featured: true,
  },
  {
    company: 'Excellon Software',
    title: 'Summer Intern',
    duration: 'May 2024 - July 2024',
    type: 'Internship',
    description:
      'Worked on modules for the company’s B2B SaaS Dealer Management System and applied user research methodologies, created user flows, wireframes, and high-fidelity designs from user stories.',
    keySkills: ['Figma', 'Wireframing', 'UX Research', 'UX Product Design'],
  },
  {
    company: 'Rablo.in',
    title: 'UI/UX Design Intern',
    duration: 'Aug 2023 - Dec 2023',
    type: 'Internship',
    description:
      'Conducted end-to-end UI/UX workflow, from ideation to high-fidelity designs and coordinated developer handoffs. Established a robust design system, improved usability and aesthetics of 4+ modules for their internship platform.',
    keySkills: ['Figma', 'Wireframing', 'Design Documentation', 'Interaction Design', 'UX Research'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section h-full relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute left-[6%] top-[22%] h-[260px] w-[260px] rounded-full bg-blue_med/10 blur-[120px]"></div>

      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('up', 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-7 max-w-3xl"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple_light/80">
            Career
          </p>
          <h2 className="font-heading text-[34px] font-semibold leading-none text-white md:text-[44px] xl:text-[52px]">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-purple_light/70 via-white/10 to-transparent md:block"></div>

          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.title}`}
                variants={fadeIn('left', 0.25 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="relative md:pl-12"
              >
                <div className="absolute left-[9px] top-6 hidden h-3.5 w-3.5 rounded-full border border-purple_light bg-site shadow-[0_0_24px_rgba(195,139,251,0.55)] md:block"></div>

                <div
                  className={`border p-[2px] ${
                    experience.featured
                      ? 'border-purple_light/25 bg-gradient-to-r from-purple_light/35 via-blue_med/25 to-transparent'
                      : 'border-white/10 bg-white/[0.035]'
                  }`}
                >
                  <div className="bg-[#0B1236]/85 p-4 backdrop-blur-md md:p-5">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-heading text-[20px] font-semibold text-white md:text-[22px]">
                            {experience.company}
                          </h3>
                          <div className="h-1 w-1 rounded-full bg-blue-100/70"></div>
                          <p className="mt-1 text-sm text-blue-100/70">{experience.title}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:block md:pt-1 md:text-right">
                        <p className="text-xs text-blue-100/80">{experience.duration}</p>
                        <p className="border border-white/10 bg-white/[0.05] text-center py-1 text-xs uppercase tracking-[0.16em] text-blue-100/70 md:mt-1">
                          {experience.type}
                        </p>
                      </div>
                    </div>

                    <p className="max-w-3xl text-sm leading-6 text-blue-100/80">
                      {experience.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {experience.keySkills.map((skill, skillIndex) => (
                        <motion.li
                          key={skill}
                          variants={fadeIn('up', 0.35 + skillIndex * 0.04)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: false, amount: 0.25 }}
                          className="border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-purple-200/85"
                        >
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
