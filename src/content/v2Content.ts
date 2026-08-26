import type { Locale } from '@/i18n/LocaleProvider';

/**
 * Conteúdo exclusivo da experiência /v2. Reaproveita os dados canônicos de
 * src/content/* e adiciona apenas o que a narrativa "mission control" exige
 * (índice de seções, esteira de palavras-chave, pipeline, toolkit, coordenadas).
 */

export type V2SectionId =
  | 'index'
  | 'signal'
  | 'coordinates'
  | 'system'
  | 'experience'
  | 'education'
  | 'brands'
  | 'work'
  | 'toolkit'
  | 'services'
  | 'availability'
  | 'contact';

export type V2SectionMeta = {
  id: V2SectionId;
  index: string;
  label: string;
};

export function getV2Sections(locale: Locale): V2SectionMeta[] {
  const isEn = locale === 'en';

  return [
    { id: 'index', index: '00', label: isEn ? 'Index' : 'Índice' },
    { id: 'signal', index: '01', label: isEn ? 'Signal' : 'Sinal' },
    { id: 'coordinates', index: '02', label: isEn ? 'Coordinates' : 'Coordenadas' },
    { id: 'system', index: '03', label: isEn ? 'System' : 'Sistema' },
    { id: 'experience', index: '04', label: isEn ? 'Experience' : 'Experiência' },
    { id: 'education', index: '05', label: isEn ? 'Education' : 'Formação' },
    { id: 'brands', index: '06', label: isEn ? 'Brands' : 'Marcas' },
    { id: 'work', index: '07', label: isEn ? 'Work' : 'Projetos' },
    { id: 'toolkit', index: '08', label: 'Toolkit' },
    { id: 'services', index: '09', label: isEn ? 'Services' : 'Serviços' },
    { id: 'availability', index: '10', label: isEn ? 'Availability' : 'Agenda' },
    { id: 'contact', index: '11', label: isEn ? 'Contact' : 'Contato' },
  ];
}

export function getV2Keywords(locale: Locale): string[] {
  const isEn = locale === 'en';

  return [
    'FRONT-END',
    'E-COMMERCE',
    'CRO',
    'SHOPIFY',
    'NEXT.JS',
    isEn ? 'WEB PERFORMANCE' : 'PERFORMANCE WEB',
    'A/B TESTING',
    'HEADLESS',
    isEn ? 'AUTOMATION' : 'AUTOMAÇÃO',
    isEn ? 'APPLIED AI' : 'IA APLICADA',
    'ADOBE TARGET',
    'GA4',
    isEn ? 'CONVERSION' : 'CONVERSÃO',
  ];
}

/** Nuvem densa de capacidades exibida no hero — mistura stack, IA e CRO. */
export function getV2TagCloud(locale: Locale): string[] {
  const isEn = locale === 'en';

  return [
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'TailwindCSS',
    'Shopify',
    'Liquid',
    'Hydrogen',
    'Payload CMS',
    'Ionic & Capacitor',
    'Node.js',
    'PostgreSQL',
    'Firebase',
    'Git & GitHub',
    isEn ? 'Headless Commerce' : 'Commerce Headless',
    'Storefront API',
    'Checkout UX',
    'Core Web Vitals',
    'A/B Testing',
    'Adobe Target',
    'Adobe Analytics',
    'GA4',
    'GTM',
    isEn ? 'Conversion Tracking' : 'Tracking de Conversão',
    isEn ? 'Funnel Analysis' : 'Análise de Funil',
    'n8n',
    'Cursor',
    'Claude Code',
    'GitHub Copilot',
    'Antigravity',
    'Prompt Engineering',
    isEn ? 'AI-assisted Code Review' : 'Code Review com IA',
    'Design System',
    'SEO',
    'A11y',
  ];
}

export type V2Stat = {
  value: number;
  suffix: string;
  label: string;
};

export function getV2Stats(locale: Locale): V2Stat[] {
  const isEn = locale === 'en';

  return [
    { value: 4, suffix: '+', label: isEn ? 'years in front-end' : 'anos em front-end' },
    { value: 8, suffix: '', label: isEn ? 'brands delivered' : 'marcas atendidas' },
    { value: 9, suffix: '', label: isEn ? 'projects in this index' : 'projetos neste índice' },
    { value: 3, suffix: '', label: isEn ? 'companies / squads' : 'empresas / squads' },
  ];
}

export type V2Coordinate = {
  eyebrow: string;
  place: string;
  detail: string;
  note: string;
};

export function getV2Coordinates(locale: Locale): [V2Coordinate, V2Coordinate] {
  const isEn = locale === 'en';

  return [
    {
      eyebrow: isEn ? 'Where I am' : 'Onde eu estou',
      place: isEn ? 'Vitória da Conquista, Brazil' : 'Vitória da Conquista, Brasil',
      detail: '14.8619° S, 40.8444° W',
      note: isEn ? 'UTC−3 · Bahia' : 'UTC−3 · Bahia',
    },
    {
      eyebrow: isEn ? 'Where I could be' : 'Onde eu poderia estar',
      place: isEn ? 'Remote / Worldwide' : 'Remoto / Mundo',
      detail: isEn ? 'Open to new coordinates' : 'Aberto a novas coordenadas',
      note: isEn ? 'PT native · EN professional' : 'PT nativo · EN profissional',
    },
  ];
}

