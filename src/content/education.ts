import UFS from '../../public/assets/ufs.png';
import UniAmerica from '../../public/assets/uniamerica.png';
import Alura from '../../public/assets/alura.png';
import XPe from '../../public/assets/xpe.png';
import DIO from '../../public/assets/dio.png';
import Cepedi from '../../public/assets/cepedi.png';
import type { HistoryItem } from '@/types/portfolio';
import type { Locale } from '@/i18n/LocaleProvider';

export function getEducationData(locale: Locale): HistoryItem[] {
  if (locale === 'en') {
    return [
      {
        id: 1,
        image: UFS,
        title: 'Petroleum Engineering',
        date: '2019 - 2022 | paused',
        institution: 'UFS',
      },
      {
        id: 2,
        image: UniAmerica,
        title: 'Computer Science',
        date: '2021 - 2025',
        institution: 'UniAmerica',
      },
      {
        id: 3,
        image: Alura,
        title: 'Front-End Program',
        date: '2022 - 2023',
        institution: 'Alura',
      },
      {
        id: 4,
        image: XPe,
        title: 'React Bootcamp',
        date: '2023',
        institution: 'XPe',
      },
      {
        id: 5,
        image: DIO,
        title: 'TypeScript Bootcamp',
        date: '2024',
        institution: 'DIO',
      },
      {
        id: 6,
        image: Cepedi,
        title: 'Software Engineering Residency',
        date: '2024 - 2025',
        institution: 'Cepedi',
      },
    ];
  }

  return [
    {
      id: 1,
      image: UFS,
      title: 'Engenharia de Petróleo',
      date: '2019 - 2022 | trancado',
      institution: 'UFS',
    },
    {
      id: 2,
      image: UniAmerica,
      title: 'Ciência da Computação',
      date: '2021 - 2025',
      institution: 'UniAmerica',
    },
    {
      id: 3,
      image: Alura,
      title: 'Formação Front-End',
      date: '2022 - 2023',
      institution: 'Alura',
    },
    {
      id: 4,
      image: XPe,
      title: 'Bootcamp React',
      date: '2023',
      institution: 'XPe',
    },
    {
      id: 5,
      image: DIO,
      title: 'Bootcamp TypeScript',
      date: '2024',
      institution: 'DIO',
    },
    {
      id: 6,
      image: Cepedi,
      title: 'Residência em Software',
      date: '2024 - 2025',
      institution: 'Cepedi',
    },
  ];
}
