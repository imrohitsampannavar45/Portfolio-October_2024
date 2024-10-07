import { Home, Laptop2, Mail, NotebookText, Rocket, User } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const navItems = [
  { name: "Home", link: "/", icon: Home },
  { name: "About", link: "/about", icon: User },
  { name: "Projects", link: "/projects", icon: Laptop2 },
  { name: "Contact", link: "#contact", icon: Mail },
  { name: "Blogs", link: "/blogs", icon: NotebookText },
];

export const FrontendSkills = [

  {
    id: 1,
    skill: "React JS",
    img: "./images/icons/react.svg",
    value: 90,
  },
  {
    id: 2,
    skill: "Next JS 14",
    img: "./images/icons/nextjs.svg",
    value: 80,
  },
  {
    id: 3,
    skill: "Tailwind CSS",
    img: "./images/icons/tailwind.svg",
    value: 85,
  },
  {
    id: 4,
    skill: "Javascript",
    img: "./images/icons/javascript.svg",
    value: 75,
  },
  {
    id: 5,
    skill: "Typescript",
    img: "./images/icons/typescript.svg",
    value: 70,
  },
];

export const backendSkills = [
  {
    id: 1,
    skill: "Next JS 14",
    img: "./images/icons/nextjs.svg",
    value: 80,
  },
  {
    id: 2,
    skill: "Node JS",
    img: "./images/icons/nodejs.svg",
    value: 65,
  },
  {
    id: 3,
    skill: "MongoDB",
    img: "./images/icons/mongodb.svg",
    value: 70,
  },
  {
    id: 4,
    skill: "MySQL",
    img: "./images/icons/sql.svg",
    value: 75,
  },
];

export const languageSkills = [
  {
    id: 1,
    skill: "Java",
    img: "./images/icons/java.svg",
    value: 75,
  },
  {
    id: 2,
    skill: "C",
    img: "./images/icons/c.svg",
    value: 80,
  },
  {
    id: 3,
    skill: "C++",
    img: "./images/icons/cpp.svg",
    value: 90,
  },
  {
    id: 4,
    skill: "Typescript",
    img: "./images/icons/typescript.svg",
    value: 70,
  },
  {
    id: 5,
    skill: "Python",
    img: "./images/icons/python.svg",
    value: 65,
  },

];

export const OtherSkills = [
  {
    id: 1,
    skill: "Git & Github",
    img: "./images/icons/git.svg",
    value: 75,
  },
  {
    id: 2,
    skill: "Linux",
    img: "./images/icons/linux.svg",
    value: 70,
  },
];

export const projects = [
  {
    id: 1,
    title: "Prescripto - Doctors Appointment Booking Website",
    des: " Prescripto is an online appointment booking platform designed for doctors and hospitals. The website offers a seamless user experience for booking appointments with healthcare professionals based on their specialty, availability, and user preferences. The platform is built with a modern tech stack, ensuring efficiency, reliability, and a user-friendly interface for both patients and healthcare providers.",
    img: "https://i.ytimg.com/vi/C3U1RforbH4/hqdefault.jpg",
    iconLists: [
      "/images/icons/react.svg",
      "/tail.svg",
      "/images/icons/mongodb.svg",
      "/git.svg",
      "/images/icons/javascript.svg"
    ],
    link: "https://prescripto-blue.vercel.app/"
  },
  {
    id: 2,
    title: "Food Delivery Website",
    des: "This project is a food delivery website with features such as user authentication, shopping cart functionality, order placement, and administration panel for managing orders and food items.",
    img: "https://i.ytimg.com/vi/9jRTo7ILxQc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAvUj07j5AdUMaQ4fwokC1P3NgF8g",
    iconLists: [
     
      "/images/icons/react.svg",
      "/tail.svg",
      "/images/icons/javascript.svg",
      "/images/icons/mongodb.svg",
     
    ],
    link: "https://github.com/imrohitsampannavar45/Food_Delievery_Tomato.git",
  },
  {
    id: 3,
    title: "Blogger Website",
    des: " The Blogger Website is a modern blogging platform built using Next.js, designed to provide users with an engaging and interactive experience for reading, writing, and sharing blog posts. This project leverages the power of Next.js for server-side rendering and static site generation, ensuring fast load times and optimal SEO performance.",

    img: "/images/downloads.jpg",
    iconLists: [
      "/images/icons/nextjs.svg",
      "/tail.svg",
      "/images/icons/javascript.svg",
      "/images/icons/mongodb.svg",
   
    ],
    link: "https://github.com/imrohitsampannavar45/Blogger-Website-NextJS.git",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    des: "None other than the website you are surfing right now! This website respresents my personal portfolio - who I am, My skills, project works and contact details with some blogs that is weaved with my knowledge and information. If this website feels amazing to you, you should try using technologies like Next JS, tailwind CSS, Magic UI",
    img: "/images/rohits.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/gsap.svg"],
    link: "https://nextjs-portfolio-rohit-sampannavars-projects.vercel.app/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: FaGithub,
    link: "https://github.com/imrohitsampannavar45",
  },
  {
    id: 2,
    img: FaLinkedinIn,
    link: " https://www.linkedin.com/in/rohitvs1/",
  },
  {
    id: 3,
    img: FaXTwitter,
    link: "https://x.com/RohitSampanna12",
  },
];
