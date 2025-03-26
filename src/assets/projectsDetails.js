import SoulFit from './SoulFit.png';
import dreamHome from './dreamHouse.png';
import restaurantImg from './restaurant.jpg';
import velocityImg from './velocity.jpg';
import LearnWave from './LW.jpeg';
import sms from './sms-classifier.png';
import opencv from './opencv.png'
import phishing from './phishing.png'
import coursemate from './coursemate.png'
import idms from './idms.png'

export const projectDetails ={
    WebDev:[
    {title: "CourseMate", 
    description: "A course management app enabling users to efficiently manage courses with full CRUD functionality in a user-friendly interface.",
    img: coursemate,
    code_design_link:'https://github.com/aayushi-2003/CoursesApp',
    live_link:'https://aayushi-2003.github.io/CoursesApp/',
    tools: ["HTML", "TailwindCSS", "ReactJS"]
    },
    {title: "LearnWave", 
    description: "An E-Learning Platform for Online Courses in Tech Field. This project is completely ideated, designed and developed by me.",
    img: LearnWave,
    code_design_link:'https://github.com/aayushi-2003/LearnWave',
    live_link:'https://aayushi-2003.github.io/LearnWave/',
    tools: ["HTML", "TailwindCSS", "ReactJS", "Figma"]
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
        code_design_link:'https://www.figma.com/design/wt9uC3xpTSNAnjZJ2BCxgC/SoulFit-Design?node-id=0-1&p=f&t=hffMjqM3VNS5jBgs-0',
        live_link:'https://www.figma.com/proto/wt9uC3xpTSNAnjZJ2BCxgC/SoulFit-Design?node-id=2304-113&t=0TgOl7OZI2sM1eUi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2302%3A169&show-proto-sidebar=1',
        tools: ["Figma", "Wireframing", "Prototype", "UX Research"]
        },
        {title: "iDMS - Excellon Software", 
        description: "A B2B SaaS application that automates the processes for automotive dealer management such as sales, repair, maintenance, finance, inventory management etc.",
        img: idms,
        live_link:'https://docs.google.com/document/d/1ObWNeWnE2HF4ML_a78KmO5irW4tquseoDjK7FSzuiuI/edit?usp=sharing',
        tools: ["Figma", "Wireframing", "Prototype", "UX Research"]
        },
    ],
    other:[
        {title: "Phishing URL Detection", 
        description: "Built a Random Forest classification model for phishing URL detection, achieving 96.52% accuracy on a dataset of 11,430 websites. Conducted a study on social engineering attacks using AI/ML and possibile countermeasures.",
        img: phishing,
        code_design_link:'https://github.com/aayushi-2003/Social-Engineering-Detection',
        tools: ["Python", "Pandas", "Scikit-learn"]
        },
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
        description: "A simple application made using Python GUI that empowers staff, property owners and renters to seamlessly carry out their rental business, with a backend supported by SQL database.",
        img: dreamHome,
        code_design_link:'https://github.com/aayushi-2003/DreamHouse-DBMS',
        live_link:'#',
        tools: ["Python", "Tkinter", "MySQL"]
        },
        {title: "Air Canvas", 
        description: "Developed an interactive Air Canvas interface in Python using OpenCV for graphical interface and MediaPipe library for real time hand tracking. Added several customizations for interactivity such as color selection and adjustable pen size.",
        img: opencv,
        code_design_link:'https://github.com/aayushi-2003/AirCanvas',
        tools: ["Python", "MediaPipe", "OpenCV"]
        },
    ]

}