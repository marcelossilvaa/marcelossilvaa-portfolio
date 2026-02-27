import type { Locale } from '@/i18n/LocaleProvider';

type TranslationSchema = {
  sections: {
    about: string;
    skills: string;
    education: string;
    professional: string;
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
  };
  footer: {
    cta: string;
    developedBy: string;
  };
  project: {
    repository: string;
    demo: string;
    all: string;
    noResults: string;
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
};

export const translations: Record<Locale, TranslationSchema> = {
  pt: {
    sections: {
      about: 'Sobre mim',
      skills: 'Skills',
      education: 'Formação Acadêmica',
      professional: 'Histórico Profissional',
      projects: 'Projetos',
      contact: 'Contato',
    },
    header: {
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },
    banner: {
      hero: 'Olá, me chamo Marcelo e sou Especialista Front-End',
      subtitle:
        'Formado em Ciência da Computação, com foco em ecommerce, CRO e experiências de alta conversão.',
    },
    footer: {
      cta: 'Entre em contato, estou sempre disponível para novos projetos.',
      developedBy: 'Desenvolvido por Marcelo S Silva',
    },
    project: {
      repository: 'Repositório',
      demo: 'Ver demo',
      all: 'Todas',
      noResults: 'Nenhum projeto encontrado para esse filtro.',
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
  },
  en: {
    sections: {
      about: 'About me',
      skills: 'Skills',
      education: 'Education',
      professional: 'Professional History',
      projects: 'Projects',
      contact: 'Contact',
    },
    header: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    banner: {
      hero: "Hi, I'm Marcelo and I'm a Front-End Specialist",
      subtitle:
        "Bachelor's degree in Computer Science, focused on ecommerce, CRO, and high-conversion digital experiences.",
    },
    footer: {
      cta: "Let's connect. I'm always open to new projects.",
      developedBy: 'Developed by Marcelo S Silva',
    },
    project: {
      repository: 'Repository',
      demo: 'Live demo',
      all: 'All',
      noResults: 'No projects found for this filter.',
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
  },
};
