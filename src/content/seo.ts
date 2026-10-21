import type { Metadata } from 'next';
import type { Locale } from '@/i18n/LocaleProvider';

export const SITE_URL = 'https://marcelossilvaa-portfolio.vercel.app';

const OG_IMAGE = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Marcelo Santana Silva · CRO & Experimentation Developer',
};

const copy = {
  pt: {
    title: 'Marcelo Santana Silva · CRO & Experimentation Developer',
    description:
      'Desenvolvedor de CRO e experimentação: testes A/B e personalização com Adobe Target, Adobe Analytics e GA4, com base full stack (React, Next.js, Shopify).',
    ogDescription: 'Testes A/B e personalização que viram receita. Portfólio de CRO, commerce e full stack.',
    jobTitle: 'CRO & Experimentation Developer',
  },
  en: {
    title: 'Marcelo Santana Silva · CRO & Experimentation Developer',
    description:
      'CRO and experimentation developer: A/B testing and personalization with Adobe Target, Adobe Analytics and GA4, with a full-stack background (React, Next.js, Shopify).',
    ogDescription: 'A/B tests and personalization that turn into revenue. CRO, commerce and full-stack portfolio.',
    jobTitle: 'CRO & Experimentation Developer',
  },
};

export function getPageMetadata(locale: Locale): Metadata {
  const c = copy[locale];
  return {
    metadataBase: new URL(SITE_URL),
    title: c.title,
    description: c.description,
    openGraph: {
      title: c.title,
      description: c.ogDescription,
      type: 'website',
      url: locale === 'en' ? '/us' : '/',
      locale: locale === 'en' ? 'en_US' : 'pt_BR',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.ogDescription,
      images: [OG_IMAGE.url],
    },
    alternates: {
      canonical: locale === 'en' ? '/us' : '/',
      languages: {
        'pt-BR': '/',
        en: '/us',
      },
    },
  };
}

/** Schema.org Person: ajuda buscadores e assistentes de IA a descrever quem você é. */
export function getPersonJsonLd(locale: Locale) {
  const c = copy[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Marcelo Santana Silva',
    alternateName: 'Marcelo S Silva',
    url: SITE_URL,
    image: `${SITE_URL}/og.png`,
    jobTitle: c.jobTitle,
    description: c.description,
    worksFor: { '@type': 'Organization', name: 'AI/R Webjump', url: 'https://webjump.com.br' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidade Federal de Sergipe' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vitória da Conquista',
      addressRegion: 'BA',
      addressCountry: 'BR',
    },
    knowsAbout: [
      'Conversion Rate Optimization',
      'A/B Testing',
      'Personalization',
      'Adobe Target',
      'Adobe Analytics',
      'Google Analytics 4',
      'Optimizely',
      'React',
      'Next.js',
      'TypeScript',
      'Shopify',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Adobe Certified Professional – Adobe Target Business Practitioner',
        recognizedBy: { '@type': 'Organization', name: 'Adobe' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'GitHub Copilot',
        recognizedBy: { '@type': 'Organization', name: 'Microsoft' },
      },
    ],
    sameAs: ['https://www.linkedin.com/in/marcelossilva1/', 'https://github.com/marcelossilvaa'],
  };
}
