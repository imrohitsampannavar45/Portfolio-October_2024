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
    img: "https://private-user-images.githubusercontent.com/88710389/374110495-07f43e79-d568-424a-b743-6a819837a98b.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgyOTMzNDksIm5iZiI6MTcyODI5MzA0OSwicGF0aCI6Ii84ODcxMDM4OS8zNzQxMTA0OTUtMDdmNDNlNzktZDU2OC00MjRhLWI3NDMtNmE4MTk4MzdhOThiLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA3VDA5MjQwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI3NjJmZDZmMmE5NGYyNzhkZmZiMTkyNzkwNWY3N2NlOWI3MDYxOWY1MDhhYTE2OGRiNWUzZjEzYjZkMDgyNDcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.gUnVAX4QPtzfGjx3uSrfy5GTwFdnvZIQPZC3tePeijk",
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
    img: "https://private-user-images.githubusercontent.com/88710389/325232745-b1ed80de-7e4d-42cc-9729-2dfde8f13892.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgyOTM4NjUsIm5iZiI6MTcyODI5MzU2NSwicGF0aCI6Ii84ODcxMDM4OS8zMjUyMzI3NDUtYjFlZDgwZGUtN2U0ZC00MmNjLTk3MjktMmRmZGU4ZjEzODkyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA3VDA5MzI0NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZjMGVkMTYyYjUzM2YyY2NkNjRmMjI4YWFlMGE4Y2E2M2E0NGY2N2EwYmNhM2FlZjdiMjk0MjYwNmRmOWM5OTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.dTgErze-pQhFvXU9QgeHIOXHolGy4e8FuoqLCmKmTfQ",
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
