import type { Metadata } from 'next';
import AboutPage from './AboutPage';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Austin Luk — Computer Science student at UBC, software developer in Vancouver. Interested in full-stack development, AI/ML, and building products that matter.',
};

export default function Page() {
  return <AboutPage />;
}
