import { DiBootstrap } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import {
  SiDjango,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { SiFlutter, SiCsharp } from "react-icons/si";
import image1 from "./images/image-1.png";
import image2 from "./images/image-2.png";
import image3 from "./images/image-3.png";
import image4 from "./images/image-4.png";
import image5 from "./images/image-5.png";
import image6 from "./images/image-6.png";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const projects = [
  {
    id: 1,
    title: "Ministry of ICT Document Approval System",
    image: image5,
    category: "Web",
    data: {
      description: `The Ministry of ICT Document Approval System streamlines the process of submitting, reviewing, and approving documents within the ministry. Designed for efficiency and transparency, this system ensures secure handling of sensitive information, tracks document progress in real-time, and facilitates seamless collaboration among stakeholders. With user-friendly interfaces and robust features, it enhances workflow productivity and accountability across all levels of the ministry.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Bootstrap",
        icon: <DiBootstrap />,
        iconColor: "skyblue",
      },
      {
        name: "ASP.NET",
        icon: <SiCsharp />,
        iconColor: "purple",
      },
      {
        name: "C#",
        icon: <SiCsharp />,
        iconColor: "white",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 2,
    title: "Automatic Number Plate Detection Toll Collection System",
    image: image2,
    category: "Web",
    data: {
      description: `My final year project, the Automatic Number Plate Detection Toll Collection System, leverages advanced image processing and machine learning techniques to automate toll collection. This system captures vehicle license plates using cameras, processes the images to accurately detect and recognize the plate numbers, and automatically charges the toll fee to the registered vehicle owners. By eliminating the need for manual toll booths, this solution enhances traffic flow efficiency, reduces operational costs, and minimizes human error, contributing to a more streamlined and modern toll collection process.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Bootstrap",
        icon: <DiBootstrap />,
        iconColor: "skyblue",
      },
      {
        name: "Python",
        icon: <FaPython />,
        iconColor: "yellow",
      },
      {
        name: "Django",
        icon: <SiDjango />,
        iconColor: "green",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 3,
    title: "Asset Management System",
    image: image3,
    category: "Web",
    data: {
      description: `The Asset Management System is designed to streamline the tracking, maintenance, and utilization of an organization's assets. This system provides a comprehensive solution for managing both physical and digital assets, ensuring accurate records and efficient asset lifecycle management. With features such as real-time inventory tracking, automated maintenance scheduling, and detailed reporting, the system enhances operational efficiency, reduces downtime, and improves asset utilization. Its user-friendly interface and robust security measures make it an invaluable tool for optimizing asset management across various industries.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Bootstrap",
        icon: <DiBootstrap />,
        iconColor: "skyblue",
      },
      {
        name: "ASP.NET",
        icon: <SiCsharp />,
        iconColor: "purple",
      },
      {
        name: "C#",
        icon: <SiCsharp />,
        iconColor: "white",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 4,
    title: "School Placement Application Management System",
    image: image1,
    category: "Web",
    data: {
      description: `The School Placement Application Management System simplifies the process of managing student applications and placements across educational institutions. This system enables efficient handling of applications, from submission to final placement, ensuring a transparent and streamlined process. Key features include automated application tracking, eligibility verification, seat allocation, and communication with applicants. By centralizing and digitizing the placement process, the system enhances efficiency, reduces administrative workload, and ensures fair and timely placements for students, making it an essential tool for educational administrators.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Bootstrap",
        icon: <DiBootstrap />,
        iconColor: "skyblue",
      },
      {
        name: "ASP.NET",
        icon: <SiCsharp />,
        iconColor: "purple",
      },
      {
        name: "C#",
        icon: <SiCsharp />,
        iconColor: "white",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 5,
    title: "School Application & Web Portal",
    image: image6,
    category: "Apps",
    data: {
      description: `The School Application is an all-in-one platform designed to streamline the application process for students, parents, and educational institutions. This intuitive system allows users to submit, track, and manage applications effortlessly. Features include online form submission, document upload, real-time status updates, and automated notifications. By simplifying the application process, the School Application enhances accessibility, reduces administrative burden, and ensures a smooth and efficient experience for all stakeholders involved.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Flutter",
        icon: <SiFlutter />,
        iconColor: "blue",
      },
      {
        name: "Bootstrap",
        icon: <DiBootstrap />,
        iconColor: "skyblue",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        iconColor: "blue",
      },
      {
        name: "Laravel",
        icon: <SiLaravel />,
        iconColor: "red",
      },
      {
        name: "PHP",
        icon: <SiPhp />,
        iconColor: "purple",
      },
      {
        name: "MySQL",
        icon: <SiPostgresql />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 6,
    title: "Laravel Inventory Management System",
    image: image4,
    category: "Web",
    data: {
      description: `The Laravel Inventory Management System is a robust and scalable solution for efficiently managing inventory across various business operations. Built with the powerful Laravel framework, this system offers features such as real-time inventory tracking, automated stock level alerts, order management, and detailed reporting. Its user-friendly interface and customizable modules ensure seamless integration with existing workflows, enhancing accuracy and efficiency in inventory management. By leveraging Laravel's security and performance capabilities, this system provides a reliable and secure platform for businesses to optimize their inventory processes.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "Bootstrap",
        icon: <DiBootstrap />,
        iconColor: "skyblue",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
        iconColor: "blue",
      },
      {
        name: "PHP",
        icon: <SiPhp />,
        iconColor: "purple",
      },
      {
        name: "Laravel",
        icon: <SiLaravel />,
        iconColor: "red",
      },
      {
        name: "MySQL",
        icon: <SiPostgresql />,
        iconColor: "skyblue",
      },
    ],
  },
];

export const experience = [
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Frameworks",
    data: [
      {
        skill: "ASP.NET",
        level: "Intermediate",
      },
      {
        skill: "Laravel",
        level: "Intermediate",
      },
      {
        skill: "Flutter",
        level: "Intermediate",
      },
      {
        skill: "Django",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: ".NET",
        level: "Experienced",
      },
      {
        skill: "PHP",
        level: "Experienced",
      },
      {
        skill: "Python",
        level: "Intermediate",
      },
      {
        skill: "MySQL",
        level: "Experienced",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "https://www.fiverr.com/godknows01?up_rollout=true",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/Godknows2000",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/godknows-aresho-1231361b1/",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/",
  },
];
