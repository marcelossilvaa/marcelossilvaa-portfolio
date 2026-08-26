import type { Metadata } from 'next';
import V2Experience from '../V2Experience';

export const metadata: Metadata = {
  title: 'Marcelo S Silva · Portfolio 2026',
  description:
    'Marcelo S Silva 2026 portfolio: front-end architecture, Shopify and Next.js e-commerce, CRO experimentation and AI-assisted automation.',
  openGraph: {
    title: 'Marcelo S Silva · Portfolio 2026',
    description:
      'Front-end, e-commerce and CRO in one interactive experience: projects, brands, toolkit and availability.',
    type: 'website',
  },
  alternates: {
    languages: {
      'pt-BR': '/v2',
      en: '/v2/us',
    },
  },
};

export default function V2EnglishPage() {
  return <V2Experience locale="en" />;
}
