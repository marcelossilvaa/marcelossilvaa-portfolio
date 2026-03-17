import type { AboutProfile } from '@/types/portfolio';
import type { Locale } from '@/i18n/LocaleProvider';

export function getProfileData(locale: Locale): AboutProfile {
  if (locale === 'en') {
    return {
      title: 'Marcelo Santana Silva',
      subtitle: 'Front-End Specialist | Ecommerce & CRO',
      description: [
        "Nice to meet you, I'm Marcelo, 26 years old, from Vitória da Conquista (Bahia), passionate about technology, AI, and automation.",
        'I design front-end architecture and conversion-focused experiences for enterprise ecommerce projects, including brands such as Azul and Nespresso.',
        "I hold a Bachelor's degree in Computer Science and combine engineering fundamentals with product vision to prioritize initiatives that move business metrics.",
        'My workflow combines Shopify/Next.js implementation, CRO experimentation, data interpretation, and AI-assisted delivery with tools like Cursor and Claude Code.',
      ],
      signature: 'Marcelo Santana Silva',
    };
  }

  return {
    title: 'Marcelo Santana Silva',
    subtitle: 'Especialista Front-End | Ecommerce & CRO',
    description: [
      'Prazer, eu sou o Marcelo, tenho 26 anos, sou de Vitória da Conquista (Bahia) e sou apaixonado por tecnologia, IA e automação.',
      'Atuo na construção de arquiteturas front-end e experiências orientadas a conversão para e-commerces de grande porte, com entregas para marcas como Azul e Nespresso.',
      'Sou bacharel em Ciência da Computação e uno base sólida de engenharia com visão de produto para priorizar soluções que impactam métricas de negócio.',
      'Meu processo combina implementação em Shopify/Next.js, experimentação de CRO, leitura de dados e entrega assistida por IA com ferramentas como Cursor e Claude Code.',
    ],
    signature: 'Marcelo Santana Silva',
  };
}
