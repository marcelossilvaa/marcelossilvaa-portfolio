import type { AboutProfile } from '@/types/portfolio';
import type { Locale } from '@/i18n/LocaleProvider';

export function getProfileData(locale: Locale): AboutProfile {
  if (locale === 'en') {
    return {
      title: 'Marcelo Santana Silva',
      subtitle: 'Front-End Developer',
      description: [
        'I am passionate about technology, innovation, and entrepreneurship, focused on digital experiences that combine performance, clarity, and visual impact.',
        'I started in Petroleum Engineering at UFS and moved to software development in 2021, where I now focus on modern front-end engineering.',
      ],
      signature: 'Marcelo Santana Silva',
    };
  }

  return {
    title: 'Marcelo Santana Silva',
    subtitle: 'Desenvolvedor Front-End',
    description: [
      'Fascinado por tecnologia, inovação e empreendedorismo, com foco em experiências digitais que unem performance, clareza e impacto visual.',
      'Sou ex-graduando em Engenharia de Petróleo pela UFS e migrei em 2021 para desenvolvimento de software, onde hoje concentro minha atuação em frontend moderno.',
    ],
    signature: 'Marcelo Santana Silva',
  };
}