export type V2SystemPillar = {
  index: string;
  kicker: string;
  title: string;
  description: string;
  tags: string[];
  outcomeLabel: string;
  outcome: string;
};

export function getV2SystemPillars(locale: Locale): V2SystemPillar[] {
  if (locale === 'en') {
    return [
      {
        index: '01',
        kicker: 'Engineering',
        title: 'Front-end architecture for commerce',
        description:
          'Storefronts in Shopify and Next.js, headless content models and component systems built to survive traffic peaks and constant iteration.',
        tags: ['Shopify / Liquid', 'Next.js / Hydrogen', 'Headless CMS'],
        outcomeLabel: 'Engineering outcome',
        outcome: 'Storefronts that ship fast, stay fast and stay easy to change.',
      },
      {
        index: '02',
        kicker: 'Conversion',
        title: 'Experimentation & applied AI',
        description:
          'A/B tests and personalization with Adobe Target and Analytics, reporting automation with n8n and AI-assisted delivery turned into repeatable practice.',
        tags: ['A/B Testing', 'Adobe Target / GA4', 'n8n · AI workflows'],
        outcomeLabel: 'Business outcome',
        outcome: 'Decisions backed by evidence instead of opinion.',
      },
    ];
  }

  return [
    {
      index: '01',
      kicker: 'Engenharia',
      title: 'Arquitetura front-end para commerce',
      description:
        'Storefronts em Shopify e Next.js, modelagem headless de conteúdo e sistemas de componentes feitos para aguentar pico de tráfego e iteração constante.',
      tags: ['Shopify / Liquid', 'Next.js / Hydrogen', 'CMS Headless'],
      outcomeLabel: 'Resultado de engenharia',
      outcome: 'Storefronts que sobem rápido, seguem rápidos e continuam fáceis de mudar.',
    },
    {
      index: '02',
      kicker: 'Conversão',
      title: 'Experimentação e IA aplicada',
      description:
        'Testes A/B e personalização com Adobe Target e Analytics, automação de reporte com n8n e entrega assistida por IA transformada em prática repetível.',
      tags: ['Testes A/B', 'Adobe Target / GA4', 'n8n · fluxos com IA'],
      outcomeLabel: 'Resultado de negócio',
      outcome: 'Decisão sustentada por evidência, não por opinião.',
    },
  ];
}

export function getV2Pipeline(locale: Locale): string[] {
  if (locale === 'en') {
    return ['Diagnose', 'Architect', 'Implement', 'Instrument', 'Experiment', 'Automate', 'Scale'];
  }

  return ['Diagnosticar', 'Arquitetar', 'Implementar', 'Instrumentar', 'Experimentar', 'Automatizar', 'Escalar'];
}

export type V2ToolkitGroup = {
  letter: string;
  kicker: string;
  title: string;
  summary: string;
  capabilities: string[];
};

