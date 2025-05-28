import {
  backend,
  creator,
  css,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  parth,
  reactjs,
  redstar,
  redux,
  tailwind,
  tripguide,
  typescript,
  web,
  zidio,
  united,
  satu,
  learning,
  fake,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "United Learning",
    icon: united,
    iconBg: "#383E56",
    date: "May 2025 - Current",
    points: [
      "Developing and maintaining web applications using HTML5, CSS, JS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Zidio Development",
    icon: zidio,
    iconBg: "#383E56",
    date: "March 2025 - May 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Team Leader",
    company_name: "Parth Multi Solutions",
    icon: parth,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - April 2024",
    points: [
      "Leading a team of sales executives to achieve and exceed monthly targets through strategic planning and motivation.",
      "Collaborating with cross-functional teams including marketing and product to align sales strategies with business goals.",
      "Training and mentoring team members, enhancing their communication, negotiation, and client engagement skills.",
      "Monitoring performance metrics and providing regular feedback to drive individual and team success.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Redstar Infosys",
    icon: redstar,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using HTML 5, Bootstrap and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
    {
      testimonial:
      "I used to think it was nearly impossible to lead a top-performing sales team while consistently closing tough deals — but Nitesh proved me wrong and set a new benchmark for all of us.",
      name: "Satendra Singh",
      designation: "CFO",
      company: "Parth Multi Solutions",
      image: satu,
    },
];

const projects = [
  {
    name: "Fake News Analysis",
    description:
      "Web-based platform that allows users to analyze and visualize fake news articles using advanced machine learning algorithms.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: fake,
    source_code_link: "https://github.com/rainitesh2811/Fake-news-and-Deep-fake-",
  },
  {
    name: "Task Manager",
    description:
      "A web application that allows users to manage their tasks efficiently, with features like task creation, editing, and deletion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rainitesh2811/Task-Manager",
  },
  {
    name: "United Learning",
    description:
      "A web application that allows students to learn and practice using mocks and quizzes, with features like user authentication, progress tracking, and a wide range of subjects.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: learning,
    source_code_link: "https://github.com/Shreya2004Khanna/UNITED_LEARNING",
  },
  {
    name: "Redstar Infosys",
    description:
      "A web Application which allows user to buy and sell products online, with features like product listing, shopping cart, and payment integration.",
    tags: [
      {
        name: "HTML 5 & Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rainitesh2811/Redstar",
  },
];

export { experiences, projects, services, technologies, testimonials };