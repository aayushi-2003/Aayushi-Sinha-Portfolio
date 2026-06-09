import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BiLogoGithub } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';

const Contact = () => {
  const email = 'aayushi.sinha1980@gmail.com';
  const subject = encodeURIComponent('Portfolio Inquiry');
  const body = encodeURIComponent('Hi Aayushi,\n\nI came across your portfolio and would like to connect.\n\n');
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
  const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <section id="contact" className="section py-16 h-auto relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute right-[10%] top-[18%] h-[240px] w-[240px] rounded-full bg-purple_med/10 blur-[120px]"></div>

      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-center md:justify-start"
          >
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-purple_light/80">
                Get In Touch
              </p>
              <h2 className="font-heading text-[38px] font-semibold leading-none text-white md:text-[52px] xl:text-[68px]">
                Let's work together
              </h2>

              <div className="mt-6 flex gap-3">
                <a href="https://github.com/aayushi-2003" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <BiLogoGithub className="h-8 w-8 text-sky-400 transition-colors hover:text-purple_light md:h-10 md:w-10" />
                </a>
                <a href="https://www.linkedin.com/in/aayushi1207/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <BsLinkedin className="h-7 w-7 text-sky-400 transition-colors hover:text-purple_light md:h-9 md:w-9" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="border border-white/10 bg-[#0B1236]/70 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-7"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-purple_light/30 bg-purple_light/10 text-purple_light">
              <MdOutlineMail className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-[26px] font-semibold text-white">Start a conversation</h3>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={gmailURL} target="_blank" rel="noreferrer">
                <button className="btn h-[48px] px-8 text-base">Open Gmail</button>
              </a>
              <a
                href={mailtoURL}
                className="group relative w-fit text-sm text-blue-100/80 transition-colors hover:text-purple_light"
              >
                Use email app
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-purple_light transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-100/40">Email</p>
              <a href={mailtoURL} className="mt-2 block text-sm text-blue-100/75 transition-colors hover:text-purple_light">
                {email}
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between">
          <p className="text-[12px] text-blue-100/60 xl:text-sm">Designed and Developed by Aayushi Sinha</p>
          <p className="text-[12px] text-blue-100/60 xl:text-sm">{email}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
