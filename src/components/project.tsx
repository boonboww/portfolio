'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = { project: TProject; index: number };

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { title, description, technologies, links } = project;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      className="flex"
    >
      <Link
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col justify-between rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md w-full h-full"
      >
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-3 py-1 text-sm bg-muted/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};
