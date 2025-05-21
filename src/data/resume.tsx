import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import project1 from "./../assets/Screenshot (24).png";
import project2 from "./../assets/dnac.png";
import project3 from "./../assets/delivery.png";
import project4 from "./../assets/Screenshot (41).png";
import project5 from "./../assets/Login Page.jpg";
import project6 from "./../assets/Screenshot (75).png";
import project7 from "./../assets/Screenshot (76).png";

export const DATA = {
  name: "Harshita Verma",

  description: "Software Engineer",
  summary:
    "Experienced frontend developer with 2 years of experience in designing and building user interfaces, web applications, and responsive designs. Expertise in JavaScript (ES6+), React.js, and Next.js, with hands-on experience in Node.js. Proficient in crafting engaging and user-friendly digital experiences with a focus on performance, accessibility, and browser compatibility. Quick learner with a knack for adopting new frontend frameworks and tools.",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Node.js",
    "Java",
    "Postman",
    "AWS",
    "Agile",
    "Angular",
    "Redux",
    "Bootstrap",
    "Material UI",
    "Tailwind CSS",
    "SASS",
    "CSS3",
    "HTML5",
    "WebPack",
    "Restful API",
    "SQL",
    "Git",
    "Figma",
    "ANTD",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "harshitaverma0526@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Harshitaverma12",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harshita-verma-335b671b5/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Proactive Data Systems",
      href: "https://proactive.co.in/",
      title: "Software Engineer",
      logoUrl: "proactive.png",
      start: "July 2023",
      end: "Present",
    },
    {
      company: "Corestrat",
      href: "https://corestrat.ai/",
      title: "Software Engineer",
      logoUrl: "corestrat.png",
      start: "January 2023",
      end: "June 2023",
    },
  ],
  education: [
    {
      school: "Christ (Deemed to be University)",
      href: "https://christuniversity.in/",
      degree: "Master's Degree of Computer Applications",
      logoUrl: "christ.jpg",
      start: "2021",
      end: "2023",
    },
    {
      school: "Banasthali Vidyapith",
      href: "https://www.banasthali.org/",
      degree: "Bachelor's Degree of Computer Applications",
      logoUrl: "banasthali.jpeg",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Quotation System",
      description:
        "Developed a React project integrating Zoho CRM to pre-fill MUI forms for structured deal tracking. Users submit, edit, export, and re-import data via React-Table-Next and Excel. An AG-Grid table centralizes deal monitoring and quotation standardization. Added unit tests (React Testing Library) and end- to-end client tests for reliability and regression prevention.",
      technologies: [
        "React",
        "Javascript",
        "TailwindCSS",
        "Material UI",
        "ANTD",
        "React Context",
        "React-table-next",
      ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://chatcollect.com",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: project1,
    },
    {
      title: "Proactive Enterprise Monitoring",
      description:
        "This project is used to monitor VIP users’ network connectivity via Cisco DNA-C, categorizing status as good, poor, or bad. It includes detailed 5-minute interval graphs and ticketing for proactive issue resolution. Prior to this system, there was no efficient method to assess network stability for important users. This solution significantly enhances the client’s efficiency in managing the networking system for VIP users.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Highcharts",
        "Material UI",
        "Javascript",
      ],

      image: project2,
    },
    {
      title: "Delivery System",
      description:
        "React portal integrating with Business Central for real-time delivery management. Users update delivery dates via MUI components, improving communication and reducing errors. This system streamlines the delivery management process, reducing manual data entry errors and improving communication between sales and logistics teams.",
      technologies: ["React", "Javascript", "Material UI", "SASS"],
      image: project3,
    },
    {
      title: "Cisco Touch Customization",
      description:
        "Developed a Cisco Macro (JavaScript + XML) to add a Teams call option on Cisco Touch, enabling seamless call joining. Implemented multiple call modes for PWC and outsourced customers based on video ID, tenant domain, or meeting credentials , improving accessibility and user experience.",
      technologies: ["XML + Jvascript"],

      image: project4,
    },
    {
      title: "E-learning Portal",
      description:
        "Created a React-based knowledge-sharing platform for onboarding and self-paced learning, featuring progress tracking and assessments. It streamlines knowledge transfer, reduces managers’ effort, and enhances cross-functional understanding, enabling efficient skill-building and onboarding for new hires. ",
      technologies: ["React", "Material UI", "CSS3", "Flexbox"],

      image: project5,
    },
    {
      title: "Corestrat Website",
      description:
        "The website was initially lacking content related to the products that the company offers to its customers, addressed this issue by adding the necessary content to the website.To ensure that the website visitors’ data is properly stored, connected the website’s normal forms with HubSpot.",
      technologies: ["Wordpress"],

      image: project6,
    },
    {
      title: "Connect HnT with hubspot of Corestrat Website",
      description:
        "Integrated HubSpot’s hiring form with an Angular-based platform to connect HnT with Corestrat’s website. The platform allows job applicants to take role-specific tests, view their results, and receive email notifications for interviews if they pass.",
      technologies: ["Wordpress", "HubSpot", "Angular", "CSS3", "Bootstrap"],

      image: project7,
    },
  ],
  hackathons: [
    {
      title: "SavForest",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented realityThis project aims to use data analysis to predict the likelihood of a forest fire based on various attributes. The project used machine learning algorithms to analyze this data and identify patterns that can be used to predict future fire risks. This could be a valuable tool for forest department personnel to proactively prevent and manage forest fires.",
    },
     {
      title: "LawForum",
      description:
        "Developed a specialized Q&A platform for legal queries, similar to Stack Overflow, using Django. The platform bridges the knowledge gap between legal experts, students, and the public by enabling question posting, expert answers, and a user reputation system. It reduces reliance on costly legal consultations and improves legal literacy, fostering informed decision- making."
    },
     {
      title: "Banasthali Cov Care",
      description:
        "The project aims to develop a comprehensive Health Management System for a college, designed to provide seamless healthcare services to students, teaching staff, and non-teaching staff within the campus premises. This centralized digital platform will act as a one-stop solution for all health-related needs and services. To begin using the system, users are required to register for the first time, providing basic personal and health information to create their unique profiles. Once registered, they can log in to the portal anytime to access their health records, updates, and available services."
    },
     {
      title: "Weather Application",
      description:
      "In this project we make a weather app in react. In this project, we use openweather API which provides us free API to get weather details. Here we will add an input where user will add any city name and as soon city name gets entered details will be fetched to the screen."
    },
    
  ],
} as const;
