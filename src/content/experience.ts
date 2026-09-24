import inkPen from '../../public/assets/inkPen.jpg';
import Vasta from '../../public/assets/vasta.png';
import Webjump from '../../public/assets/logo_webjump_mark.png';
import type { HistoryItem } from '@/types/portfolio';
import type { Locale } from '@/i18n/LocaleProvider';

export function getProfessionalData(locale: Locale): HistoryItem[] {
  if (locale === 'en') {
    return [
      {
        id: 1,
        image: inkPen,
        title: 'Front-End Developer',
        date: '2023 - 2024',
        institution: 'inkPen',
        companyLink: 'https://www.linkedin.com/company/inkpenn/',
        summary: [
          'Led MVP delivery for educational solutions focused on attendance automation.',
          'Developed web and mobile front-end architecture with strong product collaboration.',
        ],
      },
      {
        id: 2,
        image: Vasta,
        title: 'Full-Stack Developer & Technical CRO',
        date: '2024 - 2025',
        institution: 'Vasta',
        companyLink: 'https://www.linkedin.com/company/vasta-me/posts/?feedView=all',
        summary: [
          'Worked on Shopify (Liquid) and mobile apps with React, Ionic and Capacitor.',
          'Built headless e-commerce features using a modern front-end stack.',
          'Applied technical CRO on storefronts: performance, funnel clarity and conversion-oriented UI changes.',
        ],
      },
      {
        id: 3,
        image: Webjump,
        title: 'CRO Specialist & Front-End',
        date: '2025 - present',
        institution: 'Webjump',
        companyLink: 'https://www.linkedin.com/company/webjump/posts/?feedView=all',
        summary: [
          'Allocated to enterprise e-commerce accounts such as Azul, Nespresso and 333Obras.',
          'Implemented A/B tests and personalization with JavaScript/CSS and Adobe Target/Analytics to increase conversion.',
          'Automated operational routines and reporting inputs to accelerate decision cycles across product and CRO squads.',
        ],
      },
    ];
  }

  return [
    {
      id: 1,
      image: inkPen,
      title: 'Dev Front-End',
      date: '2023 - 2024',
      institution: 'inkPen',
      companyLink: 'https://www.linkedin.com/company/inkpenn/',
      summary: [
        'Liderança técnica na entrega de MVP para soluções educacionais com foco em automação de presença.',
        'Desenvolvimento de arquitetura front-end web e mobile com visão de produto.',
      ],
    },
    {
      id: 2,
      image: Vasta,
      title: 'Desenvolvedor Full Stack & CRO técnico',
      date: '2024 - 2025',
      institution: 'Vasta',
      companyLink: 'https://www.linkedin.com/company/vasta-me/posts/?feedView=all',
      summary: [
        'Atuação em projetos Shopify (Liquid) e apps mobile com React, Ionic e Capacitor.',
        'Implementação de soluções headless para e-commerce com stack moderna.',
        'CRO técnico em storefronts: performance, clareza de funil e mudanças de UI orientadas a conversão.',
      ],
    },
    {
      id: 3,
      image: Webjump,
      title: 'Especialista CRO & Front-End',
      date: '2025 - até o momento',
      institution: 'Webjump',
      companyLink: 'https://www.linkedin.com/company/webjump/posts/?feedView=all',
      summary: [
        'Atuação em e-commerces de grande porte como Azul, Nespresso e 333Obras.',
        'Implementação de testes A/B e personalizações com JavaScript/CSS e Adobe Target/Analytics para aumento de conversão.',
        'Automação de rotinas operacionais e insumos de reporte para acelerar ciclos de decisão entre produto e CRO.',
      ],
    },
  ];
}
