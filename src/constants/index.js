import {
  flutter,
  backend,
  prototyping,
  java,
  mongodb,
  kotlin,
  mysql,
  git,
  typescript,
  jenkins,
  docker,
  firebase,
  medicore,
  iridescece,
  gdsc,
  smollan,
  kharcha,
  soulfit,
  jibber,
  web,
  go,
  spring,
  javascript,
  tailwind,
  react,
  nodejs
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Mobile App Developer',
    icon: prototyping,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full Stack Web Developer',
    icon: web,
  },
  {
    title: 'Flutter Developer',
    icon: flutter,
  },
];

const technologies = [
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Typescript',
    icon: typescript,
  },
  {
    name: 'Javascript',
    icon: javascript,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'ReactJS',
    icon: react,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'GoLang',
    icon: go,
  },
  {
    name: 'Spring Boot',
    icon: spring,
  },
  {
    name: 'Mongo DB',
    icon: mongodb,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Jenkins',
    icon: jenkins,
  },
  {
    name: 'Git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Android Developer',
    company_name: 'Google Developer Student Club',
    icon: gdsc,
    iconBg: '#333333',
    date: 'June 2022 - May 2023',
  },
  {
    title: 'Management Head',
    company_name: 'Iridescence',
    icon: iridescece,
    iconBg: '#333333',
    date: 'May 2022 - Present',
  },
  {
    title: 'Flutter Developer',
    company_name: 'Smollan',
    icon: smollan,
    iconBg: '#333333',
    date: 'May 2024 - June 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'SoulFit',
    description:
      'A holistic fitness app focusing on both physical and mental well-being, built with Flutter for seamless user experience across platforms, providing tools for a balanced lifestyle.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
    ],
    image: soulfit,
    repo: 'https://github.com/2504pratik/soulfit_flutter',
    demo: 'https://github.com/2504pratik/soulfit_flutter',
  },
  {
    id: 'project-2',
    name: 'Kharcha',
    description: 'A smart expense tracker with clean UI and intuitive UX, built with React and Go, providing a seamless experience for managing personal finances.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'go',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: kharcha,
    repo: 'https://github.com/2504pratik/kharcha-react-go',
    demo: 'https://kharcha-react-go.vercel.app',
  },
  {
    id: 'project-3',
    name: 'MediCore',
    description: 'Empowering seamless healthcare with a microservices-driven platform connecting doctors, patients, and medical stores for efficient medical data management and prescription handling.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'spring boot',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: medicore,
    repo: 'https://github.com/2504pratik/MediCore',
    demo: 'https://github.com/2504pratik/MediCore',
  },
  {
    id: 'project-4',
    name: 'Jibber',
    description: `A UI focused chat-app built with Flutter and Firebase, providing a seamless chatting experience with real-time messaging and user-friendly interface.`,
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
    ],
    image: jibber,
    repo: 'https://github.com/2504pratik/jibber',
    demo: 'https://github.com/2504pratik/jibber',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
