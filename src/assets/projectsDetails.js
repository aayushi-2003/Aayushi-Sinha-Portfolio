import projectImg1 from './projectImg1.jpg';
import SoulFit from './SoulFit.jpg';
import dreamHome from './dreamHouse.png';
import restaurantImg from './restaurant.jpg';
import velocityImg from './velocity.jpg';

export const projectDetails ={
    WebDev:[
    {title: "Project 1", 
    description: "This is a project description",
    img: projectImg1,
    code_design_link:'#',
    live_link:'#',
    tools: ["JavaScript", "ReactJS"]
    },
    {title: "Velocity", 
    description: "The official website of Velocity - the coding club of IIIT Dharwad. I worked in a team to make the frontend and UI design of the website.",
    img:   velocityImg,
    code_design_link:'https://github.com/Velocity-IIITDWD/velocity',
    live_link:'https://beta.velocityclub.live/',
    tools: ["HTML", "TailwindCSS", "JavaScript", "Figma"]

    },
    {title: "Gericht Restaurant", 
    description: "A static ReactJS website for a restaurant - personal project",
    img:   restaurantImg,
    code_design_link:'https://aayushi-2003.github.io/Restaurant-website/',
    live_link:'https://aayushi-2003.github.io/Restaurant-website/',
    tools: ["CSS", "ReactJS"]

    },
    ],
    UIUX:[
        {title: "SoulFit", 
        description: "A physical fitness, meditation and mental fitness app. I conducted user research, took qualitative analysis from peers and designed the UI/UX design as well as interactive prototype of the app.",
        img: SoulFit,
        code_design_link:'https://www.figma.com/file/eBP8DdEVnPYfOyyiVGtVkM/SoulFit-Design?type=design&node-id=0-1&mode=design&t=UiFOWS46q9ysclch-0',
        live_link:'https://www.figma.com/proto/eBP8DdEVnPYfOyyiVGtVkM/SoulFit-Design?node-id=753-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=134%3A5&mode=design&t=z7MfrRn3JcWSN6Mq-1',
        tools: ["Figma", "Wireframing", "Prototype", "UX Research"]
        },
    ],
    other:[
        {title: "DreamHome Rental Business", 
        description: "A simple application made using Python GUI that empowers staff, property owners and renters to seamlessly carry out their rental business.",
        img: dreamHome,
        code_design_link:'https://github.com/aayushi-2003/DreamHouse-DBMS',
        live_link:'#',
        tools: ["Python", "Tkinter", "MySQL"]
        }
    ]

}