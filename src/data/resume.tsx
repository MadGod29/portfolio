import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Mangesh Gosavi",
  initials: "MG",
  url: "https://mangesh.io",
  location: "Pune, India",
  locationLink: "https://maps.app.goo.gl/Hynva5TbBTTzhwGc9",
  description:
    "I love working with machines, building things and helping people.",
  summary:
    "[I pursued a double degree in Information Technology and Data Science and Applications](/#education), [worked at a ERP based fintech company as Software Developer and as a Research Intern at PICT](/#experience) , and [competed in over 6 hackathons and 2 international competitions for fun](/#hackathons).",
  avatarUrl: "/me.jpeg",
  skills : [
    "Python",
    "C/C++ (basics)",
    "JavaScript",
    "SQL",
    "Django",
    "Django REST Framework (DRF)",
    "FastAPI",
    "ReactJS",
    "AngularJS",
    "NodeJS",
    "Flutter",
    "TensorFlow",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Keras",
    "Scikit-learn",
  ],
  navbar :[
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "mangeshgosavi129@gmail.com",
    tel: "+91 9307415250",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MadGod29",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mangeshgosavi129/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:mangeshgosavi129@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work :[
    {
      company: "PICT",
      href: "https://pict.edu",
      badges: [],
      location: "Pune, India",
      title: "Research Intern - Image Captioning",
      logoUrl: "/pic.jpg",
      start: "Feb 2024",
      end: "Present",
      description:
        "Developed a model based on VGG19 and MobileNetV2, focusing on person identification. Enhanced accessibility for visually impaired users by improving understanding through image captioning.",
    },
    {
      company: "Rhythmflows",
      href: "https://rhythmflows.com",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/rhythmflows.png",
      start: "Feb 2024",
      end: "May 2024",
      description:
        "Worked on a full-stack web application using Django Rest Framework with React as the frontend. Implemented functions to enhance filtering, searching, and data retrieval processes. Created a dynamic system to update databases using Python.",
    },
  ],
  
   education :[
     {
       school: "Indian Institute of Technology Madras",
       href: "https://www.iitm.ac.in",
       degree: "B.S in Data Science and Applications",
       logoUrl: "/iitm_logo.png",
       start: "Aug 2023",
       end: "May 2027",
     },
    {
      school: "Pune Institute of Computer Technology",
      href: "https://pict.edu",
      degree: "B.E in Information Technology, Honors in AI and ML",
      logoUrl: "/pic.jpg",
      start: "Aug 2022",
      end: "May 2026",
    },
  ],
  projects : [
    {
      title: "Dataset Generator",
      href: "#",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Developed a dataset generator using Conditional-Wasserstein GAN-GP with Zero Shot Learning. Incorporating Diffusion models for industry applications.",
      technologies: ["CWGAN-GP", "ZSL", "DDPM"],
      links: [],
    },
    {
      title: "Chess.com clone",
      href: "#",
      dates: "April 2024",
      description:
      "Created a chess.com clone from scratch",
      technologies: ["ReactJS", "DRF", "Websockets"],
      links: [],
    },
    {
      title: "Facial Recognition",
      href: "#",
      dates: "April 2024",
      description:
      "Created a facial recognition model for identifying famous personalities",
      technologies: ["Python", "Tensorflow", "Scikit-learn",""],
      links: [],
    },
    {
      title: "Virtual TryOn",
      href: "#",
      dates: "April 2024",
      description:
      "Created a website for trying on clothes virtually. Used Pix2PixHD to replace the current clothes with the image provided",
      technologies: ["Opencv", "Numpy", "Tensorflow"],
      links: [],
    },
    {
      title: "Stocks Predictor",
      href: "#",
      dates: "April 2024",
      description:
      "Created a multi variable regression model for predicting stocks",
      technologies: ["Python", "ScikitLearn", "Matplotlib"],
      links: [],
    },
    {
      title: "Real Time Chat",
      href: "#",
      dates: "April 2024",
      description:
        "Developed a chat system that allows communication using just a username, with group conversations and no need for mobile numbers or email IDs.",
      technologies: ["ReactJS", "Node.js", "Websockets","API"],
      links: [],
    },
    {
      title: "Jarvis",
      href: "#",
      dates: "April 2022",
      description:
        "Created a scirpt which on running would act as a personal assisstant able to send and read emails, recieve and make phone calls, do basic tasks like adjusting the brightness,keyboard backlight and more all through voice commands",
      technologies: ["Python", "API"],
      links: [],
    },
  ],
  hackathons : [
    {
      title: "Smart India Hackathon",
      dates: "Sept 2024",
      location: "National",
      description:
        "Developed an AIML-based website for Smart route calculation for ships by considering various factors such weather, tides, CO2 emissions, and available ports.",
      technologies: ["Django", "BERT", "Azure", "TensorFlow"],
      links: [],
    },
    {
      title: "Amazon ML challenge",
      dates: "Sept 2024",
      location: "International",
      description:
        "Created a model from scratch that could identify the crucial details like item weight, height, other dimensions by using OCR and CNN architecture",
      technologies: ["Python", "Tesseract", "TensorFlow",'Pandas'],
      links: [],
    },
    {
      title: "Raccam-Rajasthan Police",
      dates: "Jan 2024",
      location: "National",
      win:"3rd place",
      description:
        "Developed an AIML-based website for processing FIR images. Implemented BERT for classification. Secured 3rd place with a jury mention at a national-level hackathon.",
      technologies: ["Django", "BERT", "Azure", "TensorFlow"],
      links: [],
    },
    {
      title: "Mindspark",
      dates: "Nov 2023",
      location: "National",
      description:
        "Used Semantic analisys to provide youtube video recommendation specifically for the marketing team so that thay can provide better marketing strategies. Ranked 2 out of almost 50 teams",
      technologies: ["Django","Python","HTML/CSS","MongoDB",""],
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "Sept 2023",
      location: "National",
      description:
        "Developed a completely integrated software system with a website and an app with a common backend which was intended to identify the name of the plant based on the image of its leaf",
      technologies: ["Django", "Flutter", "Dart", "TensorFlow","React"],
      links: [],
    },
  ],
} as const;
