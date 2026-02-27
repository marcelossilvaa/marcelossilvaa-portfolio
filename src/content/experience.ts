import inkPen from '../../public/assets/inkPen.jpg';
import Vasta from '../../public/assets/vasta.png';
import Webjump from '../../public/assets/logo_webjump.webp';
import type { HistoryItem } from '@/types/portfolio';
import type { Locale } from '@/i18n/LocaleProvider';

export function getProfessionalData(locale: Locale): HistoryItem[] {
  if (locale === 'en') {
    return [
      {
        id: 1,
        image: inkPen,
        title: 'Tech Lead & Front-End Developer',
        date: '2023 - 2024',
        institution: 'inkPen',
        summary: [
          'Led MVP delivery for educational solutions focused on attendance automation.',
          'Developed web and mobile front-end architecture with strong product collaboration.',
        ],
      },
      {
        id: 2,
        image: Vasta,
        title: 'Front-End Developer',
        date: '2024 - 2025',
        institution: 'Vasta',
        summary: [
          'Worked on Shopify (Liquid) and mobile apps with React, Ionic and Capacitor.',
          'Built headless e-commerce features using modern front-end stack.',
        ],
      },
      {
        id: 3,
        image: Webjump,
        title: 'Mid-level Front-End Developer',
        date: '2025 - present',
        institution: 'Webjump',
        summary: [
          'Allocated to enterprise e-commerce accounts such as Azul, Nespresso and 333Obras.',
          'Implemented A/B tests and personalization with JavaScript/CSS and Adobe Target/Analytics.',
        ],
      },
    ];
  }

  return [
    {
      id: 1,
      image: inkPen,
      title: 'Tech Lead & Dev Front-End',
      date: '2023 - 2024',
      institution: 'inkPen',
      summary: [
        'Liderança técnica na entrega de MVP para soluções educacionais com foco em automação de presença.',
        'Desenvolvimento de arquitetura front-end web e mobile com visão de produto.',
      ],
    },
    {
      id: 2,
      image: Vasta,
      title: 'Desenvolvedor Front-End',
      date: '2024 - 2025',
      institution: 'Vasta',
      summary: [
        'Atuação em projetos Shopify (Liquid) e apps mobile com React, Ionic e Capacitor.',
        'Implementação de soluções headless para e-commerce com stack moderna.',
      ],
    },
    {
      id: 3,
      image: Webjump,
      title: 'Desenvolvedor Front-End Pleno',
      date: '2025 - até o momento',
      institution: 'Webjump',
      summary: [
        'Atuação em e-commerces de grande porte como Azul, Nespresso e 333Obras.',
        'Implementação de testes A/B e personalizações com JavaScript/CSS e Adobe Target/Analytics.',
      ],
    },
  ];
}
