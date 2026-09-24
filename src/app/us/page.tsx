import type { Metadata } from 'next';
import { Anton, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import V2Experience from '../v2/V2Experience';
import '../v2/v2.css';

const displayFont = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-v2-display',
});

const sansFont = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-v2-sans',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-v2-mono',
});

export const metadata: Metadata = {
  title: 'Marcelo S Silva · Full stack, SaaS & CRO',
  description:
    'Full-stack developer with analytical, strategic and technical vision: end-to-end SaaS, high-traffic commerce and CRO systems.',
  openGraph: {
    title: 'Marcelo S Silva · Full stack, SaaS & CRO',
    description:
      '2026 portfolio: full-stack products, commerce and conversion experimentation.',
    type: 'website',
  },
  alternates: {
    languages: {
      'pt-BR': '/',
      en: '/us',
    },
  },
};

export default function EnglishHome() {
  return (
    <div className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}>
      <V2Experience locale="en" />
    </div>
  );
}
