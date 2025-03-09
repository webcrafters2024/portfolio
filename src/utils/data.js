import SkillImg1 from "../assets/images/figma.png";
import SkillImg2 from "../assets/images/html-5.png";
import SkillImg3 from "../assets/images/css-3.png";
import SkillImg4 from "../assets/images/reactjs.png";
import SkillImg5 from "../assets/images/angular.png";
import SkillImg6 from "../assets/images/nodejs.png";

import user1 from "../assets/images/user.jpg";
import user2 from "../assets/images/user1.jpg";

import logo from "../assets/images/dummy-logo-1.png";
import logo1 from "../assets/images/dummy-logo-2.png";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";

export const serviceData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Ensure your website looks great on any device, with layouts that adapt to different screen sizes seamlessly.",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Set up user-friendly CMS solutions like WordPress or custom-built options so clients can manage content easily.",
  },
  {
    id: 3,
    title: "Content Writing",
    description:
      "Build and integrate APIs to connect websites with third-party applications, enhancing functionality and performance.",
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Refresh outdated websites with modern, appealing designs that align with current brand goals and user expectations.",
  },
];

export const recentWorksCats = ["All", "UX/UI", "Branding", "Apps"];

export const recentWorks = [
  {
    id: 0,
    catId: 1, 
    title: "Zomato Redesign",
    description: "Revamping user experience for better engagement",
    image: project1,
  },
  {
    id: 1,
    catId: 2,
    title: "Tata Motors Rebrand",
    description: "Modernizing the brand identity for global appeal",
    image: project2,
  },
  {
    id: 2,
    catId: 2, 
    title: "Byju's Visual Identity",
    description: "Enhancing the brand through strategic design",
    image: project3,
  },
  {
    id: 3,
    catId: 3,
    title: "Paytm Super App",
    description: "Developing an all-in-one fintech solution",
    image: project4,
  },
];


export const experienceData = [
  {
    id: 0,
    year: "2022 - Present",
    name: "Full-Stack Development",
    address: "Infosys, Bangalore",
  },
  {
    id: 1,
    year: "2021 - 2022",
    name: "Frontend Development Internship",
    address: "Wipro, Hyderabad",
  },
  {
    id: 2,
    year: "2020 - 2021",
    name: "UI/UX Design",
    address: "Tata Consultancy Services (TCS), Pune",
  },
];

export const educationData = [
  {
    id: 0,
    year: "2020 - 2023",
    name: "Computer Science and Engineering",
    address: "Indian Institute of Technology (IIT), Bombay",
  },
  {
    id: 1,
    year: "2016 - 2020",
    name: "Information Technology",
    address: "National Institute of Technology (NIT), Trichy",
  },
  {
    id: 2,
    year: "2012 - 2015",
    name: "Bachelor of Science ",
    address: "University of Delhi, Delhi",
  },
];

export const skillsData = [
  {
    id: 0,
    image: SkillImg1,
    title: "Figma",
    percentage: "90%",
  },
  {
    id: 1,
    image: SkillImg2,
    title: "HTML",
    percentage: "95%",
  },
  {
    id: 2,
    image: SkillImg3,
    title: "CSS",
    percentage: "92%",
  },
  {
    id: 3,
    image: SkillImg4,
    title: "React",
    percentage: "80%",
  },
  {
    id: 4,
    image: SkillImg5,
    title: "Angular",
    percentage: "75%",
  },

  {
    id: 5,
    image: SkillImg6,
    title: "Node js ",
    percentage: "85%",
  },
];

export const testimonialsData = [
  {
    name: "Amit Sharma",
    position: "CEO, TechWave ",
    user: user1,
    logo: logo,
    msg: "The team delivered a high-performance website with a modern design. It boosted our online presence significantly!",
  },
  {
    name: "Priya Iyer",
    position: "Founder, Digital Bloom",
    user: user2,
    logo: logo1,
    msg: "Their SEO strategy helped us rank on the first page of search results. Organic traffic and inquiries have doubled!",
  },
  {
    name: "Rohit Verma",
    position: "CTO, StartUp Junction",
    user: user1,
    logo: logo,
    msg: "The mobile app they built is fast, user-friendly, and scalable. It exceeded all our expectations in terms of quality!",
  },
  {
    name: "Sneha Patel",
    position: "COO, GrowthSync ",
    user: user2,
    logo: logo1,
    msg: "Our new website is sleek and responsive. We’ve received positive feedback from users and seen better engagement.",
  },
];