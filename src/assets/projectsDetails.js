import SoulFit from './SoulFit.jpg';
import dreamHome from './dreamHouse.png';
import restaurantImg from './restaurant.jpg';
import velocityImg from './velocity.jpg';
import LearnWave from './LW.jpeg';
import sms from './sms-classifier.png';
import opencv from './opencv.png'

export const projectDetails ={
    WebDev:[
    {title: "LearnWave", 
    description: "An E-Learning Platform for Online Courses in Tech Field. This project is completely ideated, designed and developed by me.",
    img: LearnWave,
    code_design_link:'https://github.com/aayushi-2003/LearnWave',
    live_link:'https://aayushi-2003.github.io/LearnWave/',
    tools: ["HTML", "TailwindCSS", "JavaScript", "Figma"]
    },
    {title: "Velocity", 
    description: "The official website of Velocity - the coding club of IIIT Dharwad. I worked in a team to make the frontend and UI design of the website.",
    img:   velocityImg,
    code_design_link:'https://github.com/Velocity-IIITDWD/velocity',
    live_link:'https://beta.velocityclub.live/',
    tools: ["HTML", "TailwindCSS", "JavaScript", "Figma"]

    },
    {title: "Gericht Restaurant", 
    description: "The landing page for a restaurant website made using ReactJS. Static website with smooth scroll and responsive design.",
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
        {title: "SMS Spam Classifier Model", 
        description: "A classification model for SMS spam detection. Used Pandas for data cleaning and visualization, NLTK for text preprocessing and built the model using TF-IDF Vectorizer and Multinomial Naive Bayes.",
        img: sms,
        code_design_link:'https://github.com/aayushi-2003/sms-spam-classifier',
        live_link:'https://sms-spam-classifier-jwfm.onrender.com/',
        tools: ["Python", "Pandas", "NLTK"]
        },
        {title: "Virtual Keyboard", 
        description: "Developed a virtual keyboard utilizing MediaPipe library for real time hand tracking and OpenCV for graphical interface. Implemented hand tracking functionality to detect and track user hand movements in real-time.",
        img: opencv,
        code_design_link:'https://github.com/aayushi-2003/Virtual-Keyboard',
        live_link:'https://github.com/aayushi-2003/Virtual-Keyboard',
        tools: ["Python", "MediaPipe", "OpenCV"]
        },
        {title: "DreamHome Rental Business", 
        description: "A simple application made using Python GUI that empowers staff, property owners and renters to seamlessly carry out their rental business.",
        img: dreamHome,
        code_design_link:'https://github.com/aayushi-2003/DreamHouse-DBMS',
        live_link:'#',
        tools: ["Python", "Tkinter", "MySQL"]
        },
    ]

}