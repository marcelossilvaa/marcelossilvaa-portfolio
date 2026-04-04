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
    ctaWhatsApp: string;
    ctaWhatsAppAria: string;
  };
  banner: {
    hero: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroTrust: string;
    ctaPrimaryAria: string;
    openSocialAria: string;
  };
  closing: {
    afterProjectsLead: string;
    afterProjectsCta: string;
  };
  footer: {
    cta: string;
    developedBy: string;
    navTitle: string;
    socialLabel: string;
    backToTop: string;
    brands: string;
    tagline: string;
  };
  project: {
    demo: string;
    all: string;
    noResults: string;
    challenge: string;
    strategy: string;
    impact: string;
    featured: string;
    seeMore: string;
    seeLess: string;
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
  clients: {
    title: string;
    subtitle: string;
  };
  contactSection: {
    eyebrow: string;
    lead: string;
    emailButton: string;
    whatsappButton: string;
    linkedinButton: string;
    availability: string;
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
      ctaWhatsApp: 'WhatsApp',
      ctaWhatsAppAria: 'Abrir conversa no WhatsApp com mensagem já preenchida',
    },
    banner: {
      hero: 'Desenvolvimento Front-End para e-commerces com foco em performance e conversão',
      subtitle:
        'Projeto e implemento soluções escaláveis com Next.js, Shopify, CMS headless e automação para transformar experiência digital em resultado de negócio.',
      ctaPrimary: 'Falar no WhatsApp',
      ctaSecondary: 'Ver estudos de caso',
      heroTrust: 'Resposta em geral em até 1 dia útil · conversa sem compromisso',
      ctaPrimaryAria: 'Enviar mensagem no WhatsApp com texto inicial sugerido',
      openSocialAria: 'Abrir {name} em nova aba',
    },
    closing: {
      afterProjectsLead: 'Quer algo nessa linha para o seu e-commerce ou produto digital?',
      afterProjectsCta: 'Ir para contato',
    },
    footer: {
      cta: 'Obrigado por visitar o portfólio — novos projetos e parcerias são sempre bem-vindos.',
      developedBy: 'Desenvolvido por Marcelo S Silva',
      navTitle: 'Navegação',
      socialLabel: 'Redes sociais',
      backToTop: 'Voltar ao topo',
      brands: 'Marcas',
      tagline: 'Front-end · e-commerce · performance',
    },
    project: {
      demo: 'Ver preview',
      all: 'Todas',
      noResults: 'Nenhum projeto encontrado para esse filtro.',
      challenge: 'Desafio',
      strategy: 'Estratégia',
      impact: 'Impacto',
      featured: 'Caso em destaque',
      seeMore: 'Ver mais projetos',
      seeLess: 'Ver menos',
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
    clients: {
      title: 'Marcas com quem trabalhei',
      subtitle:
        'Projetos realizados em parceria com agências ao longo da minha trajetória.',
    },
    contactSection: {
      eyebrow: 'Próximo passo',
      lead: 'Tem um projeto, uma vaga ou quer trocar ideia sobre freela e parcerias? Me chama por um dos canais abaixo.',
      emailButton: 'Enviar e-mail',
      whatsappButton: 'Conversar no WhatsApp',
      linkedinButton: 'Abrir LinkedIn',
      availability: 'Em geral respondo em até um dia útil.',
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
      ctaWhatsApp: 'WhatsApp',
      ctaWhatsAppAria: 'Open WhatsApp chat with a pre-filled message',
    },
    banner: {
      hero: 'Front-end development for e-commerce focused on performance and conversion',
      subtitle:
        'I design and implement scalable solutions with Next.js, Shopify, headless CMS, and automation to turn digital experience into business outcomes.',
      ctaPrimary: 'Chat on WhatsApp',
      ctaSecondary: 'See case studies',
      heroTrust: 'I usually reply within one business day · no-obligation chat',
      ctaPrimaryAria: 'Message on WhatsApp with a suggested opening line',
      openSocialAria: 'Open {name} in a new tab',
    },
    closing: {
      afterProjectsLead: 'Looking for something similar for your e-commerce or digital product?',
      afterProjectsCta: 'Go to contact',
    },
    footer: {
      cta: 'Thanks for visiting — new projects and partnerships are always welcome.',
      developedBy: 'Developed by Marcelo S Silva',
      navTitle: 'Navigation',
      socialLabel: 'Social',
      backToTop: 'Back to top',
      brands: 'Brands',
      tagline: 'Front-end · e-commerce · performance',
    },
    project: {
      demo: 'See preview',
      all: 'All',
      noResults: 'No projects found for this filter.',
      challenge: 'Challenge',
      strategy: 'Strategy',
      impact: 'Impact',
      featured: 'Featured case',
      seeMore: 'See more projects',
      seeLess: 'Show less',
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
    clients: {
      title: 'Brands I’ve worked with',
      subtitle: 'Projects delivered in partnership with agencies throughout my career.',
    },
    contactSection: {
      eyebrow: 'Next step',
      lead: 'Have a project, a role, or want to chat about freelance or partnerships? Reach out using one of the options below.',
      emailButton: 'Send email',
      whatsappButton: 'Chat on WhatsApp',
      linkedinButton: 'Open LinkedIn',
      availability: 'I usually reply within one business day.',
    },
  },
};
