// data.ts
import icons from '../../assets/icons';

// src/data/projectsData.ts
import criptoMerch from '../../assets/projects/criptoMerch.png';
import moneyMind from '../../assets/projects/moneyMind.png';
import mrRobot from '../../assets/projects/mrRobot.png';
import praga from '../../assets/projects/praga.png';
import razer from '../../assets/projects/razer.png';
import todoListVue from '../../assets/projects/todoListVue.png';
import alejandraQueiruga from '../../assets/projects/alejandraQueiruga.png';
import ticTacToe from '../../assets/projects/ticTacToe.png';
import clauty from '../../assets/projects/clauty.png';
import csegPortfolio from '../../assets/projects/cseg-portfolio.png';
type NavLink = {
  label: string;
  id: string;
};

export const navBarLinks: NavLink[] = [
  { label: 'Home', id: 'Home' },
  { label: 'Projects', id: 'Projects' },
  { label: 'About', id: 'About' },
  { label: 'Github', id: 'Github' },
  { label: 'Contact', id: 'Contact' },
];

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  [key: string]: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  socialLinks: SocialLinks;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Colors {
  tint: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: string[];
  skillsBegginer: string[];
}

export type IconName = keyof typeof icons;

export interface ProjectSkill {
  iconName: IconName;
  label: string;
}

export interface ProjectProps {
  skills: ProjectSkill[];
  image: string;
  title: string;
  body: string;
  githubUrl: string;
  webUrl: string;
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Lautaro Fernández Szutner',
    title: 'Full Stack Developer',
    description: 'Me encanta crear aplicaciones web escalables y eficientes.',
    profileImage: './profileImage.png',
    socialLinks: {
      github: 'https://github.com/Lau-szutner',
      linkedin:
        'https://www.linkedin.com/in/lautaro-fernandez-szutner-203639277/?original_referer=https%3A%2F%2Far%2Elinkedin%2Ecom%2Fpub%2Fdir%2FLautaro%2FFernandez%2Far-0-Argentina&originalSubdomain=ar',
      email: 'mailto:lautaroszutner@gmail.com',
      behance: 'https://www.behance.net/lautarofernand',
    },
  },

  skills: [
    'react',
    'javascript',
    'typescript',
    'nextjs',
    'nodejs',
    'sequelize',
    'html',
    'css',
    'tailwind',
    'express',
    'git',
    'Npm',
    'Figma',
    'MySql',
    'Api',
    'JWT',
  ],

  skillsBegginer: ['Vue', 'Laravel', 'php', 'Moongo'],
};

