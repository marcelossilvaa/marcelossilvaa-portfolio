import type { Locale } from '@/i18n/LocaleProvider';

type TranslationSchema = {
  sections: {
    about: string;
    skills: string;
    education: string;
    professional: string;
    process: string;
    projects: string;
    contact: string;
  };
  header: {
    openMenu: string;
    closeMenu: string;
  };
  banner: {
    hero: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    cta: string;
    developedBy: string;
  };
  project: {
    demo: string;
    all: string;
    noResults: string;
    challenge: string;
    strategy: string;
    impact: string;
    featured: string;
  };
  skills: {
    close: string;
  };
  language: {
    label: string;
    short: string;
  };
  theme: {
    loading: string;
    light: string;
    dark: string;
  };
  process: {
    introTitle: string;
    introDescription: string;
    experimentationTitle: string;
    experimentationDescription: string;
    automationTitle: string;
    automationDescription: string;
    architectureTitle: string;
    architectureDescription: string;
  };
};

export const translations: Record<Locale, TranslationSchema> = {
  pt: {
    sections: {
      about: 'Sobre mim',
      skills: 'Skills',
      education: 'Formação e especializações',
      professional: 'Experiência profissional',
      process: 'Como eu trabalho',
      projects: 'Projetos',
      contact: 'Contato',
    },
    header: {
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },
    banner: {
      hero: 'Desenvolvimento Front-End para e-commerces com foco em performance e conversão',
      subtitle:
        'Projeto e implemento soluções escaláveis com Next.js, Shopify, CMS headless e automação para transformar experiência digital em resultado de negócio.',
      ctaPrimary: 'Falar no WhatsApp',
      ctaSecondary: 'Ver estudos de caso',
    },
    footer: {
      cta: 'Entre em contato, estou sempre disponível para novos projetos.',
      developedBy: 'Desenvolvido por Marcelo S Silva',
    },
    project: {
      demo: 'Ver preview',
      all: 'Todas',
      noResults: 'Nenhum projeto encontrado para esse filtro.',
      challenge: 'Desafio',
      strategy: 'Estratégia',
      impact: 'Impacto',
      featured: 'Caso em destaque',
    },
    skills: {
      close: 'Fechar',
    },
    language: {
      label: 'Mudar idioma para inglês',
      short: 'EN',
    },
    theme: {
      loading: 'Carregando tema',
      light: 'Tema claro',
      dark: 'Tema escuro',
    },
    process: {
      introTitle: 'Diagnóstico técnico e de negócio',
      introDescription:
        'Mapeio jornada, performance e pontos de atrito para definir um plano de ação com prioridade clara.',
      experimentationTitle: 'Implementação e experimentação',
      experimentationDescription:
        'Entrego melhorias no front-end e valido hipóteses com testes para evoluir conversão com segurança.',
      automationTitle: 'Automação com n8n',
      automationDescription:
        'Automatizo coleta e organização de dados para reduzir trabalho manual e acelerar decisões.',
      architectureTitle: 'Evolução contínua com IA',
      architectureDescription:
        'Uso Cursor e Claude Code para acelerar refactors, documentação e entregas mantendo qualidade técnica.',
    },
  },
  en: {
    sections: {
      about: 'About me',
      skills: 'Skills',
      education: 'Education and specializations',
      professional: 'Professional experience',
      process: 'How I work',
      projects: 'Projects',
      contact: 'Contact',
    },
    header: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    banner: {
      hero: 'Front-end development for e-commerce focused on performance and conversion',
      subtitle:
        'I design and implement scalable solutions with Next.js, Shopify, headless CMS, and automation to turn digital experience into business outcomes.',
      ctaPrimary: 'Chat on WhatsApp',
      ctaSecondary: 'See case studies',
    },
    footer: {
      cta: "Let's connect. I'm always open to new projects.",
      developedBy: 'Developed by Marcelo S Silva',
    },
    project: {
      demo: 'See preview',
      all: 'All',
      noResults: 'No projects found for this filter.',
      challenge: 'Challenge',
      strategy: 'Strategy',
      impact: 'Impact',
      featured: 'Featured case',
    },
    skills: {
      close: 'Close',
    },
    language: {
      label: 'Switch language to Portuguese',
      short: 'PT',
    },
    theme: {
      loading: 'Loading theme',
      light: 'Light mode',
      dark: 'Dark mode',
    },
    process: {
      introTitle: 'Technical and business diagnosis',
      introDescription:
        'I map journey, performance, and friction points to define a clear prioritized action plan.',
      experimentationTitle: 'Implementation and experimentation',
      experimentationDescription:
        'I ship front-end improvements and validate hypotheses through experiments to improve conversion safely.',
      automationTitle: 'Automation with n8n',
      automationDescription:
        'I automate data collection and organization to reduce manual effort and speed up decisions.',
      architectureTitle: 'Continuous evolution with AI',
      architectureDescription:
        'I use Cursor and Claude Code to accelerate refactors, documentation, and delivery while maintaining quality.',
    },
  },
};
