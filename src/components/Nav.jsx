import { useEffect, useState } from 'react';
import { BiSolidHome } from 'react-icons/bi';
import { BsEnvelopeFill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import { MdWork } from 'react-icons/md';

const navItems = [
  { to: 'home', label: 'Home', Icon: BiSolidHome, offset: -80 },
  { to: 'about', label: 'About', Icon: FaUser, offset: -80 },
  { to: 'experience', label: 'Work', Icon: MdWork, offset: -80 },
  { to: 'projects', label: 'Projects', Icon: FaLaptopCode, offset: -80 },
  { to: 'contact', label: 'Contact', Icon: BsEnvelopeFill, offset: -80 },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.45;
      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;

      if (pageBottom) {
        setActiveSection('contact');
        return;
      }

      const currentSection = navItems.reduce((active, item) => {
        const section = document.getElementById(item.to);

        if (!section) {
          return active;
        }

        return section.offsetTop <= scrollPosition ? item.to : active;
      }, 'home');

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <nav>
      <div className="fixed bottom-2 lg:bottom-8 w-full invisible md:visible z-50 pointer-events-none">
        <div className="container mx-auto">
          <div className="w-full bg-black/20 h-[56px] lg:h-[76px] backdrop-blur-2xl rounded-lg max-w-[400px] lg:max-w-[360px] mx-auto px-5 py-3 flex justify-between text-2xl text-white/50 pointer-events-auto">
            {navItems.map(({ to, label, Icon, offset }) => (
              <Link
                key={to}
                to={to}
                offset={offset}
                smooth={true}
                duration={500}
                className={`cursor-pointer w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex items-center justify-center relative group ${
                  activeSection === to ? 'active' : ''
                }`}
              >
                <Icon className="text-[24px] transition-transform duration-300 group-hover:translate-y-[-5px]" />
                <span className="text-[12px] absolute bottom-[-20px] transition-transform duration-300 group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-100">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
