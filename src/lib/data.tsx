import { Icons } from '@/components/icons';

export const links = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Contact', hash: '#contact' },
] as const;

export const projectsData = [
  {
    title: 'GoPark',
    description:
      'A complete parking management platform including web frontend and backend API. Provides vehicle registration, parking lot management, and online booking features.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Express.js',
      'MongoDB',
      'JWT Auth',
    ],
    links: {
      preview: 'https://gopark.vercel.app',
      github: 'https://github.com/boonboww/GoPark-FE',
      githubApi: 'https://api.github.com/repos/boonboww/GoPark-FE',
      backend: 'https://github.com/CriskunVN/GoPark-BE',
    },
  },
  {
    title: 'Docs Clone',
    description:
      'A Google Docs clone built using modern web technologies, supporting real-time collaborative editing and document sharing.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Clerk', 'Convex'],
    links: {
      github: 'https://github.com/boonboww/docs_clone',
      githubApi: 'https://api.github.com/repos/boonboww/docs_clone',
    },
  },
  {
    title: 'Gym Management System',
    description:
      'A  web application for managing gyms, including member registration, workout tracking, and subscription management.',
    technologies: ['React', 'Tailwind'],
    links: {
      github: 'https://github.com/boonboww/gym',
      githubApi: 'https://api.github.com/repos/boonboww/gym',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Artificial Intelligence Trainee',
    company: 'Samsung Innovation Campus',
    description:
      'Participated in the Samsung Innovation Campus program focusing on Artificial Intelligence, covering Python programming, data preprocessing, machine learning, and deep learning fundamentals through hands-on projects and teamwork.',
    period: 'Apr 2025 – Aug 2025',
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'Pandas',
      'NumPy',
      'Scikit-learn',
    ],
  },
  {
    title: 'Software Development Intern',
    company: 'Samsung Vietnam R&D Center',
    description:
      'Worked as a software development intern focusing on C++ and Java programming. Gained hands-on experience in building software modules, improving internal tools, and studying core algorithms and data structures applied in development.',
    period: 'Aug 2025 – Sep 2025',
    technologies: ['C++', 'Java', 'Algorithms', 'Data Structures', 'Git'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
