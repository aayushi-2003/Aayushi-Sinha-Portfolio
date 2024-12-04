import { useState } from "react";
import {motion} from 'framer-motion';
import ProjectCards from "./ProjectCards";

let tabs = [
    {id: 'other projects', label: 'ML & Data Science'},
    {id: 'web development', label: 'Web Development'},
    {id: 'ui/ux', label: 'UI/UX Design'},
];

export default function AnimatedTabs(){
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    return (
        <div className="relative mx-auto h-full">
            <div className="flex space-x-3 md:space-x-6 lg:space-x-16 md:mr-10 items-center justify-center ">
                {tabs.map((tab)=>(
                    <button key={tab.id}
                    onClick={()=>setActiveTab(tab.id)}
                    className={`${activeTab === tab.id? "text-slate-800": "hover:text-sky-300"}
                    rounded-full py-2 md:py-3 px-2 md:px-5 text-[14px] md:text-[18px] lg:text-[20px] leading-5  font-medium text-white outline-2 outline-sky-400 focus-visible:outline relative `}
                    >
                        {activeTab === tab.id && (
                        <motion.div 
                        layoutId="active-pill"
                        className="bg-gradient-to-r to-[#3e62e7] from-[#7518D3] absolute inset-0  "
                        style={{borderRadius: '9999px'}}
                        transition={{type: 'spring', duration: 0.6}}/> 
                        )}
                    <span className="relative z-10 ">{tab.label} </span>
                    </button>
                ))}
            </div>
            <div className="w-full flex flex-wrap justify-center py-10">
            {activeTab === 'web development'?(
                <ProjectCards projectSub="WebDev"/>
            ): activeTab === 'ui/ux'?(<ProjectCards projectSub="UIUX"/>):(<ProjectCards projectSub="other"/>)}
            </div>
        </div>
    )
}