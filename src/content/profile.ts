import type { AboutProfile } from '@/types/portfolio';
import type { Locale } from '@/i18n/LocaleProvider';

export function getProfileData(locale: Locale): AboutProfile {
  if (locale === 'en') {
    return {
      title: 'Marcelo Santana Silva',
      subtitle: 'Front-End Specialist | Ecommerce & CRO',
      description: [
        "Nice to meet you, I'm Marcelo, 26 years old, from Vitória da Conquista (Bahia), passionate about technology, AI, and automation.",
        'I currently work as a Mid-level Front-End Developer at Webjump, delivering scalable solutions for major brands such as Azul Linhas Aéreas and Nespresso.',
        "I hold a Bachelor's degree in Computer Science. My academic journey started in Petroleum Engineering at UFS, but in 2021 I transitioned to tech and focused my career on high-performance front-end.",
        'Today I specialize in ecommerce experiences and CRO, combining Shopify/Next.js development, Node.js/PostgreSQL integrations, and A/B testing to improve conversion.',
      ],
      signature: 'Marcelo Santana Silva',
    };
  }

  return {
    title: 'Marcelo Santana Silva',
    subtitle: 'Especialista Front-End | Ecommerce & CRO',
    description: [
      'Prazer, eu sou o Marcelo, tenho 26 anos, sou de Vitória da Conquista (Bahia) e sou apaixonado por tecnologia, IA e automação.',
      'Atualmente atuo como Desenvolvedor Front-End Pleno na Webjump, entregando soluções escaláveis para grandes marcas como Azul Linhas Aéreas e Nespresso.',
      'Sou formado em Ciência da Computação. Minha trajetória acadêmica começou em Engenharia de Petróleo na UFS, mas em 2021 migrei para tecnologia e direcionei minha carreira para frontend de alta performance.',
      'Hoje sou especializado em experiências de ecommerce e CRO, unindo desenvolvimento com Shopify/Next.js, integrações com Node.js/PostgreSQL e testes A/B para ganho de conversão.',
    ],
    signature: 'Marcelo Santana Silva',
  };
}
