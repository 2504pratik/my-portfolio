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
  figma,
  docker,
  firebase,
  medicore,
  iridescece,
  gdsc,
  smollan,
  kharcha,
  soulfit,
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
    title: 'Spring Boot Developer',
    icon: backend,
  },
  {
    title: 'Java Developer',
    icon: java,
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
    name: 'Spring Boot',
    icon: backend,
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
    name: 'Typescript',
    icon: typescript,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'Jenkins',
    icon: jenkins,
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
    name: 'Kharcha',
    description: 'A smart expense tracker app that syncs UPI transactions and lets users manage their finances seamlessly with CRUD features.',
    tags: [
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
      {
        name: 'sqlite',
        color: 'green-text-gradient',
      },
      {
        name: 'xml',
        color: 'pink-text-gradient',
      },
    ],
    image: kharcha,
    repo: 'https://github.com/2504pratik/kharcha',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
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
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'MediCore',
    description: 'Empowering seamless healthcare with a microservices-driven platform connecting doctors, patients, and medical stores for efficient medical data management and prescription handling.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: medicore,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
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
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
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