export function getV2Toolkit(locale: Locale): V2ToolkitGroup[] {
  if (locale === 'en') {
    return [
      {
        letter: 'A',
        kicker: 'Core / Web',
        title: 'Web fundamentals',
        summary: 'semantics · accessibility · technical SEO',
        capabilities: ['HTML', 'CSS', 'JavaScript', 'Accessibility', 'Technical SEO', 'Responsive layout'],
      },
      {
        letter: 'B',
        kicker: 'Application / UI',
        title: 'Modern front-end',
        summary: 'React · Next.js · design systems',
        capabilities: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'App Router', 'Component architecture'],
      },
      {
        letter: 'C',
        kicker: 'Commerce / Storefront',
        title: 'E-commerce engineering',
        summary: 'Shopify · Liquid · headless',
        capabilities: ['Shopify', 'Liquid', 'Hydrogen', 'Storefront API', 'Checkout UX', 'Custom themes'],
      },
      {
        letter: 'D',
        kicker: 'Measurement / CRO',
        title: 'Experimentation & analytics',
        summary: 'A/B testing · GA4 · Adobe',
        capabilities: ['A/B Testing', 'Adobe Target', 'Adobe Analytics', 'GA4', 'GTM', 'Conversion tracking'],
      },
      {
        letter: 'E',
        kicker: 'Automation / AI',
        title: 'Applied AI & automation',
        summary: 'n8n · agents · AI-assisted delivery',
        capabilities: ['n8n', 'Cursor', 'Claude Code', 'GitHub Copilot', 'Prompt engineering', 'AI code review'],
      },
      {
        letter: 'F',
        kicker: 'Platform / Data',
        title: 'Systems & content',
        summary: 'Node.js · Payload · mobile',
        capabilities: ['Node.js', 'Payload CMS', 'PostgreSQL', 'Firebase', 'Ionic & Capacitor', 'Git / GitHub'],
      },
    ];
  }

  return [
    {
      letter: 'A',
      kicker: 'Base / Web',
      title: 'Fundamentos web',
      summary: 'semântica · acessibilidade · SEO técnico',
      capabilities: ['HTML', 'CSS', 'JavaScript', 'Acessibilidade', 'SEO técnico', 'Layout responsivo'],
    },
    {
      letter: 'B',
      kicker: 'Aplicação / UI',
      title: 'Front-end moderno',
      summary: 'React · Next.js · design systems',
      capabilities: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'App Router', 'Arquitetura de componentes'],
    },
    {
      letter: 'C',
      kicker: 'Commerce / Storefront',
      title: 'Engenharia de e-commerce',
      summary: 'Shopify · Liquid · headless',
      capabilities: ['Shopify', 'Liquid', 'Hydrogen', 'Storefront API', 'Checkout UX', 'Temas customizados'],
    },
    {
      letter: 'D',
      kicker: 'Medição / CRO',
      title: 'Experimentação e analytics',
      summary: 'testes A/B · GA4 · Adobe',
      capabilities: ['Testes A/B', 'Adobe Target', 'Adobe Analytics', 'GA4', 'GTM', 'Tracking de conversão'],
    },
    {
      letter: 'E',
      kicker: 'Automação / IA',
      title: 'IA aplicada e automação',
      summary: 'n8n · agentes · entrega assistida',
      capabilities: ['n8n', 'Cursor', 'Claude Code', 'GitHub Copilot', 'Prompt engineering', 'Code review com IA'],
    },
    {
      letter: 'F',
      kicker: 'Plataforma / Dados',
      title: 'Sistemas e conteúdo',
      summary: 'Node.js · Payload · mobile',
      capabilities: ['Node.js', 'Payload CMS', 'PostgreSQL', 'Firebase', 'Ionic & Capacitor', 'Git / GitHub'],
    },
  ];
}

/**
 * Rótulo curto de tipo por projeto, indexado pelo id usado em src/content/projects.ts.
 * Existe para a coluna "Tipo" do índice, onde truncar o subtítulo produzia
 * fragmentos sem sentido.
 */
export function getV2ProjectKinds(locale: Locale): Record<string, string> {
  const isEn = locale === 'en';

  return {
    '8': isEn ? 'Commerce + App' : 'Commerce + App',
    '5': isEn ? 'Headless CMS' : 'CMS headless',
    '0': isEn ? 'Storefront' : 'Storefront',
    '1': isEn ? 'Catalog' : 'Catálogo',
    '2': isEn ? 'Front-end' : 'Front-end',
    '3': isEn ? 'Institutional' : 'Institucional',
    '4': isEn ? 'Product site' : 'Site de produto',
    '6': 'Dashboard',
    '7': isEn ? 'Portfolio' : 'Portfólio',
  };
}

export type V2Service = {
  index: string;
  title: string;
  promise: string;
  description: string;
};

export function getV2Services(locale: Locale): V2Service[] {
  if (locale === 'en') {
    return [
      {
        index: '01',
        title: 'Storefront engineering',
        promise: 'Turn a slow, rigid storefront into a fast, editable one.',
        description:
          'Front-end architecture for Shopify and Next.js: component systems, headless content modeling, Core Web Vitals and a codebase your team can actually evolve.',
      },
      {
        index: '02',
        title: 'CRO & experimentation',
        promise: 'Make every release accountable to a metric.',
        description:
          'A/B tests and personalization with Adobe Target, Adobe Analytics and GA4 — from hypothesis and instrumentation to readable results and next steps.',
      },
      {
        index: '03',
        title: 'Automation & applied AI',
        promise: 'Delete the manual work between data and decision.',
        description:
          'Reporting and operational routines automated with n8n, plus AI-assisted delivery with Cursor and Claude Code turned into a repeatable team practice.',
      },
    ];
  }

  return [
    {
      index: '01',
      title: 'Engenharia de storefront',
      promise: 'Transformar um storefront lento e rígido em um rápido e editável.',
      description:
        'Arquitetura front-end para Shopify e Next.js: sistema de componentes, modelagem headless de conteúdo, Core Web Vitals e um código que o time consegue evoluir.',
    },
    {
      index: '02',
      title: 'CRO e experimentação',
      promise: 'Fazer cada release responder por uma métrica.',
      description:
        'Testes A/B e personalização com Adobe Target, Adobe Analytics e GA4 — da hipótese e instrumentação até resultado legível e próximo passo.',
    },
    {
      index: '03',
      title: 'Automação e IA aplicada',
      promise: 'Eliminar o trabalho manual entre o dado e a decisão.',
      description:
        'Rotinas de reporte e operação automatizadas com n8n, além de entrega assistida por IA com Cursor e Claude Code virando prática repetível no time.',
    },
  ];
}
