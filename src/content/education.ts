import UniAmerica from '../../public/assets/uniamerica.png';
import Cepedi from '../../public/assets/cepedi.png';
import AluraOracle from '../../public/assets/aluraoracle.png';
import type { HistoryItem } from '@/types/portfolio';
import type { Locale } from '@/i18n/LocaleProvider';

export function getEducationData(locale: Locale): HistoryItem[] {
  if (locale === 'en') {
    return [
      {
        id: 2,
        image: UniAmerica,
        title: "Bachelor's Degree in Computer Science",
        date: '2021 - 2025 | completed',
        institution: 'UniAmerica',
        summary: [
          'Solid foundation in software engineering, algorithms, data structures, and architecture for scalable front-end products.',
        ],
      },
      {
        id: 3,
        image: AluraOracle,
        title: 'Oracle Next Education + Alura | Intensive Front-End Track',
        date: '2022 - 2023',
        institution: 'Oracle + Alura',
        summary: ['Intensive track focused on robust front-end foundations and hands-on project delivery.'],
      },
      {
        id: 6,
        image: Cepedi,
        title: 'Software Engineering Residency',
        date: '2024 - 2025',
        institution: 'Cepedi',
        summary: [
          'Business-oriented residency focused on front-end development, product vision, and delivery of solutions connected to real business goals.',
        ],
      },
    ];
  }

  return [
    {
      id: 2,
      image: UniAmerica,
      title: 'Bacharelado em Ciência da Computação',
      date: '2021 - 2025 | concluído',
      institution: 'UniAmerica',
      summary: [
        'Base sólida em engenharia de software, algoritmos, estruturas de dados e arquitetura para produtos front-end escaláveis.',
      ],
    },
    {
      id: 3,
      image: AluraOracle,
      title: 'Oracle Next Education + Alura | Formação Front-End Intensiva',
      date: '2022 - 2023',
      institution: 'Oracle + Alura',
      summary: ['Formação intensiva com foco em base front-end robusta e entrega prática de projetos.'],
    },
    {
      id: 6,
      image: Cepedi,
      title: 'Residência em Software',
      date: '2024 - 2025',
      institution: 'Cepedi',
      summary: [
        'Residência voltada a negócios com foco em desenvolvimento front-end, visão de produto e entrega alinhada a objetivos reais da empresa.',
      ],
    },
  ];
}
