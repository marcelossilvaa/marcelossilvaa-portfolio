import type { Metadata } from 'next';
import V2Experience from './V2Experience';

export const metadata: Metadata = {
  title: 'Marcelo S Silva · Portfólio 2026',
  description:
    'Portfólio 2026 de Marcelo S Silva: arquitetura front-end, e-commerce Shopify e Next.js, experimentação de CRO e automação com IA.',
  openGraph: {
    title: 'Marcelo S Silva · Portfólio 2026',
    description:
      'Front-end, e-commerce e CRO em uma experiência interativa: projetos, marcas, toolkit e agenda.',
    type: 'website',
  },
  alternates: {
    languages: {
      'pt-BR': '/v2',
      en: '/v2/us',
    },
  },
};

export default function V2Page() {
  return <V2Experience locale="pt" />;
}
