'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          Hi, I’m <strong>Quan Tran Anh</strong> — a final-year Computer Science
          student with a strong passion for software development and
          problem-solving. I enjoy learning new technologies and turning ideas
          into real, user-focused products.
        </p>
        <p className="mb-4">
          My main focus is on modern web development using{' '}
          <strong>Next.js</strong>, <strong>TypeScript</strong>,{' '}
          <strong>Tailwind CSS</strong>, and <strong>Express.js</strong>. I also
          have growing interest in <strong>AI</strong> and{' '}
          <strong>machine learning</strong>, and I’m constantly improving my
          skills through hands-on practice and collaboration.
        </p>
        <p>
          I’m a curious, self-motivated learner who values teamwork, creativity,
          and continuous growth. My goal is to become a well-rounded developer
          who builds impactful and reliable applications.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
