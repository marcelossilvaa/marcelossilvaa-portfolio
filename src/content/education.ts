import UfsLogo from '../../public/assets/logo_ufs.png';
import Cepedi from '../../public/assets/cepedi.png';
import AluraOracle from '../../public/assets/aluraoracle.png';
import type { HistoryItem } from '@/types/portfolio';
import type { Locale } from '@/i18n/LocaleProvider';

/** Formações principais (cards). */
export function getEducationData(locale: Locale): HistoryItem[] {
  if (locale === 'en') {
    return [
      {
        id: 2,
        image: UfsLogo,
        title: "Bachelor's Degree in Computer Science",
        date: 'Started at UFS · completed in 2025',
        institution: 'Universidade Federal de Sergipe',
        summary: [
          'Computer Science degree started at UFS, with a solid foundation in algorithms, data structures and software engineering for scalable products.',
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
      image: UfsLogo,
      title: 'Bacharelado em Ciência da Computação',
      date: 'Início na UFS · concluído em 2025',
      institution: 'Universidade Federal de Sergipe',
      summary: [
        'Bacharelado iniciado na UFS, com base sólida em algoritmos, estruturas de dados e engenharia de software para produtos escaláveis.',
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

/** Certificações em faixa secundária (menos evidência que os cards). */
export function getEducationCredentials(locale: Locale): string[] {
  if (locale === 'en') {
    return ['Adobe Target', 'GitHub Copilot'];
  }

  return ['Adobe Target', 'GitHub Copilot'];
}
