import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCards from './ProjectCards';

const tabs = [
  { id: 'web development', label: 'Web Development' },
  { id: 'other projects', label: 'ML & Data Science' },
  { id: 'ui/ux', label: 'UI/UX Design' },
];

export default function AnimatedTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-5 md:justify-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-2 text-sm font-medium transition-colors md:text-base ${
              activeTab === tab.id ? 'text-white' : 'text-blue-100/50 hover:text-blue-100'
            }`}
          >
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <motion.span
                layoutId="project-tab-line"
                className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-purple_light via-sky-300 to-blue_med"
                transition={{ type: 'spring', duration: 0.55 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="mt-7 flex w-full justify-center md:block">
        {activeTab === 'web development' ? (
          <ProjectCards projectSub="WebDev" />
        ) : activeTab === 'ui/ux' ? (
          <ProjectCards projectSub="UIUX" />
        ) : (
          <ProjectCards projectSub="other" />
        )}
      </div>
    </>
  );
}
