import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { fadeIn } from '../variants';

const experiences = [
  {
    company: 'Oracle',
    title: 'Associate Technical Consultant',
    duration: 'July 2025 - Present',
    description:
      'Working on automation testing for Oracle Trade Finance applications, validating 100+ test cases across several banking workflows. Contributed to AI-powered knowledge and document intelligence tools using FastAPI, Oracle APEX, Oracle DB, Python, OCI Vision, and RAG-based LLM integrations.',
    keySkills: ['Automation Testing', 'Oracle DB', 'FastAPI', 'Python', 'RAG', 'PL/SQL'],
    featured: true,
  },
  {
    company: 'Excellon Software',
    title: 'Summer Intern',
    duration: 'May 2024 - July 2024',
    description:
      'Worked on modules for the company’s B2B SaaS Dealer Management System and applied user research methodologies, created user flows, wireframes, and high-fidelity designs from user stories.',
    keySkills: ['Figma', 'Wireframing', 'UX Research', 'UX Product Design'],
  },
  {
    company: 'Rablo.in',
    title: 'UI/UX Design Intern',
    duration: 'Aug 2023 - Dec 2023',
    description:
      'Conducted end-to-end UI/UX workflow, from ideation to high-fidelity designs and coordinated developer handoffs. Established a robust design system, improved usability and aesthetics of 4+ modules for their internship platform.',
    keySkills: ['Figma', 'Wireframing', 'Design Documentation', 'Interaction Design', 'UX Research'],
  },
];

const Experience = () => {
  const timelineRef = useRef(null);
  const markerRefs = useRef([]);
  const [timelineBounds, setTimelineBounds] = useState({ top: 24, height: 0 });
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  });
  const timelineProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const timelineHeight = useTransform(
    timelineProgress,
    [0.08, 0.8],
    [0, timelineBounds.height],
  );

  useLayoutEffect(() => {
    const updateTimelineBounds = () => {
      const timeline = timelineRef.current;
      const firstMarker = markerRefs.current[0];
      const lastMarker = markerRefs.current[markerRefs.current.length - 1];

      if (!timeline || !firstMarker || !lastMarker) return;

      const timelineRect = timeline.getBoundingClientRect();
      const firstRect = firstMarker.getBoundingClientRect();
      const lastRect = lastMarker.getBoundingClientRect();
      const firstCenter = firstRect.top - timelineRect.top + firstRect.height / 2;
      const lastCenter = lastRect.top - timelineRect.top + lastRect.height / 2;

      setTimelineBounds({
        top: firstCenter,
        height: Math.max(lastCenter - firstCenter, 0),
      });
    };

    updateTimelineBounds();
    window.addEventListener('resize', updateTimelineBounds);

    return () => window.removeEventListener('resize', updateTimelineBounds);
  }, []);

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
          className="mx-auto mb-7 max-w-3xl text-center md:mx-0 md:text-left"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple_light/80">
            Career
          </p>
          <h2 className="font-heading text-[34px] font-semibold leading-none text-white md:text-[44px] xl:text-[52px]">
            Work Experience
          </h2>
        </motion.div>

        <div ref={timelineRef} className="relative">
          <motion.div
            className="absolute left-4 z-10 hidden w-[2px] rounded-full bg-gradient-to-b from-purple_light via-blue_med to-sky-300 shadow-[0_0_20px_rgba(195,139,251,0.85),0_0_44px_rgba(37,99,235,0.45)] md:block"
            style={{ top: timelineBounds.top, height: timelineHeight }}
          >
            <span className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full border border-white/70 bg-purple_light shadow-[0_0_18px_rgba(255,255,255,0.75),0_0_34px_rgba(195,139,251,1),0_0_72px_rgba(37,99,235,0.85)] before:absolute before:inset-[-9px] before:rounded-full before:bg-purple_light/25 before:blur-md"></span>
          </motion.div>

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
                <div
                  ref={(element) => {
                    markerRefs.current[index] = element;
                  }}
                  className="absolute left-[10px] top-6 hidden h-3 w-3 md:block"
                  aria-hidden="true"
                ></div>

                <div
                  className={`border p-[2px] ${
                    experience.featured
                      ? 'border-purple_light/25 bg-gradient-to-r from-purple_light/35 via-blue_med/25 to-transparent'
                      : 'border-white/10 bg-white/[0.035]'
                  }`}
                >
                  <div className="bg-[#0B1236]/85 p-4 backdrop-blur-md md:p-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="order-2 md:order-1">
                        <div className="flex flex-col items-center gap-1 md:flex-row md:flex-wrap md:items-center md:gap-2">
                          <h3 className="font-heading text-[20px] font-semibold text-white md:text-[22px]">
                            {experience.company}
                          </h3>
                          <div className="hidden h-1 w-1 rounded-full bg-blue-100/70 md:block"></div>
                          <p className="text-center text-sm text-blue-100/70 md:mt-1 md:text-left">{experience.title}</p>
                        </div>
                      </div>
                      <div className="order-1 flex justify-center border-b border-white/10 pb-3 md:order-2 md:justify-end md:border-b-0 md:pb-0 md:pt-1 md:text-right">
                        <p className="text-xs text-blue-100/80 md:whitespace-nowrap">{experience.duration}</p>
                      </div>
                    </div>

                    <p className="mt-2 max-w-3xl text-center text-sm leading-6 text-blue-100/80 md:text-left">
                      {experience.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
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
