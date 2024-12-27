import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { Icon } from "@iconify/react";
import propertyProsper from "./assets/property.png";
import medicalExtraction from "./assets/MEI.jpg";
import homeFinder from "./assets/home.PNG";
import HRMS from "./assets/HRMS.PNG";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: (
      <Icon icon="logos:nextjs-icon" className="h-16 w-16 text-indigo-500" />
    ),
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <Icon icon="logos:react" className="h-16 w-16 text-indigo-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: (
      <Icon
        icon="vscode-icons:file-type-nuxt"
        className="h-16 w-16 text-indigo-500"
      />
    ),
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <Icon icon="logos:vue" className="h-16 w-16 text-indigo-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: (
      <Icon
        icon="vscode-icons:file-type-angular"
        className="h-16 w-16 text-indigo-500"
      />
    ),
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: (
      <Icon icon="logos:nodejs-icon" className="h-16 w-16 text-indigo-500" />
    ),
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <Icon icon="devicon:figma" className="h-16 w-16 text-indigo-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: (
      <Icon
        icon="skill-icons:tailwindcss-dark"
        className="h-16 w-16 text-indigo-500"
      />
    ),
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: (
      <Icon
        icon="devicon:mongodb-wordmark"
        className="h-16 w-16 text-indigo-500"
      />
    ),
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: (
      <Icon
        icon="vscode-icons:file-type-sql"
        className="h-16 w-16 text-indigo-500"
      />
    ),
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: propertyProsper,
    url: "https://property-prosper.vercel.app/",
    github: "https://github.com/AASTU-Capstone-Project/frontend",
    title: "Property Prosper",
    techStack: [
      "vscode-icons:file-type-nuxt",
      "logos:nodejs-icon",
      "devicon:mongodb-wordmark",
      "skill-icons:tailwindcss-dark",
    ],
    text: "An online real estate platform for renting, buying, and listing properties, featuring multilingual support and secure payment integration. Built with the MEVN stack, with a focus on responsive UI/UX design.",
  },
  {
    id: nanoid(),
    img: medicalExtraction,
    url: "#",
    github: "https://github.com/Alpha-Techologies/medical-extraction-interface",
    title: "Medical Extraction Interface",
    techStack: [
      "logos:nextjs-icon",
      "logos:flask",
      "devicon:mongodb-wordmark",
      "skill-icons:tailwindcss-dark",
    ],
    text: "A platform for extracting, verifying, and saving data from medical records in image or PDF formats. Features include user authentication, data upload, and patient management. Built with Next.js, Flask, and MongoDB.",
  },
  {
    id: nanoid(),
    img: homeFinder,
    url: "https://homefinder-awrp.onrender.com/",
    github: "https://github.com/AASTU-Capstone-Project/frontend",
    title: "Home Finder ",
    techStack: [
      "logos:react",
      "logos:nodejs-icon",
      "devicon:mongodb-wordmark",
      "skill-icons:tailwindcss-dark",
    ],
    text: "A comprehensive platform for listing and finding homes for rent and purchase. Built using the MERN stack and TailwindCSS, it delivers a seamless, user-friendly experience for both property owners and home seekers.",
  },
  {
    id: nanoid(),
    img: HRMS,
    url: "#",
    github: "https://github.com/Yohannes-F21/inventory-management-system",
    title: "Inventory Management System",
    techStack: [
      "logos:react",
      "logos:nodejs-icon",
      "devicon:mongodb-wordmark",
      "skill-icons:tailwindcss-dark",
      "devicon:antdesign",
    ],
    text: "A robust application for managing inventory efficiently, built with the MERN stack, Ant Design and TailwindCSS. Features include streamlined tracking, stock updates, and reporting, designed for seamless user interaction and optimized performance.",
  },
  // {
  //   id: nanoid(),
  //   img: propertyProsper,
  //   url: "#",
  //   github: "https://github.com/AASTU-Capstone-Project/frontend",
  //   title: "Property Prosper",
  //   techStack: [
  //     "vscode-icons:file-type-nuxt",
  //     "logos:nodejs-icon",
  //     "devicon:mongodb-wordmark",
  //     "skill-icons:tailwindcss-dark",
  //   ],
  //   text: "An online real estate platform for renting, buying, and listing properties, featuring multilingual support and secure payment integration. Built with the MEVN stack, with a focus on responsive UI/UX design.",
  // },
];
