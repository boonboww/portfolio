import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Anh Quan | Portfolio',
  description:
    "Hello, I'm Anh Quan. I am a full-stack developer from Vietnam. I enjoy building sites and apps.",
  keywords: [
    'Anh Quan',
    'Full-stack developer',
    'Vietnam',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Web development',
    'Front-end',
    'UI/UX',
    'Responsive design',
    'JavaScript',
    'HTML',
    'CSS',
    'Portfolio',
    'Projects',
    'Website',
    'Web applications',
    'Developer',
    'Code',
    'Programming',
    'Tech enthusiast',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
