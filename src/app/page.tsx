import type { Metadata } from 'next';
import { Anton, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import V2Experience from './v2/V2Experience';
import './v2/v2.css';

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
  title: 'Marcelo S Silva · Full stack, SaaS e CRO',
  description:
    'Dev full stack com visão analítica, estratégica e técnica: SaaS ponta a ponta, e-commerce de alto tráfego e sistemas de CRO.',
  openGraph: {
    title: 'Marcelo S Silva · Full stack, SaaS e CRO',
    description:
      'Portfólio 2026: produtos full stack, commerce e experimentação de conversão.',
    type: 'website',
  },
  alternates: {
    languages: {
      'pt-BR': '/',
      en: '/us',
    },
  },
};

export default function Home() {
  return (
    <div className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}>
      <V2Experience locale="pt" />
    </div>
  );
}
