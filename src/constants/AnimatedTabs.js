import { useState } from "react";
import {motion} from 'framer-motion';
import ProjectCards from "./ProjectCards";

let tabs = [
    {id: 'web development', label: 'Web Development'},
    {id: 'ui/ux', label: 'UI/UX Design'},
    {id: 'other projects', label: 'Other Projects'},
];

export default function AnimatedTabs(){
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    return (
        <div className="space-y-16 relative mx-auto">
            <div className="flex space-x-20 mr-10 items-center justify-center ">
                {tabs.map((tab)=>(
                    <button key={tab.id}
                    onClick={()=>setActiveTab(tab.id)}
                    className={`${activeTab === tab.id? "text-slate-800": "hover:text-sky-300"}
                    rounded-full p-4 text-[25px] font-medium text-white outline-2 outline-sky-400 focus-visible:outline relative `}
                    >
                        {activeTab === tab.id && (
                        <motion.div 
                        layoutId="active-pill"
                        className="bg-gradient-to-r to-[#4EA3F1] from-sky-600 absolute inset-0  "
                        style={{borderRadius: '9999px'}}
                        transition={{type: 'spring', duration: 0.6}}/> 
                        )}
                    <span className="relative z-10 ">{tab.label} </span>
                    </button>
                ))}
            </div>
            <div className="h-[400px] w-full flex flex-wrap justify-center">
            {activeTab === 'web development'?(
                <ProjectCards projectSub="WebDev"/>
            ): activeTab === 'ui/ux'?(<ProjectCards projectSub="UIUX"/>):(<ProjectCards projectSub="other"/>)}
            </div>
        </div>
    )
}