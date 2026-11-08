import type { Metadata } from 'next';
import type { Locale } from '@/i18n/LocaleProvider';

export const SITE_URL = 'https://marcelossilvaa-portfolio.vercel.app';
export const TAB_TITLE = 'MS - CRO, Experimentation & Growth Engineering';

const OG_IMAGE = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'Marcelo Santana Silva · CRO & Experimentation Developer',
};

const copy = {
  pt: {
    title: 'Marcelo Santana Silva · CRO, Experimentation & Growth Engineering',
    description:
      'Palpite fica no slide. O teste sobe. Variantes, segmentação e a leitura no Adobe Analytics e no GA4, em SaaS e Shopify.',
    ogDescription: 'Palpite fica no slide. O teste sobe.',
    jobTitle: 'CRO & Experimentation Developer',
  },
  en: {
    title: 'Marcelo Santana Silva · CRO, Experimentation & Growth Engineering',
    description:
      'The hunch stays in the slide. The test ships. Variants, targeting and the read in Adobe Analytics and GA4, across SaaS and Shopify.',
    ogDescription: 'The hunch stays in the slide. The test ships.',
    jobTitle: 'CRO & Experimentation Developer',
  },
};

export function getPageMetadata(locale: Locale): Metadata {
  const c = copy[locale];
  return {
    metadataBase: new URL(SITE_URL),
    title: TAB_TITLE,
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
      'Growth Engineering',
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