export const projects: ProjectProps[] = [
  {
    title: 'MoneyMind',
    body: 'Money Mind is a financial management app that lets you track income, expenses, budgets, and savings. Developed with Next.js and Express.js using Sequelize and MySQL, it follows a scalable MVC architecture and allows user authentication via JWT.',
    image: moneyMind,
    skills: [
      { iconName: 'react', label: 'React' },
      { iconName: 'javascript', label: 'Javascript' },
      { iconName: 'typescript', label: 'Typescript' },
      { iconName: 'nextjs', label: 'Nextjs' },
      { iconName: 'nodejs', label: 'NODEJS' },
      { iconName: 'git', label: 'GIT' },
      { iconName: 'express', label: 'EXPRESS' },
      { iconName: 'sequelize', label: 'SEQUELIZE' },
    ],
    webUrl: 'https://github.com/Lau-szutner/Money-Mind',
    githubUrl: 'https://github.com/Lau-szutner/Money-Mind',
  },
  {
    title: 'Clauty',
    image: clauty,
    body: 'Clauty is an e-learning platform developed as a university project. It leverages the Laravel framework to provide efficient educational management, focusing on a structured and intuitive learning experience.',
    skills: [
      { iconName: 'php', label: 'PHP' },
      { iconName: 'Laravel', label: 'Laravel' },
      { iconName: 'git', label: 'GIT' },
      { iconName: 'tailwind', label: 'TAILWIND' },
      { iconName: 'html', label: 'HTML' },
      { iconName: 'css', label: 'CSS' },
    ],
    webUrl: 'https://clauty.onrender.com/',
    githubUrl: 'https://github.com/Lau-szutner/Clauty',
  },
  {
    title: 'Cseg portfolio',
    image: csegPortfolio,
    body: 'This project is a portfolio website for Catalina Lara Segalini (CSEG), a talented video editor and photographer. The portfolio showcases her work, highlighting her skills in video editing and photography through a sleek and modern interface.',
    skills: [
      { iconName: 'react', label: 'REACT' },
      { iconName: 'typescript', label: 'TYPESCRIPT' },
      { iconName: 'nextjs', label: 'NEXTJS' },
      { iconName: 'tailwind', label: 'TAILWIND' },
      { iconName: 'html', label: 'HTML' },
      { iconName: 'css', label: 'CSS' },
      { iconName: 'javascript', label: 'JAVASCRIPT' },
    ],
    webUrl: 'https://cseg-portfolio.vercel.app/',
    githubUrl: 'https://github.com/Lau-szutner/Cseg-portofolio',
  },
  {
    title: 'Portfolio Alejandra Queiruga',
    image: alejandraQueiruga,
    body: 'A modern, responsive portfolio website for a criminal law attorney, built with React, Next.js, and TypeScript. Showcases legal expertise, services, and contact information.',
    skills: [
      { iconName: 'react', label: 'REACT' },
      { iconName: 'typescript', label: 'TYPESCRIPT' },
      { iconName: 'nextjs', label: 'NEXTJS' },
      { iconName: 'tailwind', label: 'TAILWIND' },
      { iconName: 'html', label: 'HTML' },
      { iconName: 'css', label: 'CSS' },
      { iconName: 'javascript', label: 'JAVASCRIPT' },
    ],
    webUrl: 'https://alejandra-queiruga.vercel.app/',
    githubUrl: 'https://github.com/Lau-szutner/portfolio-alejandra-queiruga',
  },
  {
    title: 'Tic-Tac-Infinity',
    image: ticTacToe,
    body: 'Custom Tic Tac Toe game with two modes — classic and a no-draw infinite mode where ties are prevented by undoing the last move.',
    skills: [
      { iconName: 'javascript', label: 'JAVACRIPT' },
      { iconName: 'react', label: 'REACT' },
      { iconName: 'tailwind', label: 'TAILWIND' },
      { iconName: 'html', label: 'HTML' },
      { iconName: 'css', label: 'CSS' },
    ],
    webUrl: 'https://lau-szutner.github.io/Tic-Tac-Infinity/',
    githubUrl: 'https://github.com/Lau-szutner/Tic-Tac-Infinity/tree/main',
  },
  {
    title: 'Cripto Merch',
    image: criptoMerch,
    body: 'E-commerce website dedicated to selling cryptocurrency-themed merchandise. This project was created as a university assignment to practice Bootstrap, HTML, and CSS, while building a modern and responsive online store.',
    skills: [
      { iconName: 'html', label: 'HTML' },
      { iconName: 'css', label: 'CSS' },
      { iconName: 'Bootstrap', label: 'Bootstrap' },
    ],
    webUrl: 'https://lau-szutner.github.io/Cripto-Merch/',
    githubUrl: 'https://github.com/Lau-szutner/Cripto-Merch',
  },
  {
    title: 'Mr Robot Fan Page',
    image: mrRobot,
    body: 'Mr Robot Fan Page – One of my first web projects showcasing HTML, CSS, responsive design, and creative layout inspired by the TV series Mr Robot.  ',
    skills: [
      { iconName: 'html', label: 'HTML' },
      { iconName: 'css', label: 'CSS' },
      { iconName: 'javascript', label: 'JAVASCRIPT' },
    ],

    webUrl: 'https://lau-szutner.github.io/Mr-Robot-Web-Page/',
    githubUrl: 'https://github.com/Lau-szutner/Mr-Robot-Web-Page',
  },
  {
    title: 'To-do List Vue',
    image: todoListVue,
    body: 'This project is a To-Do List application developed using Vue.js. It enables users to add, edit, and delete tasks with seamless data persistence via Local Storage.',
    skills: [
      { iconName: 'Vue', label: 'VUE' },
      { iconName: 'html', label: 'HTML' },
      { iconName: 'javascript', label: 'JAVASCRIPT' },
      { iconName: 'css', label: 'CSS' },
    ],
    webUrl: 'https://lau-szutner.github.io/Todo-list-vue/',
    githubUrl: 'https://github.com/Lau-szutner/Todo-list-vue',
  },
  {
    title: 'Praga',
    image: praga,
    body: 'Mr Robot Fan Page – One of my first web projects showcasing HTML, CSS, responsive design, and creative layout inspired by the TV series Mr Robot.  ',
    skills: [
      { iconName: 'html', label: 'HTML' },
      { iconName: 'css', label: 'CSS' },
      { iconName: 'javascript', label: 'JAVASCRIPT' },
    ],
    webUrl: 'https://lau-szutner.github.io/Praga-React/',
    githubUrl: 'https://github.com/Lau-szutner/Praga-React',
  },
  {
    title: 'E-comerce Razer',
    image: razer,
    body: 'Este proyecto es un sitio web de comercio electrónico desarrollado en Bootstrap para la venta de productos de la marca Razer. Especificamente diseñado para ser utilizado como un proyecto universitario para https://davinci.edu.ar/',
    skills: [
      { iconName: 'html', label: 'HTML' },
      { iconName: 'css', label: 'CSS' },
    ],
    webUrl: 'https://lau-szutner.github.io/Razer-Bootsrap/',
    githubUrl: 'https://github.com/Lau-szutner/Razer-Bootsrap',
  },
];
